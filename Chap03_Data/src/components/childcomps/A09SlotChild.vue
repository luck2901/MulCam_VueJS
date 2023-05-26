


<template>
  <h5>A09 Slot Child Component</h5>

  <div>
    상위 컴퍼넌트에서 전달한 View를 받아와 사용할 목적으로 정의한다<br>
    Name: {{ name }}<br>
    <br>
    slot 태그 위치에 표시된다.<br>
    <slot>넘어오는 뷰가 없으면 이 값이 기본값으로 표시됩니다</slot>
  </div>
</template>

<script>
export default {
  props: ['name'],
  data() {
    return {}
  }
}
</script>


