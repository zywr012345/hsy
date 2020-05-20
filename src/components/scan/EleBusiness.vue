<template>
  <div class="business">
    <!-- 01_顶部配送信息 -->
    <section class="bus_give">
      <strong>配送信息</strong>
      <p>由商家配送提供配送，约10分钟送达，距离3km,配送费￥10</p>
    </section>
    <!-- 02_商家实景 -->
    <section class="bus_img_show">
      <strong>商家实景</strong>
      <div>
        <img src="../../assets/image/home/default_image_banner.png" alt="">
        <img src="../../assets/image/home/default_image_banner.png" alt="">
      </div>
    </section>
    <!-- 03_商家信息 -->
    <section class="bus_info">
      <strong>商家信息</strong>
      <ul>
        <li>小店，位于悦立方街区二楼。店内特色小吃桥头排骨、桥头炸肉、桥头掌中宝、桥头鸡翅中，秘制配方欢迎品尝。</li>
        <li>
          <span>品类</span>
          <span>炸鸡炸串, 烧烤</span>
        </li>
        <li>
          <span>电话</span>
          <span>0633-1203-1520</span>
        </li>
        <li>
          <span>地址</span>
          <span>山东省济南市历城区聚隆广场悦立方街区189号商铺</span>
        </li>
        <li>
          <span>营业时间</span>
          <span>10.00~22.00</span>
        </li>
      </ul>
    </section>
    <!--  -->

  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
// 商家信息
.business{
  section{
    padding: 3vw 4vw;
    margin-bottom: .266667rem;
    margin-bottom: 2.666667vw;
    font-size: 3.46667vw;
    background-color: #fff;
    color: #666;
    border-bottom: 1px solid #eee;
    
    strong{
      color: #000;
      font-weight: 700;
      font-size: 4.5vw;
      line-height: 5.6vw;
      display: inline-block;
      margin-bottom: 2vw;
    }
  }
  // 02_商家实景
  .bus_img_show{
    div{      
      display: flex;
      justify-content: flex-start;
      align-items: center;
      // padding:1rem 1.5rem;
      img{
        width: 4.5rem;
        height: 3rem;
      }
      img:last-child{
        margin-left: 1rem;
      }
    }
  }
  // 03_商家信息
  .bus_info{
    li{
      display: flex;
      padding: 4vw 4vw 4vw 0;
      justify-content: space-between;
      align-items: center;
      margin-right: -4vw;
      font-size: 3.8vw;
      span{
        max-width: 66.666667vw;
        text-align: right;
        
        &:first-child{
          font-weight: 700;
          color: #333
        }
      }
    }
  }
}
</style>