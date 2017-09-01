export function wxShareTimeline(wxTitle, wxLink, wxImgUrl, wxSuccessFun, wxCancel) {
  window.wx.ready(function() {
    window.wx.onMenuShareTimeline({
      title: wxTitle, // 分享标题
      link: wxLink, // 分享链接
      imgUrl: wxImgUrl, // 分享图标
      success: function() {
        //wxSuccessFun && wxSuccessFun()
        !wxSuccessFun || wxSuccessFun()
          // 用户确认分享后执行的回调函数
      },
      cancel: function() {
        !wxCancel && wxCancel()
          // 用户取消分享后执行的回调函数
      }
    })
  })
}
