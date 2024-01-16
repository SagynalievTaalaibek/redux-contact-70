import { imageAvatar } from '../../constants';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { PostContact } from '../../types';


const Form= () => {
  const [contact, setContact] = useState<PostContact>({
    name: '',
    phone: '',
    email: '',
    photo: '',
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContact(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(contact);
  }

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
      <button type="submit" className="btn btn-primary mt-2 me-2">Save</button>
      <Link to={'/'} className="btn btn-secondary mt-2">Back to contact</Link>
    </form>
  );
};

export default Form;