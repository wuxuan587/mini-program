Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc1: "../../image/Entrance1.jpg",
    username:null,
    password:null,
  },

  binduserchange: function (e) {
    console.log(e.detail.value);
    this.setData({
      username: e.detail.value
    });
  },

  bindpasswordchange: function (e) {
    console.log(e.detail.value);
    this.setData({
      password: e.detail.value
    });
  },

  reset_key: function () {
    this.setData({
      username:"",
      password:"",
    });
  },

  login_key: function () {
    var that = this;
    wx.request({
      url: 'https://wuxuan.xyz/wxapp/login_page/',
      method: 'GET',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: { username: that.data.username, password: that.data.password},
      success: function (res) {
        console.log(res.data.message)
        if (res.data.message == 'success') {
          wx.showToast({
            title: "登录成功",
            icon:"success",
            duration:1000,
          })
          wx.switchTab({
            url: '../firstpage/firstpage',
          })
        }
        else {
          wx.showToast({
            title: "账号或密码有误",
            duration: 3000,
            icon: "loading"
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