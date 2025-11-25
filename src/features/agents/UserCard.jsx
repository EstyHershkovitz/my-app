import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export const UserCard=({p})=>{

    
    const { agentLocn, agentName, agentURL, } = p

    const navigate = useNavigatee()
    const dispatch = useDispatchh()

    const goToDetails = () => {
        dispatch(setCurrentAgent(p))
        navigate("/details")
    }

    const goToDelete = () => {
        dispatch(setCurrentAgent(p))
        navigate("/delete")
    }


    return <>

        <div>
            <img src={`/images/${agentLocn}`} alt="תמונה של הסוכן" />
            <h3>{agentName}</h3>
            <a href={agentURL} target="_blank" rel="noopener noreferrer">
                {agentURL}
            </a>

        </div>

        <button onClick={() => { goToDetails() }}>לפרטי שימוש</button>
        <button onClick={() => { goToDelete() }}>הסר סוכן</button>
    </>

}