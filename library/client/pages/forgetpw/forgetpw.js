Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password1: "",
    password2: "",
    email: "",
  },

  bindregisteruserchange: function (e) {
    console.log(e.detail.value);
      this.setData({
        username: e.detail.value
      });
  },

  bindregisterpd1change: function (e) {
    console.log(e.detail.value);
    if (e.detail.value.length > 5 && e.detail.value.length < 19) {
      this.setData({
        password1: e.detail.value
      });
    }
    else {
      wx.showModal({
        title: 'Error',
        content: '密码的长度为6-18位',
      })
    }
  },

  bindregisterpd2change: function (e) {
    console.log(e.detail.value);
    this.setData({
      password2: e.detail.value
    });
    if (this.data.password2 == this.data.password1) {
      wx.showToast({
        title: "密码设置正确",
        duration: 1000,
        icon: "loading"
      })
    }
    else {
      wx.showToast({
        title: "密码设置有误  ",
        duration: 3000,
        icon: "loading"
      })
    }
  },


  bindemailchange: function (e) {
    console.log(e.detail.value);
    this.setData({
      email: e.detail.value
    });
  },

  submit_key: function () {
    var that = this;
    wx.request({
      url: 'https://wuxuan.xyz/wxapp/modify_password/',
      method: 'GET',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: { username: that.data.username, email: that.data.email, password1: that.data.password1, password2: that.data.password2 },
      success: function (res) {
        console.log(res.data.message)
        if (res.data.message == 'success') {
          wx.showToast({
            title: "密码重置成功",
            duration: 3000,
            icon: "success",
          })
        }
        else {
          if (res.data.message == 'failed') {
            wx.showModal({
              title: 'Error',
              content: '用户名或邮箱输入有误',
            })
          }
            else {
            wx.showModal({
              title: 'Error',
              content: '两次新密码输入不一致',
            })
          }
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