<template>
    <div class="search-box">
         <div class="location">
        <div class="city" @click="toCity">{{currentCity.cityName}}</div>
        <div class="position" @click="positionClick">
            <span class="text">我的位置</span>
            <img src="@/assets/img/home/icon_location.png" alt="">
        </div>
         </div>

         <div class="section"  @click="show = true">
            <div class="start">
                <div class="date">
                     <span class="tip">入住</span>
                    <span class="time">{{startStr}}</span>
                </div>              
            </div>
            <div class="stay">共{{stayCount}}天</div>
            <div class="end">
                <div class="date">
                    <span class="tip">离店</span>
                    <span class="time">{{endStr}}</span>
                </div>
                
            </div>
         </div>

         <div class="section text">
            <div class="let">
                <div class="price">价格不限</div>
                <div class="people">人数不限</div>
            </div>
            <div class="details">关键字/位置/民宿名</div>
         </div>

        
        <van-calendar v-model:show="show" type="range" @confirm="onConfirm" color="#ff9854"/>




        <div class="hotSuggests">
      <template v-for="(item,index) in hotSuggests" :key="index">
      <div class="item" :style="{color: item.tagText.color,backgroundColor: item.tagText.background.color}">{{ item.tagText.text }}</div></template>
    </div>

    <button type="submit" class="search" @click="clickSearch">开始搜索</button>





    </div>
  


   
</template>

<script setup>
import {useRouter} from "vue-router"
import useCityStore from "@/store/modules/city.js"
import useHomeStore from "@/store/modules/home.js"
import useMainStore from "../../../store/modules/main";
import { storeToRefs } from "pinia";
import {formatMonthDay,getDiffDays} from "@/utils/format_date.js"
import {computed, ref} from "vue"

const router=useRouter();
const cityStore=useCityStore()
const {currentCity}=storeToRefs(cityStore)

const homeStore=useHomeStore()
homeStore.fetchHotSugggets()
const {hotSuggests}=storeToRefs(homeStore)


const positionClick=()=>{
    navigator.geolocation.getCurrentPosition(res=>{
        console.log("succuss",res);
    },err=>{
        console.log("false",err)
    })
}
const toCity=()=>{
    router.push("/city")
}



const mainStore=useMainStore()
const {startDate,endDate}=storeToRefs(mainStore)

 let startStr=computed(()=>formatMonthDay(startDate.value))//不需要大括号
 let endStr=computed(()=>formatMonthDay(endDate.value))

const stayCount=ref(getDiffDays(startDate.value,endDate.value))//传递的是原始时间，不是处理后的时间


const show=ref(false)
const onConfirm=(value)=>{
   let selectStartDate=value[0];
   let  selectEndDate=value[1];
   startDate.value=selectStartDate;
   endDate.value=selectEndDate;

   startStr=formatMonthDay(selectStartDate)
   endStr=formatMonthDay(selectEndDate)
    stayCount.value=getDiffDays(selectStartDate,selectEndDate)
    show.value=false
}



const clickSearch=()=>{
    router.push(
        {
            path:"/search",
            query:{
                startDate:startDate.value,
                endDate:endDate.value,
                currentCity:currentCity.value.cityName
            }
        }
    )
}
</script>

<style scoped lang="less">
.location{
    display: flex;
    height: 44px;
    padding: 0 20px;
    align-items: center;

    .city{
        flex: 1;
    }

    .position{
        width: 74px;
        display: flex;
        align-items: center;

        .text{
            position: relative;
            top: 2px;
            font-size: 12px;
        }

        img{
            margin-left: 5px;
            width: 18px;
            height: 18px;
        }
    }
}

.section{
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    height: 44px;

    .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
    margin-top: 8px;
    margin-right: 4px;
  }
    .start{
       flex: 1;
        display: flex;
        height: 44px;
       
    }

    .end{
        height: 44px;
        align-items: center;
        min-width: 30%;
         padding-left: 20px;
    }
    .date{
        display: flex;
        flex-direction: column;

        .tip{
            font-size: 12px;
            color: #999;
        }

        .time{
            margin-top: 3px;
            color: #333;
            font-size: 15px;
            font-weight: 500;
        }
    }


}

.text{
    display: flex;
    flex-direction: column;
    font-size: 12px;
            color: #7e7474;
    .let{
        display: flex;
        justify-content: space-between;
        margin-right: 20px;
        height: 30px;
        align-items: center;
        margin: 10px 0;
    }
    .details{
        height: 30px;
        align-items: center;
    }
}

.hotSuggests{
  display: flex;
 flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 20px;
  .item{
    justify-content: center;
    padding: 4px 10px;//非常关键的属性
    font-size: 14px;
   margin-bottom: 10px;
    background-color: #ffd4b7;
    border-radius: 14px;
 
  }
}

.search{
    color: white;
    font-size: 20px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border: none;
    border-radius: 14px;
    background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
}
</style>