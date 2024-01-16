import { createSlice } from '@reduxjs/toolkit';
import { createContact } from './contactThunks';
import { RootState } from '../../app/store';
import { GetContact, PostContact } from '../../types';

interface ContactState {
  contacts: GetContact[];
  contactOne: PostContact | null;
  createLoading: boolean;
  fetchLoading: boolean;
  fetchOneLoading: boolean;
  updateLoading: boolean;
  deleteLoading: boolean;
}

const initialState: ContactState = {
  contacts: [],
  contactOne: null,
  createLoading: false,
  fetchLoading: false,
  fetchOneLoading: false,
  updateLoading: false,
  deleteLoading: false,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createContact.pending, state => {
      state.createLoading = true;
    });
    builder.addCase(createContact.fulfilled, state => {
      state.createLoading = false;
    });
    builder.addCase(createContact.rejected, state => {
      state.createLoading = false;
    });
  },
});

export const contactReducer = contactSlice.reducer;
export const selectContacts = (state: RootState) => state.contact.contacts;
export const selectOneContact = (state: RootState) => state.contact.contactOne;
export const selectCreateLoading = (state: RootState) => state.contact.createLoading;
export const selectFetchLoading = (state: RootState) => state.contact.fetchLoading;
export const selectFetchOneLoading = (state: RootState) => state.contact.fetchOneLoading;
export const selectUpdateLoading = (state: RootState) => state.contact.updateLoading;
export const selectDeleteLoading = (state: RootState) => state.contact.deleteLoading;