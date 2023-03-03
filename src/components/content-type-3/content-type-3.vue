<template>
  <div class="v3">
    <img :src="itemData.image.url" alt="">
    
    <div class="place">
        <img src="@/assets/img/home/location.png" alt="">
        {{itemData.location}}
    </div>
    <div class="details">
        {{ itemData.houseName }}
    </div>
    <div class="judge">
         <div class="summury">{{ itemData?.summaryText }}</div>
         
    </div>
   
    <div class="price">
         <div class="priceNow">￥{{    itemData.finalPrice }}</div>
         <div class="priceBefore">￥{{ itemData.productPrice }}</div>
         <div class="come" >{{ itemData.priceTipBadge?.text }}</div>
    </div>
   
  </div>
</template>

<script setup>
defineProps({
    itemData:{
        type:Object,
    }
})
</script>

<style lang="less" scoped>
.v3{
    width: 47%;
    padding: 0 4px;

    .place{
        display: flex;
        font-size: 12px;
        height: 30px;
        align-items: center;
        img{
            width: 18px;
        }
    }

    .details{
        font-weight:400;
    }

    img{
    width: 90%;
    padding: 5px;
    border-radius: 20px;
}


.judge{
        font-size: 12px;
}

    .price{
        line-height: 25px;
        align-items: center;
        display: flex;
        font-size: 14px;

       .priceNow{
        color: rgb(220, 132, 9);
        margin-right: 2px;
        font-size: 16px;
       }
       .priceBefore{
        position: relative;
        bottom: 1px;
        color: gray;
        text-decoration:line-through;
        font-size: 12px;
        margin-right:6px;
        
       }

       .come{
        background-image: linear-gradient(270deg,#f66,#ff9f9f);
        color: #fff;
        line-height: 18px;
        border-radius: 14px;
        position: relative;
        bottom: 1px;
        font-size: 12px;
        padding: 0 10px;
       }
    }
}

</style>