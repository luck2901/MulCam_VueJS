import axios from 'axios'

const BASE_URI = 'http://localhost:8080';
const PAGE_NO = 1;
const PAGE_SIZE = 10;
const GET_CONTACTLIST = BASE_URI + '/contacts/';
const GET_CONTACT = BASE_URI + '/contacts/${no}';
const ADD_CONTACT = BASE_URI + '/contacts/';
const DELETE_CONTACT = BASE_URI + '/contacts/${no}';
const UPDATE_CONTACT = BASE_URI + '/contacts/${no}';
const UPDATE_PHOTO = BASE_URI + '/contacts/${no}/photo';

export const getContactList = (pageno, pagesize) => {

}