var lastFocusedElement = null;
$(document).ready(function () {
    //addAccessibilityRolesAndTab();
    //setTabIndex();
    document.addEventListener('keydown', function (e) {
        var code = e.keyCode ? e.keyCode : e.which;
        if (e.keyCode === 9) {
            $('body').addClass('show-focus-outlines');
        }
    });
    document.addEventListener('click', function (e) {
        $('body').removeClass('show-focus-outlines');
    });

    setTimeout(function () {
        $(".annim-text-slide").removeClass("annim-text-slide")
        $(".annim-bg-image").removeClass("annim-bg-image")
        $(".annimmenu").removeClass("annimmenu")
        $(".annim-orbit1").removeClass("annim-orbit1")
        $(".annim-orbit2").removeClass("annim-orbit2")
        $(".annim-orbit3").removeClass("annim-orbit3")
        $(".annim-fade").removeClass("annim-fade")
    }, 3000)

});

$(document).on('click', '.link-learmore', function (event) {
    event.preventDefault();
    $('.container-fs-popup.disclaimer').ShowElement();
    $(".popup-content-title").focus();
    $(".container-fs").HideElement();
    lastFocusedElement = $(this);
});


$(document).on('click', '#disclaimerClose', function (event) {
    event.preventDefault();
    $(".container-fs").ShowElement();
    lastFocusedElement.focus();
    $('.container-fs-popup.disclaimer').HideElement();
});

$(document).on("click", '.link-tab', function (event) {
    //debugger;
    var ismobileview = $(this).closest(".top-mobile-menu-button").length>0?true:false;
    if(ismobileview){
        $(".mobile-menu").HideElement();
        $(".orbitdiv").removeClass("moreinfolowerzindex")
    }
    $(".sub-menu li.active").removeClass("active");
    $("li.top-menu-item.active").removeClass("active")
    var dataid = $(this).attr("data-tabid");
    if(dataid == "slide-aboutthebook"){
        $(this).closest("li.top-menu-item").addClass("active")
    }
    if (!$(this).hasClass("active")) {
        
        if(dataid == "slide-aboutthebook"){
            $("body").addClass("black");
            $(".top-mobile-menu-button").addClass("homescreen")
            /*if(ismobileview){
                $(".mobile-menu").HideElement();
                $(".orbitdiv").removeClass("moreinfolowerzindex")
            }*/
            $(".top-mobile-menu-button").find(".nav-title h1").text($(this).text())
            $(".top-mobile-menu-button").find(".nav-title").HideElement();
            $(this).closest("li.top-menu-item").addClass("active")
        }
        else{
            $("body").removeClass("black");
            $(".top-mobile-menu-button").removeClass("homescreen")
            /*if(ismobileview){
                $(".mobile-menu").HideElement();
                $(".orbitdiv").removeClass("moreinfolowerzindex")
            }*/
            $(".top-mobile-menu-button").find(".nav-title h1").text($(this).text())
            $(".top-mobile-menu-button").find(".nav-title").ShowElement();
        }
        $(".link-tab.active").removeClass("active").attr("aria-selected", "false")
        $(this).addClass("active").attr("aria-selected", "true")
        $("#" + dataid).ActiveTabs();
        $("#" + dataid).find(".side-nav li a:first").focus();
        $(".container-fs.slide:not(#" + dataid + ")").InactiveTabs();
    }
});

$(document).on("click", ".left-side-bar .side-nav ul li a, .mobile-menu-container .top-menu-item .sub-menu a", function (event) {
    var ismobileview = $(this).closest(".top-mobile-menu-button").length>0?true:false;
    if(ismobileview){
        
        $(this).closest(".top-menu-item").find("a.link-tab").trigger("click");
        $(".mobile-menu").HideElement();
        $(".orbitdiv").removeClass("moreinfolowerzindex")
        $(".sub-menu li.active").removeClass("active");
        $(this).closest("li").addClass("active")
        $(this).closest(".top-mobile-menu-button").find(".nav-title h1").text($(this).closest(".top-menu-item").find("a.link-tab").text())
        $(this).closest(".top-mobile-menu-button").find(".nav-title").ShowElement();

    }
    var panelregion = $(this).attr("panelregion");
    var panelId = $(this).attr("panelid");
    $(".side-nav." + panelregion + " ul li a").removeClass("active").attr("aria-current", "false").removeAttr("aria-describedby");
    $(this).addClass("active").attr("aria-current", "true").attr("aria-describedby", "selectedMenuText");

    $("." + panelregion + ".content-panel").removeClass("active").addClass("inactive").attr("aria-hidden", "true");
    $("." + panelregion + ".content-panel." + panelId).removeClass("inactive").addClass("active").attr("aria-hidden", "false");
    event.preventDefault();
	event.stopPropagation();
})

$(document).on("click", ".card-body .card-link", function (event) {
    var tablinkid = $(this).attr("data-tablinkid");
    $("#" + tablinkid).trigger("click");
    event.preventDefault();
	event.stopPropagation();
})

$(document).on('click', 'button.activitySupport', function (event) {
    event.preventDefault();
    //debugger
    var popupref = $(this).attr("popupref")
    $('.container-fs-popup.' + popupref).ShowElement();
    var ashlength = $('.container-fs-popup.' + popupref).find(".activitySupportHeading").length;
    if(ashlength>0){
        $('.container-fs-popup.' + popupref).find(".activitySupportHeading").focus();
    }
    else{
        if($('.container-fs-popup.' + popupref).find(".popup-left-title").length>0){
            $('.container-fs-popup.' + popupref).find(".popup-left-title").focus();
        }
        else{
            //$('.container-fs-popup.' + popupref).find(".activityLeft-title1").focus();
        }
    }
    $(".container-fs").HideElement();
    lastFocusedElement = $(this);
    event.preventDefault();
	event.stopPropagation();
});

$(document).on('click', '.ac-popup-close-btn', function (event) {
    $(".container-fs").ShowElement();
    lastFocusedElement.focus();
    $(this).closest(".container-fs-popup").HideElement();
    event.preventDefault();
	event.stopPropagation();
});

$(document).on('click', '.moreInfo', function (event) {
    //event.preventDefault();
    var popupref = $(this).attr("popupref")
    $('.container-fs-popup.aboutauthor').ShowElement();
    $(".aboutBookCover").focus();
    $(".container-fs").HideElement();
    lastFocusedElement = $(this)
    event.preventDefault();
	event.stopPropagation();
});

$(document).on('click', '#aboutauthorClose', function (event) {
    event.preventDefault();
    $(".container-fs").ShowElement();
    lastFocusedElement.focus();
    $('.container-fs-popup.aboutauthor').HideElement();
    event.preventDefault();
	event.stopPropagation();
});

$(document).on('keypress', '#aboutauthorClose, .ac-popup-close-btn, #disclaimerClose', function (event) {
    if(event.which == 13 || event.which == 32) {
        $(this).click();
    }
});

$(document).on("click", "#mobileMenuButton", function(event){
    $(".mobile-menu").ShowElement();
    $(".orbitdiv").addClass("moreinfolowerzindex")
    event.preventDefault();
	event.stopPropagation();
})
$(document).on("click", ".mobile-menu-overlay", function(event){
    $(".mobile-menu").HideElement();
    $(".orbitdiv").removeClass("moreinfolowerzindex")
    event.preventDefault();
	event.stopPropagation();
})




