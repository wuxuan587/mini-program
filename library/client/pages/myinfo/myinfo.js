Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    tel: null,
    department: '',
    order_date: "2018-01-01",
    start_time: "09:00",
    end_time: "10:00",
    find_list:[]
  },


  bindTimeChange1_delete: function (e) {
    console.log(e.detail.value);
    this.setData({
      start_time: e.detail.value
    });
  },

  bindnamechange_delete: function (e) {
    console.log(e.detail.value);
    this.setData({
      name: e.detail.value
    });
  },

  bindDateChange_delete: function (e) {
    console.log(e.detail.value);
    this.setData({
      order_date: e.detail.value
    });
  },

  find_room: function () {
    var that = this;
    wx.request({
      url: 'https://wuxuan.xyz/wxapp/find_room/',
      method: 'GET',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: { name: that.data.name,  order_date: that.data.order_date, start_time: that.data.start_time },
      success: function (res) {
        console.log(res)
        that.setData({
          find_list: res.data.data
        });
      }
    })
  },

  delete_room: function () {
    var that = this;
    wx.request({
      url: 'https://wuxuan.xyz/wxapp/delete_room/',
      method: 'GET',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: { name: that.data.name, order_date: that.data.order_date, start_time: that.data.start_time },
      success: function (res) {
        console.log(res)
        wx.showToast({
          title: "删除成功",
          duration: 2000,
          icon: "success",
        })
      }
    })
  },

  quit: function () {
    var that = this;
    wx.showModal({
      title: 'Quit',
      content: '请确定是否要退出！',
      success:function(res){
        if(res.confirm){
          console.log('用户点击确定')
          wx.request({
            url: 'https://wuxuan.xyz/wxapp/quit_page/',
            method: 'GET',
            header: { 'content-type': 'application/x-www-form-urlencoded' },
            success: function (res) {
              console.log(res)
              wx.reLaunch({
                url: '../login/login',
              })
            }
          })
        }
      }
    })
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