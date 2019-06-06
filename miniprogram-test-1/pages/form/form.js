Page({
  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/component/pages/form/form'
    }
  },

  data: {
    pickerHidden: true,
    chosen: '',
    buylist: [],
  },
  
  onLoad(option) {
    var that = this;
     //ajax请求数据
    wx.request({
      url: "https://enrollminiapi.hxinsoft.com/enroll/getfields",
      method:"post",
      data: {
    
      },
      success: function (res) {
        //--init data
        var status = res.data.code;
        if (status == 1) {
          that.setData({
            formdata: res.data.data
        
          })
         
        } else {
          wx.showToast({
            title: "网络请求超时",
            duration: 2500
          });
        }
      },
      fail: function () {
        // fail
        wx.showToast({
          title: '访问失败！',
          duration: 2000
        });
      }


    })
  },

 
  pickerConfirm(e) {
    this.setData({
      pickerHidden: true
    })
    this.setData({
      chosen: e.detail.value
    })
  },

  pickerCancel() {
    this.setData({
      pickerHidden: true
    })
  },

  pickerShow() {
    this.setData({
      pickerHidden: false
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  }
})
