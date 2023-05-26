


<template>
  <h3>A10 Slot Name</h3>

  <A10SlotNameChild>
    <div>처음에 기술</div>

    <!-- v-slot 대신 # 이용 가능 -->
    <template #header>
      <div>Header Content</div>
    </template>
    <template #left>
      <div>Left Content</div>
    </template>

    <div>중간에 기술</div>

    <template v-slot:content>
      <div>Main Content</div>
    </template>
    <template v-slot:footer>
      <div>Footer Content</div>
    </template>

    <div>마지막에 기술</div>
  </A10SlotNameChild>
</template>

<script>
import A10SlotNameChild from './childcomps/A10SlotNameChild.vue'

export default {
  components: { A10SlotNameChild },
  data() {
    return {
      
    }
  }
}
</script>


