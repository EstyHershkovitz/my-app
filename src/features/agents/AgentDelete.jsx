import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteAgent } from "./agentsSlice"

export const AgentDelete=()=>{

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const currentAgent=useSelector(state=>state.agents.currentAgent)//הסוכן הנוכחי

    const goToList=()=>{

        dispatch(deleteAgent(currentAgent))
    }
    return <div>

        <h1>מחיקת סוכן</h1>
        <h3>אתה הולך למוע אפשרות מהמשתמש </h3>
        <h3>להיעזר בסוכן האקסל.</h3>
        <h3>האם אתה בטוח??</h3>
        <button onClick={()=>{navigate("/management")}}>ביטול</button>
        <button onClick={()=>{goToList()}}>אישור</button>
    </div>
}