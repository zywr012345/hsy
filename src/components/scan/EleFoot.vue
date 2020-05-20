<template>
  <div class="ele_foot">
    <div :class="{display:!cartHas}" class="more">
      <span>已满足起送价</span>
    </div>
    <!-- 顶部列表 -->
    <div :class="{display:!cartInfo}" class="cart_info">
      <div class="remove_cart">
        <span>购物车</span>
        <!-- <span class="f_right">清空购物车</span> -->
        <mt-button @click="removeCart" class="f_right">清空购物车</mt-button>
      </div>
      <div class="cart_ul">
        <div class="cart_li" v-for="i in 5" :key="i">
          <div class="c_l_left">
            <div class="li_title">
              <div class="name">清炒菜花</div>
              <div class="name_i">(约500克)</div>
            </div>
            <div class="li_price">¥28</div>
          </div>
          <div class="c_l_right">
            <div class="c_l_info">
              <div @click="selectFood(0,i)" class="two_btn">-</div>
              <span>2</span>
              <div @click="selectFood(1,i)" class="two_btn btn_add">+</div>
            </div>
          </div>
        </div>
        <!-- 包装费 -->
        <div class="cart_ul">
          <div class="cart_li">
            <div class="c_l_left">
              <div class="li_title">
                <div class="name">包装费</div>
              </div>
              <div class="li_price">¥28</div>
            </div>
          <div class="c_l_right">
          </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部固定框 -->
    <div class="mask">
      <div @click="lookCart" :class="{cart_has:cartHas}" data-name="购物车" class="cartImg">
        <div class="cartNumber">1</div>
      </div>
      <div class="mask_price">
        <div class="p_top">
          <span>
            <span class="Mz9i44XAAg-3UjwIb6vV7">¥</span>
            {{30}}
          </span>
        </div>
        <span class="p_bottom">另需配送费¥4</span>
      </div>
      <div @click="cartHas=!cartHas" :class="{to_pay:cartHas}" class="full">{{'去结算'}}</div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      cartHas:true,//购物车是否有物品
      cartInfo:false,//购物车列表展示
    }
  },
  methods:{
    // 菜品数量
    selectFood(type,id){
      if(type == 0){
        console.log(id,"减去一");
        this.utils.save("foodCart",120);
        console.log(this.utils.fetch("foodCart"));
      }else{
        console.log(id,"加上一");
      }
    },
    // 查看购物车列表
    lookCart(){
      this.cartInfo = !this.cartInfo;
      console.log("查看购物车列表");
    },
    // 清空购物车
    removeCart(){
      this.cartHas = !this.cartHas;
      this.cartInfo = !this.cartInfo;
      console.log("清空购物车车");
    }
  }
}
</script>

<style lang="scss" scoped>
.ele_foot{
  background: #fff;
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
  bottom: constant(safe-area-inset-bottom);
  bottom: env(safe-area-inset-bottom);
  left: constant(safe-area-inset-left);
  right: env(safe-area-inset-right);

  div.display{
    display: none;
  }
  .cart_info{
    .remove_cart{
      line-height: 6vw;
      height: 6vw;
      background: #F4F4F4;
      padding: 2vw 3vw;
      font-size: 3vw;

      .f_right{
        float: right;
        line-height: 6vw;
        height: 6vw;
        font-size: 3vw;
      }
    }

    .cart_ul{
      max-height: 75vw;
      overflow: auto;
      -webkit-overflow-scrolling: touch;

      .cart_li{
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 2vw 0;
        font-size: 5vw;
        color: #333;
        border-bottom: 1px solid #E4E4E4;
        margin: 0 2vw;

        .c_l_left{
          max-width: 70vw;
          -webkit-flex: 1 1 auto;
          -ms-flex: 1 1 auto;
          flex: 1 1 auto;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;

          .li_title{
            -webkit-flex: 1 1 auto;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            min-width: 0;

            .name{
              -webkit-flex: 1 1 auto;
              -ms-flex: 1 1 auto;
              flex: 1 1 auto;
              word-wrap: break-word;
            }
            .name_i{
              margin-top: 4px;
              font-size: 12px;
              color: #999;
            }
          }

          .li_price{
            margin-right: 15vw;
            -webkit-flex-shrink: 0;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            color: #FB4E44;
          }
        }
        .c_l_right{
          min-width: 26vw ;
          .c_l_info{
            -webkit-flex-shrink: 0;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            margin-left: -2vw;
            float: right;
            font-size: 6vw;
            display: -webkit-inline-flex;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            span{
              text-align: center;
              color: #333333;
              padding: 0 .2vw;
              font-size: 7vw;
            }
            .two_btn{
              width:7vw ;
              height: 7vw;
              color: #666;
              border-radius: 50%;
              text-align: center;
              line-height: 7vw;
              background: #F4F4F4;
              border: .3vw solid #666;
              font-size: 7vw;
              margin: 0 2vw;
            }
            .btn_add{
              background: #f8c74e;
            }
          }
        }
      }
    }
  }
  
  .more{
    background: #fff1d0;
    text-align: center;
    height: 25px;
    line-height: 25px;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    letter-spacing: 0.15px;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 11px;
    // position: absolute;
    // left: 0;
    // right: 0;
    // bottom: 16vw;
  }

  .mask {
    z-index: 2;
    position: relative;
    background: #3b3b3c;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #999;
    height: 16vw;

    .cartImg {
      width: 13vw;
      height: 13vw;
      background: #333;
      border-radius: 50%;
      position: relative;
      top: -10px;
      margin: 0 3vw;
      background: url('./../../assets/image/home/home-index-menu1.png');
      background-size: contain;
      background-repeat: no-repeat;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;

      .cartNumber {
        width: 10vw;
        height: 10vw;
        position: absolute;
        font-size: 8vw;
        right: 0;
        border: 1px solid red;
        top: 0;
        line-height: 10vw;
        color: #fff;
        background-color: #FB4E44;
        -webkit-transform: scale(0.5) translate(50%, -50%);
        transform: scale(0.5) translate(50%, -50%);
        border-radius: 50%;
        text-align: center;
      }
    }
    .cart_has{
      background:url('./../../assets/image/home/home-index-menu2.png');
      background-size: contain;
      background-repeat: no-repeat;
    }

    .mask_price {
      -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      .p_top{
        span{
          font-size: 6vw;
          color: #fff;
          margin-right: 1vw;
          span{
            font-size: 5vw;
            display: inline-block;
            width: 1vw;
          }
        }
      }
      .p_bottom{
        font-size: 4vw;
      }
    }

    .full{
      color: #999;
      font-size: 6vw;
      height: 16vw;
      line-height: 16vw;
      padding: 0 30px;
      position: relative;
    }
    div.to_pay{
      background: #f8c74e;
      background-image: linear-gradient(-135deg, #FFBD27 0%, #FFD161 100%);
      color:#fff;      
    }
  }
}
</style>