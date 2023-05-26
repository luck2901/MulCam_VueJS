<template>
  <div>
    <h3>A01 Axios</h3>

    <div>
      <button @click="getContactList">Get ContactList</button>
      <button @click="getContactListAsync">Get ContactList Async</button>
      <button @click="getContact(1)">Get Contact</button>
      <button @click="addContact">Add Contact</button>
      <button @click="updateContact">Update Contact</button>
      <button @click="deleteContact(1684989854330)">Delete Contact</button>
    </div>

    <div>
      <textarea cols="100" rows="10" readonly v-model="data"></textarea>
    </div>
  </div>
</template>

<script>
// https://sample.bmaster.kro.kr/contacts_long/search/
const baseURL = 'http://localhost:8000/contacts/'
import axios from 'axios';

export default {
  data: function() {
      return { data: {} }
  },
  methods: {
    getContactList: function() {
      axios.get(baseURL, {
        params : {pageno:1,pagesize:10},
        headers : {'Content-Type' : 'application/json'}
      })
      .then((resp) => {
        console.log(resp.data);
        this.data = JSON.stringify(resp.data, '', 4);
      })
      .catch((err) => console.error(err))
    },
    getContactListAsync: async function() {
      try{
        const resp = await axios.get(baseURL, {params:{pageno:2, pagesize:10}});
        this.data = JSON.stringify(resp.data,'',4)
      }catch(err){
        console.error(err);
      }
      

    },
    getContact: function(no) {
      axios({
        url: baseURL + no,
        method: 'GET',
        params:{},
        headers: {},
        data: ''            // 서버에 전송될 값.
      })
      .then((resp) => {
        console.log(resp.data);
        this.data = JSON.stringify(resp.data, '', 4);
      })
      .catch((err) => console.error(err))
    },
    addContact: function() {
      const data = {
        "name":"강감찬",
        "tel":"010-2222-3339",
        "address":"서울시"
      }
      //  axios.post(URL, 전달할 데이터, {options...})
      axios.post(baseURL, data, {
        headers : {'Content-Type' : 'application/json'}
      })
      .then((resp) => {
        console.log(resp.data);
        this.data = JSON.stringify(resp.data, '', 4);
      })
      .catch((err) => console.error(err))
    },
    updateContact: function() {
      const data = {
        "no" : '1684989854330',
        "name":"리순신",
        "tel":"010-2222-3339",
        "address":"전주시"
      }
      //  axios.put(URL, 전달할 데이터, {options...})
      axios.put(baseURL + data.no , data, {
        headers : {'Content-Type' : 'application/json'}
      })
      .then((resp) => {
        console.log(resp.data);
        this.data = JSON.stringify(resp.data, '', 4);
      })
      .catch((err) => console.error(err))
    },
    deleteContact: function(no) {
      axios.delete(baseURL + no )
      .then((resp) => {
        this.data = JSON.stringify(resp.data, '', 4);
      })
      .catch((err) => console.error(err))
    },
  }
}
</script>