import { useSelector } from "react-redux"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

export const AgentDetails = ({ a }) => {

    const currentAgent = useSelector(state => state.agents.currentAgent)//הסוכן הנוכחי
    const userName = useSelector(state => state.agents.userName)//שם משתמש

    const weeklyData = [
        { day: "יום א׳", completed: 5, closed: 2, unanswered: 1 },
        { day: "יום ב׳", completed: 8, closed: 3, unanswered: 2 },
        { day: "יום ג׳", completed: 6, closed: 1, unanswered: 1 },
        { day: "יום ד׳", completed: 7, closed: 2, unanswered: 0 },
        { day: "יום ה׳", completed: 4, closed: 2, unanswered: 1 },
        { day: "יום ו׳", completed: 3, closed: 1, unanswered: 0 },
        { day: "יום ש׳", completed: 2, closed: 0, unanswered: 1 },
    ];
    return <>
        <div>

            <h3>משתמש: {userName}</h3>
            <p>סוכן נוכחי: {currentAgent ? currentAgent.agentName : "לא נבחר סוכן"} </p>
            <h4>סטוריית שימוש שבועית</h4>
            <BarChart width={600} height={300} data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="completed" fill="#8884d8" name="שיחות בוצעו" />
                <Bar dataKey="closed" fill="#82ca9d" name="סומנו כסגורות" />
                <Bar dataKey="unanswered" fill="#ff7300" name="סומנו לא יעל" />
            </BarChart>
        </div>
    </>
}