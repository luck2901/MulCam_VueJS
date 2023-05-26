<template>
  <div>
    <h3 v-color="'orange'">A01 Custom Directive</h3>

    <div>
      Name: <input type="text" class="form-control" v-focus>
    </div>
    <br>

    <div>
      Num: {{num}}<br>
      <button @click="increase(2)">+</button>
      <button @click="decrease">-</button>
    </div>

    <div v-view="isChecked">
      Vue is a framework and ecosystem that covers most of the common features needed in frontend development. 
      But the web is extremely diverse - the things we build on the web may vary drastically in form and scale. 
      With that in mind, Vue is designed to be flexible and incrementally adoptable. 
      Depending on your use case, Vue can be used in different ways:<br>
    </div>
    <br>
    
    <div v-showHide="isChecked">
      <span v-setColor>Vue is a framework</span> and ecosystem that covers most of the common features needed in frontend development. 
      <span v-setColor.color="'orange'">But the web is extremely diverse</span> - the things we build on the web may vary drastically in form and scale. 
      <span v-setArgs:color="'orange'">With that in mind</span>, Vue is designed to be flexible and incrementally adoptable. 
      <span v-setArgs:border="'orange'">Depending</span> on your use case, 
        <span v-makeDOM="'orange'">Vue can be used</span> in different ways:<br>
    </div>

    <button @click="changeCheck">{{isChecked ? 'HIDE' : 'SHOW'}}</button>
  </div>  
</template>

<script>
import {counterMixin} from './../modules/mixin'
export default {
  mixins: [counterMixin],
  data() {
    return {
      isChecked: true,
    }
  },
  methods: {
    changeCheck() {
      this.isChecked = !this.isChecked;
    }
  },
  directives: {
    color(el, binding) {
      el.style.color = binding.value
    }
  }
}
</script>

<!--
  setup에서는 Directive 명명 규칙을 따른다

  v-color 라면 vColor
    const vColor = (el, binding) => el.style.color = binding.value;

  v-Orange-Color라면 vOrangeColor
    const vOrangeColor = (el, binding) => el.style.color = binding.value;

  binding 속성값
    value: directive에 전달된 값. v-color="'orange'" 라면 'orange'
    oldValue: 변경 전의 값. beforeUpdate, update에서만 사용 가능. 변경되지 않아도 값은 취득 가능
    modifiers: 사용된 수식어. v-color.foo.bar 라면 {foo: true, bar: true}
    arg: directive에 전달된 인수. v-color:no 라면 no
    dir: Directive 정의 오브젝트
-->