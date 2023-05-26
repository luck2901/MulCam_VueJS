<template>
  <h3>A08 External</h3>
    
  <div>
    Num: {{num}} / {{numComp}}<br />
    <button @click="increase">NUM+</button><br>
    <br>
  </div>

  <input type="text" class="form-control" v-model="search"><br>
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

  <div v-show="isLoading">Loading....</div>
  <button   @click="stop">STOP WATCH</button>
  <br />
</template>

<script setup>
  import { computed, ref, watch, watchEffect } from 'vue';

  const num = ref(0);
  const isLoading = ref(false);
  const search = ref('');
  const contactList = ref([]);

  const getContactList = () => {
    isLoading.value = true;
    contactList.value = [];
    const url = 'http://sample.bmaster.kro.kr/contacts_long/search/' + search.value;
    fetch(url)
    .then( resp => resp.json())
    .then( data => {
      contactList.value = data;
      isLoading.value = false;
    })
    .catch( error => console.error(error) )
  }

  const increase = () => num.value++;

  // computed
  const numComp = computed(() => num.value + 100, {
    onTrack(evt) {
      console.log(evt.target.value)
    },
    onTrigger(evt) {
      console.log(evt.target.value);
    }
  });

  const stopWatch = watch(
    () => search.value,
    (newVal, oldVal) => {
      if (newVal.length >= 2) {
        getContactList();
      }
    }
  );

  const stop = () => {
    stopWatch();
  }
</script>
