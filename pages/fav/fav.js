// pages/fav/fav.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getUserInfo(data) {
    console.log(data)
  },
  checkUserSetting() {
    wx.getSetting({
      success: (result) => {
        wx.showToast({
          title: result.authSetting['scope.userInfo'] ? '已授权' : '未授权',
          icon: 'none',
          image: '',
          duration: 1500,
          mask: false,
          success: (result) => {
            this.getUserInfoByWX()
          },
          fail: () => {
          },
          complete: () => {
          }
        })
      },
      fail: () => {
      },
      complete: () => {
      }
    })
  },
  getUserInfoByWX() {
    wx.login({
      success(res) {
        console.log(res.code)
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  share() {
    wx.showShareMenu({
      withShareTicket: true,
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.log(111)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (res) {
    console.log(res)
  },

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
  onShareAppMessage(res) {
    console.log(res)

    return {
      title: '来自antqi的测试分享',
      path: '/pages/classic/classic',
      imageUrl: 'https://s3.amazonaws.com/cdn.botanicalinterests.com/images/packet-illustrations/1910i_FM-Edible-Beauties.jpg'
    }
  }
})
