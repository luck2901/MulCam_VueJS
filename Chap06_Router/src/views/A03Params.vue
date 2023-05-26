<template>
  <div>
    <h3>A03 Params</h3>

    <div>
        Name: {{ $route.params.name }}<br>
        No: {{ no + 1000 }}<br>
        Person: {{ product.no }} / {{ product.name }} <br>
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
      const value = Number(this.$route.params.no);
      if(isNaN(value)) return 0;
      else return value;
    },
    product() {
      // string
      console.log(this.$route.params.no, typeof this.$route.params.no);
      const no = Number(this.$route.params.no);
      const value = this.contacts.find(item => item.no === no);
      return value
    }
  },
  created: function(){
    // console.log(this.$route);       // 속성 값 참보
    // console.log(this.$router);      // 메서드
  },
}
</script>
