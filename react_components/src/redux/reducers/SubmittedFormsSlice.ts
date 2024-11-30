import { Forms } from './../../types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export interface FormsState {
  forms: Forms[];
}
const initialState: FormsState = {
  forms: [],
};

export const submittedFormsSlice = createSlice({
  name: 'submittedForms',
  initialState,
  reducers: {
    addForm(state, action: PayloadAction<Forms>) {
      state.forms.push(action.payload);
    },
  },
});

export default submittedFormsSlice.reducer;
