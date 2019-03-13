
<style>

</style>
<template>
 <div>
     <test></test>
     <h1>page1!!!!!!</h1>

      <button @click="up()">up</button>
      <button @click="down()">down</button>
     <actionsheet :actions="actions" ref="actionsheet"></actionsheet>
 </div>
</template>

<script>

import {test, actionsheet} from '../components'
export default {
  name: 'page',
  components: {test, actionsheet},
  data () {
    return {
      actions: [
        {name: 'page1', path: '/page1'},
        {name: 'page2', path: '/page2'},
        {name: 'page3', path: '/page3'},
        {name: 'page4', path: '/page4'}
      ]
    }
  },
  methods: {
    up () {
      this.$refs.actionsheet.up()
    },
    down () {
      this.$refs.actionsheet.down()
    }
  },
  created () {}
}
</script>
