// miniprogram/pages/cloud/cloud.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  insert: function(){
    // db.collection('user').add({
    //   data:{
    //     name: 'jerry',
    //     age: 20
    //   },
    //   success: res => {
    //     console.log(res)
    //   },
    //   fail: err => {
    //     console.log()
    //   }
    // })
    db.collection('user').add({
      data:{
        name: "jack",
        age : 18
      }
    }).then(res=>{
      console.log(res);
    }).catch(res=>{
      console.log(err);
    })
  },

  update: function(){
    db.collection('user').doc('5a93cec95edf473100694d8772536556').update({
      data: {
        age: 21
      }
    }).then(res=>{
      console.log(res);
    }).catch(res=>{
      console.log(err);
    })
  },

  search: function(){
    db.collection('user').where({
      name: 'jerry'
    }).get().then(res=>{
      console.log(res);
    }).catch(res=>{
      console.log(err);
    })
  },

  delete: function(){
    db.collection('user')
    .doc('5a93cec95edf473100694d8772536556')
    .remove()
    .then(res=>{
      console.log(res);
    }).catch(res=>{
      console.log(err);
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