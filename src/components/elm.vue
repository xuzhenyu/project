<template>
    <div class="pos">
        <el-row>
            <el-col :span="24" class="pos-order" id="order-list">
                <el-tabs>
                    <el-tab-pane label="点餐">
                        <el-table :data="tableData" border style="width:100%;">
                            <el-table-column prop="goodsName" label="商品名称" width="150"></el-table-column>
                            <el-table-column prop="count" label="数量" width="60" ></el-table-column>
                            <el-table-column prop="price" label="价格" width="60"></el-table-column>
                            <el-table-column label="操作" width="100" fixed="right">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small">删除</el-button>
                                    <el-button type="text" size="small">增加</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="div-btn">
                            <el-button type="warning">挂单</el-button>
                            <el-button type="danger">删除</el-button>
                            <el-button type="success">结账</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">挂单</el-tab-pane>
                    <el-tab-pane label="外卖">外卖</el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span="17">我是产品栏</el-col>
        </el-row>
        <el-col :span="24">
            <div class="often-goods">
                <h4 class="title">商品名称</h4>
                <ul class="often-goods-list">
                    <li v-for="goods in oftenGoods" @click="addOrderList(goods)"><span>{{ goods.goodsName }}</span><span class="o-price">￥{{goods.price}}元</span></li>
                </ul>
            </div>
            <div class="food-type">
                <el-tabs>
                    <el-tab-pane label="汉堡">
                        <ul class='cookList'>
                            <li v-for="oftengoods in type0Goods">
                                <span class="foodImg"><img :src="oftengoods.goodsImg" width="100%"></span>
                                <span class="foodName">{{oftengoods.goodsName}}</span>
                                <span @click="aaa()" class="foodPrice">￥{{oftengoods.price}}元</span>
                            </li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="薯条">
                        <ul class='cookList'>
                            <li v-for="often1goods in type1Goods">
                                <span class="foodImg"><img :src="often1goods.goodsImg" width="100%"></span>
                                <span class="foodName">{{often1goods.goodsName}}</span>
                                <span class="foodPrice">￥{{often1goods.price}}元</span>
                            </li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="饮料">
                        <ul class='cookList'>
                            <li v-for="often2goods in type2Goods">
                                <span class="foodImg"><img :src="often2goods.goodsImg" width="100%"></span>
                                <span class="foodName">{{often2goods.goodsName}}</span>
                                <span class="foodPrice">￥{{often2goods.price}}元</span>
                            </li>
                        </ul>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-col>
    </div>
</template>
<script>
import axios from 'axios'
import $ from 'jquery'
    export default{
        name:'pos',
        data(){
            return{
                tableData:[],
                oftenGoods:[],
                type0Goods:[],
                type1Goods:[],
                type2Goods:[]
            }
        },
      created(){
          axios.get('http://jspang.com/DemoApi/oftenGoods.php')
          .then(response=>{
            // console.log(response);
            //  console.log(response.data.length);
             this.oftenGoods=response.data;
          })
          .catch(error=>{
              console.log(error);
              alert('网络错误，不能访问');
          })
           //读取分类商品列表
          axios.get('http://jspang.com/DemoApi/typeGoods.php')
          .then(response=>{
             //this.oftenGoods=response.data;
             this.type0Goods=response.data[0];
             this.type1Goods=response.data[1];
             this.type2Goods=response.data[2]; 
          })
          .catch(error=>{
              console.log(error);
              alert('网络错误，不能访问');
          })
        },
        methods:{
            aaa:function(){
                $('.foodName').css('color','#999');
            },
            addOrderList(goods){//goods是渲染出来商品名称里的对象
                //商品是否存在于订单列表
                let isHave = false;
                for(let i=0; i<this.tableData.length; i++){
                    //console.log(this.tableData.length);
                    if(this.tableData[i].goodsId == goods.goodsId){
                        isHave = true;//已存在
                    }
                }

                //根据判断的值编写业务逻辑
                if(isHave){
                    //改变列表中商品的数量
                    //let arr = this.tableData.filter(o=>o.goodsId == goods.goodsId);
                    let arr = $.grep(this.tableData,n=>n.goodsId == goods.goodsId);
                    //console.log(this.tableData);
                    arr[0].count++;
                    //console.log(arr[0].count);
                }else{
                    let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
                    console.log(newGoods);
                    this.tableData.push(newGoods);
                    console.log(this.tableData);
                }
            }
        },
        mounted:function(){
            var orderHeight = document.body.clientHeight;
            document.getElementById("order-list").style.height=orderHeight+'px';
        }
    };
</script>

<style scoped>
    html{
        overflow-y: auto;
    }
    .pos-order{
        height:5.33rem;
        background-color: #fff;
        border-right:1px solid #ddd;
        overflow-y: auto;
    }
    .div-btn{
        margin-top:10px;
    }
    .title{
        border-bottom:1px solid #ddd;
        background-color:#f1f1f1;
        padding:0.25rem;
        text-align: left;
    }
    .often-goods-list{
        height: 2.67rem;
        overflow-y: auto;
        padding-left: 0.13rem
    }
    .often-goods-list li{
        float: left;
        border: 1px solid #ddd;
        padding: 0.125rem;
        font-size: 0.24rem;
        margin:0.25rem 0.13rem 0 0;
    }
    .o-price{
        color: #409EFF;
    }
    .cookList li{
       list-style: none;
       width:31%;
       border:1px solid #E5E9F2;
       height: auto;
       overflow: hidden;
       background-color:#fff;
       padding: 0.03rem;
       float:left;
       margin: 0.03rem;
 
   }
   .cookList li span{
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 0.21rem;
       padding-left: 0.13rem;
       color:brown;
 
   }
   .foodPrice{
       font-size: 0.21rem;
       padding-left: 0.13rem;
       padding-top:0.13rem;
   }
</style>