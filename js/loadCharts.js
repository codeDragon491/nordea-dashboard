/////////// Load all charts
$(function() {
/////////// Page home ///////////
    ///////// Chart (Visitor on page)
    var sHomeVisitCanvas = "#graphHome1";
	var sGraphFull = "#graphCanvas";
	var jData = {"new":[24, 23, 37, 43, 34, 32, 25] , "old":[12, 19, 3, 5, 2, 3, 9]};
	var jLabel = {"new":"This week" , "old":"Last week"};
	var jSize = {"w":100 , "h":50};
	var aLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    showVisitorGraph(sHomeVisitCanvas , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);

    ///////// table (Graph Full size)
    showVisitorGraph(sGraphFull , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
    showTable(aLabels , jData.new , jData.old);

    ///////// Chart (Subscribers)
    var aNewData = [203, 257, 352, 382, 393, 402];
    var aLabels = ["May", "June", "July", "August", "September", "Oktober"];
    var sChartId = "#graphHome3";
    var jSize = {"w":50 , "h":39};
    var sZero = true;
    chartSignUp(sChartId , aLabels , aNewData , jSize.w , jSize.h , sZero);

    ///////// Pie (Time of visit)
    var aNewData = [39, 26, 13, 6, 0, 0, 3, 8];
    var sPieId = "#graphHome4";
    pieTimeOfVisit(sPieId , aNewData);


/////////// Page maket ///////////
    ///////// Chart (Visitor on page)
    var sMarketVisitCanvas = "#graphMarket1";
    var jData = {"new":[24, 23, 37, 43, 34, 32, 25] , "old":[12, 19, 3, 5, 2, 3, 9]};
    var jLabel = {"new":"This week" , "old":"Last week"};
    var jSize = {"w":100 , "h":35};
    var aLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    showVisitorGraph(sMarketVisitCanvas , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);

    ///////// Chart (Pageview)
    var sMarketViewsCanvas = "#graphMarket2";
    var jPViewData = {"new":[12, 8, 14, 16, 21, 19, 18] , "old":[14, 15, 20, 18, 17, 16, 17]};
    var jPVLabel = {"new":"This week" , "old":"Last week"};
    var jPVSize = {"w":100 , "h":85};
    var aPVLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    showVisitorGraph(sMarketViewsCanvas , aPVLabels , jPVLabel.old , jPViewData.old , jPVLabel.new , jPViewData.new , jPVSize.w , jPVSize.h);

    ///////// Bar (AVG session duratio)
    var sSDId = "#graphMarket3";
    var jSDData = [12 , 9];
    var aSDLabels = ["This week" , "Last week"];
    var sTitle = 'Data shown in Minutes';
    timeOnSiteBar(sSDId , aSDLabels , jSDData , sTitle);

    ///////// Bar (Pages / Session)
    var sPSId = "#graphMarket4";
    var jPSData = [8.4 , 6.5];
    var aPSLabels = ["This Week" , "Last Week"];
    var sTitle = '';
    timeOnSiteBar(sPSId , aPSLabels , jPSData , sTitle);

    ///////// Pie (Time of visit)
    var aNewData = [39, 26, 13, 6, 0, 0, 3, 8];
    var sPieId = "#graphMarket5";
    pieTimeOfVisit(sPieId , aNewData);

    ///////// Bar (Traffic sources)
    var sTSId = "#graphMarket6";
    var aData = [42 , 24 , 24 , 8 , 2];
    var jSize = {"w":100 , "h":80}
    trafficSourcesBar(sTSId , aData , jSize.w , jSize.h);

    ///////// Chart (Subscribers)
    var aNewData = [203, 257, 352, 382, 393, 402];
    var aLabels = ["May", "June", "July", "August", "September", "Oktober"];
    var sMarketChartId = "#graphMarket7";
    var jSize = {"w":50 , "h":39};
    var sZero = true;
    chartSignUp(sMarketChartId , aLabels , aNewData , jSize.w , jSize.h , sZero);


/////////// Page Article ///////////
    ///////// Bar (Article posted)
    var sArticlePosted = "#graphArticle1";
    var jData = {"new":[5, 3, 3, 4, 6, 2, 0] , "old":[2, 1, 3, 5, 2, 3, 8]};
    var jLabel = {"new":"This week" , "old":"Last week"};
    var jSize = {"w":100 , "h":50};
    var aLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    showLineChart(sArticlePosted , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);

    ///////// Bar (Articles from countries)
    var sArticleCountries = "#graphArticle2";
    var jData = {"new":[5, 3, 3, 4, 6, 2, 5] , "old":[2, 1, 3, 5, 2, 3, 8]};
    var jLabel = {"new":"This week" , "old":"Last week"};
    var jSize = {"w":100 , "h":80};
    var aLabels = ["DK", "GER", "SWE", "NOR", "FR", "GB", "RUS"];
    showLineChart(sArticleCountries , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);

    ///////// Pie (Article readership)
    var aNewData = [20, 26, 54];
    var sPieId = "#graphArticle3";
    showPieChart(sPieId , aNewData);


/////////// Single article charts ///////////
    ///////// Chart (Article viewed)
    var aNewData = [1203, 1257, 1352, 1382, 1393, 1402];
    var aLabels = ["May", "June", "July", "August", "September", "Oktober"];
    var sChartId = "#graphSingleAr1";
    var jSize = {"w":50 , "h":20};
    var sZero = false;
    chartSignUp(sChartId , aLabels , aNewData , jSize.w , jSize.h , sZero);

    ///////// Bar (Page duration)
    var sArticlePosted = "#graphSingleAr2";
    var jData = {"new":[5] , "old":[3]};
    var jLabel = {"new":"This week" , "old":"Last week"};
    var jSize = {"w":50 , "h":90};
    var aLabels = ["Minutes"];
    showLineChart(sArticlePosted , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);

    ///////// Bar (Traffic sources)
    var sTSId = "#graphSingleAr3";
    var aData = [26 , 24 , 20 , 8 , 22];
    var jSize = {"w":100 , "h":85}
    trafficSourcesBar(sTSId , aData , jSize.w , jSize.h);

});