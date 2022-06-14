// index.js
// 获取应用实例
const app = getApp()
var APP_URL='https://m.maoyan.com/ajax/movieOnInfoList'
var APP_URL2='https://i.maoyan.com/ajax/moreCinemas'
Page({
  data:{
    fm:[
      {src:"img/fm-1.png",
      tite:"长津湖之水门关"},
      {src:"img/fm-2.png",
      tite:"误杀瞒天计"},
      {src:"img/fm-3.png",
      tite:"这个杀手不太冷静"},
      {src:"img/fm-4.png",
      tite:"精灵旅社4:变身大冒险"},
      {src:"img/fm-1.png",
      tite:"长津湖之水门关"},
      {src:"img/fm-2.png",
      tite:"误杀瞒天计"},
    ],
    movies:[],

    cinema_list:[],
   currentTab:0
  },
  onLoad:function(options){
    var that = this
        wx.request({
      url:APP_URL, //访问API地址
      data: { //这里不需要改变
        x: '',
        y: ''
      },
      header: { //这里不需要改变
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data.movieList)//返回API数据
        var data=res.data.movieList;
		that.setData({//设置数据区movies等于跟随data
        movies:data
      })
      }
    }),
    wx.request({
      url:APP_URL2, //访问API地址
      data: { //这里不需要改变
        x: '',
        y: ''
      },
      header: { //这里不需要改变
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data.cinemas.cinemas)//返回API数据
        var data=res.data.cinemas.cinemas;
		that.setData({//设置数据区currentTab等于跟随点击事件传递设置current变量
      cinema_list:data
      })
      }
    })
  },
  onReady:function(){
    
  },
  onShow:function(){
    
  },
  onHide:function(){
    
  },
  onUnload:function(){
    
  },
  onPullDownRefresh:function(){
    console.log("下拉刷新");
    
  },
  onReachBottom:function(){
    
  },
  showTab(e){
    this.setData({//设置数据区currentTab等于跟随点击事件传递设置current变量
      currentTab:e.currentTarget.dataset.current
    })

  }
})    