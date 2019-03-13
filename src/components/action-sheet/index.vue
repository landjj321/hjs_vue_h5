<template>
  <div class="actions_sheet animated" style="animation-duration:0.3s;" :class="classname2" @click.stop="down()">
    <div class="wrap animated fast" style="animation-duration:0.3s;" :class="classname">
      <div class="item" v-for="(item,index) in  actions" :key="index" @click="gotoUrl(item.path)">
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import 'normalize.css'
import 'animate.css'

export default {
  name: 'actionsheet',
  props: {
    actions: {
      type: Array,
      default () {
        return []
      }
    }

  },
  data () {
    return {
      classname: 'hide',
      classname2: 'hide'

    }
  },
  components: {},
  created () {

  },
  methods: {
    up () {
      this.classname = 'slideInUp'
      this.classname2 = 'fadeIn'
    },
    down () {
      this.classname = 'slideOutDown'
      this.classname2 = 'fadeOut'
      setTimeout(() => {
        this.classname2 = 'hide'
      }, 500)
    },
    gotoUrl (path) {
      this.$router.push({path: path, query: this.$route.query})
    }
  }
}
</script>

<style lang="scss">
.hide{
    display: none;
}
  .actions_sheet {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba(0,0,0,.7);
    z-index:2002;

    .wrap{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      .item{
        height: 50px;
        font-size: 16px;
        color: #666;
        background: #fff;
        line-height: 50px;
        text-align: center;
        border-bottom: 1px solid #e6e6e6;
      }
    }
  }
</style>
