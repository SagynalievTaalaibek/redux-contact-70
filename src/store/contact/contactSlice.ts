import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createContact, deleteContact, fetchContacts, fetchOneContact } from './contactThunks';
import { RootState } from '../../app/store';
import { GetContact } from '../../types';

interface ContactState {
  contacts: GetContact[];
  formContact: GetContact;
  createLoading: boolean;
  fetchLoading: boolean;
  fetchOneLoading: boolean;
  updateLoading: boolean;
  deleteLoading: boolean;
  modalShow: boolean;
}

const initialState: ContactState = {
  contacts: [],
  formContact: {
    id: '',
    name: '',
    phone: '',
    email: '',
    photo: '',
  },
  createLoading: false,
  fetchLoading: false,
  fetchOneLoading: false,
  updateLoading: false,
  deleteLoading: false,
  modalShow: false,
};


export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setValueContact: (state, { payload }: PayloadAction<GetContact>) => {
      state.formContact.id = payload.id;
      state.formContact.name = payload.name;
      state.formContact.phone = payload.phone;
      state.formContact.email = payload.email;
      state.formContact.photo = payload.photo;
    },
    cleanContactForm: (state) => {
      state.formContact.name = '';
      state.formContact.phone = '';
      state.formContact.email = '';
      state.formContact.photo = '';
    },
    toggleModal: (state) => {
      state.modalShow = !state.modalShow;
    },
  },
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

    builder.addCase(fetchContacts.pending, state => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, { payload: contacts }) => {
      state.fetchLoading = false;
      state.contacts = contacts;
    });
    builder.addCase(fetchContacts.rejected, state => {
      state.fetchLoading = false;
    });

    builder.addCase(fetchOneContact.pending, state => {
      state.fetchOneLoading = true;
    });
    builder.addCase(fetchOneContact.fulfilled, (state) => {
      state.fetchOneLoading = false;
    });
    builder.addCase(fetchOneContact.rejected, state => {
      state.fetchOneLoading = false;
    });

    builder.addCase(deleteContact.pending, state => {
      state.deleteLoading = true;
    });
    builder.addCase(deleteContact.fulfilled, (state) => {
      state.deleteLoading = false;
    });
    builder.addCase(deleteContact.rejected, state => {
      state.deleteLoading = false;
    });
  },
});


export const contactReducer = contactSlice.reducer;
export const { toggleModal, setValueContact, cleanContactForm } = contactSlice.actions;
export const selectContacts = (state: RootState) => state.contact.contacts;
export const selectFormContact = (state: RootState) => state.contact.formContact;
export const selectModalShow = (state: RootState) => state.contact.modalShow;
export const selectCreateLoading = (state: RootState) => state.contact.createLoading;
export const selectFetchLoading = (state: RootState) => state.contact.fetchLoading;
export const selectFetchOneLoading = (state: RootState) => state.contact.fetchOneLoading;
export const selectUpdateLoading = (state: RootState) => state.contact.updateLoading;
export const selectDeleteLoading = (state: RootState) => state.contact.deleteLoading;