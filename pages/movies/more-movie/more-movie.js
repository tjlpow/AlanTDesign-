// pages/movies/more-movie/more-movie.js
var app = getApp();
var util = require('../../../utils/util.js')

Page({
  data: {
    navigationTitle: "",
    movies: {},
    requestUrl: "",
    totalCount: 0, //上滑获取的总条数，用于计算上滑获取第几条数据，和上滑后需要显示多少条数据
    movieListIsEmpty: true,
  },
  onLoad: function (options) {
    var category = options.category;
    this.data.navigationTitle = category;
    var dataUrl = "";

    switch (category) {
      case "正在热映":
        dataUrl = app.globalData.doubanBase + "/v2/movie/in_theaters";
        break;
      case "即将上映":
        dataUrl = app.globalData.doubanBase + "/v2/movie/coming_soon";
        break;
      case "豆瓣Top250":
        dataUrl = app.globalData.doubanBase + "/v2/movie/top250";
        break;
    };

    this.data.requestUrl = dataUrl //把链接保存到data，供onScrollLower函数用

    util.http(dataUrl, this.processDoubanData);
  },

  processDoubanData: function (moviesDouban) {
    var movies = [];
    for (var idx in moviesDouban.subjects) {
      var subject = moviesDouban.subjects[idx];
      var title = subject.title;
      if (title.length >= 6) {
        title = title.substring(0, 6) + "...";
      };
      var temp = {
        title: title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        movieId: subject.id,
        stars: util.convertToStarsArray(subject.rating.stars)
      }
      movies.push(temp)
    };

    //合并新获取与旧有的movies数据
    var totalMovies = {}

    if (!this.data.movieListIsEmpty) {
      totalMovies = this.data.movies.concat(movies);
    }
    else {
      totalMovies = movies;
      this.data.movieListIsEmpty = false;
    }

    this.setData({
      movies: totalMovies
    });
    this.data.totalCount += 20;
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
  },

  /*
  onScrollLower: function (event) {
    var nextUrl = this.data.requestUrl + "?start=" + this.data.totalCount + "&count=20";
    util.http(nextUrl, this.processDoubanData);
    wx.showNavigationBarLoading();
  },
*/

  onReachBottom: function (event) {
    var nextUrl = this.data.requestUrl + "?start=" + this.data.totalCount + "&count=20";
    util.http(nextUrl, this.processDoubanData);
    wx.showNavigationBarLoading();
  },

  onPullDownRefresh: function () {
    var refleshUrl = this.data.requestUrl + "?start=0&count=20";
    this.data.movies = {};
    this.data.movieListIsEmpty = true;
    this.data.totalCount = 0;
    util.http(refleshUrl, this.processDoubanData);
    wx.showNavigationBarLoading();
  },

  onReady: function (event) {
    wx.setNavigationBarTitle({
      title: this.data.navigationTitle
    })
  },

  onMovieTap: function (event) {
        var movieId = event.currentTarget.dataset.movieid;
        wx.navigateTo({
            url: '../movie-detail/movie-detail?id=' + movieId
        })
    },

})