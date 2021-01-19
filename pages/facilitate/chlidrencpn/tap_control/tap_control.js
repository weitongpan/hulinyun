// pages/facilitate/tap_control/tap_control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    comtrol:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    active:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    activeClick(event){
      this.setData({
        active:event.currentTarget.dataset.index
      })
    }
  }
})
