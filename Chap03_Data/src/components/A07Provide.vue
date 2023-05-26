<template>
  <h3>A07 Provide</h3>

  <div>
    계층과는 상관없이 App 전체에서 공유 할 정보가 있다면 Vuex<br>
    계층 Tree 내부에서만 이용한다면 Provide / Inject<br>
    Component가 특정 계층에서만 사용한다면 Provide / Inject
  </div>
  <br>

  <div>
    Name: {{name}}<br>
    User: {{user.name}} / {{user.age}}<br>

    <button @click="changeName">Name</button>
    <button @click="changeUser">User</button><br>
    <br>
  </div>

  <A07Inject></A07Inject>
  
</template>

<script>
import { computed } from 'vue';
import A07Inject from './childcomps/A07Inject.vue'

export default {
  components: { A07Inject },
  data(){
    return {
      name: 'NolBu',
      user: { name: '흥부', age: 20}
    }
  },
  methods: {
    changeName() {
      this.name = 'HungBu';
    },
    changeUser() {
      this.user.name = 'BangJa',
      this.user.age = 100;
    },
    // Vue 3.x에서 추가됨
    // provider로 지정한 값은 하위 컴포넌트에서 deep에 관계없이 어디서나
    // inject()로 받아 사용 가능.
    provide() {
      return {
        // vue에서 import되어야 한다.(computed)
        name : computed(() => this.name),
        user : computed(() => this.user), // 참조형은 computed 안써도 된다
        changeName : this.changeName,
        changeUser : this.changeUser,
      }
    }
  },
}
</script>
