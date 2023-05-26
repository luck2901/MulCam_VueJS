<template>
  <h3>A11 Warn</h3>

  <A11WarnChild></A11WarnChild>
</template>

<script>
import A11WarnChild from './childComps/A11WarnChild.vue'

export default {
  components: {A11WarnChild},
  data() {
    return {
      isChecked: false
    }
  },
}
</script>
