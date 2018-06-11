<template>
    <div>
        <div class="w-car-sort">
            <p class="w-sort-sheng" @click="jiang()">
                <span>价格排序</span>
                <img src="../assets/image/shengxu.png" alt="">
            </p>
            <p class="w-sort-jiang" @click="sheng()">
                <span>价格排序</span>
                <img src="../assets/image/jiangxu.png" alt="">
            </p>
        </div>
        <ul class="w-car-list">
            <li v-for="lb in listpage">
                <img v-lazy="lb.img" alt="">
                <p class="w-lp-r">
                    <strong>{{ lb.title }}</strong>
                    <i>{{ lb.msg }}</i>
                    <span>{{ lb.price }}万</span>
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        data(){
            return {
                listpage:[]
            }
        },
        mounted(){
            this.list_car();
        },
        methods:{
            list_car(){
                axios.get('../../static/carpage.json')
                .then(response1=>{
                    console.log(response1.data);
                   this.listpage = response1.data.result;
                })
            },
            jiang(){
                this.listpage.sort((a,b)=>{
                    return b.price-a.price;
                })
                $('.w-sort-sheng').hide().siblings('.w-sort-jiang').show();
            },
            sheng(){
                this.listpage.sort((a,b)=>{
                    return a.price-b.price;
                })
                $('.w-sort-jiang').hide().siblings('.w-sort-sheng').show();
            }
        }
    };
</script>
<style>
.w-car-list li {
  padding: 0.266667rem 0.333333rem;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
}
.w-car-list li img {
  width: 3.066667rem;
  height: 2.133333rem;
  float: left;
}
.w-car-list .w-lp-r {
  width: 6.0rem;
  float: right;
}
.w-car-list .w-lp-r strong {
  height: 1.0rem;
  font-size: 0.346667rem;
  display: block;
  font-weight: normal;
}
.w-car-list .w-lp-r i {
  font-size: 0.32rem;
  color: #bebebe;
  font-style: normal;
  display: block;
  margin: 0 0 0.133333rem;
}
.w-car-list .w-lp-r span {
  font-size: 0.466667rem;
  color: #ff4a23;
}
.w-car-sort{
    background-color: #f1f1f1;
    line-height: 0.67rem;
    overflow: hidden;
}
.w-car-sort p{
    float: right;
    padding-right: 0.27rem;
}
.w-car-sort span{
    float: left;
}
.w-car-sort img{
    width: 0.47rem;
    height: 0.47rem;
    float: left;
    padding: 0.11rem 0 0 0.07rem
}
.w-sort-jiang{
    display: none;
}
image[lazy=loading] {
        width: 40px;
        height: 300px;
        background-color: #000;
        margin: auto;
      }
</style>