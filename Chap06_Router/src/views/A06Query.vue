<template>
  <div>
    <h3>A06 Query</h3>

    <div>
      Name: {{ $route.query.name }}<br>
      No: {{ no }} <br>
      Person: {{ product.no }} / {{ product.name }}<br>
      Hash: {{ $route.hash }}
    </div>
  </div>
</template>

<script>
import contactlist from './data/ContactList';

export default {
  data: function() {
    return {
      contacts: contactlist.contacts,
    }
  },
  computed: {
    no() {
      const value = Number(this.$route.query.no);
      if(isNaN(value)) return 0;
      else return value;
    },
    product() {
      // string
      // console.log(this.$route.query.no, typeof this.$route.query.no);
      const no = Number(this.$route.query.no);
      const value = this.contacts.find(item => item.no === no);
      return value
    }
  },
  created() {
    // console.log(this.$route);
  }
}
</script>
