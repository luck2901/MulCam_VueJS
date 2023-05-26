<template>
  <div class="container-fluid">
    <h3>Get Contact</h3>

    <div>
      Name: <input type="text" class="form-control" disabled  :value="contact.name"/>
      Tel: <input type="text" class="form-control" disabled   :value="contact.tel"/>
      Address: <input type="text" class="form-control" disabled :value="contact.address"/>
    </div>
    <br />
    <button class="btn btn-outline-primary"   @click="goUpdate">수정</button>
    <button class="btn btn-outline-primary"   @click="deleteContact">삭제</button>
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
    getContact(){
      this.$store.dispatch('contactStore/getContactAction', this.no);
    },
    deleteContact(){
      this.$store.dispatch('contactStore/deleteContactAction', this.no);
      this.$router.push({name: 'list'});
    },
    goUpdate() {
      this.$router.push({name: 'update', params: {no: this.no}});
    }
  },
  mounted() {
    this.getContact();
  },
}
</script>