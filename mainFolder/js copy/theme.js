;(function($) {
    "use strict"; 
    
    // sidebar_menu All Page/
    $("#menu-opener").on('click', function () {
        $(".sidebar-menus").toggleClass("active");
    });
    $(".remove-one").on('click', function () {
        $(".sidebar-menus").removeClass("active");
    }); 
        
 
    /* Calls The Function*/       
    
})(jQuery);