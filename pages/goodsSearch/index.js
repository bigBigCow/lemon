// pages/goodsSearch/index.js
import {request} from '../../request/index';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  timeId:null,
  searchGo(e){
    const val = (e.detail.value).trim();
    clearInterval(this.timeId);
    this.timeId = setTimeout(()=>{
        request({
        url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/qsearch',
        data:{
          query:val
        }
      }).then(res=>{
        console.log(res);
        this.setData({
          searchArr:res.data.message
        });
      });
    },1000);
  }
})