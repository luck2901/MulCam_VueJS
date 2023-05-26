<template>
  <h5>A06 Inject</h5>

  Name: {{ name }}<br>
  User: {{ user.name }} <br>
  Obj: {{ obj.name }}
  <br>

  <button   @click="action.changeName">Name</button>
  <button>User</button><br>

  <button>Name</button>
  <button>User</button>
  <button>User</button>
  <button>User</button>
  <br>  
</template>

<script setup>
  import { inject, reactive, ref } from 'vue';

  const name = ref(inject('name'));
  const user = ref(inject('user'));
  // console.log(user);
  const obj = reactive(inject('obj'));

  const action = inject('action')
</script>

