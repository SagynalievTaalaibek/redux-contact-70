import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { ApiContact, GetContact, PostContact } from '../../types';
import { setValueContact, toggleModal } from './contactSlice';

export const createContact = createAsyncThunk<void, GetContact>(
  'contact/create',
  async (contact) => {
    const newContact: PostContact = {
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      photo: contact.photo,
    };

    await axiosApi.post('/contact.json', newContact);
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

export const fetchOneContact = createAsyncThunk<void, string>(
  'contact/fetchOne',
  async (id, { dispatch }) => {
    const responseContact = await axiosApi.get<PostContact | null>(`/contact/${id}.json`);
    const contact = responseContact.data;

    if (contact) {
      dispatch(setValueContact({...contact, id}));
    }
  },
);


export const updateContact = createAsyncThunk<void, GetContact>(
  'contact/update',
  async (contact ) => {
    const updateContact: PostContact = {
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      photo: contact.photo,
    };

    await axiosApi.put(`/contact/${contact.id}.json`, updateContact);
  },
);

export const deleteContact = createAsyncThunk<void, string>(
  'contact/delete',
  async (id, {dispatch} ) => {
    await axiosApi.delete(`/contact/${id}.json`);
    await dispatch(fetchContacts());
    dispatch(toggleModal());
  },
);

