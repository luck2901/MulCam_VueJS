


<template>
  <h3>A05 ContactList</h3>

  <A05ContactForm   @searchEvent="getContactList"></A05ContactForm>
  <A05ContactList   :contactList="contactList" :isLoading="isLoading"></A05ContactList>
</template>

<script>
import A05ContactForm from './childcomps/A05ContactForm.vue'
import A05ContactList from './childcomps/A05ContactList.vue'

const baseURL = 'https://sample.bmaster.kro.kr/contacts_long/search/'

export default {
  components: { A05ContactForm, A05ContactList },
  data() {
    return {
      contactList: [],
      isLoading: false,
    }
  },
  methods: {
    getContactList(data) {
      this.isLoading = true;

      fetch(baseURL + data)
        .then( (resp) => resp.json() )
        .then( (data) => {
          // console.log(data);
          this.isLoading = false;
          this.contactList = data;
        })
        .catch( (err) => {
          this.isLoading = false;
          console.error(err);
        })
    }
  }
}
</script>


