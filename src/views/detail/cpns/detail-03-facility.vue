<template>
  <div class="facility">
    <detailSection>
        <template #head>
            房屋设施
        </template>
        <template #body >
            <div class="true">
            <template v-for="(item,index) in facilityData.houseFacility.facilitySort" :key="index">
               <div class="body">
                <div class="left">
                    <img :src="facilityData.houseFacility.houseFacilitys[item].icon" alt="">
                    <div>{{ facilityData.houseFacility.houseFacilitys[item].facilitys[0].name }}</div>
                </div>

                <div class="right">
                    <template v-for="(item,index) in facilityData.houseFacility.houseFacilitys[item].facilitys" :key="index" >
                <div v-if="index<=3" class="in"> <img src="@/assets/img/detail/icon_check.png" alt=""> <span >{{ item.name }}</span></div>     
                    </template>
                   
                </div>

               </div>
                
            </template> </div>
        </template>
        <template #end>
            查看全部设施
        </template>

    </detailSection>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import detailSection from "@/components/detail-section/detail-section.vue"

const props =defineProps({
    facilityData:{
        type:Object
    }
})

</script>

<style lang="less" scoped>
.facility{
    

  .true{ margin: 0 4px 4px 4px;
  background-color: #f7f9fb;border-radius: 10px;
  padding-bottom: 20px;
     .body{
        
         
       
        margin-bottom: 4px;
        display: flex;
        align-items: center;
        
        padding-top: 20px;
         .left{
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 12px;
        img{
            width: 33px;
        }
    }


        .right{
            height: 70px;
            flex: 1;
            width: 100%;
            flex-wrap: wrap;
            align-items: center;
            display: flex;
           
            .in{
                //margin-right: 30px;
                width: 50%;//妙，比起用间隔牛逼
                
                display: flex;
                align-items: center;
                 img{
                width: 16px;
                margin-right: 3px;
            }
            }
           
        }
    }
  }
   
   
}
</style>