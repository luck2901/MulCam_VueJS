<template>
  <h3>A07 Computed</h3>
    
  <div>
    Num: {{num}} / {{ numComputed }}<br />
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
        <td>{{ contact.no }}</td>
        <td>{{ contact.name }}</td>
        <td>{{ contact.tel }}</td>
        <td>{{ contact.address }}</td>
      </tr>
    </tbody>
  </table>
  <div v-show="isLoading">Loading....</div>

  <button     @click="stop">STOP WATCH</button>
</template>

<script setup>
  /* eslint-disable */
  import { computed, ref, watch } from 'vue';

  const num = ref(0);
  const isLoading = ref(false);
  const search = ref('');
  const contactList = ref([]);

  const getContactList = () => {
    isLoading.value = true;
    contactList.value = [];
    const url = 'https://sample.bmaster.kro.kr/contacts_long/search/' + search.value;
    fetch(url)
    .then( resp => resp.json())
    .then( data => {
      contactList.value = data;
      isLoading.value = false;
    })
    .catch( error => console.error(error) )
  }

  // computed
  const numComputed = computed( () => num.value + 100 );

  // watch
  const stopWatch = watch(
    () => search.value,   // 감시 대상
    (newVal, oldVal) => {
      if(newVal.length >= 2) getContactList()
    }
  )

  // 리턴값으로 받은 함수를 실행하면 watch 함수에서 지정한 함수가 삭제된다
  // 즉 watch가 더 이상 지원되지 않음
  const stop = () => stopWatch();
</script>
