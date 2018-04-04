import Vue from 'vue';
import { isEmpty, isNil, complement } from 'ramda';
import markdown from '@/utils/marked';

const mixins = {
  methods: {
    isEmpty,
    isNotEmpty: complement(isEmpty),
    isNil,
    markdown(string){
      return this.isNil(string) ?
        string : markdown(string);
    }
  }
};

Vue.mixin(mixins);
