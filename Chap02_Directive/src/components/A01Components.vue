<template>
  <div>
    <h3>{{ title }}</h3>
    <div>
      Vue 2.X 에서는 반드시 ROOT 태그가 있어야 한다 <br />
      1개의 요소만 렌더링이 가능했다.<br />
      <br />

      Vue 3.X에서는 다중 요소도 렌더링 가능 <br />

      <img src="images/tree.jpg" alt="Tree" />
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "A01 Component",
    };
  },
};
</script>

<style></style>
