import HTTP from '../../utils/http'
const http = new HTTP()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likedSrc: 'images/like@active.png',
    notLikedSrc: 'images/like.png'
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onLike() {
      this.setData({
        count: this.data.like ? this.data.count - 1 : this.data.count + 1,
        like: !this.data.like
      })
    }
  }
})
