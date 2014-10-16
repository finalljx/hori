angular.module('hori').factory('dataService', [function(){

	var getNews = function(){
		return [
        	{
        		text: '关于开展2014年“安全生产月”的通知', date: '10-13'
        	},

        	{
        		text: '关于5月集成办公系统维护的通知', date: '10-13'
        	},

        	{
        		text: '关于“世纪管理名家讲堂”6月课程的通知', date: '10-13'
        	},

        	{
        		text: '关于印发《企业文化建设实施纲要》的通知', date: '10-13'
        	}
        ];
	}

	return {
		getNews: getNews
	}
}]);