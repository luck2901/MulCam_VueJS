<template>
  <div class="container-fluid">
    <h3>Add Contact</h3>

    Name: <input type="text" class="form-control" name="name"
        :value="contact.name" @input="changeText" />
    Tel: <input type="text" class="form-control" name="tel"
        :value="contact.tel" @input="changeText" />
    Address: <input type="text" class="form-control" name="address"
        :value="contact.address" @input="changeText"/>
    <br />
    <button class="btn btn-outline-primary" @click="addContact">ADD</button>
  </div>
</template>
<script>
export default {
  computed: {
    contact() {
      return this.$store.state.contactStore.contact;
    }
  },
  methods: {
    changeText(evt) {
      this.$store.commit('contactStore/CONTACT_CHANGECONTEXT', evt.target)
    },
    addContact() {
      this.$store.dispatch('contactStore/addContactAction', this.contact);
      this.$router.push({name: 'list'})
    }
  },
  mounted() {
    this.$store.commit('contactStore/CONTACT_CLEARCONTEXT')
  }
}
</script>
