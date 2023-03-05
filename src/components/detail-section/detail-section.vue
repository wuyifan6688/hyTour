<template>
  <div class="section">
    <div class="head" ><slot name="head"><h3>默认</h3></slot></div>
    <div class="body"><slot name="body">默认</slot></div>
    <div class="end"><slot name="end">11默认</slot><van-icon name="arrow" /></div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>

.section{
    .head{
    
    border-top: 20px solid #f5f7fa;
    font-size: 26px;
    font-weight: bold;
    margin: 10px 0;
    height: 70px;
    line-height: 70px;
    padding-left: 10px;
    border-bottom: 5px solid #f2f3f4;
}
.end{
    color: var(--primary-color);
    display: flex;
    //position: absolute;脱离文档流，会导致塌陷问题,所以用justify content
    justify-content: flex-end;
    align-items: center;
    right: 0;
    margin-top: 10px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: bold;
}
}

</style>