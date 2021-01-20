var app = getApp();
// components/tool/tool.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tool:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toolClick(event){
      let lately = event.currentTarget.dataset.item
      this.triggerEvent('mytoolClick',lately)
    }
  }
})
