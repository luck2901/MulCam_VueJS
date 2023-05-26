


<template>
  <h3>A10 Vue Form Element</h3>
  <br>

  <form>
    <!-- 좌우 공백문자 제거 v-model.trim -->
    Text Field: <span class="orange">{{ sendData.name }}</span>
    <input type="text" class="form-control" name="name" v-model.trim="sendData.name"><br>

    <!-- 숫자로 형변환 v-model.number -->
    Number Field: <span class="orange">{{ sendData.age }}</span>
    <input type="number" class="form-control" v-model.number="sendData.age"><br>

    <!-- focus가 벗어나면 그때 값 반영 v-model.lazy -->
    Lazy Field: <span class="orange">{{ sendData.address }}</span>
    <input type="text" class="form-control" v-model.lazy="sendData.address"><br>

    
    Radio Button: <span class="orange">{{ sendData.gender }}</span><br>
    <input type="radio" name="gender" value="남자"    v-model="sendData.gender">Male
    <input type="radio" name="gender" value="여자"    v-model="sendData.gender">Female
    <input type="radio" name="gender" value="어린이"  v-model="sendData.gender">Children <br>
    <br>

    Single Check: <span class="orange">{{ sendData.check ? '동의' : '동의 안함' }}</span><br>
    <input type="checkbox" name="check" v-model="sendData.check">{{ sendData.check ? '동의' : '동의 안함' }}<br>
    <br>

    Single Check: <span class="orange">{{ sendData.isCheck }}</span><br>
    <input type="checkbox" name="isCheck" 
      v-model="sendData.isCheck" true-value="동의" false-value="동의 안함">
      {{ sendData.isCheck  }}<br>
    <br>

    CheckBox: <span class="orange">{{ sendData.fruit.join(' - ') }}</span><br>
    <input type="checkbox" value="apple"    v-model="sendData.fruit">사과,
    <input type="checkbox" value="banana"   v-model="sendData.fruit">바나나,
    <input type="checkbox" value="melon"    v-model="sendData.fruit">멜론<br>
    <br>

    SelectBox: <span class="orange">{{ sendData.country }}</span><br>
    <select class="form-control"      v-model="sendData.country">
      <option value="">선택해주세요</option>
      <option v-for="item in countries" :key="item">{{ item }}</option>
    </select>
    <br>

    SelectBox Multi: <span class="orange">{{ sendData.rateArr }}</span><br>
    <select class="form-control" multiple     v-model="sendData.rateArr">
      <option v-for="item in rate" :key="item.id" :value="item.rate">{{ item.country }}</option>
    </select>
    <br>

    <!-- 가드가 필요하면 이벤트 베이스로 구현한다 -->
    TextArea: <span class="orange">{{ sendData.command }}</span>
    <textarea cols="50" rows="5" class="form-control"     ref="commandRef"
      :value="sendData.command" @input="changeCommand"></textarea>
    <br>


    Radio Button Object Value: <span class="orange">{{ sendData.user.name }} / {{ sendData.user.age }}</span><br>
    <input type="radio" name="person" :value="{name: '놀부', }">놀부
    <input type="radio" name="person">흥부
    <input type="radio" name="person">방자 <br>
    <br>

    Text Field: <span class="orange"></span>
    <input type="text" class="form-control"><br>

    <button type="submit"   @click.prevent="send">SEND</button>
  </form>  
</template>

<script>
export default {
  data() {
    return {
      sendData: {
        name: '',
        age: '',
        gender: '여자',
        check: true,
        isCheck: '동의',
        fruit: [],
        country: '',
        rateArr: ['EUR', 'KRW'],
        command: '',

      },
    }
  },
  computed: {
    countries: () => ['대한민국', '미국', '영국', '프랑스', '호주'],
    rate: () => [
      {id: 1, country: '대한민국', rate: 'KRW'},
      {id: 2, country: '미국', rate: 'USD'},
      {id: 3, country: '유로', rate: 'EUR'},
      {id: 4, country: '중국', rate: 'CNY'},
    ]
  },
  methods: {
    send() {
      const value = this.$refs.commandRef.value.trim();
      if(value.length <= 10) {
        alert('10글자 이상 입력해 주세요')
        this.$refs.commandRef.focus();
        return;
      }
      console.log(this.sendData);
    },
    changeCommand(evt) {
      // if(rule === 1) { 
      //   this.sendData.command = evt.target.value;
      // }
      this.sendData.command = evt.target.value;
    }
  }
}
</script>

<style scoped>
  .orange {color: orange;}
</style>

