<template>
  <div>
    <h3>A08 Child Router</h3>

    <div>
      <RouterLink to="/A08Child">INFO</RouterLink> | 
      <RouterLink to="/A08Child/way">WAY</RouterLink> | 
      <span v-for="item in contacts" :key="item.no">
        <RouterLink :to="{name: 'view', params: {no: item.no}}">{{ item.name }}</RouterLink> | 
      </span>
    </div>
    <br />

    <!-- 자식 라우터가 표시될 영역을 지정한다 -->
    <div>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import contactlist from './data/ContactList';

export default {
  data: function () {
    return {
      contacts: contactlist.contacts,
    };
  },
};
</script>

<style>
</style>