<template>
<div  class = "lay-out-box">
    <tab></tab>
    <router-view></router-view>
    <tab-bar></tab-bar>
</div>
</template>
<script>
import Tab from '../components/common/Tab'
import TabBar from '../components/common/TabBar'
// import Home from '../views/home'

export default {
    components:{
        Tab,
        TabBar,
      
      
        
    }
}
</script>
<style lang="stylus" scoped>
  .lay-out-box 
    height 100% 
    display flex 
    flex-direction column 
</style>
    
