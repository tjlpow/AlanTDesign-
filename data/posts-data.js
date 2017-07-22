var article1 = require('/article1.js')
var article2 = require('/article2.js')
var article3 = require('/article3.js')
var article4 = require('/article4.js')
var article5 = require('/article5.js')

var localData = [

  {
    title: "The Kano Analysis 卡诺模型",
    subtitle:"低成本分析方法，助你预测功能的满意度",
    imgSrc: "/images/post/a1.jpg",
    date: "7月17日",
    author: "翻译分享",
    headImageSrc: "/images/post/a1.jpg",
    avatar: "/images/avatar/alant.png",
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
    subtitle: "帮助理清思路的方案筛选法，远离团队成员间的无谓争吵",
    imgSrc: "/images/post/a2.jpg",
    date: "6月15日",
    author: "原创文章",
    headImageSrc: "/images/post/a2.jpg",
    avatar: "/images/avatar/alant.png",
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
    subtitle: "文字清晰、图标高效",
    imgSrc: "/images/post/a3.jpg",
    date: "4月3日",
    author: "原创文章",
    headImageSrc: "/images/post/a3.jpg",
    avatar: "/images/avatar/alant.png",
    detail: article3.article,
    postId: 2,
    music: {
      title: "音乐2",
      dataUrl: "http://ws.stream.qqmusic.qq.com/C100003GdCmG4NkEOR.m4a?fromtag=38",
      coverImgUrl: "http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000"
    }
  },

  {
    title: "Apple Human Interface Guidelines 精选阅读",
    subtitle: "苹果界面规范里，或许你没有留意到的细节",
    imgSrc: "/images/post/a4.jpg",
    date: "4月3日",
    author: "原创文章",
    headImageSrc: "/images/post/a4.jpg",
    avatar: "/images/avatar/alant.png",
    detail: article4.article,
    postId: 3,
    music: {
      title: "音乐2",
      dataUrl: "http://ws.stream.qqmusic.qq.com/C100003GdCmG4NkEOR.m4a?fromtag=38",
      coverImgUrl: "http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000"
    }
  },

  {
    title: "关于我和这个小程序",
    subtitle: "为什么要做这个？",
    imgSrc: "/images/post/t1.jpg",
    date: "7月17日",
    author: "自我介绍",
    headImageSrc: "/images/post/t1.jpg",
    avatar: "/images/avatar/alant.png",
    detail: article5.article,
    postId: 4,
    music: {
      title: "音乐1",
      dataUrl: "http://ws.stream.qqmusic.qq.com/C100003507bR0gDKBm.m4a?fromtag=38",
      coverImgUrl: "http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000"
    }
  },

]


module.exports = {
  postsList: localData
}