// pages/calendar/calendar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowMonth:'',
    nowDay:'',
    year: '',
    month: '',
    day: '',
    weekArr: ['日', '一', '二', '三', '四', '五', '六'],
    dateArr: [],
    firstDay: '',
    lastDay: '',
    param: null,
    clockNum: 3,
    left:"<",
    right:">",
    selectDay:''
  },
  getDate: function() { //获取当月日期
    var mydate = new Date();
    var year = mydate.getFullYear();
    var month = mydate.getMonth();
    var months = month + 1;
    var day = mydate.getDate();
    var fist = new Date(year, month, 1);
    this.data.firstDay = fist.getDay();//获取一周中的某一天 
    var last = new Date(year, months, 0);
    this.data.lastDay = last.getDate();//获取每月的最后一天
    this.setData({
      year: year,
      month: months,
      day: day,
      firstDay: this.data.firstDay,
      lastDay: this.data.lastDay
    })
  },
  setDate: function () {
    this.data.dateArr = [];
    // 获取上个月最后几天
    var last = new Date(this.data.year, this.data.month-1, 0);
    var lasts = last.getDate()
    for (var i = lasts+1 - this.data.firstDay; i<=lasts; i++){
      this.data.dateArr.push(i)
    }
    
    for (var i = 1; i < this.data.lastDay + 1; i++) {
      this.data.dateArr.push(i);
    }
    // 获取下个月前几天
    var fist = new Date(this.data.year, this.data.month, 1);
    var fists = fist.getDay();//获取一周中的某一天 
    for (var i = 1; i <= 7-fists; i++) {
      this.data.dateArr.push(i)
    }
    this.setData({
      dateArr: this.data.dateArr,
      firstDay: this.data.firstDay,
      nowDay: this.data.firstDay+this.data.day,
    })
  },
  prevMonth: function() { //上一月
    var months = "";
    var years = "";
    if (this.data.month == 1) {
      years = this.data.year - 1
      this.data.month = 12;
      months = this.data.month;
    } else {
      years = this.data.year;
      months = this.data.month - 1;
    }

    var first = new Date(years, months - 1, 1);
    this.data.firstDay = first.getDay();
    var last = new Date(years, months, 0);
    this.data.lastDay = last.getDate();

    this.setData({
      month: months,
      year: years,
      firstDay: this.data.firstDay,
      lastDay: this.data.lastDay,
      selectDay:""
    })
    this.setDate()
  },
  nextMonth: function() { //下一月
    var months = "";
    var years = "";
    if (this.data.month == 12) {
      this.data.month = 0;
      months = this.data.month;
      years = this.data.year + 1;
    } else {
      months = this.data.month + 1;
      years = this.data.year;
    }
    var months = this.data.month + 1;
    var first = new Date(years, months - 1, 1);
    this.data.firstDay = first.getDay();
    var last = new Date(years, months, 0);
    this.data.lastDay = last.getDate();
    this.setData({
      month: months,
      year: years,
      firstDay: this.data.firstDay,
      lastDay: this.data.lastDay,
      selectDay:""
    })
    this.setDate()
  },
  // 选中日期
  selectDay:function(event){
    
    var day = event.currentTarget.dataset.index;
    if(this.data.selectDay == day){
      this.setData({
        selectDay: ''
      })
    }else{
      this.setData({
        selectDay: day
      })
    }
  },
  onLoad: function(options) {
    this.getDate();
    this.setDate();
    var res = wx.getSystemInfoSync();
    var mydate = new Date();
    var month = mydate.getMonth();
    this.setData({
      param: res.windowHeight / 12,
      nowMonth: month+1
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})