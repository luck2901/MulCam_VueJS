


<template>
  <h3>A09 Slot</h3>

  <A09SlotChild name="Nolbu">Good Morning</A09SlotChild>
  <A09SlotChild name="Nolbu"></A09SlotChild>
  <A09SlotChild name="흥부">
    <div>
      좋은 오후
    </div>
  </A09SlotChild>
</template>

<script>
import A09SlotChild from './childcomps/A09SlotChild.vue'

export default {
  components: { A09SlotChild },
  data() {
    return {
      
    }
  }
}
</script>


