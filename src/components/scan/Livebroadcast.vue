<template>
  <div class="live">
    <div class="top_btn_content">
      <!-- 返回按钮 -->
      <mt-button
        @click="comeBack" 
        class="btn_back"
        type="primary">
        返回
      </mt-button>
      <!-- 右侧线路按钮 -->
      <div class="line_content">
        <mt-button
          class="right_btn"
          @click="savePlayer(v.liveAddress)"
          v-for="(v,i) in playerArr"
          :key="i"
          type="primary">
          路线{{i+1}}
        </mt-button>      
      </div>
    </div>
    <!-- 萤石直播 start -->
  　<div class="mainClass">
      <!-- <span @click="comeBack" class="mint-button-icon divBack"><i class="mintui mintui-back"></i></span> -->
      <video id="myPlayer"
        poster="../../assets/image/home/default_image_banner.png"
        muted controls playsinline webkit-playsinline autoplay
        webkit-playersinline="true" x5-playsinline="x5-playsinline"
      >
      </video>
    </div>    
    <!-- 萤石直播 end -->
    <div class="infocontent">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">资质证件</mt-tab-item>
        <mt-tab-item id="2">营业执照</mt-tab-item>
        <mt-tab-item id="3">健康信息</mt-tab-item>
        <!-- <mt-tab-item id="4">用户评价</mt-tab-item> -->
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <span>资质证件</span>
          <ul>
            <li v-for="v in 3" :key="v">
              <div class="top_title">
                <div class="left_icon">证</div>
                <span>资质证件</span>
              </div>
              <div class="img_show">
                <img src="../../assets/image/home/default_image_banner.png" alt="">
                <img src="../../assets/image/home/default_image_banner.png" alt="">
              </div>
            </li>
          </ul>
          <!-- <mt-cell v-for="n in 10" :key="n" :title="'内容 ' + n" /> -->
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <ul>
            <li v-for="v in 3" :key="v">
              <div class="top_title">
                <div class="left_icon">营</div>
                <span>资质证件</span>
              </div>
              <div class="img_show">
                <img src="../../assets/image/home/default_image_banner.png" alt="">
                <img src="../../assets/image/home/default_image_banner.png" alt="">
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <ul>
            <li v-for="v in 3" :key="v">
              <div class="top_title">
                <div class="left_icon">健</div>
                <span>资质证件</span>
              </div>
              <div class="img_show">
                <img src="../../assets/image/home/default_image_banner.png" alt="">
                <img src="../../assets/image/home/default_image_banner.png" alt="">
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
        <!-- <mt-tab-container-item id="4">
          <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
        </mt-tab-container-item> -->
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import Hls from "hls.js/dist/hls.js";
import { getYsToken,getYsdeviceSerial } from '../../api/ys7.js'
// console.log(getYsToken,getYsdeviceSerial);
export default {
  name: 'Livebroadcast',
  data () {
    return {  
      player:"",
      playerArr:[],
      selected:"1",
    }
  },
  created(){        
    this.ysVideo();
  },
  methods: {
    // 返回
    comeBack(){
      console.log("返回到上一级");
    },
    savePlayer(val){
      this.player = val;
      this._videoPlay();
    },
    _videoPlay(){      
      if(Hls.isSupported()) {
          var video = document.getElementById('myPlayer');
          var hls = new Hls();
          hls.loadSource(this.player);
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED,function() {
            video.play();
          });
      }
    },
    // 直播地址播放
    ysVideo(){
      getYsToken().then(getYsdeviceSerial).then(res=>{
        this.playerArr = res.data;
        // console.log(this.playerArr[0]);
        this.player = this.playerArr[0].liveAddress;
        this._videoPlay();
      }).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.top_btn_content{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  // 返回按钮
  .btn_back{    
    margin: 2vw 2vw;
    width: 20vw;
    font-size: 3vw;
    height: 7vw;
    background-color: #26a1ff !important;
    color: #555;
  }
  // 右侧线路切换按钮
  .line_content{
    width: 72vw;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .right_btn{
      margin: 2vw 2vw;
      width: 20vw;
      font-size: 3vw;
      height: 7vw;
      background-color: #26a2ff !important;
    }
  }

}
.divBack{
  vertical-align: middle;
  display: inline-block;
  position: absolute;
  left: 2vw;
  top: 2vw;
  z-index: 100;
  opacity: 0.8;
  background: #666;
  width: 6vw;
  height: 6vw;
  text-align: center;
  line-height: 6vw;
  border-radius: 50%;
}
.mainClass{
  width: 100%;
  position: relative;
  video{
    width: 100%;
  }
}
.infocontent{
  .mint-navbar .mint-tab-item{
    color:#666;
  }
  .mint-navbar .mint-tab-item.is-selected[data-v-1bf90638] {
    border-bottom: 0.2rem solid greenyellow;
    font-weight: 500;
    color:#000
  }
  .mint-tab-container-item {
    padding: 1rem;
    font-size: .7rem;
    color:#000;
    li{
      margin:1rem 0;
      .top_title{
        height:1rem;
        color:#666;
        .left_icon{
          width:1rem;
          height:100%;
          float: left;
          border:1px solid #666;
          border-radius: 50%;
          text-align: center;
        }
        span{
          margin-left: 0.5rem;
        }
      }
      .img_show{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin:1rem 1.5rem;
        img{
          width: 4.5rem;
          height: 3rem;
        }
        img:last-child{
          margin-left: 1rem;
        }
      }
    }
  }
}
</style>