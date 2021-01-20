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
    ],
    comtrolfixed:false,
    distance:100
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置不同页面跳转时的标题
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
  onPullDownRefresh: function (e) {
    
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
  onPageScroll(event){
    // onPageScroll这个函数可以让我们获取到当前页面距离最顶部的距离,
    //我们可以通过这个方法,获取到,当页面到达某一个距离时我们将某些元素显示或者隐藏
    //而在小程序中我们想要显示或者隐藏某一个元素,一般使用wx:if 或者hidden
    //而这两种方式都必须要使用一个bool值的变量,我们通过改变bool的值来实现元素的动态显示
    //但是!!!微信官方给我们的提示是不希望我们在这个函数里频繁的使用setData()方法,
    // 因为这个方法会涉及到底层一种算法,页面会被频繁的刷新,

    //那我们如何来解决这一个问题呢?
    //首先说一下基本思路,既然官方不希望我们平凡的使用setData方法修改数据,那我们就使用判断的方法,当屏幕滑动到某一个值时,我们就将数据进行修改,这个既能实现我们的需求,又不会频繁的修改数据
    //这里说一下具体怎么实现,
      //首先,我们需要事先确定好两个值,第一个是控制元素显示或者隐藏的bool值(这里为了下面的描述更清晰,我们将这个bool值命名为show),第二个是当页面滚动到某一个距离时,这个距离的具体值(这里为了下面的描述更清晰,我们将这个值命名为distance)
      //其次再做具体判断
        // 这里我再做具体说明:比如一开始的时候我们将元素隐藏,滑动到某一个距离时显示这个元素,所以我们首先将show设置为false,我们希望页面滑动距离顶部为200rpx时元素显示,那我们将distance值设置为200
        //!!!!!首先,我们使用onPageScroll函数自带的event参数里的scrollTop属性(这个属性也就是页面距离最顶部的距离)与我们自己定义的具体的距离做一个比较,event.scrollTop >= distance 当event.scrollTop小于distance 返回flase,当event.scrollTop大于distance 返回true,我们使用一个常量将这个返回值保存起来
        //const distance = event.scrollTop >= this.data.distance
        //接下来我们将这个返回值与我们自定义的bool做比较,如果他们不相等,那就执行if内部的代码,(为什么是不相等呢?因为我们希望元素一开始隐藏,然后到了某个距离以后再显示,所以我们一开始将show的值设为了false,而const distance = event.scrollTop >= this.data.distance这句代码在刚开始执行的时候是返回的bool值为false,我们希望的是当event.scrollTop大于this.data.distance时我们再将元素显示,也就是当event.scrollTop >= this.data.distance代码返回值为true时我们再修改我们自定义的show的bool值,所以这是为什么设置不相等为判断条件的其中一个因素)
        //当event.scrollTop >= this.data.distance返回值为true时我们开始执行if里面的代码块,也就是修改show的bool值,这里再说明(当屏幕滚动的距离大于我们设置的距离时我们希望能将元素显示,所以我们要将控制元素的bool值show设置为true,但是思考一下,我们能不能直接将show设置为true?这里直接告诉大家,不能!!!!!!,那为什么不能?我们思考一下,当我们直接将show设置为true时,当我们继续往下滚动屏幕时这是没有问题的,因为event.scrollTop >= this.data.distance会一直返回true,而这个返回值与我们重新设置show的bool值作不相等比较,不会执行if里面的代码块,也就是说我们继续往下滑动的时候,数据不会被我们频繁的修改,但是show的值也被改成了true这没问题,所有功能都是正常的,但是!!!!当我将屏幕往上滚动的时候,当event.scrollTop的值还是大于 this.data.distance的值的时候不会有问题,因为event.scrollTop >= this.data.distance这句代码会一直返回true,而这个返回的true与我们重新设置过的show的布尔值作不相等比较时,不会执行if里面的代码块,也就是不会修改show的bool值,这个值会一直为true,元素也就会一直显示.但是!!!!!!!当event.scrollTop小于this.data.distance时,这时event.scrollTop >= this.data.distance这句代码待会的bool为false,而我们使用false与show的布尔值作不相等比较时,这时就会执行if里面代码块也就是 if(flase != true) {this.setData({comtrolfixed:true})} 而当event.scrollTop小于this.data.distance时我们希望元素被隐藏,也就是show的值能被设置为false,但是由于我们刚才时的时候是直接在if代码块里将show的值设置为了true,所以当event.scrollTop小于this.data.distance时会执行if里面的代码块并且还会频繁的执行,show的bool值依旧为true,元素依然会显示.所以说不能直接在if代码块里将show的值设置成固定的true或者是固定的flase,而是更具屏幕滚动位置的不同,而设置成对应的bool值)
        //那我们如何实现这种动态的设置呢?并且数据还不会被频繁的修改呢?根据我的总结,我觉得一下我描述的这种方式应该是属于敲代码的一种经验累积(这里是废话),那我们如何实现这种动态设计,并且数据不会被频繁的刷新呢?
        //首先我们思考一下,当屏幕滚动超过一定距离时,我们希望show的值为true,当屏幕滚动小于一定距离时我们希望show的值为flase,并且当屏幕超过一定距离时只执行一次修改数据,当屏幕又回滚到小于某个距离时也只执行一次数据的修改.这里我们可以通过观察和思考,可以得到,当屏幕滚动超过一定距离时,event.scrollTop >= this.data.distance这句代码的返回值为true,当屏幕距离在我们规定的距离范围之内时,event.scrollTop >= this.data.distance这句代码的返回值为flase.这两个返回值刚刚好也就是我们希望能动态修改的show的bool值(也就是,当屏幕滚动超过一定距离,event.scrollTop >= this.data.distance返回true并且我们希望元素显示,也就是show的bool值被修改成true,当屏幕回滚到规格范围之内,event.scrollTop >= this.data.distance返回flase并且我们希望元素隐藏,也就是show的bool值被修改成flase,),所以我们不妨大胆的尝试一下,在if代码块里,我们将show的bool值修改为event.scrollTop >= this.data.distance的返回值,(也就是当屏幕超过一定距离,event.scrollTop >= this.data.distance返回值为true,我们将show的bool值改为true,这样元素就能显示,当屏幕回滚到规定距离之类,event.scrollTop >= this.data.distance返回值为flase,我们将show的bool值改为flase,这样元素就能隐藏.)
        //说明了这么多,看试一切都没问题了对吧?那我们就再来验证一遍,
            //首先,我们希望当屏幕滚动到一定距离时元素被显示,当屏幕在规定范围内滚动时我们希望元素被隐藏,这里我们就需要使用hidden或者wx:if这两种方式来控制元素的显示与隐藏(而这两个方式都是通过它们后面所判断的bool值来决定元素是否显示与隐藏)也就是说我们需要设置一个bool值来控制元素的显示与隐藏.而我们测试屏幕滚动的距离需要使用系统提供的onPageScroll(event){}这样一个函数,这个函数自带的event参数种有一个scrollTop值,这个值就是当前屏幕距离最顶部的距离,也就是说我们可以通过获取到这个值,并且与我们规定好的距离作比较(这里为了方便下面的描述更为清晰,我将控制元素显示与隐藏的值命名为show,将我们规定的距离的值命名为distance),当屏幕滚动超过一定距离时我们将show的值设置为true,当屏幕回滚到规定范围时我们将show的值设置为flase.而微信官方又提示我们不希望我们在onPageScroll(event){}里面频繁的去使用setData()方法,因为这个方法会设计到底层的一种算法,频繁的使用会使屏幕频繁的刷新,这会对程序造成很大的影响.
            //那首先我们在不考虑微信官方的提示下,我们知道要实现当屏幕滚动到一定距离时元素被显示,当屏幕在规定范围内滚动时我们希望元素被隐藏,我们肯定要将event.scrollTop的值与distance作比较,当event.scrollTop大于distance我们将show修改为true,当event.scrollTop小于distance我们将show修改为flase,这样我们就能实现最基本的需求.但是这明显和我们的设计原则相违背,所以我们不能使用这样的方式.
            //那我们如何实现既能判断距离作出动态修改又能不频繁的使用setData,这里我们使用这样的方式,我们在onPageScroll(event){}定义一个常量或者变量(这里为了方便说明,我将在这个函数里定义的变量或者常量命名为distance)用来装event.scrollTop >= this.data.distance的返回值(const distance = event.scrollTop >= this.data.distance),然后我们在if里将保存的返回值与我们定义的show的值进行不相等比较也就是if(distance != this.data.show){}(至于为什么要作不相等比较,在上面我已经做过详细描述.)在if里面的代码块我们执行
            // setData({
            //   show:distance
            // })
            //至于为什么我们将show的值设置为distance(其实这就是一种动态设置bool值)我在上面也详细分析过,并且我们在这里就是为了验证show的值设置为distance这行代码.
            //好!!!!所有东西我们准备完全,下面开始梳理逻辑,
            //1~首先我们希望元素是隐藏的,超过一定距离才显示,所以我们将show设置为flase,这个距离我们假设为200rpx,所以我们将distance设置为200
            //2~当屏幕刚开始滚动并且没有超过规定范围时 const distance = event.scrollTop >= this.data.distance 这句代码的返回值为flase, 又show为flase,将distance与show作不相等判断也就是if(distance != this.data.show)这是不会执行if里面的代码块,也就是数据不会被修改,元素依旧隐藏.
            //3~当屏幕滚动到规定范围或超过规定范围时,const distance = event.scrollTop >= this.data.distance 这句代码的返回值为true,又show为flase,将distance与show作不相等判断也就是if(distance != this.data.show)这时会执行if里面的代码块,也就是数据会被修改,并且修改为distance,也就是show被修改成true,元素就会被显示出来.
            //~当我们继续往下滚动时const distance = event.scrollTop >= this.data.distance 这句代码的返回值依旧为true,而show的值被修改为了true,这时再将distance与show作不相等判断也就是if(distance != this.data.show)就不会执行if里面的代码块,这时show不会被修改依旧为true,元素被显示,并且没有频繁的使用setData()方法.
            //4~当我们开始往回滚动时,当屏幕距离最顶部的距离依然在规定范围之外时, const distance = event.scrollTop >= this.data.distance 返回值为true,这时show的值为true,再将distance与show作不相等判断也就是if(distance != this.data.show),同样也不会执行if里面的代码块,这时show不会被修改依旧为true,元素被显示,并且没有频繁的使用setData()方法.
            //5~当我们开始回滚到规定屏幕距离之内时,const distance = event.scrollTop >= this.data.distance 返回值变成了flase ,这时这时show的值为true,再将distance与show作不相等判断也就是if(distance != this.data.show),这时会执行if里面的代码块,也就是数据会被修改,并且修改为distance,也就是show被修改成flase,元素就会被隐藏起来.
            //6~当我们继续往上滑动时,const distance = event.scrollTop >= this.data.distance 返回值变成了flase,这时show被修改成flase,再将distance与show作不相等判断也就是if(distance != this.data.show),这时不会执行if里面的代码块,show不会被修改依旧为flase,元素依旧隐藏,并且没有频繁的使用setData()方法.
             //最后做一下总结与感慨,当我们在最上面开始实现动态修改show为true还是flase时,并且在下面作验证后,发现!!!不但能根据屏幕距离的不同能实现动态修改show的值,并且还决定了频繁使用setData()这个不良代码.我在这里对这种逻辑思维抱有一丝疑惑,到底时那些大神在设计这个逻辑时也时按照我这种思维去验证后发现一举两得还是大神们在设计的时候就已经预料到这样的方式不仅能动态修改show还是避免频繁的使用setData这种方法.感叹!感叹!感叹!感叹!66666


    const distance = event.scrollTop >= this.data.distance
    if(distance != this.data.comtrolfixed){
      this.setData({
        comtrolfixed:distance
      })
      console.log(event.scrollTop)
      console.log(this.data.comtrolfixed)
    }
  }
})