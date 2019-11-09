<template>
<div>
  <home-nav>
  </home-nav>
   <router-view></router-view>
</div>
</template>

<script>
import HomeNav from './HomeNav'

export default {
  components:{
    HomeNav,
 
  }
}
</script>
<style lang="stylus" scoped>
div
  display flex
  flex-direction column
  flex 1
  overflow hidden
</style>
