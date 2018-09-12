Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc3:"../../image/timg.jpg",
    comment:''
  },
  
  bindcommentchange: function (e) {
    console.log(e.detail.value);
    this.setData({
      comment: e.detail.value
    });
  },

  tijiaopinglun: function () {
    var that = this;
    wx.request({
      url: 'https://wuxuan.xyz/wxapp/make_comment/',
      method: 'GET',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: { comment: that.data.comment },
      success: function (res) {
        console.log(res.data)
        wx.showToast({
          title: "评论成功",
          duration: 2000,
          icon: "success",
        })
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