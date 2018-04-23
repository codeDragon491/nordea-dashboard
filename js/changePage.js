function changePage( pageId ){
	var sPage = document.getElementsByClassName("page");
	for(var i = 0; i < sPage.length; i++){
		sPage[i].classList.remove("showPage");
		document.getElementById(pageId).classList.add("showPage");
	};
	var sActive = document.getElementsByClassName("active");
	for(var j = 0; j < sActive.length; j++){
		sActive[j].classList.remove("active");
	};
	var sDisplaySubmenu = document.getElementsByClassName("showMenu");
	for(var k = 0; k < sDisplaySubmenu.length; k++){
		sDisplaySubmenu[k].classList.remove("showMenu");
	};
};

var iCount = true;
document.addEventListener("click" , function(e){
//// Change pages
	if(e.target.classList.contains("displayPage")){
		var sPage = e.target.getAttribute("data-page");
		var sSubmenu = e.target.getAttribute("data-subMenu");	
		changePage( sPage );
		e.target.classList.add("active");
		
		
		if(sPage == "pageHome"){
			pageTitle.innerHTML = "Overview";
			addTitle(aGraphHomeTitle , sPageHomeTitle);
			document.getElementById(sSubmenu).classList.add("showMenu");
			navBack.style.display = "none";
			menuHome.classList.add("active");
			return;
		};
		if(sPage == "pageMarket"){
			pageTitle.innerHTML = "Analyze Website";
			addTitle(aGraphMaketTitle , sPageWebsiteTitle);
			document.getElementById(sSubmenu).classList.add("showMenu");
			return;
		};
		if(sPage == "pageArticle"){
			pageTitle.innerHTML = "Analyze Article";
			addTitle(aGraphArticleTitle , sPageArticleTitle);
			document.getElementById(sSubmenu).classList.add("showMenu");
			return;
		};
		if(sPage == "pageSearchResults"){
			pageTitle.innerHTML = "Search Results";
			addTitle(aGraphArticleTitle , sPageArticleTitle);
			var btnBack = '<i class="fa fa-arrow-left displayPage" aria-hidden="true" data-page="pageHome" data-subMenu="subMenuHome"></i>';
			navBack.innerHTML = btnBack;
			navBack.style.display = "block";
			return;
		};
		if(sPage == "pageSingleArticle"){
			pageTitle.innerHTML = "Article XXXXX";
			var btnBack = '<i class="fa fa-arrow-left displayPage" aria-hidden="true" data-page="pageSearchResults"></i>';
			navBack.innerHTML = btnBack;
			navBack.style.display = "block";
			return;
		};
		if(sPage == "pageSettings"){
			pageTitle.innerHTML = "Personal Settings";
			return;
		};
		if(sPage == "pageTasks"){
			pageTitle.innerHTML = "Tasks";
			return;
		};
		if(sPage == "pageFavorites"){
			pageTitle.innerHTML = "Favorites";
			return;
		};
		if(sPage == "pageMessages"){
			pageTitle.innerHTML = "Direct Message";
			if(iCount){
				chatBox();
				iCount = false;
			}
			return;
		};
		if(sPage == "pageNotifications"){
			pageTitle.innerHTML = "Notifications";
			return;
		};
	};
//// return Home when press on Logo
	if(e.target.classList.contains("sLogo")){
		changePage( "pageHome" );
		pageTitle.innerHTML = "Overview";
		navBack.style.display = "none";
		//// Show Main Menu
		navProfile.style.display = "none";
		menuHome.classList.add("active");
        subMenuHome.classList.add("showMenu");
		navMain.style.display = "block"; 
		settingsOn = false;
		return;
	};
});
