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
                    <span class="time">{{startDate}}</span>
                </div>              
            </div>
            <div class="stay">共{{stayCount}}天</div>
            <div class="end">
                <div class="date">
                    <span class="tip">离店</span>
                    <span class="time">{{endDate}}</span>
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

    </div>
  


   
</template>

<script setup>
import {useRouter} from "vue-router"
import useCityStore from "@/store/modules/city.js"
import { storeToRefs } from "pinia";
import {formatMonthDay,getDiffDays} from "@/utils/format_date.js"
import {ref} from "vue"

const router=useRouter();
const cityStore=useCityStore()
const {currentCity}=storeToRefs(cityStore)


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

const nowDate=new Date()
let newDate=new Date()
const startDate=ref(formatMonthDay(nowDate));
     newDate=newDate.setDate(nowDate.getDate()+1);//会把newdate本身的值也改了
const endDate =ref(formatMonthDay(newDate))
const stayCount=ref(getDiffDays(nowDate,newDate))//传递的是原始时间，不是处理后的时间


const show=ref(false)
const onConfirm=(value)=>{
   let selectStartDate=value[0];
   let  selectEndDate=value[1];
    startDate.value=formatMonthDay(selectStartDate)
    endDate.value=formatMonthDay(selectEndDate)
    stayCount.value=getDiffDays(selectStartDate,selectEndDate)
    show.value=false
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
</style>