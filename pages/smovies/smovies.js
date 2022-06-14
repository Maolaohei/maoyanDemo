// pages/smovies/smovies.js
var URL='https://i.maoyan.com/asgard/asgardapi/sns/common/feed/channel/list.json?uuid=A0B7D9B0A5C011EC9FC2DD42AA00052BE9ABFD770269443BBEB90C7134261265&channelId=4&feedChannelId=105&timestamp=1654330204044&offset=20'
Page({
  data:{  //数据区    xx:"数据",
fm_list:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //因为setData中是onLoad函数中的方法中的子节点，无法使用this，所以需要var that = this
      var that = this
      wx.request({
        url:URL, //访问API地址
        data: { //这里不需要改变
          x: '',
          y: ''
        },
        header: { //这里不需要改变
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          console.log(res.data.data.feeds)//返回API数据
          var data=res.data.data.feeds;
      that.setData({//设置数据区 fm_list等于跟随点击事件传递设置data变量
          fm_list:data
        })
        }
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