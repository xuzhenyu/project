<template>
    <div class="pos">
        <el-row>
            <el-col :span="24" class="pos-order" id="order-list">
                <el-tabs>
                    <el-tab-pane label="点餐">
                        <el-table :data="tableData" border style="width:100%;">
                            <el-table-column prop="foodName" label="商品名称" width="150"></el-table-column>
                            <el-table-column prop="foodCount" label="数量" width="60" ></el-table-column>
                            <el-table-column prop="foodPrice" label="价格" width="60"></el-table-column>
                            <el-table-column prop="foodDo" label="操作" width="100" fixed="right">
                                <template scope="scope">
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
                    <li v-for="item in oftenGoods"><span>{{ item.goodsName }}</span><span class="o-price">￥{{item.price}}元</span></li>
                </ul>
            </div>
            <div class="food-type">
                <el-tabs>
                    <el-tab-pane label="汉堡">
                        <ul class='cookList'>
                            <li v-for="oftengoods in type0Goods">
                                <span class="foodImg"><img :src="oftengoods.goodsImg" width="100%"></span>
                                <span class="foodName">{{oftengoods.goodsName}}</span>
                                <span class="foodPrice">￥{{oftengoods.price}}元</span>
                            </li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="薯条">
                    薯条
                    </el-tab-pane>
                    <el-tab-pane label="饮料">
                    饮料
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-col>
    </div>
</template>
<script>
import axios from 'axios'
    export default{
        name:'pos',
        data(){
            return{
                tableData:[{
                    foodName:'番茄炒蛋',
                    foodCount:2,
                    foodPrice:24
                },{
                    foodName:'川香回锅肉',
                    foodCount:1,
                    foodPrice:25
                }],
                oftenfoods:[],
                type0Goods:[]
            }
        },
          created(){
              axios.get('http://jspang.com/DemoApi/oftenGoods.php')
              .then(response=>{
                 console.log(response);
                 this.oftenGoods=response.data;
              })
              .catch(error=>{
                  console.log(error);
                  alert('网络错误，不能访问');
              })
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