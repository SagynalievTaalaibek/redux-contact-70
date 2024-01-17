import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { ApiContact, GetContact, PostContact } from '../../types';

export const createContact = createAsyncThunk<void, PostContact>(
  'contact/create',
  async (contact) => {
    await axiosApi.post('/contact.json', contact);
  },
);

export const fetchContacts = createAsyncThunk<GetContact[], undefined>(
  'contact/fetchAll',
  async () => {
    const responseContacts = await axiosApi.get<ApiContact | null>('/contact.json');
    const contactsData = responseContacts.data;

    let newContacts: GetContact[] = [];

    if (contactsData) {
      newContacts = Object.keys(contactsData).map((id) => {
        const contact = contactsData[id];
        return {
          ...contact,
          id,
        };
      });
    }

    return newContacts;
  },
);