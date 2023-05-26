


<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control"   ref="searchRef"/>
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1" 
            @click.prevent="sendData">Submit</button>
      </div>
    </div>  
  </form>
</template>

<script>
export default {
  emits: ['searchEvent'],
  data() {
    return {}
  },
  methods: {
    sendData() {
      const value = this.$refs.searchRef.value.trim();
      if(value.length >= 2) this.$emit('searchEvent', value);
      else alert('2글자 이상 입력해주세요');
    }
  }
}
</script>


