// pages/call/call.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:[
      {
        tlite:'物业管家1',
        number:'15120170784'
      },
      {
        tlite:'物业管家2',
        number:'010-2876-0987'
      },
      {
        tlite:'安保中心',
        number:'010-2876-0987'
      },
      {
        tlite:'保洁中心',
        number:'010-2876-0987'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.text,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  phoneClick(event){
    wx.makePhoneCall({
      phoneNumber: event.detail,
      success(){
      },
      fail(){
        console.log('拨打电话接口调用失败')
      }
    })
  }
})