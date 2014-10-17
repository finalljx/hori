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
                }

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
                }

                return {
                        getNews: getNews,
                        getNotices: getNotices
                }
        }
]);