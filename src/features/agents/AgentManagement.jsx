import { useSelector } from "react-redux"
import { AgentCard } from "./AgentCard"
import { useNavigate } from "react-router-dom"

export const AgentManagement=()=>{
    const navigate=useNavigate()

    const agents=useSelector(state=>state.agents.agents)//המערך של הסוכנים
    return<>
    <h1>ניהול סוכנים</h1>
    
    <div>
        {agents.map(a=><AgentCard p={a}/>)}
    </div>

    <button onClick={()=>{navigate("/add")}}>הוסף סוכן</button>
</>
}