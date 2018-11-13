// components/desc/desc.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    params: {
      type: Object,
      default: null,
      observer(to, form, changedPath) {
        if (to.hasOwnProperty('type')) {
          this.setData({
            currentData: to,
            typeName: {
              'type_100': ['电', '影'],
              'type_200': ['音', '乐'],
              'type_300': ['诗', '句']
            }[`type_${to.type}`]
          })
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    typeName: '',
    currentData: null
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
