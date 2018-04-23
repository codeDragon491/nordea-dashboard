document.addEventListener("change" , function(e){
///////// Bar (AVG session duratio)
    if(e.target.classList.contains("PDSelect")){
        var divId = e.target.getAttribute("data-id");
        var sSelectValue = document.getElementById(divId).value;
        var divMarketSD = "";
        if(sSelectValue == "year"){
            sSDId = "#graphMarket3";
            divMarketSD = '<canvas id="graphMarket3"></canvas>';
            aSDData = [9 , 8];
            aSDLabels = ['2017' , '2016'];
            sTitle = 'Data shown in Minutes';
            $(sSDId).replaceWith(divMarketSD);
            timeOnSiteBar(sSDId , aSDLabels , aSDData , sTitle);
            return;
        };
        if(sSelectValue == "month"){
            sSDId = "#graphMarket3";
            divMarketSD = '<canvas id="graphMarket3"></canvas>';
            aSDData = [9 , 10];
            aSDLabels = ['October' , 'September'];
            sTitle = 'Data shown in Minutes';
            $(sSDId).replaceWith(divMarketSD);
            timeOnSiteBar(sSDId , aSDLabels , aSDData , sTitle);
            return;
        };
        if(sSelectValue == "week"){
            sSDId = "#graphMarket3";
            divMarketSD = '<canvas id="graphMarket3"></canvas>';
            aSDData = [12 , 9];
            aSDLabels = ['This week' , 'Last week'];
            sTitle = 'Data shown in Minutes';
            $(sSDId).replaceWith(divMarketSD);
            timeOnSiteBar(sSDId , aSDLabels , aSDData , sTitle);
            return;
        };
        if(sSelectValue == "day"){
            sSDId = "#graphMarket3";
            divMarketSD = '<canvas id="graphMarket3"></canvas>';
            aSDData = [7 , 8];
            aSDLabels = ['Today' , 'Yesterday'];
            sTitle = 'Data shown in Minutes';
            $(sSDId).replaceWith(divMarketSD);
            timeOnSiteBar(sSDId , aSDLabels , aSDData , sTitle);
            return;
        };
    };

///////// Bar (Pages / Session)
    if(e.target.classList.contains("PSSelect")){
        var divId = e.target.getAttribute("data-id");
        var sSelectValue = document.getElementById(divId).value;
        var divMarketPS = "";
        if(sSelectValue == "year"){
            sSDId = "#graphMarket4";
            divMarketPS = '<canvas id="graphMarket4"></canvas>';
            jSDData = [9.2 , 8.9];
            aSDLabels = ["2017" , "2016"];
            sTitle = '';
            $(sSDId).replaceWith(divMarketPS);
            timeOnSiteBar(sSDId , aSDLabels , jSDData , sTitle);
            return;
        };
        if(sSelectValue == "month"){
            sSDId = "#graphMarket4";
            divMarketPS = '<canvas id="graphMarket4"></canvas>';
            jSDData = [6.7 , 6.2];
            aSDLabels = ["October" , "September"];
            sTitle = '';
            $(sSDId).replaceWith(divMarketPS);
            timeOnSiteBar(sSDId , aSDLabels , jSDData , sTitle);
            return;
        };
        if(sSelectValue == "week"){
            sSDId = "#graphMarket4";
            divMarketPS = '<canvas id="graphMarket4"></canvas>';
            jSDData = [8.4 , 6.5];
            aSDLabels = ["This Week" , "Last Week"];
            sTitle = '';
            $(sSDId).replaceWith(divMarketPS);
            timeOnSiteBar(sSDId , aSDLabels , jSDData , sTitle);
            return;                 
        };
        if(sSelectValue == "day"){
            sSDId = "#graphMarket4";
            divMarketPS = '<canvas id="graphMarket4"></canvas>';
            jSDData = [7.1 , 7.4];
            aSDLabels = ["Today" , "Yesterday"];
            sTitle = '';
            $(sSDId).replaceWith(divMarketPS);
            timeOnSiteBar(sSDId , aSDLabels , jSDData , sTitle);
            return;
        };
    };

///////// Chart (Pageview)
    if(e.target.classList.contains("pvSelect")){
        var divId = e.target.getAttribute("data-id");
        var sSelectValue = document.getElementById(divId).value;
        var divMarketPV = "";
        if(sSelectValue == "year"){
            sMarketViewsCanvas = "#graphMarket2";
            divMarketPV = '<canvas id="graphMarket2"></canvas>';
            jPViewData = {"new":[1243, 1524, 1783, 1822, 1712] , "old":[1162, 1228, 1363, 1452, 1672]};
            jPVLabel = {"new":"2013 - 2017" , "old":"2008 - 2012"};
            jPVSize = {"w":100 , "h":85};
            aPVLabels = ["2013", "2014", "2015", "2016", "2017"];
            $(sMarketViewsCanvas).replaceWith(divMarketPV);
            showVisitorGraph(sMarketViewsCanvas , aPVLabels , jPVLabel.old , jPViewData.old , jPVLabel.new , jPViewData.new , jPVSize.w , jPVSize.h);
            return;
        };
        if(sSelectValue == "month"){
            sMarketViewsCanvas = "#graphMarket2";
            divMarketPV = '<canvas id="graphMarket2"></canvas>';
            jPViewData = {"new":[276, 287, 303, 329, 326, 333] , "old":[267, 298, 387, 301, 312, 299]};
            jPVLabel = {"new":"Jul - Dec" , "old":"Jan - Jun"};
            jPVSize = {"w":100 , "h":85};
            aPVLabels = ["July", "August", "September", "October", "November", "December"];
            $(sMarketViewsCanvas).replaceWith(divMarketPV);
            showVisitorGraph(sMarketViewsCanvas , aPVLabels , jPVLabel.old , jPViewData.old , jPVLabel.new , jPViewData.new , jPVSize.w , jPVSize.h);
            return;
        };
        if(sSelectValue == "week"){
            sMarketViewsCanvas = "#graphMarket2";
            divMarketPV = '<canvas id="graphMarket2"></canvas>';
            jPViewData = {"new":[51, 56, 61, 63, 58, 69, 58, 61, 62] , "old":[49, 52, 56, 58, 61, 64, 62, 59, 65]};
            jPVLabel = {"new":"Week 10 - Week 18" , "old":"Week 1 - Week 9"};
            jPVSize = {"w":100 , "h":85};
            aPVLabels = ["Week 10", "Week 11", "Week 12", "Week 13", "Week 14", "Week 15", "Week 16", "Week 17", "Week 18"];
            $(sMarketViewsCanvas).replaceWith(divMarketPV);
            showVisitorGraph(sMarketViewsCanvas , aPVLabels , jPVLabel.old , jPViewData.old , jPVLabel.new , jPViewData.new , jPVSize.w , jPVSize.h);
            return;
        };
        if(sSelectValue == "day"){
            sMarketViewsCanvas = "#graphMarket2";
            divMarketPV = '<canvas id="graphMarket2"></canvas>';
            jPViewData = {"new":[12, 8, 14, 16, 21, 19, 18] , "old":[14, 15, 20, 18, 17, 16, 17]};
            jPVLabel = {"new":"This week" , "old":"Last week"};
            jPVSize = {"w":100 , "h":85};
            aPVLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            $(sMarketViewsCanvas).replaceWith(divMarketPV);
            showVisitorGraph(sMarketViewsCanvas , aPVLabels , jPVLabel.old , jPViewData.old , jPVLabel.new , jPViewData.new , jPVSize.w , jPVSize.h);
            return;
        };
    };

///////// Bar (Traffic sources)
    if(e.target.classList.contains("tsSelect")){
        var divId = e.target.getAttribute("data-id");
        var sSelectValue = document.getElementById(divId).value;
        var divMarketTS = "";
        if(sSelectValue == "year"){
            sTSId = "#graphMarket6";
            divMarketTS = '<canvas id="graphMarket6"></canvas>';
            aData = [36 , 28 , 24 , 8 , 4];
            jSize = {"w":100 , "h":80};
            $(sTSId).replaceWith(divMarketTS);
            trafficSourcesBar(sTSId , aData , jSize.w , jSize.h);
            return;
        };
        if(sSelectValue == "month"){
            sTSId = "#graphMarket6";
            divMarketTS = '<canvas id="graphMarket6"></canvas>';
            aData = [42 , 24 , 24 , 8 , 2];
            jSize = {"w":100 , "h":80};
            $(sTSId).replaceWith(divMarketTS);
            trafficSourcesBar(sTSId , aData , jSize.w , jSize.h);
            return;
        };
        if(sSelectValue == "week"){
            sTSId = "#graphMarket6";
            divMarketTS = '<canvas id="graphMarket6"></canvas>';
            aData = [40 , 26 , 20 , 10 , 4];
            jSize = {"w":100 , "h":80};
            $(sTSId).replaceWith(divMarketTS);
            trafficSourcesBar(sTSId , aData , jSize.w , jSize.h);
            return;
        };
        if(sSelectValue == "day"){
            sTSId = "#graphMarket6";
            divMarketTS = '<canvas id="graphMarket6"></canvas>';
            aData = [39 , 27 , 20 , 9 , 5];
            jSize = {"w":100 , "h":80};
            $(sTSId).replaceWith(divMarketTS);
            trafficSourcesBar(sTSId , aData , jSize.w , jSize.h);
            return;
        };
    };
});