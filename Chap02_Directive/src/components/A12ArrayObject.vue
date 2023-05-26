


<template>
  <h3>A12 Array & Object</h3>

  <ul class="list-group">
    <li class="list-group-item"  v-for="(item, i) in names" :key="i">
      {{i + 1}} {{item}}
    </li>
  </ul>
  
  <hr>

  <ul class="list-group">
    <li class="list-group-item" v-for="(value, key, i) in user" :key="key">
      {{i + 1}} {{key.toUpperCase()}} - {{value}}
    </li>
  </ul>
  <br>

  <div>
    <button   @click="addArray">ADD Array</button>
    <button   @click="updateArray(1, 1000)">Change Array</button>
    <button   @click="deleteArray(1)">Delete Array</button>

    <button   @click="addObject('address', 'Seoul')">ADD Object</button>
    <button   @click="updateObject('address', 'Busan')">Change Object</button>
    <button   @click="deleteObject('address')">Delete Object</button>
  </div>  
</template>

<script>
export default {
  data(){
    return {
      names: ['NolBu', 'HungBu'],
      user: {name: 'NolBu', age: 20}
    }
  },
  methods: {
    addArray() {
      const random = Math.ceil(Math.random() * 100);
      this.names.push(random);        // 2.X, 3.X
    },
    updateArray(index, value) {
      this.names[index] = value;                  // 3.X
      // this.names.splice(index, i, value);      // 2.X
    },
    deleteArray(index) {
      this.names.splice(index, 1);    // 2.X, 3.X
    },
    addObject(key, value) {
      this.user[key] = value;         // 3.X

      // 2.X
      // 불변성 => 배열은 이미 메서드가 불변성이 되도록 구현되어 있음
      // this.user = {...this.user, [key]: value};
    },
    updateObject(key, value) {
      this.user[key] = value;         // 3.X

      // 2.X
      // 불변성 => 배열은 이미 메서드가 불변성이 되도록 구현되어 있음
      // this.user = {...this.user, [key]: value};
    },
    deleteObject(key) {
      delete this.user[key];         // 3.X

      // 2.X
      // 불변성 => 배열은 이미 메서드가 불변성이 되도록 구현되어 있음
      // delete this.user[key];
      // this.user = {...this.user}
    }
  }
}
</script>


