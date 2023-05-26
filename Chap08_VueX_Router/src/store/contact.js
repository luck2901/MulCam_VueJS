/* eslint-disable no-unused-vars */
import * as api from './../api/contact';

const CONTACT_GETCONTACTLIST = 'CONTACT_GETCONTACTLIST';
const CONTACT_GETCONTACT = 'CONTACT_GETCONTACT';
const CONTACT_ADDCONTACT = 'CONTACT_ADDCONTACT';
const CONTACT_DELETECONTACT = 'CONTACT_DELETECONTACT';
const CONTACT_UPDATECONTACT = 'CONTACT_UPDATECONTACT';
const CONTACT_UPDATEPHOTO = 'CONTACT_UPDATEPHOTO';

const CONTACT_CHANGECONTEXT = 'CONTACT_CHANGECONTEXT';
const CONTACT_CLEARCONTEXT = 'CONTACT_CLEARCONTEXT';

export default {
  namespaced: true,
  state: {
    contactList: { pageno: 1, pagesize: 5, totalcount: 0, contacts: [] },
    contact: { no: '', name: '', tel: '', address: '' },
  },
  mutations: {
    [CONTACT_GETCONTACTLIST]: (state, payload) => {
      // console.log(state, payload);
      state.contactList = payload;
    },
    [CONTACT_GETCONTACT]: (state, payload) => {
      // console.log(state, payload);
      state.contact = payload;
    },
    [CONTACT_ADDCONTACT]: (state, payload) => {
      console.log(state, payload);
    },
    [CONTACT_DELETECONTACT]: (state, payload) => {
      // console.log(state, payload);
    },
    [CONTACT_UPDATECONTACT]: (state, payload) => {
      // console.log(state, payload);
    },
    [CONTACT_UPDATEPHOTO]: (state, payload) => {
      // console.log(state, payload);
    },

    [CONTACT_CHANGECONTEXT]: (state, payload) => {
      // payload => evt.target
      state.contact[payload.name] = payload.value;
    },
    [CONTACT_CLEARCONTEXT]: (state) => {
      state.contact = { no: '', name: '', tel: '', address: '' };
    },
  },
  actions: {
    async getContactListAction(action, payload) {
      try {
        const resp = await api.getContactList(1, 10);
        action.commit(CONTACT_GETCONTACTLIST, resp.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getContactAction(action, payload) {
      try {
        const resp = await api.getContact(payload);
        action.commit(CONTACT_GETCONTACT, resp.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteContactAction(action, payload) {
      try {
        const resp = await api.deleteContact(payload);
        action.commit(CONTACT_DELETECONTACT, resp.data);
      } catch (error) {
        console.error(error);
      }
    },
    async updateContactAction(action, payload) {
      try {
        const resp = await api.updateContact(payload);
        action.commit(CONTACT_UPDATECONTACT, resp.data);
      } catch (error) {
        console.error(error);
      }
    },
    async addContactAction(action, payload) {
      try {
        const resp = await api.addContact(payload);
        action.commit(CONTACT_ADDCONTACT, resp.data);
      } catch (error) {
        console.error(error);
      }
    },
    async updatePhotoAction(action, payload) {
      console.log(payload);
      try {
        const resp = await api.updatePhoto(payload.no, payload.file);
        action.commit(CONTACT_UPDATEPHOTO, resp.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
