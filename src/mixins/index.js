import { isEmpty, isNil, complement } from 'ramda';
import markdown from '@/utils/marked';

export default {
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
