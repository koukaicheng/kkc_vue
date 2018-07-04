<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive :include="includePath">
        <router-view class="router"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        transitionName: 'slide-left',
        includePath: [],
        excludePath: {
          home: true,
          demo1: true,
          demo2: true,
        }
      }
    },
    created(){
      // console.log(this.$router.isBack)
    },
    watch: {
      $route (to, from) {
        let isBack = this.$router.isBack
        const isInclude = this.excludePath[from.name]
        const isToInclude = this.excludePath[to.name]
        if (isBack) {
          this.transitionName = 'slide-right'
        } else {
          if (isInclude && isToInclude) {
            this.transitionName = ''
          } else {
            this.transitionName = 'slide-left'
          }
        }
        this.$router.isBack = false
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/css/global";
  @import "./assets/css/variables";

  .includeRouter {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @mixin fullScreen {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  @mixin routeAnimation($duration) {
    z-index: $childZIndex;
    @extend .includeRouter;
    height: 100%;
    transition: $duration;
    background-color: #f7f7f7;
  }

  .router {
    @include routeAnimation(0.3s);
    backface-visibility: hidden;
    perspective: 1000;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
  }
  .slide-left-enter,
  .slide-right-leave-active {
    z-index: 1000;
    transform: translate3d(100%, 0, 0);
    -webkit-transform: translate3d(100%, 0, 0);
  }

  .slide-left-leave-active {
    transform: translate3d(-100px, 0, 0);
    -webkit-transform: translate3d(-100px, 0, 0);
  }

  .slide-right-enter {
    transform: translate3d(-200px, 0, 0);
    -webkit-transform: translate3d(-200px, 0, 0);
  }

  .slide-child-leave-active,
  .slide-child-enter {
    transform: translate3d(100%, 0, 0);
    -webkit-transform: translate3d(100%, 0, 0);
  }
  .child-route {
    @include fullScreen;
    transition: all 0.3s ease;
    z-index: 1000;
    display: flex;
    flex-direction: column;
  }
</style>
