<template>
  <div class="container-fluid">
    <h3>Update Contact</h3>

    <div>
        Name: <input type="text" class="form-control" name="name"
          :value="contact.name" @input="changeText"/>
        Tel: <input type="text" class="form-control" name="tel" 
          :value="contact.tel" @input="changeText"/>
        Address: <input type="text" class="form-control" name="address"
          :value="contact.address" @input="changeText" />
    </div>
    <br />
    <button class="btn btn-outline-primary"   @click="updateContact">UPDATE</button>
  </div>
</template>
<script>
export default {
  props: ['no'],
  computed: {
    contact() {
      return this.$store.state.contactStore.contact;
    }
  },
  methods: {
    changeText(evt) {
      this.$store.commit('contactStore/CONTACT_CHANGECONTEXT', evt.target);
    },
    updateContact() {
      this.$store.dispatch('contactStore/updateContactAction', this.contact );
      this.$router.push({name: 'list'})
    }
  },
}
</script>