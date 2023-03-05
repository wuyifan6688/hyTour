<template>
  <div class="landLord">
    <detailSection>
        <template #head>房东介绍</template>
        <template #body >

            <div class="try">
                 <div class="head"><img :src="landLordData.topScroll" alt=""></div>
             
             
             
              <div class="bodyy">
                <img :src="landLordData.hotelLogo" alt="">

                <div class="message">
                    <div class="man">
                         <span class="begin">{{ landLordData.hotelName }}</span>
                    <div class="detail">
                        <template v-for="(item,index) in  landLordData.hotelTags" :key="index">
                            {{ item.tagText.text }}
                        </template>
                        </div>
                    </div>
                    
               
                    <div class="link">联系房东</div>
               </div>
              </div>




                <div class="foot">

                    <template v-for="(item,index) in landLordData.hotelSummary" :key="index">
              <div class="total">
                 <span>{{ item. title}}</span>
                    <span>{{ item. introduction}}</span>
                    <span>{{ item. tip}}</span>
              </div>     
                   
                    </template>
                </div>
            </div>
           
             
      
        </template>
        <template #end>查看房东主页</template>
    </detailSection>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import detailSection from '../../../components/detail-section/detail-section.vue'; 
const props=defineProps({
    landLordData:{
        type:Object,
        default:({})
    }
})



</script>

<style lang="less" scoped>

.try{
    padding: 0 8px;
    
    .head{
   img{
    width: 100%;
   }
   
}

.bodyy{//内部也有一个body类，两个body会有冲突，所以换成了boddy
    
    display: flex;
    align-items: center;
    img{
       width: 74px
    }

    .message{
        width: 100%;//不给宽度就不等到两边
        display: flex;
        justify-content: space-between;
        align-items: center;
        .begin{
            font-weight: bold;
            font-size: 22px;
        }

        .detail{
            margin-top: 3px;
            font-size: 10px;
        }
        .link{
        background-color: var(--primary-color);
        margin-right: 8px;
        padding: 4px 10px;
        border-radius: 10px;
        font-weight: bold;
        color: white;
    }
    }

  
}

  
    .foot{
        margin-top: 40px;
        margin-bottom: 20px;
        display: flex;
          .total{
            display: flex;
            flex-direction: column;
            width: 33%;

            span{
                color:gray;
                margin-bottom: 4px;
            }
            span:nth-child(2){
                color: black;
                font-weight: bold;
                font-size: 22px;
            }
    }
    }
}

</style>