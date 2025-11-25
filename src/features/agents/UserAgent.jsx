import { useSelector } from "react-redux"
import { AgentCard } from "./AgentCard"

export const UserAgent = () => {
    const userName = useSelector(state => state.agents.currentUser)
    const userAgets = useSelector(state => state.agents.userAgents)
    return <>

        <div>
            <h2>{userName}</h2>
        </div>
        <div>
            {userAgets.map(a => <AgentCard key={a.id} p={a} />)}
        </div>
    </>
}