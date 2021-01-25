// pages/call/chlidrencpn/call-item/call-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    phone:{
      type:Object,
      value:{}
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
    phoneClick(event){
      this.triggerEvent('phoneClick',event.currentTarget.dataset.number)
    }
  }
})
