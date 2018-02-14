import Vue from 'vue';

import Trigger from '@suning/v-trigger';
import '@suning/v-trigger/css/index.scss';

Vue.component('AB', {
  render(h) {
    return h('div', ['this is ab component']);
  },
});

const vm = new Vue({
  el: '#app',
  data() {
    return {
      inputDisabled: false,
    };
  },
  created() {
    setTimeout(() => {
      this.inputDisabled = true;
    }, 2000);
  },
  methods: {
    onTriggerClick(e) {
      console.log('trigger', e.type);
    },
    onClick(e) {
      console.log('a-b default click', e.type);
    },
  },
  components: {
    Trigger,
  },
});
