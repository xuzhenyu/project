<template>
    <div>
        <section>
          <div class="w-sdiv">
            <div @click="xxx">
                <p class="w-look"></p>
                <strong>{{dtmsg}}</strong>
                <span @click = "emitMyEvent">一城十店<br/>现场看车</span>
            </div>
            <div @click="xxx">
                <p class="w-true"></p>
                <strong>真实可靠</strong>
                <span>真车源100%<br/>一站式置换</span>
            </div>
            <div @click="xxx">
                <p class="w-money"></p>
                <strong>优惠金融</strong>
                <span>平安汽融<br/>超低利率</span>
            </div>
            <div @click="xxx">
                <p class="w-change"></p>
                <strong>0元换购</strong>
                <span>参加共享计划<br/>省心又省贷</span>
            </div>
          </div>
        </section>
    </div>
</template>
<script>

  export default{
    props:['dtmsg'],
    data(){
      return{
        name:'Jerry'
      }
    },
    methods:{
      emitMyEvent(){
        this.$emit('my-event',this.name);
      },
      xxx(e){
        $('div').find('span').css('color','#8b8b8b');
        $(e.target).css('color','red');
      }
    }
  };
</script>
<style scope>
    section {
  height: auto;
  margin: 0 auto;
  padding: 0.106667rem 0;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 1.333333rem;
}
section .w-sdiv {
  width: 10.0rem;
  margin: 0 auto;
}
section .w-sdiv div {
  width: 2.493333rem;
  float: left;
  text-align: center;
}
section .w-sdiv p {
  width: 0.76rem;
  height: 0.773333rem;
  margin: 0.133333rem auto;
}
section .w-sdiv strong {
  color: #ff8d29;
  font-size: 0.373333rem;
}
section .w-sdiv span {
  color: #8b8b8b;
  font-size: 0.266667rem;
}
section .w-sdiv strong, section .w-sdiv span {
  width: 2.266667rem;
  display: inline-block;
}

.w-look, .w-true, .w-money, .w-change {
  background:url(../assets/image/w_ft_img.png) no-repeat;
  background-size: 0.8rem 6.933333rem;
}

.w-look {
  background-position: 0 0;
}

.w-true {
  background-position: 0 -0.92rem;
}

.w-money {
  background-position: 0 -1.84rem;
}

.w-change {
  background-position: 0 -2.826667rem;
}
</style>