<template>
  <div class="ele">
    <!-- 01.顶部背景图 -->
    <nav class="top_bg">
      <!-- 00.返回上一层 -->
      <a href="#" class="router-back"></a>
    </nav>
    <!-- 介绍 -->
    <div class="introduce">
        <!-- 店图-->
      <div class="center_img">
        <img class="index-3eDRn" src="https://cube.elemecdn.com/3/ee/fc48689b15650b274fd3f22fb4a57png.png?x-oss-process=image/format,webp/resize,w_150">
      </div>
      <!-- 店铺名称 评价-->
      <div class="center_name">
        <div class="mar-center">
          桥头排骨(悦立方店)
          <i class="ileft"></i>
        </div>
        <div class="evaluate">
          <span>评价{{4.7}}</span>
          <span>月售{{922}}单</span>
          <span>商家配送<!----></span>
        </div>
      </div>
      <!--  优惠券  -->
      <div class="free">
        <div class="free_ct">
          <!-- 优惠券 -->
          <div>
            <div class="free_item" v-for="(item,index) in list.you" :key="index">
              <div class="border_r" style="color: rgb(255, 75, 51); border: 1px solid rgb(255, 201, 193);">
                {{item}}减{{index}}
              </div>
            </div>
          </div>
        </div>
        <div class="three">3个优惠</div>
      </div>
      <p class="number">公告：本店编号为Q03888</p>
    </div>
    <!-- 切换按钮 ： 点餐 评价 商家 -->
    <div class="infocontent">
      <mt-navbar v-model="selected" style="position: sticky; top: 0px; z-index: 2;">
        <mt-tab-item id="1">
          <p class="bot_color">点餐</p> 
        </mt-tab-item>
        <mt-tab-item id="2">          
          <p class="bot_color">评价</p> 
        </mt-tab-item>
        <mt-tab-item id="3">
          <p class="bot_color">商家</p> 
          </mt-tab-item>
      </mt-navbar>
      <!-- 切换内容 ： tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <ele-Main :meUrl="imgUrl" :obj="mainObj"></ele-Main>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          资质证件
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <ele-business></ele-business>
        </mt-tab-container-item>
      </mt-tab-container>      
    </div>
    <!-- 弹出框 点餐 套餐详情-->
    <ele-popup :sfData="sfData" @toPopup="rcvPopupData"></ele-popup>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import EleMain from "./EleMain";
import EleBusiness from "./EleBusiness";
import ElePopup from "./ElePopup";

export default {
  data(){
    return{
      list:{
        you:[25,8,125]
      },      
      selected:"1",
      imgUrl:"https://cube.elemecdn.com/4/15/214ad6e730c73d8c51e020f2d66aejpeg.jpeg?x-oss-process=image/resize,m_lfit,w_240/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
      mainObj:{
        number:12
      },
      sfData:[0,0]//口味
    }
  },
  computed: {
    ...mapState({
      maskState: state => state.ele.maskState,
      maskId: state => state.ele.maskId
    })
  },
  components: {
    EleMain,
    ElePopup,
    EleBusiness,
  },
  methods:{
    ...mapMutations({
      saveMaskSate: 'saveMaskSate',
      saveMaskId: 'saveMaskId'
    }),
    recMask(v){

    },
    add(id) {
      console.log(id);
    },
    rcvPopupData(v){
      this.sfData[0] = v.n;
      this.sfData[1] = v.i;
      // console.log(this.sfData);
      this.saveMaskSate(false);
    }
    // sub_log(val) {
    //   console.log('sub_log', val);
    //   this.$refs.target_1.collapse();
    // }
  }
}
</script>

<style lang="scss" scoped>
.ele{
  height: 2.666667rem;
  height: 26.666667vw;
  position: absolute;
  left: 0;
  right: 0;
  background-image: url(https://cube.elemecdn.com/3/ee/fc48689b15650b274fd3f22fb4a57png.png?x-oss-process=image/format,webp/resize,w_750/resize,p_50/blur,r_50,s_40);
    
    .top_bg{
      height: 100%;
      .router-back {
          margin-top: .133333rem;
          margin-top: 1.333333vw;
          margin-left: .133333rem;
          margin-left: 2.333333vw;
          width: .32rem;
          width: 3.2vw;
          height: .32rem;
          height: 3.2vw;
          display: inline-block;
          border-bottom: .053333rem solid #fff;
          border-bottom: .533333vw solid #fff;
          border-left: .053333rem solid #fff;
          border-left: .533333vw solid #fff;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
      }
    }
    
    .introduce{
        padding: .8rem 0 0;
        padding: 8vw 0 0;
        position: relative;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: center;
        align-items: center;
        background-color: #fff;
        // 店图
        .center_img {
            width: 2rem;
            width: 20vw;
            height: 2rem;
            height: 20vw;
            position: absolute;
            top: 0;
            left: 50%;
            margin-left: -1rem;
            margin-left: -10vw;
            margin-top: -1.6rem;
            margin-top: -16vw;
            img{
              width: 100%;
              height: 100%;
            }
        }
        // 店铺名称说明
        .center_name{
          color:#333;
          width: 7.2rem;
          width: 72vw;
          text-align: center;
          .mar-center{
            position: relative;
            font-size: 5.4vw;
            .ileft{
              content: "";
              border-style: solid;
              border-width: .146667rem 0 .146667rem .173333rem;
              border-width: 1.466667vw 0 1.466667vw 1.733333vw;
              border-color: transparent transparent transparent rgba(0,0,0,.67);
              position: absolute;
              right: 10vw;
              top: 2.133333vw;
            }
          }
          .evaluate{
            white-space: nowrap;
            height: .32rem;
            height: 3.2vw;
            margin-top: .173333rem;
            margin-top: 1.733333vw;
            font-size: 2.9vw;
            color: #666;
            span{
              white-space: nowrap;
              margin-right: 1vw;
              height: 3.2vw;
              margin-top: 1.733333vw;
              font-size: 2vw;
              color: #666;
              text-align: center;
            }
          }
        }
        // 优惠券
        .free {
          display: -webkit-flex;
          display: flex;
          color: #333;
          margin: .32rem auto 0;
          margin: 3.2vw auto 0;
          -webkit-align-items: center;
          align-items: center;
          width: 8rem;
          width: 80vw;
          font-size: 2.93333vw;
          // 包裹元素
          .free_ct {
            -webkit-flex: 1;
            flex: 1;
            overflow: hidden;
            // 单个优惠券
            .free_item {
              margin: .066667rem;
              margin: .666667vw;
              display: inline-block;
              .border_r{
                border-radius: .2vw;
                padding: 0 .8vw;
              }
            }
          }
          .three {
            position: relative;
            &:after{
              content: "";
              display: block;
              border-style: solid;
              border-width: .106667rem .093333rem 0;
              border-width: 1.066667vw .933333vw 0;
              border-color: #999 transparent transparent;
              position: absolute;
              top: 50%;
              -webkit-transform: translateY(-50%);
              transform: translateY(-50%);
              right: -2vw;
            }
          }
        }
        .number{
          width: 80vw;
          font-size: 2.93333vw;
          color: #999;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: .226667rem auto .266667rem;
          margin: 2.266667vw auto 2.666667vw;
          padding: 0;
          white-space: nowrap;
        }
    }

    // 点餐 评价 商家

    .infocontent{
      .mint-navbar .mint-tab-item.is-selected {
        color: #e93b3d;
        border-bottom-color: transparent;
      }
      .is-selected {
        .bot_color{
          border-bottom: 2px solid rgb(35, 149, 255) !important;
        }
      }
      .bot_color{
        font-size:5vw;
        display: inline-block;
        padding-bottom: 2vw;
        position: relative;
        color: #333;
        font-weight: 700;
      }
      // 商家推荐
      .recommend{
        p{
          padding-left: .426667rem;
          padding-left: 4.266667vw;
          color: #333;
          font-size: 7.26667vw;
          font-weight: 700;
          margin-bottom: .266667rem;
          margin-bottom: 2.666667vw;
        }
      }

    }
  
  .mint-main-button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: blue;
    font-size: 2em;
    /* text-align: center; */
    line-height: 0.9em;
  }
  .mint-palette-button {
    width: 6vw;
    height: 6vw;
    line-height: 6vw;
    font-size: 3vw;
    color:#fff;
  }
  .pb{
    position: absolute;
    right: 1vw;
    top: 1vw;
  }

}

</style>