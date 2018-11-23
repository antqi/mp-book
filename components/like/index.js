import HTTP from '../../utils/http'
const http = new HTTP()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    like: true,
    count: 100
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: (event) => {
      http.get({
        url: '/classic/latest'
      }).then(res => {
        console.log(res)
      })
    }
  }
})
