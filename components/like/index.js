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
    imgSrc: ''
  },
  ready() {
    this.setData({
      imgSrc: this.data.like ? 'images/like@active.png' : 'images/like.png'
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onLike: (event) => {
      console.log(event)
    }
  }
})
