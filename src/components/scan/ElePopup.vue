<template>
  <div class="ele_popup">
    <!-- 餐品详情框 -->
    <div :class="{show_none:!this.info}" class="foodpanel">
      <div @click="_hidden" class="foodpanel-close">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" class="foodpanel-closeIcon_3a1DT">
          <defs>
            <path id="a" d="M13.132 12l6.47-6.47a.75.75 0 0 0-1.061-1.06l-6.47 6.47-6.47-6.47a.75.75 0 0 0-1.06 1.06L11.01 12l-.072.071.071.071-6.47 6.47a.75.75 0 0 0 1.061 1.06l6.47-6.47 6.47 6.47a.75.75 0 0 0 1.06-1.06l-6.47-6.47.072-.07-.071-.072z"></path>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <use fill="#fff" fill-rule="nonzero" xlink:href="#a"></use>
            <path d="M0 0h24v24H0z"></path>
          </g>
        </svg>
      </div>
      <div class="foodpanel-body">
        <div class="foodpanel-foodimg">
          <img src="https://cube.elemecdn.com/4/15/214ad6e730c73d8c51e020f2d66aejpeg.jpeg?x-oss-process=image/resize,m_lfit,w_564,h_564/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp" alt="桥头排骨（小份）">
        </div>
        <div class="food-info">
          <div class="food-name"><!---->
            <p class="fn-content">桥头排骨（小份）</p>
            <!---->
          </div>
          <div class="food-sales">
            <span>月售400份</span>
            <span>好评率100%</span>
          </div>
          <div class="food-price">
            <span class="fp-salesInfo" style="color: rgb(255, 83, 57);">
              <span>17.1</span>
              <del class="fp-salesInfo-o">¥19</del>
            </span>
            <div class="fp-activity">
              <span class="fp-common">
                <span class="mini-tag">
                  <span class="end">9折</span>
                </span>
                <span class="mini-tag">
                  <span class="end">每单限1份优惠</span>
                </span> 
              </span> <!---->
            </div>
            <span class="fp-cartBtn"><!----> 

            </span>
            </div>
            <p class="food-desc">口味请备注：香辣，孜然，椒盐，甘梅，原味主要原料：猪肋排</p>
            <p class="food-bottom">
              <span>价格说明</span>
            </p>                 
          <div @click.stop="add(v)" class="pb">
              <mt-palette-button content="+"
                direction="rt" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;">
                <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
                <!-- <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
                <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div> -->
              </mt-palette-button>                      
          </div>
          </div> <!---->     
        </div>
    </div>
    <!-- 点餐弹出框 -->
    <div :class="{show_none:!this.maskState}" class="order">
      <!-- 遮罩层 -->
      <div class="mask"></div>
      <!-- 弹出框 -->
      <div class="popup">
        <div class="cont">
          <a href="javascript:;" @click="_hidden" role="button" aria-label="关闭" class="x_out"></a>
          <div class="head">
            <img alt="" class="specpanel-pic_2kabO" src="https://cube.elemecdn.com/4/15/214ad6e730c73d8c51e020f2d66aejpeg.jpeg?x-oss-process=image/format,webp/resize,w_95">
            <div class="info">
              <p class="name">桥头排骨（小份）</p>
              <p class="total">已选：{{spicyData[spicy]}}/{{flavorData[flavor]}}</p>
              <p class="price" style="color: rgb(255, 83, 57);">
                <small>¥</small>17.1
                <small class="specpanel-extraText_178qT" style="display: none;">起</small>
              </p>
            </div>
          </div>
          <!---->
          <div class="body">
            <div>
              <p class="colTitle">辣度</p>
              <div class="colBody">
                <span
                  v-for="(v,i) in spicyData" :key="i"
                  @click="selectSpicy(0,i)"
                  :class="{panel_item_active:spicy == i}"
                  class="panel-item"
                  >
                  {{v}}
                </span>
              </div>
            </div>
            <div>
              <p class="colTitle">口味</p>
              <div class="colBody">
                <span
                  @click="selectSpicy(1,i)"
                  :class="{panel_item_active:i == flavor}"
                  v-for="(v,i) in flavorData" :key="i"
                  class="panel-item">
                  {{v}}
                </span>
              </div>
            </div>
            <!---->
          </div>
          <button @click="addCart" class="specpanel-doneBtn">选好了</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data(){
    return{
      spicyData:["不辣","微辣","中辣","重辣","特辣"],
      flavorData:["孜然","椒盐","黑胡椒","甘梅","原味"],
      spicy:0,
      flavor:0
    }
  },
  props:["sfData"],
  created(){
    this.spicy = this.sfData[0];
    this.flavor = this.sfData[1];
  },
  computed: {
    ...mapState({
      info: state => state.ele.info,
      maskState: state => state.ele.maskState,
      maskId: state => state.ele.maskId
    })
  },
  methods:{
    ...mapMutations({
      saveMaskSate: 'saveMaskSate',
      saveInfoState : 'saveInfoState',
      saveMaskId: 'saveMaskId'
    }),
    _hidden(){
      this.saveMaskSate(false);
      this.saveInfoState(false);
    },
    selectSpicy(n,i){
      if( n == 0 ){
        this.spicy = i
      }else{
        this.flavor = i
      }
    },
    addCart(){
      this.spicy = 0;
      this.flavor = 0;
      this.$emit("toPopup",{n:this.spicy,i:this.flavor});
    }
  },
}
</script>

<style lang="scss" scoped>
.ele_popup{
  // 显示隐藏
  .show_none{
    display: none;
  }
  
  // 商品详情弹出框
  .foodpanel{
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index:10;

      .foodpanel-close{
        width: .746667rem;
        width: 7.466667vw;
        height: .746667rem;
        height: 7.466667vw;
        border-radius: 50%;
        background-color: rgba(0,0,0,.2);
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: absolute;
        z-index: 1;
        top: .213333rem;
        top: 2.133333vw;
        right: .4rem;
        right: 4vw;
      }

      .foodpanel-body {
        position: relative;
        background-color: #fff;
        -webkit-flex-direction: column;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        padding-bottom: 2rem;
        padding-bottom: 20vw;
      } 

      .foodpanel-foodimg {
        width: 100%;
        height: 10rem;
        height: 100vw;
        display: block;
        img{
          height: 100%;
          width: 100%;
        }
      }

      .food-info {
        position: relative;
        padding: .4rem .4rem 0;
        padding: 4vw 4vw 0;
        width: 100%;
        min-height: 2.933333rem;
        min-height: 29.333333vw;

          .pb{
            position: absolute;
            right: 10vw;
            bottom: 1vw;
            width: 8vw;
            height: 8vw;

            .mint-palette-button {
              border-radius: 50%;
              width: 100%;
              height: 100%;
              line-height: 7vw;
            }
          }
        .food-name {
          position: relative;
          display: -webkit-flex;
          display: flex;
          -webkit-align-items: center;
          align-items: center;
          margin-bottom: .24rem;
          margin-bottom: 2.4vw;

          .fn-content {
            font-size: 5.333vw;
            font-weight: 700;
            width: 7.466667rem;
            width: 74.666667vw;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }

        .food-sales {
          font-size: 2.93333vw;
          color: #666;
          line-height: 1;
          margin-bottom: .24rem;
          margin-bottom: 2.4vw;
        }

        .food-price {
          display: -webkit-flex;
          display: flex;
          -webkit-align-items: center;
          align-items: center;
          margin-bottom: .24rem;
          margin-bottom: 2.4vw;

          .fp-salesInfo {
            margin-right: .133333rem;
            margin-right: 1.333333vw;
            font-size: .4rem;
            line-height: .426667rem;
            line-height: 4.266667vw;
            color: #ff5339;
            padding-bottom: .093333rem;
            padding-bottom: .933333vw;
            display: -webkit-flex;
            display: flex;
            -webkit-align-items: baseline;
            align-items: baseline;

            .fp-salesInfo-o {
              font-size: .32rem;
              color: #999;
              margin-left: .16rem;
              margin-left: 1.6vw;
            }
          }

          .food-bottom {
            display: -webkit-flex;
            display: flex;
            font-size: .293333rem;
            color: #666;
            margin-top: .266667rem;
            margin-top: 2.666667vw;
            -webkit-align-items: center;
            align-items: center;
            line-height: .293333rem;
            line-height: 2.933333vw;
            height: .293333rem;
            height: 2.933333vw;
          }

          .fp-activity {
            display: -webkit-flex;
            display: flex;
            overflow: hidden;

            .fp-common {
              display: -webkit-flex;
              display: flex;

              span {
                height: .4rem;
                height: 4vw;
                padding: 0 .08rem;
                padding: 0 .8vw;
              }
              .mini-tag {
                position: relative;
                font-size: .266667rem;
                color: transparent;
                white-space: nowrap;

                .end {
                  border-radius: .026667rem;
                  border-radius: .266667vw;
                  border: .026667rem solid hsla(8,79%,62%,.3);
                  border: .266667vw solid hsla(8,79%,62%,.3);
                  color: #eb6551;
                }
              }
            }
          }

          .fp-cartBtn {
            position: absolute;
            right: .4rem;
            right: 4vw;
          }
        }

        .food-desc {
          font-size: .293333rem;
          color: #666;
          line-height: .373333rem;
          line-height: 3.733333vw;
        }
        .food-priceDesc {
          display: -webkit-flex;
          display: flex;
          font-size: .293333rem;
          color: #666;
          margin-top: .266667rem;
          margin-top: 2.666667vw;
          -webkit-align-items: center;
          align-items: center;
          line-height: .293333rem;
          line-height: 2.933333vw;
          height: .293333rem;
          height: 2.933333vw;
        }
      }
  }

  // 点餐弹出框
  .order{
    // 遮罩层
    .mask{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,.4);
        z-index: 12;
    }
    .popup{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 14.666667rem;
      height: 146.666667vw;
      z-index: 14;
      background: #fff;
      .cont{
        position: relative;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: column;
        flex-direction: column;
        padding: .426667rem;
        padding: 4.266667vw;
        height: 100%;
        .x_out{
          display: block;
          position: absolute;
          top: .4rem;
          top: 4vw;
          right: .4rem;
          right: 4vw;
          width: .466667rem;
          width: 4.666667vw;
          height: .466667rem;
          height: 4.666667vw;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAvCAYAAAClgknJAAAAAXNSR0IArs4c6QAAAspJREFUaAXNmU9q20AUhy01Bu9LV4VAu88mJ4jpHbxJqcBgnyAkNwgk5AQ2GFRaKD5CoDgnyCYHKBS6Ctkb7Ep5PzHPSBNppNE8/dFmNKPJzPfNPCtv7MFAu1ar1YflcvlJa+68Ciaw6SB+ugEddrvd7yiKHvokARYwgU2X8FiA4al+otr++r5/NpvN/nCfLkqGp7mP1fxPw+Hwy3Q6fUY92YHNZnO03+/vqc7weHbc9U7Qon4GA1gApK4TsK7X63eoJwLj8XhP93ee5/1XnbjoTAIrTyGzIZA0/EAx3k0mk4T1EEIgXiwW51SEcRwndmhTV6vhlBM2CYaCD+bz+U8GywigsWsJG3jwvhHoUsIWvlCgC4k68EaBNiXqwpcKtCHhAl9JoEkJV/jKAk1ISMBbCUhKSMFbC0hISMLXEnCRkIavLVBHogl4JwEbiabgnQWqSKBPTkrMWWUmMUNf2ys3F7IdxJAA/lNjfUyPmZdVpp/b3IsIYEKDRIZHEh4DiwlgsDIJaXjMmTnUo8HlwkGDDkMXBBrnjEOP4ov0YSSnj3WT6A4UvW1SVOInOzGBCvDsISohImCAjxS1HqpiEs4CRfD8gVUCjX1R4CRQBs8fWMPbyXkn9K3lOC0tq8JjICUS0C2HFI/v/L1TLYEieAWYmx5AgsLqm7SEdQiZ4AHIYcNLrJcIJ/p/8J3a9cWrFU5WAq7wLCMpUVlACl5aopKANLykRKlAU/BSEkaBpuElJAoF2oJ3lcgVaBueJWjer3T8DKle+RX7RsAE7/t+QL+Z/eAJmyhtJTICXcPzgthIHAT6Am8rkQj0Dd5GwgvD8P12u32kP8r8Gkj1qI2YZ9ii0hROo9Ho1A+C4IWSsF/aAL2ABxNeGlhIus2k4mBO2BmcEqwbyhIv0bEPK89cXKZ3guBvKeu94meHkiSu0fHQ0LMbsIGxZ1huOK8fLej3ale6/wAAAABJRU5ErkJggg==) no-repeat;
          background-size: cover;
        }
        .head{
          padding-bottom: .533333rem;
          padding-bottom: 5.333333vw;
          display: -webkit-flex;
          display: flex;
          img{
            height: 25.333333vw
          }
          .info{
            padding-left: .266667rem;
            padding-left: 2.666667vw;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-direction: column;
            flex-direction: column;
          }
          .name {
            color: #333;
            font-size: 4.53333vw;
            font-weight: 700;
            max-width: 53.333333vw;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 2.133333vw;
          }
          .total{
            -webkit-flex: 1;
            flex: 1;
            color: #666;
            font-size: 2.9vw;
          }
          .price {
            font-size: 6.4vw;
            color: #2396ff;
            font-weight: 500;
          }
        }
        .body {
          -webkit-flex: 1;
          flex: .9;
          // overflow-y: scroll;
          // overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          .colTitle{
            color: #666;
            font-size: 3.73333vw;
            margin-bottom: 3.2vw;
          }
          .colBody {
            display: -webkit-flex;
            display: flex;
            -webkit-flex-wrap: wrap;
            flex-wrap: wrap;
            margin: 0 -2.4vw;
            .panel-item {
              display: inline-block;
              min-width: 2.173333rem;
              min-width: 21.733333vw;
              padding: 0 .266667rem;
              padding: 0 2.666667vw;
              min-height: .853333rem;
              min-height: 8.533333vw;
              border-radius: .053333rem;
              border-radius: .533333vw;
              background-color: #f5f5f5;
              color: #333;
              font-size: 3.46667vw;
              text-align: center;
              margin: 0 .213333rem .32rem;
              margin: 0 2.133333vw 3.2vw;
              line-height: .853333rem;
              line-height: 8.533333vw;
            }
            .panel_item_active{
              color: rgb(35, 149, 255);
              background-color: rgba(35, 149, 255, 0.2);
            }
          }
        }      
        .specpanel-doneBtn{
          width: 100%;
          height: 1.066667rem;
          height: 10.666667vw;
          color: #fff;
          font-size: .426667rem;
          font-weight: 700;
          border-radius: .053333rem;
          border-radius: 1.533333vw;
          background-color: #2396ff;
          background-color: rgb(35, 149, 255);
        }
      }
    }
  }
}
</style>