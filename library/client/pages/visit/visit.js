var util = require('../../utils/util.js');  

Page({

  /**
   * 页面的初始数据
   */
  data: {
    query_list: [],
  },

  selectDateChange: function (e) {
    console.log(e.detail.value);
    this.setData({
      order_date: e.detail.value
    });
  },

  query_room: function () {
    var that = this;
    wx.request({
      url: 'https://wuxuan.xyz/wxapp/query_room_date/',
      method: 'GET',
      header: { 'content-type': 'application/json' },
      data: { order_date: that.data.order_date },
      success: function (res) {
        console.log(res.data)
        that.setData({
          query_list: res.data.data
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatTime(new Date());
    this.setData({
      order_date: time
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