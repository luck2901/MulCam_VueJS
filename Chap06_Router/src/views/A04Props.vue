<template>
  <div>
    <h3>A04 Props</h3>

    <div>
        Name: {{ name }}<br>
        No: {{ no }}<br>
        Person: {{ product.no }} / {{ product.name }}<br>
    </div>
  </div>
</template>

<script>
import contactlist from './data/ContactList';

export default {
  props: ['no', 'name'],
  data() {
    return {
      contacts: contactlist.contacts,
    }
  },
  computed: {
    product() {
      console.log(this.no, typeof this.no); // string
      const no = Number(this.no);
      const value = this.contacts.find(item => item.no === no);
      return value
    }
  },
}
</script>
