export interface PostContact {
  name: string;
  phone: string;
  email: string;
  photo: string;
}

export interface GetContact {
  id: string;
  name: string;
  phone: string;
  email: string;
  photo: string;
}

export interface ApiContact {
 [key: string]: PostContact;
}