// components/top/top.js
import { ZHMonth } from '../../utils/util'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    params:{
      type:Object,
      value:null,
      observer(to,form){
        
        if (to.hasOwnProperty('pubdate')){
          console.log(to)
          this.setData({
            date:{
              y:to.pubdate.split('-')[0],
              m: ZHMonth(to.pubdate.split('-')[1]),
              d:to.pubdate.split('-')[2]
            },
            like:{
              like_status: to.like_status,
              fav_num: to.fav_nums
            }
          })
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    date:null,
    like:null
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})