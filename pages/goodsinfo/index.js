// pages/goodsinfo/index.js
import {request} from '../../request/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabArr:[
      {
        name:'综合',
        flag:0,
        isActive:true
      },
      {
        name:'销量',
        flag:1,
        isActive:false
      },
      {
        name:'价格',
        flag:2,
        isActive:false
      }
    ],
    isFlag:0,
    goodsArr:[],
    pagenum:1,
    pagetotal:1
  },
  cid:0,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    this.cid = options.cid;
    this.getGoodsInfo();
  },
  getGoodsInfo(){
    // console.log(this.cid);
    request({
      url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/search?pagenum=1&pagesize=10&cid='+this.cid
    }).then(res=>{
      // console.log(res);
      const pageTotal = Math.ceil(res.data.message.total/10);
      this.setData({
        goodsArr:res.data.message.goods,
        pagetotal:pageTotal
      })
      // console.log(this.data.pagetotal);
    })
  },
  tabClick(e){
    // console.log(e);
    this.setData({
      isFlag:e.currentTarget.dataset.flag
    })
  },
  onReachBottom(){
    // console.log(111);
   if(this.data.pagetotal > this.data.pagenum){
    this.setData({
      pagenum:++this.data.pagenum
    });
    request({
      url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/search?pagenum='+this.data.pagenum+'&pagesize=10&cid='+this.cid
    }).then(res=>{
      // console.log(res.data.message.goods);
      this.setData({
        goodsArr:(this.data.goodsArr).concat(res.data.message.goods)
      })
    });  
   }else{
     wx.showToast({
       title: '没有了哦',
     });
     return
   }
  }
})