// index.js
import {request} from "../../request/index";
// 获取应用实例
const app = getApp()
Page({
  data: {
    swiperPic:[],
    navPic:[],
    floorPic:[]
  },
  onLoad() {
    this.getSwiperPic();
    this.getNav();
    this.getFloorPic();
  },
  getSwiperPic(){
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'
    }).then((res)=>{
      // console.log(res);
      this.setData({
        swiperPic:res.data.message
      })
    })
  },
  getNav(){
    request({
      url:'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'
    }).then(res=>{
      // console.log(res);
      this.setData({
        navPic:res.data.message
      })
    })
  },
  getFloorPic(){
    request({
      url:'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'
    }).then(res=>{
      // console.log(res);
      this.setData({
        floorPic:res.data.message
      })
    })
  }
})
