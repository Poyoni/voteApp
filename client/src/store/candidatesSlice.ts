import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Status, Candidate } from '../types';
import axios from 'axios';

interface CandidatesStateType {
    candidates: Candidate[] ;
    status: Status;
    error: string | null;
}

const initialState: CandidatesStateType = {
    candidates: [],
    status: 'idle',
    error: null
}

export const fetchCandidates = createAsyncThunk(
    "candidates/fetchCandidates",
    async () => {
      const response = await axios.get("http://localhost:3000/api/candidates");
      return response.data;
    }
  );
  
  export const candidatesSlice = createSlice({
    name: "candidates",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCandidates.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchCandidates.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.candidates = action.payload;
        })
        .addCase(fetchCandidates.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message || "Failed to fetch candidates";
        });
    },
  });
  
  export default candidatesSlice.reducer;


