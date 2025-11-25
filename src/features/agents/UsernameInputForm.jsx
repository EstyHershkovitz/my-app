import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentUserName } from "./agentsSlice";
import { useNavigate } from "react-router-dom";

export const UsernameInputForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const currentUserName = useSelector(state => state.agents.userName);
  const [inputValue, setInputValue] = useState(currentUserName || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      dispatch(changeCurrentUserName(inputValue.trim()));
      //alert(`שם המשתמש נשמר: ${inputValue}`);
      navigate("/AgentManagement")

    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
      <label>
        שם משתמש:
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </label>
      <button type="submit" style={{ marginLeft: "10px" }}>
        שמור
      </button>
    </form>
  );
};
