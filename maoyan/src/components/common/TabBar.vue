<template>
<footer>
    <ul class="ul">
        <router-link tag="li" :to= "item.path" v-for = "item in tabbars" :key="item.id" active-class = "active">
            <i class="fas" :class="[item.icon]"></i>
            <span>{{item.text}}</span>
        </router-link>
    </ul>
</footer>
</template>

<script>
export default {
    data (){
        return{
            tabbars:[
                {
            id: 1,
            text: '首页',
            path: '/home',
            icon: 'fa-home'
            },
            {
            id: 2,
            text: '影院',
            path: '/cinema',
            icon: 'fa-horse'
            },
            {
            id: 3,
            text: '我的',
            path: '/mine',
            icon: 'fa-user-secret'
            }
            ]
    }
    }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/theme.styl'
@import '../../assets/border.styl'
footer 
  border 1px 0 0 0,#ccc
  padding 0.05rem 0
  width 100%
  height .48rem
  .ul
    display flex
    justify-content  space-around
    li
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      &.active 
        i 
          color $theme_color
        span 
          color $theme_color
      i 
        font-size .25rem
        margin-bottom .04rem
        color #696969
      span 
        font-size .12rem
        color #696969
</style>