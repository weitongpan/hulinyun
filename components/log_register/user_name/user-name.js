// components/log_register/user_name/user-name.js
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
    userName:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cancelClick(){
      this.setData({
        userName:''
      })
    },
    keyboardEntry(event){
      const name = event.detail.value
      this.setData({
        userName:name
      })
    }
  }
})
