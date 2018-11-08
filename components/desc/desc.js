// components/desc/desc.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    params:{
      type:Object,
      default:null,
      observer(to, form, changedPath){
        
        if(to.type){
          this.setData({
            typeName: {
              'type_100': '电影',
              'type_200': '音乐',
              'type_300': '诗句'
            }[to.type]})
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    typeName:''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
