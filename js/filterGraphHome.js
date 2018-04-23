document.addEventListener("change" , function(e){
///////// Chart (Visitor on page)
    if(e.target.classList.contains("visitorSelect")){
        var divId = e.target.getAttribute("data-id");
        var sSelectValue = document.getElementById(divId).value;
        var divHomeNewVisit = "";
        var divMarketNewVisit = "";
        if(sSelectValue == "year"){
            /// Home page
            sHomeVisitCanvas = "#graphHome1";
            divHomeNewVisit = '<canvas id="graphHome1" class="graphCanvas"></canvas>';
            /// Market page
            sMarketVisitCanvas = "#graphMarket1";
            divMarketNewVisit = '<canvas id="graphMarket1" class="graphCanvas"></canvas>';
            /// Full size page
            sGraphFull = "#graphCanvas";
            divFullNewVisit = '<canvas id="graphCanvas" class="graphCanvas"></canvas>';

            jData = {"new":[2204, 2113, 1314, 2312 , 1225] , "old":[1414, 2410, 512, 232, 1019]};
            jLabel = {"new":"2013 - 2017" , "old":"2008 - 2012"};
            jSize = {"w":100 , "h":50};
            aLabels = ["2013", "2014", "2015", "2016", "2017"];
            $(sGraphFull).replaceWith(divFullNewVisit);
            if(divId == "selectGraphVisit"){
                $(sHomeVisitCanvas).replaceWith(divHomeNewVisit);
                showVisitorGraph(sGraphFull , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
                showVisitorGraph(sHomeVisitCanvas , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
                return;
            };
            $(sMarketVisitCanvas).replaceWith(divMarketNewVisit);
            showVisitorGraph(sGraphFull , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
            showVisitorGraph(sMarketVisitCanvas , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , 35);
            return;
        };
        if(sSelectValue == "month"){
            /// Home page
            sHomeVisitCanvas = "#graphHome1";
            divHomeNewVisit = '<canvas id="graphHome1" class="graphCanvas"></canvas>';
            /// Market page
            sMarketVisitCanvas = "#graphMarket1";
            divMarketNewVisit = '<canvas id="graphMarket1" class="graphCanvas"></canvas>';
            /// Full size page
            sGraphFull = "#graphCanvas";
            divFullNewVisit = '<canvas id="graphCanvas" class="graphCanvas"></canvas>';

            jData = {"new":[824, 513, 137, 243, 434, 412] , "old":[812, 419, 273, 265, 142, 133]};
            jLabel = {"new":"Jul - Dec" , "old":"Jan - Jun"};
            jSize = {"w":100 , "h":50};
            aLabels = ["July", "August", "September", "October", "November", "December"];           
            $(sGraphFull).replaceWith(divFullNewVisit);
            if(divId == "selectGraphVisit"){
                $(sHomeVisitCanvas).replaceWith(divHomeNewVisit);
                showVisitorGraph(sGraphFull , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
                showVisitorGraph(sHomeVisitCanvas , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
                return;
            };
            $(sMarketVisitCanvas).replaceWith(divMarketNewVisit);
            showVisitorGraph(sGraphFull , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
            showVisitorGraph(sMarketVisitCanvas , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , 35);
            return;
        };
        if(sSelectValue == "week"){
            /// Home page
            sHomeVisitCanvas = "#graphHome1";
            divHomeNewVisit = '<canvas id="graphHome1" class="graphCanvas"></canvas>';
            /// Market page
            sMarketVisitCanvas = "#graphMarket1";
            divMarketNewVisit = '<canvas id="graphMarket1" class="graphCanvas"></canvas>';
            /// Full size page
            sGraphFull = "#graphCanvas";
            divFullNewVisit = '<canvas id="graphCanvas" class="graphCanvas"></canvas>';

            jData = {"new":[345, 213, 67, 93, 114, 212, 175, 154, 110] , "old":[236, 119, 73, 25, 42, 33, 156, 174, 90]};
            jLabel = {"new":"Week 10 - 18" , "old":"Week 1 - 9"};
            jSize = {"w":100 , "h":50};
            aLabels = ["Week 10", "Week 11", "Week 12", "Week 13", "Week 14", "Week 15", "Week 16", "Week 17", "Week 18"];
            $(sGraphFull).replaceWith(divFullNewVisit);
            if(divId == "selectGraphVisit"){
                $(sHomeVisitCanvas).replaceWith(divHomeNewVisit);
                showVisitorGraph(sGraphFull , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
                showVisitorGraph(sHomeVisitCanvas , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
                return;
            };
            $(sMarketVisitCanvas).replaceWith(divMarketNewVisit);
            showVisitorGraph(sGraphFull , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
            showVisitorGraph(sMarketVisitCanvas , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , 35);
            return;
        };
        if(sSelectValue == "day"){
            /// Home page
            sHomeVisitCanvas = "#graphHome1";
            divHomeNewVisit = '<canvas id="graphHome1" class="graphCanvas"></canvas>';
            /// Market page
            sMarketVisitCanvas = "#graphMarket1";
            divMarketNewVisit = '<canvas id="graphMarket1" class="graphCanvas"></canvas>';
            /// Full size page
            sGraphFull = "#graphCanvas";
            divFullNewVisit = '<canvas id="graphCanvas" class="graphCanvas"></canvas>';

            jData = {"new":[24, 23, 37, 43, 34, 32 , 25] , "old":[12, 19, 3, 5, 2, 3, 9]};
            jLabel = {"new":"This week" , "old":"Last week"};
            jSize = {"w":100 , "h":50};
            aLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            $(sGraphFull).replaceWith(divFullNewVisit);
            if(divId == "selectGraphVisit"){
                $(sHomeVisitCanvas).replaceWith(divHomeNewVisit);
                showVisitorGraph(sGraphFull , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
                showVisitorGraph(sHomeVisitCanvas , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
                return;
            };
            $(sMarketVisitCanvas).replaceWith(divMarketNewVisit);
            showVisitorGraph(sGraphFull , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
            showVisitorGraph(sMarketVisitCanvas , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , 35);
            return;
        };
    };

///////// Bar (Click rate)
    if(e.target.classList.contains("crtSelect")){
        var divId = e.target.getAttribute("data-id");
        var sSelectValue = document.getElementById(divId).value;
        if(sSelectValue == "year"){
            jCrtHead = {"new":"2017" , "old":"2016"};
            jCrt = {"new":"13529" , "old":"12374"};
            jAvgCrt = {"new":"30" , "old":"25"};
        };
        if(sSelectValue == "month"){
            jCrtHead = {"new":"October" , "old":"September"};
            jCrt = {"new":"5426" , "old":"4576"};
            jAvgCrt = {"new":"35" , "old":"28"};
        };
        if(sSelectValue == "week"){
            jCrtHead = {"new":"This Week" , "old":"Last Week"};
            jCrt = {"new":"1376" , "old":"1076"};
            jAvgCrt = {"new":"33" , "old":"33"};
        };
        if(sSelectValue == "day"){
            jCrtHead = {"new":"Today" , "old":"Yesterday"};
            jCrt = {"new":"23" , "old":"18"};
            jAvgCrt = {"new":"23" , "old":"20"};
        };
        var crtTemp = '<div class="crtThisWeek">\
                            <div class="crtContent">\
                                <div>\
                                    <p class="crtHead">'+jCrtHead.new+'</p>\
                                    <h1>\
                                        '+jCrt.new+'\
                                    </h1>\
                                </div>\
                                <div>\
                                    <p>Average CRT / Visitor:</p>\
                                    <h2>'+jAvgCrt.new+'</h2>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="crtLastWeek">\
                            <div class="crtContent">\
                                <div>\
                                    <p class="crtHead">'+jCrtHead.old+'</p>\
                                    <h2>\
                                        '+jCrt.old+'\
                                    </h2>\
                                </div>\
                                <div>\
                                    <p>Average CRT / Visitor:</p>\
                                    <h3>'+jAvgCrt.old+'</h3>\
                                </div>\
                            </div>\
                        </div>';
        if(divId == "selectHomeCRT"){
            crtHomeContents.innerHTML = crtTemp;
            return;
        };
        crtMarketContents.innerHTML = crtTemp;
        return;
    };

///////// Chart (Subscribers)
    if(e.target.classList.contains("subSelect")){
        var divId = e.target.getAttribute("data-id");
        var sSelectValue = document.getElementById(divId).value;
        var divHomeSub = "";
        var divMarketSub = "";
        if(sSelectValue == "year"){
            sChartId = "#graphHome3";
            divHomeSub = '<canvas id="graphHome3"></canvas>';
            sMarketChartId = "#graphMarket7";
            divMarketSub = '<canvas id="graphMarket7"></canvas>';
            aNewData = [1984, 2281, 2019, 2102, 2350];
            aLabels = ["2013", "2014", "2015", "2016", "2017"];
            jSize = {"w":50 , "h":39};
            sZero = true;
            if(divId == "selectGraphSub"){
                $(sChartId).replaceWith(divHomeSub);
                chartSignUp(sChartId , aLabels , aNewData , jSize.w , jSize.h , sZero);
                return
            };
            $(sMarketChartId).replaceWith(divMarketSub);
            chartSignUp(sMarketChartId , aLabels , aNewData , jSize.w , jSize.h , sZero);
            return;
        };
        if(sSelectValue == "month"){
            sChartId = "#graphHome3";
            divHomeSub = '<canvas id="graphHome3"></canvas>';
            sMarketChartId = "#graphMarket7";
            divMarketSub = '<canvas id="graphMarket7"></canvas>';
            aNewData = [203, 257, 352, 382, 393, 402];
            aLabels = ["May", "June", "July", "August", "September", "Oktober"];
            jSize = {"w":50 , "h":39};
            sZero = true;
            if(divId == "selectGraphSub"){
                $(sChartId).replaceWith(divHomeSub);
                chartSignUp(sChartId , aLabels , aNewData , jSize.w , jSize.h , sZero);
                return
            };
            $(sMarketChartId).replaceWith(divMarketSub);
            chartSignUp(sMarketChartId , aLabels , aNewData , jSize.w , jSize.h , sZero);
            return;
        };
        if(sSelectValue == "week"){
            sChartId = "#graphHome3";
            divHomeSub = '<canvas id="graphHome3"></canvas>';
            sMarketChartId = "#graphMarket7";
            divMarketSub = '<canvas id="graphMarket7"></canvas>';
            aNewData = [90, 82, 76, 102, 114, 97, 90, 119, 101];
            aLabels = ["Week 36", "Week 37", "Week 38", "Week 39", "Week 40", "Week 41", "Week 42", "Week 43" , "Week 44"];
            jSize = {"w":50 , "h":39};
            sZero = true;
            if(divId == "selectGraphSub"){
                $(sChartId).replaceWith(divHomeSub);
                chartSignUp(sChartId , aLabels , aNewData , jSize.w , jSize.h , sZero);
                return
            };
            $(sMarketChartId).replaceWith(divMarketSub);
            chartSignUp(sMarketChartId , aLabels , aNewData , jSize.w , jSize.h , sZero);
            return;
        };
        if(sSelectValue == "day"){
            sChartId = "#graphHome3";
            divHomeSub = '<canvas id="graphHome3"></canvas>';
            sMarketChartId = "#graphMarket7";
            divMarketSub = '<canvas id="graphMarket7"></canvas>';
            aNewData = [6, 12, 10, 13, 14, 9, 8];
            aLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            jSize = {"w":50 , "h":39};
            sZero = true;
            if(divId == "selectGraphSub"){
                $(sChartId).replaceWith(divHomeSub);
                chartSignUp(sChartId , aLabels , aNewData , jSize.w , jSize.h , sZero);
                return
            };
            $(sMarketChartId).replaceWith(divMarketSub);
            chartSignUp(sMarketChartId , aLabels , aNewData , jSize.w , jSize.h , sZero);
            return;
        };
    };

///////// Pie (Time of visit)
    if(e.target.classList.contains("tovSelect")){
        var divId = e.target.getAttribute("data-id");
        var sSelectValue = document.getElementById(divId).value;
        var divNewHomePie = "";
        var divNewMarketPie = "";
        if(sSelectValue == "year"){
            sPieId = "#graphHome4";
            divNewHomePie = '<canvas id="graphHome4"></canvas>';
            sMarketPieId = "#graphMarket5";
            divNewMarketPie = '<canvas id="graphMarket5"></canvas>';
            aNewData = [40, 19, 17, 15, 2, 1, 3, 3];
            if(divId == "selectGraphTOV"){
                $(sPieId).replaceWith(divNewHomePie);
                pieTimeOfVisit(sPieId , aNewData);
                return;
            }
            $(sMarketPieId).replaceWith(divNewMarketPie);
            pieTimeOfVisit(sMarketPieId , aNewData);
            return;
        };
        if(sSelectValue == "month"){
            sPieId = "#graphHome4";
            divNewHomePie = '<canvas id="graphHome4"></canvas>';
            sMarketPieId = "#graphMarket5";
            divNewMarketPie = '<canvas id="graphMarket5"></canvas>';
            aNewData = [34, 28, 19, 7, 1, 1, 2, 8];
            if(divId == "selectGraphTOV"){
                $(sPieId).replaceWith(divNewHomePie);
                pieTimeOfVisit(sPieId , aNewData);
                return;
            }
            $(sMarketPieId).replaceWith(divNewMarketPie);
            pieTimeOfVisit(sMarketPieId , aNewData);
            return;
        };
        if(sSelectValue == "week"){
            sPieId = "#graphHome4";
            divNewHomePie = '<canvas id="graphHome4"></canvas>';
            sMarketPieId = "#graphMarket5";
            divNewMarketPie = '<canvas id="graphMarket5"></canvas>';
            aNewData = [39, 26, 13, 6, 0, 0, 3, 8];
            if(divId == "selectGraphTOV"){
                $(sPieId).replaceWith(divNewHomePie);
                pieTimeOfVisit(sPieId , aNewData);
                return;
            }
            $(sMarketPieId).replaceWith(divNewMarketPie);
            pieTimeOfVisit(sMarketPieId , aNewData);
            return;
        };
        if(sSelectValue == "day"){
            sPieId = "#graphHome4";
            divNewHomePie = '<canvas id="graphHome4"></canvas>';
            sMarketPieId = "#graphMarket5";
            divNewMarketPie = '<canvas id="graphMarket5"></canvas>';
            aNewData = [39, 32, 10, 8, 0, 0, 4, 7];
            if(divId == "selectGraphTOV"){
                $(sPieId).replaceWith(divNewHomePie);
                pieTimeOfVisit(sPieId , aNewData);
                return;
            }
            $(sMarketPieId).replaceWith(divNewMarketPie);
            pieTimeOfVisit(sMarketPieId , aNewData);
            return;
        };
    };
});

