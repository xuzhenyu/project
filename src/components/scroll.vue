<template>
    <div>
        <dl class="w-ac-dl">
            <dt>购车者说</dt>
            <!-- <carSpeak :dtmsg="msg"></carSpeak> -->
            <Section1 :dtmsg="msg" @my-event="getMyEvent"></Section1>
        </dl>
        <div class="mint-swipe">
          <mt-swipe :auto="3000">
            <mt-swipe-item class="slide1">
              <router-link :to="{
                name:'carspeak',
                params:{
                  user:namegp[0],
                  place:palcegp[0]
                }
              }"><img src="../assets/image/demo/w-banner02.png" alt=""></router-link>
            </mt-swipe-item>
            <mt-swipe-item class="slide2">
              <router-link :to="{
                name:'carspeak',
                params:{
                  user:namegp[1],
                  place:palcegp[1]
                }
              }"><img src="../assets/image/demo/w-banner03.png" alt=""></router-link>
            </mt-swipe-item>
            <mt-swipe-item class="slide3">
              <router-link :to="{
                name:'carspeak',
                params:{
                  user:namegp[2],
                  place:palcegp[2]
                }
              }"><img src="../assets/image/demo/w-banner04.png" alt=""></router-link>
            </mt-swipe-item>
          </mt-swipe>
        </div>
    </div>
</template>
<script>
    import carSpeak from './sellcar.vue'
    import Section1 from './section.vue'
  export default{
    components: {
      carSpeak,
      Section1
    },
    data(){
      return{
        msg:'实体店看车',
        namegp:['Jerry','Tomi','Backy'],
        palcegp:['襄阳','Tokoy','上海']
      }
    },
    methods:{
      getMyEvent(name1){
        console.log('xxxxx'+name1);
      }
    }
  };
</script>
<style scoped>
.w-ac-dl {
  max-width: 10.0rem;
  margin: 0 auto;
  color: #5f5f5f;
  overflow: hidden;
  margin-bottom: 0.266667rem;
}
.w-ac-dl dt {
  background: url(../assets/image/w_icon_line.png) no-repeat 0.33333rem 0.29333rem;
  background-size: 0.12rem 0.413333rem;
  padding-left: 0.6rem;
  height: 0.933333rem;
  line-height: 0.933333rem;
  font-size: 0.373333rem;
}
.w-ac-dl dd {
  padding-left: 0.6rem;
  font-size: 0.32rem;
}
.w-ac-dl .w-dt-big {
  font-size: 0.48rem;
}
.swiper-container{
  padding-bottom: 0.75rem;
}
.swiper-pagination-bullet{
  width: 0.25rem;
  height: 0.25rem;
}
.swiper-pagination{
  margin-bottom: 0.2rem;
}


.mint-swipe {
    width: 100%;
    height: 4.333rem;
    color: #fff;
    font-size: 30px;
    text-align: center;
}
.slide1,.slide2,.slide3{
  display: block;
  height: 4.333rem;
}
img{
  width: 10.0rem;
  height: 4.3333rem;
}
</style>