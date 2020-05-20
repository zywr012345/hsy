import { requestApisy } from '../util/network'

// 获取用户token
export const getYsToken =
() =>{
  return new Promise(
    function(door,err){
      requestApisy(
          'https://open.ys7.com/api/lapp/token/get',
          'POST',
          {
            "appKey": 'f082216a4fbc44b191a13575d482a50f',
            "appSecret": 'f78b9e66c41a03ce894e1dd5b3abe710'
          }
      ).then(res=>{ door(res) })
      .catch(error=>{err(error)})
    }
  )
}
// 获取序列号
export const getYsdeviceSerial =
(res) =>
requestApisy(
  'https://open.ys7.com/api/lapp/live/video/list',
  'POST',
  {
    "accessToken": res.data.accessToken
  }
)

// 
export const getYsClose =
(accessToken,deviceSerial) =>
requestApisy(
  'https://open.ys7.com/api/lapp/live/video/close',
  'POST',
  {
    "accessToken": accessToken,
    "source":source
  }
)
  
