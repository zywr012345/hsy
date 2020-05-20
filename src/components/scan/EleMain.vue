<template>
<div class="ele_main">
  <!-- 商家推荐 -->
  <div class="recommend">
    <p>商家推荐</p>
    <div class="content">
      <!-- 单个 start -->
      <div @click="add(i)" class="item" v-for="(v,i) in 5" :key="i">
        <div class="img">
          <img :src="imgUrl" alt="">
          <div class="text_content">
            <p class="">桥头排骨（小份）</p>
            <p class="">月售{{38+" "}}好评率{{100}}%</p>
            <div class="price">
              <p>
                <small>¥</small>{{17.8}}<!---->
              </p>
              <!-- 添加按钮 -->
              <div>
                <mt-palette-button content="+" direction="rt" class="pb" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;">
                  <div class="my-icon-button indexicon icon-popup"></div>
                </mt-palette-button>                      
              </div>
            </div>
          </div>                  
        </div>
      </div>
      <!-- 单个 end -->
    </div>
  </div>
  <!-- BScroll  -->
  <div class="eledemo">
    <main class="main_flex">
      <!-- 左侧导航 -->
      <div class="left_nav"  ref="menuWrapper">
        <ul>
          <li :class="{current: currentIndex === index}"  v-for="(item,index) in nav" :key="index" @click="selectMenu(index)">
            <img :src="item.url">
            <span>{{item.name+index}}</span>
          </li>
        </ul>
      </div>
      <!-- 右侧餐品 -->
      <section class="right_section" ref="foodsWrapper">
        <div>
          <dl v-for="(v,i) in 10" :key="i" class=" food-list-hook">
            <dt>
              <strong>热销{{i}}</strong>
              <span>大家喜欢吃，才叫真好吃</span>
            </dt>
            <dd class="dd_item">
              <ul>
                <li @click.stop="lookInfo(i)" v-for="(v,i) in 5" :key="i">
                    <img :src="meUrl" alt="桥头排骨（小份）" title="桥头排骨（小份）" data-spm-anchor-id="a2ogi.12117545.0.i3">
                    <section>
                      <p class="title">桥头排骨（小份）</p> 
                      <p class="white_nowrap">口味请备注：香辣，孜然，椒盐，甘梅，原味主要原料：猪肋排</p>
                      <p>
                        <span>月售{{obj.number}}份</span> 
                        <span>好评率{{100}}%</span>
                      </p>
                      <div class="red_biao">
                        <span>{{9}}折</span> 
                        <span>每单限{{1}}份优惠</span> 
                      </div>
                      <div class="price">
                        <span>￥{{14.9}}</span> <!----> 
                        <del class="salesInfo-originPrice_3GIqu_0">¥{{18.8}}</del>
                      </div>
                      <div @click.stop="add(v)" class="pb">
                          <mt-palette-button content="+"
                            direction="rt" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;">
                            <div class="my-icon-button indexicon icon-popup"></div>
                          </mt-palette-button>                      
                      </div>
                        <!-- <div style="height:85vw;font-size:23px">{{}}</div> -->
                    </section>
                </li>
              </ul>             
            </dd>
          </dl>
        </div>
      </section >
    </main>
  </div>
  
  <!-- 尾部购物车 -->
  <ele-foot/>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
import EleFoot from "./EleFoot";

export default {
  components:{
    EleFoot
  },
  name: 'IndexBanner',
  data(){
    return{
      imgUrl:"https://cube.elemecdn.com/4/15/214ad6e730c73d8c51e020f2d66aejpeg.jpeg?x-oss-process=image/resize,m_lfit,w_240/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
      nav:[
        {id:1,name:"买过",url:"https://cube.elemecdn.com/d/b7/5a248a885c94c389b5bbc5c8d876apng.png?x-oss-process=image/format,webp/resize,w_26"},
        {id:2,name:"热销",url:"https://cube.elemecdn.com/a/ba/732b4ca103b2521c872442d7e5d4epng.png?x-oss-process=image/format,webp/resize,w_26"},
        {id:3,name:"优惠",url:"https://cube.elemecdn.com/8/88/e071e24d045538c7a668d324f469dpng.png?x-oss-process=image/format,webp/resize,w_26"},
        {id:4,name:"买过",url:"https://cube.elemecdn.com/d/b7/5a248a885c94c389b5bbc5c8d876apng.png?x-oss-process=image/format,webp/resize,w_26"},
        {id:5,name:"热销",url:"https://cube.elemecdn.com/a/ba/732b4ca103b2521c872442d7e5d4epng.png?x-oss-process=image/format,webp/resize,w_26"},

        {id:6,name:"优惠",url:"https://cube.elemecdn.com/8/88/e071e24d045538c7a668d324f469dpng.png?x-oss-process=image/format,webp/resize,w_26"},
        {id:7,name:"买过",url:"https://cube.elemecdn.com/d/b7/5a248a885c94c389b5bbc5c8d876apng.png?x-oss-process=image/format,webp/resize,w_26"},
        {id:8,name:"热销",url:"https://cube.elemecdn.com/a/ba/732b4ca103b2521c872442d7e5d4epng.png?x-oss-process=image/format,webp/resize,w_26"},
        {id:9,name:"优惠",url:"https://cube.elemecdn.com/8/88/e071e24d045538c7a668d324f469dpng.png?x-oss-process=image/format,webp/resize,w_26"},
        {id:10,name:"优惠",url:"https://cube.elemecdn.com/8/88/e071e24d045538c7a668d324f469dpng.png?x-oss-process=image/format,webp/resize,w_26"},
      ],
      listHeight: [],
      scrollY: 0,
      nowShow:0
    }
  },
  mounted(){    
    //   这里用到一个定时器 等待数据渲染完毕 执行该方法 不然不能滑动 如果是真实数据 这两个方法放在this.$nextTick()里面
    //因为没有真实数据 只能用本地数据模拟下
    setTimeout(() => {
      this._initScroll()
      this._calculateHeight()
    }, 20)
  },
  computed: {
    ...mapState({
      maskState: state => state.ele.maskState,
      maskId: state => state.ele.maskId
    }),
    // 计算得到当前分类下标
    currentIndex () {
    //第一种写法 有点繁琐 不推荐
    //   for (let i = 0; i < this.listHeight.length; i++) {
    //     let height1 = this.listHeight[i]
    //     let height2 = this.listHeight[i + 1]
    //     if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
    //       return i
    //     }
    //   }
    //   return 0
        //  解构赋值 
      
    // 第二种写法已改进   根据条件计算 产生一个结果 findIndex查找满足条件的下标 没找到返回-1
      const index=this.listHeight.findIndex((item,index)=>{
        //   如果滚动的距离>=左侧列表当前的高度并且 小于下一项的高度 
          return this.scrollY>=item && this.scrollY<this.listHeight[index + 1]
      })
        return index
    },
  },
  props:{
    meUrl:{
      type:String,
      default:""
    },
    obj:{
      type:Object,
      default:{}
    }
  },
  methods:{
    //     设置两边列表可以滚动  内容区要比外层容器要高  列表先渲染 才可以滑动 
    _initScroll () {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        scrollY: true,
        click: true
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        scrollY: true,
        click: true,
        probeType: 3
      })
    //    右侧表绑定滑动监听 
      this.foodsScroll.on('scroll', (pos) => {
        //  获取每次滚动的值 绝对值
        this.scrollY = Math.abs(Math.round(pos.y))
      })
      //  右侧列表绑定滑动结束监听
      this.foodsScroll.on('scrollEnd', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
        // console.log(pos.y);
        // console.log(this.listHeight);
        // var nowIndex = pos.y*(-1);
        // this.listHeight.forEach((v,i)=>{
        //   if(v<nowIndex&&nowIndex<this.listHeight[i+1]){
        //     console.log(i);
        //     this.nowShow = i;
        //   }
        //   // console.log(v,i);
        // })
      })
    },
    
          
    _calculateHeight () {
        // 获取 所有左侧列表li  class 为 food-list-hook ul设置ref 
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')

          let height=0;
          this.listHeight.push(height)
      // 第一种写法 有点繁琐 不推荐 
        //  定义初始值 li可见高度为 0  
    //   let height = 0
    // //   初始值0 添加到listHeight数组
    //   this.listHeight.push(height)
    // //   循环遍历所有左侧列表 得到所有li可视区域高度 
    //   for (let i = 0; i < foodList.length; i++) {
    //     let item = foodList[i]
    //         // 高度+= 左侧列表当前项的可视高度
    //     height += item.clientHeight
    //     //  收集左侧列表所有li可见区域高度
    //     this.listHeight.push(height)
    //   }

        // 第二种写法以改进  伪数组转为真数组 并循环遍历
          Array.prototype.slice.call(foodList).forEach((i) =>{
               height += i.clientHeight
                 this.listHeight.push(height)
          })
    
    },
    //  点击左侧列表 右侧列表滑动到指定位置
    selectMenu (index) {
      this.nowShow = index;
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
      // console.log(foodList[index].offsetTop);
    //   scrollToElement可以滑动到指定位置
      this.foodsScroll.scrollToElement(foodList[index],300)
    //    第一个参数对应的食品列表 
    //  第二个参数为滑动 动画时长
    },
    ...mapMutations({
      saveInfoState: 'saveInfoState',
      saveMaskSate: 'saveMaskSate',
      saveMaskId: 'saveMaskId'
    }),
    lookInfo(id){
      this.saveInfoState(true);
      this.saveMaskId(id);
    },
    add(id){
      this.saveMaskSate(true);
      this.saveMaskId(id);
    },
  }
}
</script>

<style lang="scss" scoped>
.ele_main{
  // 商家推荐start
  .recommend{
    padding:0 4vw;
    p{
      font-size: 5vw;
    }
    .content{
      width: 98vw;
      margin: 0 auto;
      overflow-x: auto;
      margin-right: .266667rem;
      margin-right: 2.666667vw;
      display: flex;
      &::-webkit-scrollbar{ 
        display:none;
      }

      .img{
        img{
          display: block;
          width: 3.2rem;
          width: 32vw;
          height: 3.2rem;
          height: 32vw;
          border-top-left-radius: .08rem;
          border-top-left-radius: .8vw;
          border-top-right-radius: .08rem;
          border-top-right-radius: .8vw;
        }
      }
      .item{
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 3.2rem;
        width: 32vw;
        padding-bottom: .426667rem;
        padding-bottom: 4.266667vw;
        margin-right: 2vw;

        // 添加按钮
        .mint-palette-button {
          width: 6vw;
          height: 6vw;
          line-height: 6vw;
          font-size: 3vw;
          color:#fff;
        }
        .text_content{
          text-align: left;
          p{
            padding-left: 0;
            margin: 1vw 0;   
            color: #333;
            font-size: 3.73333vw;
          }
          p:nth-child(2){
            color: #999;
            font-size: 2.66667vw;
          }
          .price{
            position: relative;
            p{
              font-size: 5vw;
              color: #ff5339;
            }
            .pb{
              position: absolute;
              right: 1vw;
              top: 1vw;
            }

          }
        }
      }
    }
  }
  // 商家推荐end
  // 主要餐品
  .eledemo{  
    margin-bottom: 20vw;

    .main_flex{
      display: flex;
      padding-left: 1vw;
      // 左侧导航栏
      .left_nav{
        max-height:162vw;
        overflow-y: auto;
        height: 100%;
        background-color: #f8f8f8;
        // -webkit-overflow-scrolling: touch;
        // padding-bottom: 1.066667rem;
        // padding-bottom: 10.666667vw;    
        width: 2.053333rem;
        width: 20.533333vw;
        &::-webkit-scrollbar { width: 0 !important }
        li{
          position: relative;
          padding: .466667rem .2rem;
          padding: 4.666667vw 2vw;
          font-size: 3.2vw;
          color: #666;
          img{
            width: 3.466667vw;
            height: 3.466667vw;
            margin-right: .8vw;
          }
          span{
            font-size: 3.2vw;
          }
        }
      }
      // 右侧菜品
      .right_section{    
        overflow: hidden;
        max-height:162vw;
        margin-right: .133333rem;
        margin-right: 1.333333vw;
        font-weight: 700;
        font-size: 2.66667vw;
        color: #666;
        -webkit-flex: none;
        flex: none;
        width: 79vw;
        padding-left: 2vw;
        dl{
          &:last-child{
            height: 170vw;
            pointer-events: auto;
          }
        }
        dt{
          padding: 2vw 0;
          strong{
            font-size: 3.2vw;
            font-weight: 700;
          }
          span{
            margin-left: 2vw;
            color:#999;
          }
        }
        .dd_item{
          margin-bottom: 3vw;
          position: relative;
          font-size: 2.66667vw;
          color: #999;
          li{
            position: relative;
            display: flex;
            margin-bottom: 2vw;
            img{
              width:25.333333vw ; 
              height: 25.333333vw; 
            }
            section{
              padding-left: 2vw;
              .title{
                font-size: 4vw;
                color:#333;
                font-weight: 800;
              }
              .white_nowrap{
                white-space: nowrap;
                width: 42.666667vw;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin: 1.333333vw 0;
              }
              .red_biao{
                color: #f07373;
                font-size: 1.533333vw;
                span:first-child{
                  border-radius: .026667rem;
                  border-radius: .266667vw;
                  border: .026667rem solid hsla(8,79%,62%,.3);
                  border: .266667vw solid hsla(8,79%,62%,.3);
                  margin-right: 2vw;
                }
              }
              .price{
                color: rgb(255, 83, 57);
                font-size:4vw;
                del{
                  font-size:3.2vw;
                  color:#999;
                  margin-left: 2vw;
                }
              }
              
            }
          }
        }
        
                
      }

    }
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
    bottom: .8vw;
  }

  .current{
      position: relative;
      background: #fff;
      font-weight: 700;
      margin-top: -1px;
      color: aquamarine;
      z-index: 1;
  }
}
</style>