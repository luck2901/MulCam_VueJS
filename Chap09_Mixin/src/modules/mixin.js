import axios from 'axios'

export const counterMixin = {
  data() {
    return {
      num: 0,
      title: 'Counter Mixin'
    }
  },
  methods: {
    increase(num) {
      this.num = this.num + num;
    },
    decrease() {
      this.num--;
    }
  }
}

export const axiosMixin = {
  methods: {
    api(url, method, data) {
      return axios({
        url,
        method,
        data
      });
    }
  }
}
