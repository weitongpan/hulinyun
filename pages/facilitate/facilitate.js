// pages/facilitate/facilitate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comtrol:['全部','开锁换锁','送水服务','跑腿服务'],
    whole:[
      {
        url:'./facilitate.wxml',
        img:'/assets/img/faxilitate/whole/service_whole_list1.jpg',
        tlite:'贵阳开锁正规开锁/换锁/修锁，全市上锁/修锁，全市上锁/修锁，全市上',
        text:'本公司换锁技术好，收费公道，上门速度快，价锁/修锁，全市上锁/修锁，全市上',
        address:'贵阳-南明区'
      },
      {
        url:'./facilitate.wxml',
        img:'/assets/img/faxilitate/whole/service_whole_list2.jpg',
        tlite:'贵阳蜗牛搬家公司，搬家送货全市上门',
        text:'本公司服务周到，收费公道，上门速度快，价格',
        address:'贵阳-南明区'
      },
      {
        url:'./facilitate.wxml',
        img:'/assets/img/faxilitate/whole/service_whole_list1.jpg',
        tlite:'贵阳开锁正规开锁/换锁/修锁，全市上锁/修锁，全市上锁/修锁，全市上',
        text:'本公司换锁技术好，收费公道，上门速度快，价锁/修锁，全市上锁/修锁，全市上',
        address:'贵阳-南明区'
      },
      {
        url:'./facilitate.wxml',
        img:'/assets/img/faxilitate/whole/service_whole_list2.jpg',
        tlite:'贵阳蜗牛搬家公司，搬家送货全市上门',
        text:'本公司服务周到，收费公道，上门速度快，价格',
        address:'贵阳-南明区'
      },
      {
        url:'./facilitate.wxml',
        img:'/assets/img/faxilitate/whole/service_whole_list1.jpg',
        tlite:'贵阳开锁正规开锁/换锁/修锁，全市上锁/修锁，全市上锁/修锁，全市上',
        text:'本公司换锁技术好，收费公道，上门速度快，价锁/修锁，全市上锁/修锁，全市上',
        address:'贵阳-南明区'
      },
      {
        url:'./facilitate.wxml',
        img:'/assets/img/faxilitate/whole/service_whole_list2.jpg',
        tlite:'贵阳蜗牛搬家公司，搬家送货全市上门',
        text:'本公司服务周到，收费公道，上门速度快，价格',
        address:'贵阳-南明区'
      },{
        url:'./facilitate.wxml',
        img:'/assets/img/faxilitate/whole/service_whole_list1.jpg',
        tlite:'贵阳开锁正规开锁/换锁/修锁，全市上锁/修锁，全市上锁/修锁，全市上',
        text:'本公司换锁技术好，收费公道，上门速度快，价锁/修锁，全市上锁/修锁，全市上',
        address:'贵阳-南明区'
      },
      {
        url:'./facilitate.wxml',
        img:'/assets/img/faxilitate/whole/service_whole_list2.jpg',
        tlite:'贵阳蜗牛搬家公司，搬家送货全市上门',
        text:'本公司服务周到，收费公道，上门速度快，价格',
        address:'贵阳-南明区'
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title:options.text})
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

  }
})