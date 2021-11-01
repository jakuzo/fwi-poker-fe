import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

const adapter = createEntityAdapter();

export const {
  selectById: getPlayerById,
  selectAll: getPlayers,
  selectEntities: getPlayerEntities,
  selectIds: getPlayerIds,
  selectTotal: getTotalPlayers,
} = adapter.getSelectors((state) => state.players);

const headers = new Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

export const fetchAllPlayers = createAsyncThunk(
  'players/fetchAll',
  async () => {
    // const response = await fetch('/api/players', { headers }); // old, keeping for reference
    const response = await fetch('http://localhost:3001/players', {
      headers,
      mode: 'cors',
    });
    const json = await response.json();

    return json;
  }
);

export const PLAYERS_INITIAL_STATE = adapter.getInitialState();

const { actions, reducer } = createSlice({
  name: 'players',
  initialState: PLAYERS_INITIAL_STATE,
  extraReducers: (builder) =>
    builder.addCase(fetchAllPlayers.fulfilled, (state, action) => {
      adapter.setAll(state, action.payload.items);
    }),
});

export const {
  // any actions
} = actions;

export default reducer;
