Page({
  data: {
    textdata: "put value",

  },
  RequestData: function () {
    var that = this;
    wx.request({
      data: {},
      url: 'https://dfacyhf4.qcloud.la/weapp/demo',
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        that.setData({ textdata: res.data });
        console.log(res.data);
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
})