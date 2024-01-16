import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { PostContact } from '../../types';
import { imageAvatar } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createContact } from '../../store/contact/contactThunks';
import { selectCreateLoading } from '../../store/contact/contactSlice';
import ButtonSpinner from '../Spinner/ButtonSpinner';


const initialState: PostContact = {
  name: '',
  phone: '',
  email: '',
  photo: '',
};

interface Props {
  existingContact?: PostContact,
  isEdit?: boolean;
}

const Form: React.FC<Props> = ({ existingContact = initialState, isEdit = false }) => {
  const dispatch = useAppDispatch();
  const createContactLoading = useAppSelector(selectCreateLoading);
  const navigate = useNavigate();
  const [contact, setContact] = useState<PostContact>(existingContact);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContact(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (isEdit) {
      console.log('PUT');
    } else {
      await dispatch(createContact(contact));
    }
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="form-control"
          value={contact.name}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          required
          className="form-control"
          value={contact.phone}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="form-control"
          value={contact.email}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="photo">Photo</label>
        <input
          type="text"
          name="photo"
          id="photo"
          required
          className="form-control"
          value={contact.photo}
          onChange={onChange}
        />
      </div>
      <div className="form-group mt-3">
        <img className="w-25 h-25" src={contact.photo ? contact.photo : imageAvatar} alt="avatar" />
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-2 me-2"
        disabled={createContactLoading}
      >
        {createContactLoading && <ButtonSpinner />}
        Save
      </button>
      <Link to={'/'} className="btn btn-secondary mt-2">Back to contact</Link>
    </form>
  );
};

export default Form;