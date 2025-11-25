import { useSelector } from "react-redux"

export const AgentDetails=()=>{

    const currentAgent=useSelector(state=>state.agents.currentAgent)//הסוכן הנוכחי

    return <div>

        <p>שם משתמש????????</p>
        <p>{currentAgent.name}</p>
        איך מראים גרף???????
    </div>

}