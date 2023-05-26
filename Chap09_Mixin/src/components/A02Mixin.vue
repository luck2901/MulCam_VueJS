<template>
  <div>
    <h3>A02 Mixin</h3>

    <div>
      Num: {{num}}<br>
      <button @click="increase(2)">+</button>
      <button @click="decrease">-</button>
    </div>
    <br>

    <input type="text" class="form-control" v-model="name"><br>
      <table class="table">
        <thead>
          <tr><th>NO</th><th>NAME</th><th>TEL</th><th>ADDRESS</th></tr>
        </thead>
        <tbody>
          <tr v-for="contact in contactList" :key="contact.no">
            <td>{{contact.no}}</td>
            <td>{{contact.name}}</td>
            <td>{{contact.tel}}</td>
            <td>{{contact.address}}</td>
          </tr>
        </tbody>
      </table>

      <div v-show="isLoading">Loading...</div>
  </div>
</template>

<script>
import {counterMixin, axiosMixin} from './../modules/mixin'
export default {
  mixins: [counterMixin, axiosMixin],
  data(){
    return {
      name: '',
      isLoading: false,
      contactList: []
    }
  },
  methods: {
    searchContact() {
      this.isLoading = true;
      this.contactList = []
      this.api('http://sample.bmaster.kro.kr/contacts_long/search/' + this.name, 'get')
      .then( resp => {
        this.isLoading = false;
        this.contactList = resp.data
      })
      .catch( error => {
        this.isLoading = false
        console.error(error) 
      })
    }
  },
  watch: {
    name(value) {
      if(value.length >= 2) this.searchContact();
    }
  }
}
</script>
<style scoped>
  
</style>
