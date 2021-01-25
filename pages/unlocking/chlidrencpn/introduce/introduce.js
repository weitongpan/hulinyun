// pages/unlocking/chlidrencpn/introduce/introduce.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    introduce:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    introduceShow:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    openClick(){
      this.setData({
        introduceShow:!this.data.introduceShow
      })
    }
  }
})
