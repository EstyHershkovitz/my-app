import { useSelector, useDispatch } from "react-redux";
import { AgentCard } from "./AgentCard";
import { useNavigate } from "react-router-dom";
import { addAgent } from "./agentsSlice";
import * as XLSX from "xlsx";

export const AgentManagement = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const agents = useSelector(state => state.agents.agents);

    // פונקציה לקריאת קובץ אקסל והוספת סוכנים
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (evt) => {
            const data = new Uint8Array(evt.target.result);
            const workbook = XLSX.read(data, { type: "array" });

            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];

            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            jsonData.forEach((row) => {
                dispatch(addAgent({
                    id: row.id,
                    agentName: row.agentName,
                    agentLocn: row.agentLocn,
                    agentURL: row.agentURL,
                    category: row.category
                }));
            });
        };

        reader.readAsArrayBuffer(file);
    };

    return (
        <>
            <h1>ניהול סוכנים</h1>

            <div>
                {agents.map(a => <AgentCard key={a.id} p={a} />)}
            </div>

            {/* כפתור לניווט להוספת סוכן חדש */}
            <button onClick={() => navigate("/add")}>הוסף סוכן</button>

            {/* כפתור לייבוא סוכנים מקובץ אקסל */}
            <input
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileUpload}
                style={{ display: "none" }}
                id="file-upload"
            />
            <label htmlFor="file-upload">
                <button>הוספת סוכנים מקובץ אקסל</button>
            </label>
        </>
    );
};
