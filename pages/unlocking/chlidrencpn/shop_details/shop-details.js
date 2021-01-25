// pages/unlocking/chlidrencpn/shop_details/shop-details.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    busines:{
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
      this.triggerEvent('phoneClick',event.currentTarget.dataset.phone)
    }
  }
})
