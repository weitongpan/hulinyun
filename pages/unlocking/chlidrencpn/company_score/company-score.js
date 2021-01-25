// pages/unlocking/chlidrencpn/company_score/company-score.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    phone:{
      type:String,
      value:''
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
    phoneClick(){
      wx.makePhoneCall({
        phoneNumber: this.properties.phone,
        fail(){
          console.log('调用电话接口失败')
        }
      })
    }
  }
})
