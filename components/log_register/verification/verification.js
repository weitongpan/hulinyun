// components/log_register/verification/verification.js
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
    countDown:60,
    obtain:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    obtainClick(){
      this.setData({
        obtain:!this.data.obtain
      })
      let obtain = setInterval(() => {
        this.setData({
          countDown:this.data.countDown - 1
        })
      }, 1000);
      setTimeout(() => {
        clearInterval(obtain)
        this.setData({
          obtain:!this.data.obtain,
          countDown:60
        })
      }, 60000);
    }
  }
})
