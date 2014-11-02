/**
 * User: gaoquansheng
 * Date: 2014-11-01
 * 提供各个功能模块的数据接口
 */
angular.module('hori').service('dataService', ['configService', 'deviceService', 'global', function(configService, deviceService, global) {

    /*
     * @description: 获取企业新闻
     * @param model 查询模型
     */
    this.getNews = function(model) {
        var url = '',
            start = 1,
            count = 20;
        if (angular.isObject(model)) {
            if (model.start) {
                start = model.start;
            }

            if (model.count) {
                count = model.count;
            }
        }

        try {
            url = configService.appServerHost + 'view/oa/newslist/Application/DigiFlowInfoPublish.nsf/InfoByDateView_2?readviewentries?login';
            url = url + '&start=' + start + '&count=' + count;
        } catch (e) {

        }

        return deviceService.ajax({
            'type': 'post',
            'url': url
        });
    };


    /*
     * @description: 获取待办事宜
     * @param model 查询模型
     */
    this.getTodos = function(model) {
        var url = '',
            start = 1,
            count = 20,
            oaMsgServer = configService.oaMsgServer,
            itcode = global.getItcode();

        if (angular.isObject(model)) {
            if (model.start) {
                start = model.start;
            }

            if (model.count) {
                count = model.count;
            }
        }

        try {
            url = configService.appServerHost + 'view/oamobile/todosmobile/Produce/DigiFlowMobile.nsf/agGetMsgViewData?openagent&login&server=' + oaMsgServer + '&dbpath=DFMessage/dfmsg_' + itcode + '.nsf&view=vwTaskUnDoneForMobile&thclass=';
            url = url + '&start=' + start + '&count=' + count;
        } catch (e) {

        }

        return deviceService.ajax({
            'type': 'post',
            'url': url
        });
    };

    /*
     * @description: 获取未读消息
     * @param model 查询模型
     */
    this.getUnreads = function(model) {
        var url = '',
            start = 1,
            count = 20,
            oaMsgServer = configService.oaMsgServer,
            itcode = global.getItcode();

        if (angular.isObject(model)) {
            if (model.start) {
                start = model.start;
            }

            if (model.count) {
                count = model.count;
            }
        }

        try {
            url = configService.appServerHost + 'view/oamobile/messagelist/Produce/DigiFlowMobile.nsf/agGetMsgViewData?openagent&login&server=' + oaMsgServer + '&dbpath=DFMessage/dfmsg_' + itcode + '.nsf&view=vwMsgUnRdForMobile&thclass=';
            url = url + '&start=' + start + '&count=' + count;
        } catch (e) {

        }

        return deviceService.ajax({
            'type': 'post',
            'url': url
        });
    };

    /*
     * @description: 获取未读消息条数
     */
    this.getUnreadsNum = function() {
        var url = '';
       
        try {
            url = configService.appServerHost + 'view/oamobile/todosnum/Produce/GeneralMessage.nsf/GetAllMsgInfoAgent_sugon?openagent';
            url = url + "&random=" + (new Date().getTime());
        } catch (e) {

        }

        return deviceService.ajax({
            'type': 'post',
            'url': url
        });
    };

    /*
     * @description: 获取待办事宜
     * @param model 查询模型
     */
    this.getContacts = function(model) {
        var url = '',
            queryStr = '',
            oaServerName = configService.oaServerName;

        if (angular.isObject(model)) {
            queryStr = model.queryStr;
        }

        try {
            url = configService.appServerHost + 'view/oa/phonenumberrequest/Produce/WeboaConfig.nsf/telSearchForm?openform&svrName=' + oaServerName + '&queryStr=' + queryStr + '&dbFile=Produce/DigiFlowOrgPsnMng.nsf&showField=UserDeptPhone';
        } catch (e) {

        }

        return deviceService.ajax({
            'type': 'post',
            'url': url
        });
    };

    this.getNotices = function() {
        return [{
                title: '通知',
                date: '10-13'
            },

            {
                title: '通知',
                date: '10-13'
            },

            {
                title: '通知',
                date: '10-13'
            },

            {
                title: '通知',
                date: '10-13'
            }
        ];
    };

    this.getImagesNews = function() {
        return [{
                title: '图片新闻',
                date: '10-13',
                url: 'images/slider/image1.png'
            },

            {
                title: '图片新闻',
                date: '10-13',
                url: 'images/slider/image2.png'
            },

            {
                title: '图片新闻',
                date: '10-13',
                url: 'images/slider/image3.png'
            },

            {
                title: '图片新闻',
                date: '10-13',
                url: 'images/slider/image4.png'
            }
        ];
    };
}]);
