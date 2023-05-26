<template>
  <div class="container-fluid">
    <table class="table">
      <thead>
        <tr>
          <th>No</th><th>Name</th><th>Tel</th><th>Address</th><th>Photo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contactList.contacts" :key="contact.no">
          <td>{{ contact.no }}</td>
          <td><RouterLink :to="{name: 'contact', params: {no: contact.no}}">{{ contact.name }}</RouterLink></td>
          <td>{{ contact.tel }}</td>
          <td>{{ contact.address }}</td>
          <td>
            <RouterLink :to="{name: 'photo', params: {no: contact.no} }">
              <img :src="contact.photo" alt="사진" width="50">
            </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    contactList() {
      return this.$store.state.contactStore.contactList;
    }
  },
  methods: {
    getContactList() {
      this.$store.dispatch('contactStore/getContactListAction')
    }
  },
  mounted() {
    this.getContactList();
  },
}
</script>