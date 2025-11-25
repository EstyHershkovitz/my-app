import { configureStore } from '@reduxjs/toolkit'
import agentsReducer from '../features/agents/agentsSlice';

export default configureStore({
  reducer: {
    agents: agentsReducer,
  }
})