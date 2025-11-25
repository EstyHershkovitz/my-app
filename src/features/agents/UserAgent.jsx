import { useSelector } from "react-redux"
import { AgentCard } from "./AgentCard"

export const UserAgent = () => {

    const userAgets = useSelector(state => state.agents.userAgents)
    return <>

        <div>
            {userAgets.map(a => <AgentCard key={a.id} p={a} />)}
        </div>
    </>
}