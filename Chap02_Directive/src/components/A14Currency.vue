


<template>
  <h3>A14 Currency</h3>

  Qty: <input type="number" class="form-control"    v-model.number="qty">
  Cost: <input type="number" class="form-control"   :value="cost" @input="changeCost">
  Country: {{ inCurr }}
    <select class="form-control"        v-model="inCurr">
      <option v-for="item in countries" :key="item">{{ item }}</option>     
    </select>
  <br>
  <div>Total: {{ qty * cost }} </div>
  <div>Total: <span v-for="item in getTotal" :key="item.country">{{item.country}}: {{ item.value }} &nbsp; {{ ' ' }}</span></div>  
</template>

<script>
export default {
  data() {
    return {
      qty: '',
      cost: '',
      inCurr: 'USD',
    }
  },
  computed: {
    countries: () => ['USD', 'EUR', 'KRW'],
    rate: () => ({ 'USD': 1, 'EUR': 0.98, 'KRW': 0.00077 }),
    getTotal() {
      const total = this.countries.map( (item) => {
        const value = (this.qty * this.cost * this.rate[this.inCurr] / this.rate[item]).toFixed(2);
        return {country: item, value}
      });

      return total;
    }
  },
  methods: {
    changeCost(evt) {
      let value = Number(evt.target.value);
      if(isNaN(value)) value = 0;
      this.cost = value;
    },
    
  }
}
</script>


