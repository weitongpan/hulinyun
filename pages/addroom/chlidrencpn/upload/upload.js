// pages/addroom/chlidrencpn/upload/upload.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    uploadClick(){
      let mode,path
      let that = this
      wx.showActionSheet({
        itemList: ['相册','拍照'],
        success(res){
          if(res.tapIndex == 0){
            mode = 'album'
          }
          else{
            mode = 'camera'
          }
          wx.chooseImage({
            count: 1,
            sizeType:['original'],
            sourceType:[mode],
            success(res){
              path = res.tempFilePaths[0]
              that.setData({
                path,
                imgShow:true
              })
            },
            fail(err){
              console.log(err)
            }
          })
        }
      })
    }
  }
})
