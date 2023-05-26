

<template>
  <div class="banner">
    <h5>Home Component</h5>
    <p>Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. 
      It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and 
      component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.<br>
      <br>
      
      Time: {{today.toLocaleString()}}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      today: new Date(),
    }
  },
  activated() {
    console.log('Activated');
    this.today = new Date();
  },
  deactivated() {
    console.log('DeActivated');
  }
}
</script>
