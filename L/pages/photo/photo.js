// pages/photo/photo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: 'https://www.okejia.com/img/favicon.png',
    val:10
  },
  change:function(e){
    var val = e.detail.value;
    if(val <= 0){
      this.setData({
        val:1
      })
    }
  },
  savePhoto:function(){
    var that = this;
    wx.getImageInfo({
      src: that.data.url,
      success: function (res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.path,
          success(result) {
            wx.showToast({
              title: '保存成功',
            })
          }
        })

        wx.getSetting({
          success(res) {
            if (!res.authSetting['scope.writePhotosAlbum']) {
              wx.authorize({
                scope: 'scope.writePhotosAlbum',
                success() {
                  wx.saveImageToPhotosAlbum({
                    filePath: res.path,
                    success(result) {
                      wx.showToast({
                        title: '保存成功',
                      })
                    }
                  })
                }
              })
            }
          }
        })
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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