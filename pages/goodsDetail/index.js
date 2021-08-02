// pages/goodsDetail/index.js
import {request} from '../../request/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsid:'',
    goodsDetailArr:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log(getCurrentPages());
    const pageinfo = getCurrentPages();
    const goodsid = pageinfo[pageinfo.length - 1].options.goodsId;
    // console.log(goodsid);
    this.setData({
      goodsid:goodsid
    })
    this.getGoodsDetail();
  },
  getGoodsDetail(){
    request({
      url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id='+this.data.goodsid
    }).then(res=>{
      // console.log(res);
      this.setData({
        goodsDetailArr:res.data.message
      })
    })
  }
})