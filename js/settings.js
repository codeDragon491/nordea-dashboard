var settingsOn = false;
btnProfileSettings.addEventListener("click" , function(){
    var sPage = document.getElementsByClassName("page");
    for(var i = 0; i < sPage.length; i++){
        sPage[i].classList.remove("showPage");
    };
    var sActive = document.getElementsByClassName("active");
    for(var j = 0; j < sActive.length; j++){
        sActive[j].classList.remove("active");
    };
    if(settingsOn){
        //// Show Overview Page
        pageHome.classList.add("showPage");
        //// Change Title
        pageTitle.innerHTML = "Overview";
        //// Show Main Menu
        navProfile.style.display = "none";
        subMenuHome.classList.add("showMenu");
        navMain.style.display = "block"; 
        menuHome.classList.add("active");
        settingsOn = false;
        return;
    }else{
        //// Show Profile Settings Page
        pageSettings.classList.add("showPage");
        //// Change Title
        pageTitle.innerHTML = "Personal Settings";
        //// Show Profile Menu
        navProfile.style.display = "flex";
        subMenuHome.classList.remove("showMenu");
        navMain.style.display = "none";
        menuSettings.classList.add("active");
        settingsOn = true;
        return;
    };
});