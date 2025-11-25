import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addAgentIntoUserAgents } from "./agentsSlice";
import { useNavigate } from "react-router-dom";

export const AddAgent = () => {
    const agents = useSelector(state => state.agents.agents);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userName = useSelector(state => state.agents.currentUser)
    // יצירת רשימות ייחודיות
    const categories = [...new Set(agents.map(a => a.category))];
    const names = [...new Set(agents.map(a => a.agentName))];

    // סטייט לבחירה
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedName, setSelectedName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Category selected:", selectedCategory);
        // console.log("Name selected:", selectedName);
        //מוצא את הערך שמתאים לבחירה
        // const agentToAdd = agents.find(a => a.category === selectedCategory && a.agentName === selectedName);
        // if (agentToAdd) {
        //     dispatch(addAgentIntoUserAgents(agentToAdd))
        //     setSelectedCategory("");
        //     setSelectedName("");
        //     //console.log("Added agent:", agentToAdd);

        // }
        // else{
        //     alert("אין סוכן ברשימה שלנו יתאים לך ):")
        // }

        if (!selectedName) {
            console.log("חובה לבחור שם סוכן");
            return;
        }

        const agentOriginal = agents.find(a => a.agentName === selectedName);

        if (agentOriginal) {
            // יוצרים אובייקט חדש עם הקטגוריה שנבחרה, אם נבחרה אחרת
            const agentToAdd = {
                ...agentOriginal,
                category: selectedCategory || agentOriginal.category
            };

            dispatch(addAgentIntoUserAgents(agentToAdd));
            setSelectedCategory("");
            setSelectedName("");
            navigate("/userAgents")
        }
        else {
            alert("לא נמצא סוכן בשם זה")
        }

    }


    return (<>

        <div>
            <h2>{userName}</h2>
        </div>
        <form onSubmit={handleSubmit}>

            <div>
                <label>קטגוריה:</label>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">בחרי קטגוריה</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <div>
                <label>שם סוכן:</label>
                <select value={selectedName} onChange={(e) => setSelectedName(e.target.value)}>
                    <option value="">בחרי סוכן</option>
                    {names.map(name => (
                        <option key={name} value={name}>{name}</option>
                    ))}
                </select>
            </div>

            <button type="submit">אישור</button>
        </form>

    </>
    );
};
