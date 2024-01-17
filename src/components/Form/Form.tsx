import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { imageAvatar } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createContact, updateContact } from '../../store/contact/contactThunks';
import {
  cleanContactForm,
  selectCreateLoading,
  selectFormContact, selectUpdateLoading,
  setValueContact,
} from '../../store/contact/contactSlice';
import ButtonSpinner from '../Spinner/ButtonSpinner';
import Spinner from '../Spinner/Spinner';


interface Props {
  id?: string | null;
}

const Form: React.FC<Props> = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formContact = useAppSelector(selectFormContact);
  const createContactLoading = useAppSelector(selectCreateLoading);
  const createUpdateLoading = useAppSelector(selectUpdateLoading);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(setValueContact({ ...formContact, [name]: value }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (id) {
      await dispatch(updateContact(formContact));
    } else {
      await dispatch(createContact(formContact));
    }
    navigate('/');
    dispatch(cleanContactForm());
  };

  return (
    <>
      {createUpdateLoading ? <Spinner /> : (
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="form-control"
              value={formContact.name}
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
              value={formContact.phone}
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
              value={formContact.email}
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
              value={formContact.photo}
              onChange={onChange}
            />
          </div>
          <div className="form-group mt-3">
            <img className="w-25 h-25" src={formContact.photo ? formContact.photo : imageAvatar} alt="avatar" />
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-2 me-2"
            disabled={createContactLoading && createUpdateLoading}
          >
            {createContactLoading && createUpdateLoading && <ButtonSpinner />}
            Save
          </button>
          <Link to={'/'} className="btn btn-secondary mt-2">Back to contact</Link>
        </form>
      )}
    </>
  );
};

export default Form;