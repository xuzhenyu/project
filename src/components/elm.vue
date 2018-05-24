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
        <div class="div-detail">
            <el-col :span="24">dddd</el-col>
        </div>
    </div>
</template>
<script>
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
                },{
                    foodName:'酸菜鱼',
                    foodCount:3,
                    foodPrice:198
                },{
                    foodName:'干锅花菜',
                    foodCount:2,
                    foodPrice:50
                }]
            }
        },
        mounted:function(){
            var orderHeight = document.body.clientHeight;
            document.getElementById("order-list").style.height=orderHeight+'px';

        }
    }
</script>

<style scoped>
    .pos-order{
        height:10.0rem;
        background-color: #fff;
        border-right:1px solid #ddd;
    }
    .div-btn{
        margin-top:10px;
    }
</style>