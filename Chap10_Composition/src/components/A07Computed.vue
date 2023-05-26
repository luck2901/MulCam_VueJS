<template>
  <h3>A07 Computed</h3>
    
  <div>
    Num: {{num}} <br />
    <button @click="increase">NUM+</button><br>
    <br>
  </div>

  <input type="text" class="form-control" v-model="search"><br>
  <table class="table">
    <thead>
      <tr><th>NO</th><th>NAME</th><th>TEL</th><th>ADDRESS</th></tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <div v-show="isLoading">Loading....</div>
  <button>STOP WATCH</button>
</template>

<script setup>
  import { ref } from 'vue';

  const num = ref(0);
  const isLoading = ref(false);
  const search = ref('');
  const contactList = ref([]);

  const getContactList = () => {
    isLoading.value = true;
    contactList.value = [];
    const url = 'http://sample.bmaster.kro.kr/contacts_long/search/' + state.search;
    fetch(url)
    .then( resp => resp.json())
    .then( data => {
      contactList.value = data;
      isLoading.value = false;
    })
    .catch( error => console.error(error) )
  }


</script>
