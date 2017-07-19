var article1 = require('/article1.js')
var article2 = require('/article2.js')
var article3 = require('/article3.js')
var article4 = require('/article4.js')

var localData = [
  {
    title: "The Kano Analysis 卡诺模型分析",
    imgSrc: "/images/post/crab.png",
    date: "7月17日",
    author: "翻译分享",
    headImageSrc: "/images/post/sls.jpg",
    avatar: "/images/avatar/2.png",
    detail: article1.article,
    postId: 0,
    music: {
      title: "音乐1",
      dataUrl: "http://ws.stream.qqmusic.qq.com/C100003507bR0gDKBm.m4a?fromtag=38",
      coverImgUrl: "http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000"
    }
  },
  {
    title: "设计方案记分对比法",
    imgSrc: "/images/post/cat.png",
    date: "6月15日",
    author: "原创文章",
    headImageSrc: "/images/post/vr.png",
    avatar: "/images/avatar/4.png",
    detail: article2.article,
    postId: 1,
    music: {
      title: "音乐2",
      dataUrl: "http://ws.stream.qqmusic.qq.com/C100003GdCmG4NkEOR.m4a?fromtag=38",
      coverImgUrl: "http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000"
    }
  },
  {
    title: "UX笔记｜按钮用图标还是文字？",
    imgSrc: "/images/post/xiaolong.jpg",
    date: "4月3日",
    author: "原创文章",
    headImageSrc: "/images/post/xiaolong.jpg",
    avatar: "/images/avatar/4.png",
    detail: article3.article,
    postId: 2,
    music: {
      title: "音乐2",
      dataUrl: "http://ws.stream.qqmusic.qq.com/C100003GdCmG4NkEOR.m4a?fromtag=38",
      coverImgUrl: "http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000"
    }
  },

  {
    title: "iOS8 Human Interface Guidelines 精选阅读",
    imgSrc: "/images/post/xiaolong.jpg",
    date: "4月3日",
    author: "原创文章",
    headImageSrc: "/images/post/xiaolong.jpg",
    avatar: "/images/avatar/4.png",
    detail: article4.article,
    postId: 3,
    music: {
      title: "音乐2",
      dataUrl: "http://ws.stream.qqmusic.qq.com/C100003GdCmG4NkEOR.m4a?fromtag=38",
      coverImgUrl: "http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000"
    }
  }

 
]


module.exports = {
  postsList: localData
}