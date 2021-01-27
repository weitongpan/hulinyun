// components/log_register/password/password.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholderPassword:{
      type:String,
      value:'请输入6-16位密码'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    eye:false,
    password:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    eyeClick(){
      this.setData({
        eye:!this.data.eye
      })
    },
    setval(event){
      const password = event.detail.value
      this.setData({
        password
      })
    }
  }
})
