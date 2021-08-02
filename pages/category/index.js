// pages/category/index.js
import {request} from '../../request/index';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryArray:[],
    categoryRightArr:[],
    istop:0,
    // nowTime:0
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
    const newTime = Date.now();
    const oldTime = wx.getStorageSync('oldTime');
    const categoryArraySnyc = wx.getStorageSync('categoryArray');
    if(!categoryArraySnyc){
      this.getcategoryinfo();
    }else{
      if(newTime - oldTime < 1000*30){
        this.setData({
          categoryArray:categoryArraySnyc,
          categoryRightArr:categoryArraySnyc[0]
        })
      }else{
        this.getcategoryinfo();
      }
    }
  },
  getcategoryinfo(){
    request({
      url:'https://api-hmugo-web.itheima.net/api/public/v1/categories'
    }).then(res=>{
      // console.log(res);
      this.setData({
        categoryArray:res.data.message,
        categoryRightArr:res.data.message[0]
      })
      wx.setStorageSync('categoryArray', res.data.message);
      const oldTime = Date.now();
      // console.log(oldTime);
      wx.setStorageSync('oldTime', oldTime);
    });
  },
  menuClick(e){
    // console.log(e);
    this.setData({
      categoryRightArr:this.data.categoryArray[e.currentTarget.dataset.menuindex],
      istop:0
    })
    console.log(this.data.categoryRightArr);
  }
})