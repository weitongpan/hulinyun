// pages/unlocking/unlocking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    business:{
      region:'观山湖，白云，花溪，南明',
      shopName:'xx锁业',
      address:'贵阳市南明区花果园金融街2号楼',
      phone:'123456789'
    },
    serviceIntroduce:{
      tlite:'服务简介',
      reporter:'井开区社会事业局，各县（市、区）教育局:',
      text:'近期，吉州区某民办园发生部分幼儿身体不适，伴有呕吐、腹泻等症状，引起各方高度关注.近期，吉州区某民办园发生部分幼儿身体不适，伴有呕吐、腹泻等症状，引起各方高度关注.近期，吉州区某民办园发生部分幼儿身体不适，伴有呕吐、腹泻等症状，引起各方高度关注.近期，吉州区某民办园发生部分幼儿身体不适，伴有呕吐、腹泻等症状，引起各方高度关注.近期，吉州区某民办园发生部分幼儿身体不适，伴有呕吐、腹泻等症状，引起各方高度关注.近期，吉州区某民办园发生部分幼儿身体不适，伴有呕吐、腹泻等症状，引起各方高度关注.'
    },
    businessIntroduce:{
      tlite:'商家介绍',
      reporter:'井开区社会事业局，各县（市、区）教育局:',
      text:'近期，吉州区某民办园发生部分幼儿身体不适，伴有呕吐、腹泻等症状，引起各方高度关注.近期，吉州区某民办园发生部分幼儿身体不适，伴有呕吐、腹泻等症状，引起各方高度关注.近期，吉州区某民办园发生部分幼儿身体不适，伴有呕吐、腹泻等症状，引起各方高度关注.近期，吉州区某民办园发生部分幼儿身体不适，伴有呕吐、腹泻等症状，引起各方高度关注.近期，吉州区某民办园发生部分幼儿身体不适，伴有呕吐、腹泻等症状，引起各方高度关注.近期，吉州区某民办园发生部分幼儿身体不适，伴有呕吐、腹泻等症状，引起各方高度关注.'
    },
    evaluate:{
      fraction:5.3,
      whole:198,
      img:'/assets/img/unlocking/user_portrait_03.jpg',
      userName:'187****1111',
      stars:3,
      time:'2021-1-22',
      text:'师傅很专业，沟通融洽，速度也很快，价格蛮实 惠的'
    },
    like:[
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
      }
    ],
    contact:{
      price:32.80,
      phone:'133****2512'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.text,
      fail: (err) => {
        console.log(err)
      },
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
    return{
      title:'开锁服务',
      path:'/pages/unlocking/unlocking.wxml'
    }
  },
  phoneClick(event){
    wx.makePhoneCall({
      phoneNumber: event.detail,
      success(){},
      fail(){
        console.log('调用打电话的接口失败')
      }
    })
  }
})