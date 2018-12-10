// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:[
      '../../image/初识.jpg',
      '../../image/相恋.jpg',
      '../../image/热恋.jpg',
      '../../image/吃.jpg',
      '../../image/玩.jpg',
      '../../image/睡1.jpg'
    ],
    imgClass:[
      {
        'id':0,
        'name':'相识',
        'img':[
          'http://suo.im/4K76Pm', 'http://suo.im/5kXXP3', 'http://suo.im/4CAWOl', 'http://suo.im/5lIdyg','http://suo.im/4v4JQq'
      ],
      },
      {
        'id':1,
        'name': '相恋',
        'img': [
          'http://suo.im/5lIdMM', 'http://suo.im/5e7LIA','http://suo.im/4v4K4C'
        ],
      },
      {
        'id':2,
        'name': '热恋',
        'img': [
          '../../image/热恋.jpg', 'http://suo.im/56ByJH',
        ]
      },
      {
        'id': 2,
        'name': '吃喝',
        'img': [
          '../../image/吃.jpg', 'http://suo.im/4Z5lO2', 'http://suo.im/4Rz8QB', 'http://suo.im/56ByX5', 'http://suo.im/5lIdYS',
        ]
      },
      {
        'id': 2,
        'name': '玩乐',
        'img': [
          '../../image/玩.jpg', 'http://suo.im/5lIeiy', 'http://suo.im/5lIcfM', '../../image/玩4.jpg', '../../image/玩5.jpg', '../../image/玩6.jpg',
        ]
      },
      {
        'id': 2,
        'name': '嗯哼',
        'img': [
          '../../image/睡1.jpg', 'http://suo.im/56Bvbn'
        ]
      }
    ],
    content:[],
    classInd:0
  },
  // 添加图片
  addImg(){
    var that = this
    var pushImg = that.data.imgClass
  wx.chooseImage({
    success: function(res) {
      var imgList = res.tempFiles
      for(var i in imgList){
        wx.saveFile({
          tempFilePath: imgList[i].path,
          success:function(ress){
            pushImg[that.data.classInd].img.push(ress.savedFilePath)
            
            that.setData({
              imgClass:pushImg,
              content: pushImg[that.data.classInd].img
            })
            wx.setStorage({
              key: 'imgList',
              data: pushImg,
            })
          }
        })
      }
    },
  })
  },
  // 分类切换
  cli(data){
    var index = data.currentTarget.dataset.index
  var list = this.data.imgClass[index].img
  this.setData({
    classInd: index,
    content:list
  })
  },
  // 预览图片
  previewImg: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    //所有图片
    var imgs = this.data.content;

    wx.previewImage({
      //当前显示图片
      current: imgs[index],
      //所有图片
      urls: imgs
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  //背景音乐
    wx.playBackgroundAudio({
     src:'https://0x9.me/R3KnT',
     success:function(){
       console.log('1')
     }
   })
    // 标题背景颜色
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#FEF6F7',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
    // 获取到本地数据渲染
    var that = this
    if(wx.getStorageSync('imgList')){
      var val = wx.getStorageSync('imgList')
      that.setData({
        imgClass: val
      })
    }
    
    // 默认显示第一页
    var def = this.data.imgClass[0].img
    this.setData({
      content: def
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