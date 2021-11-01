import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import Api from '../api';

const adapter = createEntityAdapter();

export const {
  selectById: getPlayerById,
  selectAll: getPlayers,
  selectEntities: getPlayerEntities,
  selectIds: getPlayerIds,
  selectTotal: getTotalPlayers,
} = adapter.getSelectors((state) => state.players);

export const fetchAllPlayers = createAsyncThunk(
  'players/fetchAll',
  async () => {
    const response = await Api.Players.get();
    return response;
  }
);

export const fetchAllPlayersSorted = createAsyncThunk(
  'players/fetchAllSorted',
  async (sortParams) => {
    const response = await Api.Players.getSorted(sortParams);
    return response;
  }
);

export const PLAYERS_INITIAL_STATE = adapter.getInitialState();

const { actions, reducer } = createSlice({
  name: 'players',
  initialState: PLAYERS_INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllPlayers.fulfilled, (state, action) => {
        adapter.setAll(state, action.payload.items);
      })
      .addCase(fetchAllPlayersSorted.fulfilled, (state, action) => {
        adapter.setAll(state, action.payload.items);
      }),
});

export const {
  // any actions
} = actions;

export default reducer;
