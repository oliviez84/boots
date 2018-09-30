$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();  
        
    $('.collapse').on('shown.bs.collapse', function(){
$(this).parent().find(".fa-angle-double-down").removeClass("fa-angle-double-down").addClass("fa-angle-double-up");
}).on('hidden.bs.collapse', function(){
$(this).parent().find(".fa-angle-double-up").removeClass("fa-angle-double-up").addClass("fa-angle-double-down");
});



});