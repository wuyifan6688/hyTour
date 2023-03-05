<template>
<div class="comment">
    <detailSection>
        <template #head>
            房客点评
        </template>


        <template #body>
        <div class="boddy">
            <div class="rate">
                <div class="fen">{{commentData.overall  }}</div>
                <div class="good">
                    
                <span>{{commentData.scoreTitle  }}</span>
                <span>{{commentData.totalCount}}条评论</span>
                <van-rate v-model="value" allow-half  color="var(--primary-color)" size="12px"/>
                </div>
                <div class="more">
                    <template v-for="(item,index) in commentData.subScores" :key="index">
                       <span>{{ item }}</span> 
                    </template>
                </div>
            </div>


            <div class="judge">
                <template v-for="(item,index) in commentData.commentTagVo" :key="index">
             <span> {{ item.text }}</span>  
                </template>
                <!-- 忘记把元素放里面了 -->
            </div>


            <div class="detail">
                <img :src="commentData.comment.userAvatars" alt="">
                <div class="top">
                    <span>{{commentData.comment.userName}}</span>
                <span>{{commentData.comment.checkInDate}}</span>
                </div>
                
                <span>{{commentData.comment.commentDetail}}</span>
            </div>
        </div>

        </template>
      

        <template #end>
            查看全部{{commentData.totalCount}}条评价
        </template>

    </detailSection>
</div>
</template>

<script setup>
import detailSection from '../../../components/detail-section/detail-section.vue';
import { defineProps } from 'vue';
const props=defineProps({
    commentData:{
        type:Object,
        default:()=>({})
    }
})

let value=parseInt(props.commentData.overall)  


</script>

<style lang="less" scoped>
.comment{
    .boddy{
        padding: 0 14px;
        .rate{
            display: flex;
            justify-content: space-between;

            .fen{
                font-weight: 600;
                font-size: 50px;
            }
            .good{
                margin-left: 6px;
                display: flex;
                flex-direction: column;
            }
            .more{
               
                font-size: 14px;
                display: flex;
                
                flex-wrap: wrap;
                
                flex: 1;//????


                justify-content: flex-end;
                span{ 
                    margin-right: 6px;
                }
            }
        }

        .judge{
            display: flex;
            flex-wrap: wrap;
            span{
                background-color: #f5f5f5;
                padding: 2px 6px;
                border-radius: 8px;
                font-size: 14px;
                line-height: 20px;
                margin-bottom: 4px;
                margin-right: 6px;
            }
        }

        .detail{
            background-color: #f5f5f5;
            border-radius: 8px;
            padding: 10px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            img{
                width: 44px;
                border-radius: 50%;
                margin-right: 4px;
                margin-bottom: 10px;
            }

            .top{
                display: flex;
                flex-direction: column;
            }
            span:last-child{//less是后代选择器，所以要lastchild
                font-size: 14px;
            }
        }
    }
}
</style>