// components/like/like.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    params: {
      type: Object,
      value: null,
      observer(to, form) {
        this.setData({
          uniqueData: to,
          likeUrl: to.like_status ? 'images/like@active.png' : 'images/like.png'
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeUrl: '',
    uniqueData: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(event) {
      const { parameters } = event.currentTarget.dataset
      const url = `http://bl.7yue.pro/v1/${parameters.like_status ? 'like/cancel' : 'like'}?appkey=S1Qj2GpHSvgWrrn5`
      const me = this

      wx.request({
        url: url,
        method: 'post',
        data: {
          art_id: parameters.id,
          type: parameters.type
        },
        // header:{
        //   'appkey':'S1Qj2GpHSvgWrrn5'
        // },
        success(res) {
          if (res.statusCode === 201) {
            me.setData({
              'uniqueData.like_status': !parameters.like_status,
              'uniqueData.fav_nums': (!parameters.like_status ? parameters.fav_nums + 1 : parameters.fav_nums - 1),
              'likeUrl': !parameters.like_status ? 'images/like@active.png' : 'images/like.png'
            })
          }
        }
      })
    }
  }
})
