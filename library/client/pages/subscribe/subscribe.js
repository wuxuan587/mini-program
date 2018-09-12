var util = require('../../utils/util.js');  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    tel:null,
    department:'',
    order_date: "2018-01-01",
    start_time: "09:00",
    end_time: "10:00",
    imageSrc4:"../../image/order_page.jpg"
  },

  bindDateChange: function (e) {
    console.log(e.detail.value);
    this.setData({
      order_date: e.detail.value
    });
  },

  bindTimeChange1: function (e) {
    console.log(e.detail.value);
    this.setData({
      start_time: e.detail.value
    });
  },

  bindTimeChange2: function (e) {
    console.log(e.detail.value);
    this.setData({
      end_time: e.detail.value
    });
  },

  bindnamechange:function(e){
    console.log(e.detail.value);
    this.setData({
      name:e.detail.value
    });
  },

  bindtelchange: function (e) {
    console.log(e.detail.value);
    this.setData({
      tel: e.detail.value
    });
  },

  binddepartmentchange: function (e) {
    console.log(e.detail.value);
    this.setData({
      department: e.detail.value
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: "加载中...",
      icon:"loading",
      duration:700
    });
    var time = util.formatTime(new Date()); 
    this.setData({
      order_date: time
    }); 
  },
  
  order_room:function(){
    var that = this;
    wx.request({
      url: 'https://wuxuan.xyz/wxapp/order_room/',
      method: 'GET',
      header:{'content-type':'application/x-www-form-urlencoded'},
      data: { name:that.data.name,tel:that.data.tel,department:that.data.department,order_date:that.data.order_date,start_time:that.data.start_time,end_time:that.data.end_time},
      success: function (res) {
        console.log(res.data.message)
        //console.log(res.data.data)
          if (res.data.message=='successful' ){
             wx.showToast({
               title: "预约成功",
               duration: 2000,
               icon: "success",
             })
          }
          else{
             wx.showToast({
               title:"此时段已被预约",
               duration:3000,
               icon:"loading"
                })
              }
      }
    })
  },

  order_reset:function(){
    this.setData({
      name: '',
      tel: '',
      department: '',
      order_date: "2018-01-01",
      start_time: "09:00",
      end_time: "10:00",
    });
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})