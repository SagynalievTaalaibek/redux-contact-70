import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { PostContact } from '../../types';

export const createContact = createAsyncThunk<void, PostContact>(
  'contact/create',
  async (contact) => {
    await axiosApi.post('/contact.json', contact);
  }
)