document.addEventListener("change" , function(e){
///////// Bar (Article posted)
    if(e.target.classList.contains("apSelect")){
        var sSelectValue = selectArticlePosted.value;
        var divArticleAP = "";
        if(sSelectValue == "year"){
            sArticlePosted = "#graphArticle1";
            divArticleAP = '<canvas id="graphArticle1"></canvas>';
            jData = {"new":[534, 632, 583, 569, 596] , "old":[542, 621, 573, 615, 592]};
            jLabel = {"new":"2013 - 2017" , "old":"2008 - 2012"};
            jSize = {"w":100 , "h":50};
            aLabels = ["2013", "2014", "2015", "2016", "2017"];
            $(sArticlePosted).replaceWith(divArticleAP);
            showLineChart(sArticlePosted , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
            return;
        };
        if(sSelectValue == "month"){
            sArticlePosted = "#graphArticle1";
            divArticleAP = '<canvas id="graphArticle1"></canvas>';
            jData = {"new":[215, 233, 223, 244, 216, 222] , "old":[221, 211, 235, 254, 231, 248]};
            jLabel = {"new":"Jan - Jun" , "old":"Jul - Dec"};
            jSize = {"w":100 , "h":50};
            aLabels = ["July", "August", "September", "October", "November", "December"];
            $(sArticlePosted).replaceWith(divArticleAP);
            showLineChart(sArticlePosted , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
            return;
        };
        if(sSelectValue == "week"){
            sArticlePosted = "#graphArticle1";
            divArticleAP = '<canvas id="graphArticle1"></canvas>';
            jData = {"new":[35, 23, 43, 24, 36, 32, 30, 43, 39] , "old":[32, 31, 23, 35, 29, 33, 28, 36, 30]};
            jLabel = {"new":"Week 1 - 9" , "old":"Week 10 - 18"};
            jSize = {"w":100 , "h":50};
            aLabels = ["Week 10", "Week 11", "Week 12", "Week 13", "Week 14", "Week 15", "Week 16", "Week 17" , "Week 18"];
            $(sArticlePosted).replaceWith(divArticleAP);
            showLineChart(sArticlePosted , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
            return;
        };
        if(sSelectValue == "day"){
            sArticlePosted = "#graphArticle1";
            divArticleAP = '<canvas id="graphArticle1"></canvas>';
            jData = {"new":[5, 3, 3, 4, 6, 2, 0] , "old":[2, 1, 3, 5, 2, 3, 8]};
            jLabel = {"new":"This week" , "old":"Last week"};
            jSize = {"w":100 , "h":50};
            aLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            $(sArticlePosted).replaceWith(divArticleAP);
            showLineChart(sArticlePosted , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
            return;
        };
    };

///////// Bar (Articles from countries)
    if(e.target.classList.contains("acSelect")){
        var sSelectValue = selectArticleCountries.value;
        var divArticleAFC = "";
        if(sSelectValue == "year"){
            sArticlePosted = "#graphArticle2";
            divArticleAFC = '<canvas id="graphArticle2"></canvas>';
            jData = {"new":[456, 439, 431, 440, 436, 442, 459] , "old":[432, 451, 438, 445, 452, 433, 448]};
            jLabel = {"new":"2013 - 2017" , "old":"2008 - 2012"};
            jSize = {"w":100 , "h":80};
            aLabels = ["DK", "GER", "SWE", "NOR", "FR", "GB", "RUS"];
            $(sArticlePosted).replaceWith(divArticleAFC);
            showLineChart(sArticlePosted , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
            return;
        };
        if(sSelectValue == "month"){
            sArticlePosted = "#graphArticle2";
            divArticleAFC = '<canvas id="graphArticle2"></canvas>';
            jData = {"new":[125, 134, 129, 140, 136, 128, 145] , "old":[121, 119, 130, 135, 132, 139, 138]};
            jLabel = {"new":"Jan - Jun" , "old":"Jul - Dec"};
            jSize = {"w":100 , "h":80};
            aLabels = ["DK", "GER", "SWE", "NOR", "FR", "GB", "RUS"];
            $(sArticlePosted).replaceWith(divArticleAFC);
            showLineChart(sArticlePosted , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
            return;
        };
        if(sSelectValue == "week"){
            sArticlePosted = "#graphArticle2";
            divArticleAFC = '<canvas id="graphArticle2"></canvas>';
            jData = {"new":[35, 33, 23, 29, 36, 32, 30] , "old":[32, 25, 33, 29, 32, 33, 35]};
            jLabel = {"new":"Week 1 - 9" , "old":"Week 10 - 18"};
            jSize = {"w":100 , "h":80};
            aLabels = ["DK", "GER", "SWE", "NOR", "FR", "GB", "RUS"];
            $(sArticlePosted).replaceWith(divArticleAFC);
            showLineChart(sArticlePosted , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
            return;
        };
        if(sSelectValue == "day"){
            sArticlePosted = "#graphArticle2";
            divArticleAFC = '<canvas id="graphArticle2"></canvas>';
            jData = {"new":[5, 3, 3, 4, 6, 2, 5] , "old":[2, 1, 3, 5, 2, 3, 8]};
            jLabel = {"new":"This week" , "old":"Last week"};
            jSize = {"w":100 , "h":80};
            aLabels = ["DK", "GER", "SWE", "NOR", "FR", "GB", "RUS"];
            $(sArticlePosted).replaceWith(divArticleAFC);
            showLineChart(sArticlePosted , aLabels , jLabel.old , jData.old , jLabel.new , jData.new , jSize.w , jSize.h);
            return;
        };
    };

///////// Pie (Article readership)
    if(e.target.classList.contains("arSelect")){
        var sSelectValue = selectArticleRShip.value;
        var divArticleAR = "";
        if(sSelectValue == "year"){
            sPieId = "#graphArticle3";
            divArticleAR = '<canvas id="graphArticle3"></canvas>';
            aNewData = [21, 24, 55];
            $(sPieId).replaceWith(divArticleAR);
            showPieChart(sPieId , aNewData);
            return;
        };
        if(sSelectValue == "month"){
            sPieId = "#graphArticle3";
            divArticleAR = '<canvas id="graphArticle3"></canvas>';
            aNewData = [23, 25, 52];
            $(sPieId).replaceWith(divArticleAR);
            showPieChart(sPieId , aNewData);
            return;
        };
        if(sSelectValue == "week"){
            sPieId = "#graphArticle3";
            divArticleAR = '<canvas id="graphArticle3"></canvas>';
            aNewData = [20, 26, 54];
            $(sPieId).replaceWith(divArticleAR);
            showPieChart(sPieId , aNewData);
            return;
        };
        if(sSelectValue == "day"){
            sPieId = "#graphArticle3";
            divArticleAR = '<canvas id="graphArticle3"></canvas>';
            aNewData = [24, 26, 50];
            $(sPieId).replaceWith(divArticleAR);
            showPieChart(sPieId , aNewData);
            return;
        };
    };
});