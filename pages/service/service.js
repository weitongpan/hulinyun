var app = getApp();
// pages/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lately:[],
    property:[
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/property/kaisuo.png',
        text:'开门'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/property/feiyong.png',
        text:'物业费'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/property/baoxiu.png',
        text:'报修'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/property/tingche.png',
        text:'停车缴费'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/property/tousu.png',
        text:'投诉建议'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/property/dengji.png',
        text:'登记访客'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/property/wupin.png',
        text:'物品放行'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/property/yanfang.png',
        text:'验房收房'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/property/hujiao.png',
        text:'呼叫物业'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/property/yibiao.png',
        text:'仪表查询'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/property/gonggao.png',
        text:'物业公告'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/property/kaisuo1.png',
        text:'开锁换锁'
      }
    ],
    community:[
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/community/dangqun.png',
        text:'开门'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/community/shequ.png',
        text:'社区活动'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/community/zhengce.png',
        text:'政策法规'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/community/tongzhi.png',
        text:'通知公告'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/community/zhukun.png',
        text:'助困积弱'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/community/bianminfuwu.png',
        text:'便民服务'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/community/jubao.png',
        text:'选举公示'
      }
    ],
    committee:[
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/committee/xuanju.png',
        text:'选举公示'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/committee/jiyao.png',
        text:'工作纪要'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/committee/jijin.png',
        text:'社区基金'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/committee/gonggao.png',
        text:'通知公告'
      }
    ],
    fund:[
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/fund/sheli.png',
        text:'基金设立'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/fund/yueding.png',
        text:'基金条约'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/fund/gongshi.png',
        text:'基金公示'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/fund/juanzeng.png',
        text:'捐赠基金'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/fund/qiuzhu.png',
        text:'基金求助'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/fund/shiyong.png',
        text:'基金使用'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getApp().globalData.latelyService = [
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/nav/kaisuo.png',
        text:'开锁'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/nav/feiyong.png',
        text:'缴费'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/nav/baoxiu.png',
        text:'保修'
      },
      {
        url:'/pages/facilitate/facilitate',
        img:'/assets/img/service/nav/tingche.png',
        text:'基金'
      },
    ]
    this.setData({
      lately:getApp().globalData.latelyService
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

  }
})