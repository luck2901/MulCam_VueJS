import axios from 'axios';

const BASE_URI = 'http://localhost:8000';
const PAGE_NO = 1;
const PAGE_SIZE = 10;
const GET_CONTACTLIST = BASE_URI + '/contacts/';
const GET_CONTACT = BASE_URI + '/contacts/${no}';
const ADD_CONTACT = BASE_URI + '/contacts/';
const DELETE_CONTACT = BASE_URI + '/contacts/${no}';
const UPDATE_CONTACT = BASE_URI + '/contacts/${no}';
const UPDATE_PHOTO = BASE_URI + '/contacts/${no}/photo';

export const getContactList = (no = PAGE_NO, size = PAGE_SIZE) => {
  return axios.get(GET_CONTACTLIST, { params: { pageno: no, pagesize: size } });
};
export const getContact = (no) => {
  return axios.get(GET_CONTACT.replace('${no}', no));
};
export const addContact = (data) => {
  return axios.post(ADD_CONTACT, data);
};
export const deleteContact = (no) => {
  return axios.delete(DELETE_CONTACT.replace('${no}', no));
};
export const updateContact = (data) => {
  return axios.put(UPDATE_CONTACT.replace('${no}', data.no), data);
};
export const updatePhoto = (no, file) => {
  const data = new FormData();
  data.append('photo', file);
  return axios.post(UPDATE_PHOTO.replace('${no}', no), data);
};
