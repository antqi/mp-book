// pages/pop/pop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  getData() {
    const me = this

    wx.request({
      url: 'http://bl.7yue.pro/v1/classic/latest?appkey=S1Qj2GpHSvgWrrn5',
      success(res) {
        if (res.statusCode === 200) {
          me.setData({ currentData: res.data})
        }
      }
    })
  },
  onPrev(event) {
    const index = event.currentTarget.dataset.index
    this._toggle(`classic/${index}/previous`)
  },
  onNext(event) {
    const index = event.currentTarget.dataset.index
    this._toggle(`classic/${index}/next`)
  },
  _toggle(url) {
    const me = this

    wx.request({
      url: `http://bl.7yue.pro/v1/${url}?appkey=S1Qj2GpHSvgWrrn5`,
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        if (res.statusCode === 200) {
          me.setData({
            currentData: res.data
          })
        }else {
          wx.showToast({
            title: '没有了',
            icon: 'info',
            duration: 2000
          })
        }
      }
    })
  }
})
