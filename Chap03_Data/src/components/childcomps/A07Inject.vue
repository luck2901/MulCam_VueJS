<template>
  <h5>A07 Inject</h5>
  <div>
    Name : {{ name }} <br>
    User : {{ user.name }} <br>
    <br>
    <button @click="changeName">Name</button>
    <button @click="changeUser">User</button>
  </div>
</template>

<script>
export default {
  inject : ['name','user','changeName','changeUser'],
  data() {
    return {
      
    }
  }
}
</script>
