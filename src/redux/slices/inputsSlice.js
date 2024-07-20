import { createSlice } from '@reduxjs/toolkit';

const inputs = [
  {
    name: 'Generic Input',
    type: 'text',
    value: '444'
  },
  {
    name: 'Generic Input',
    type: 'text',
    value: '444'
  },
  {
    name: 'Generic Input',
    type: 'text',
    value: '444'
  },
  {
    name: 'Generic Input',
    type: 'text',
    value: '444'
  },
  {
    name: 'Generic Input',
    type: 'text',
    value: '444'
  },
];

const initialState = {
  inputs: inputs, 
};

const inputsSlice = createSlice({
  name: 'inputs',
  initialState,
  reducers: {
    addInput: (state, action) => {
      // ! add other c for auto-inserting arithmetic symbols here later
      state.inputs.push(action.payload);
    },
    updateInput: (state, action) => {
      const { index, input } = action.payload;
      state.inputs[index] = input;
    },
    deleteInput: (state, action) => {
      const index = action.payload;
      state.inputs.splice(index, 1);
    },
  },
});

export const { addInput, updateInput, deleteInput } = inputsSlice.actions;
export default inputsSlice.reducer;
