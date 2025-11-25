// features/agents/agentsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  agents: [
    { id: 1, agentName: "סוכן אקסל", agentLocn: "excell.jpg", agentURL: "https://agents.autodidact.co.il/excell", category: "משרד" },
    { id: 2, agentName: "סוכן ביטקוין", agentLocn: "bitcoin.jpg", agentURL: "https://agents.autodidact.co.il/bitcoin", category: "פיננסים" },
    { id: 3, agentName: "סוכן נדל״ן", agentLocn: "realestate.jpg", agentURL: "https://agents.autodidact.co.il/realestate", category: "נדל״ן" },
    { id: 4, agentName: "סוכן חינוך", agentLocn: "education.jpg", agentURL: "https://agents.autodidact.co.il/education", category: "חינוך" },
    { id: 5, agentName: "סוכן טכנולוגיה", agentLocn: "tech.jpg", agentURL: "https://agents.autodidact.co.il/tech", category: "טכנולוגיה" }
  ],

    userAgents: [
    { id: 1, agentName: "סוכן אקסל", agentLocn: "excell.jpg", agentURL: "https://agents.autodidact.co.il/excell", category: "משרד" },
  ],

  loading: false,
  error: null,

  // 👉 הוספתי את זה:
  currentAgent: null,
  currentUser: "נסיון",
};

const agentsSlice = createSlice({
  name: 'agents',
  initialState,
  reducers: {
    addAgent: (state, action) => {
      state.agents.push(action.payload);
    },

    addAgentIntoUserAgents: (state, action) => {
      state.userAgents.push(action.payload);
    },
    updateAgent: (state, action) => {
      const index = state.agents.findIndex(agent => agent.id === action.payload.id);
      if (index !== -1) {
        state.agents[index] = action.payload;
      }
    },

    deleteAgent: (state, action) => {
      state.agents = state.agents.filter(agent => agent.id !== action.payload);
    },

    setAgents: (state, action) => {
      state.agents = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    // ⭐⭐⭐ הפונקציה שביקשת:
    setCurrentAgent: (state, action) => {
      state.currentAgent = action.payload;
    },

    changeCurrentUserName:(state, action) => {
      state.currentUser = action.payload;
    }
  },
});

export const {
  addAgent,
  updateAgent,
  deleteAgent,
  setAgents,
  setLoading,
  setError,
  setCurrentAgent,   // ← אל תשכחי את זה!
  changeCurrentUserName,
} = agentsSlice.actions;

export const selectAgents = state => state.agents.agents;
export const selectLoading = state => state.agents.loading;
export const selectError = state => state.agents.error;
export const selectCurrentAgent = state => state.agents.currentAgent;

export default agentsSlice.reducer;
