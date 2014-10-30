angular.module('hori').factory('dataService', [
        function() {

                var getNews = function() {
                        return [{
                                        text: '新闻',
                                        date: '10-13'
                                },

                                {
                                        text: '新闻',
                                        date: '10-13'
                                },

                                {
                                        text: '新闻',
                                        date: '10-13'
                                },

                                {
                                        text: '新闻',
                                        date: '10-13'
                                }
                        ];
                };

                var getNotices = function() {
                        return [{
                                        text: '通知',
                                        date: '10-13'
                                },

                                {
                                        text: '通知',
                                        date: '10-13'
                                },

                                {
                                        text: '通知',
                                        date: '10-13'
                                },

                                {
                                        text: '通知',
                                        date: '10-13'
                                }
                        ];
                };

                var getImagesNews = function() {
                        return [{
                                        text: '图片新闻',
                                        date: '10-13',
                                        url: 'images/slider/image1.png'
                                },

                                {
                                        text: '图片新闻',
                                        date: '10-13',
                                        url: 'images/slider/image2.png'
                                },

                                {
                                        text: '图片新闻',
                                        date: '10-13',
                                        url: 'images/slider/image3.png'
                                },

                                {
                                        text: '图片新闻',
                                        date: '10-13',
                                        url: 'images/slider/image4.png'
                                }
                        ];
                };

                return {
                        getNews: getNews,
                        getNotices: getNotices,
                        getImagesNews: getImagesNews
                }
        }
]);