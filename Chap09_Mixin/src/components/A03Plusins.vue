<template>
  <div>
    <h3>A03 PlusIns</h3>

    <div v-addColor="'gray'">
      Upper: {{$upper('Hello World')}}<br />
      Eng: {{$translate('en.hi')}} / {{$translate('en.greet')}}<br>
      Kor: {{$translate('ko.hi')}} / {{$translate('ko.greet')}}<br>
      Option: {{options}}<br/>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['options'],
  mounted() {
    
  }
}
</script>
<style scoped>
  
</style>
