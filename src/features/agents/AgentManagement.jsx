import { useSelector, useDispatch } from "react-redux";
import { AgentCard } from "./AgentCard";
import { useNavigate } from "react-router-dom";
import { addAgent } from "./agentsSlice";
import * as XLSX from "xlsx";

export const AgentManagement = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const agents = useSelector(state => state.agents.agents);
    const userName=useSelector(state=>state.agents.currentUser)
    // ------- 1) ייבוא סוכנים מקובץ אקסל -------
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


    // ------- 2) יצוא רשימת הסוכנים לאקסל -------
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(agents); 
        const workbook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(workbook, worksheet, "Agents");

        // הורדת הקובץ
        XLSX.writeFile(workbook, "agents_list.xlsx");
    };


    return (
        <>
            <h1>ניהול סוכנים</h1>
            <div>
                <h2>{userName}</h2>
            </div>
            <div>
                {agents.map(a => <AgentCard key={a.id} p={a} />)}
            </div>

            {/* כפתור לניווט להוספת סוכן חדש */}
            <button onClick={() => navigate("/add")}>הוסף סוכן</button>

            {/* כפתור ייבוא מאקסל */}
            <div style={{ position: "relative", display: "inline-block", marginRight: "10px" }}>
                <button>הוספת סוכנים מקובץ אקסל</button>

                <input
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={handleFileUpload}
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        opacity: 0,
                        cursor: "pointer"
                    }}
                />
            </div>

            {/* כפתור יצוא לאקסל */}
            <button onClick={exportToExcel}>
                יצא לרשימה לאקסל
            </button>
        </>
    );
};
