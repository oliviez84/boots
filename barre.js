$(document).ready(function(){

    $("input#val").change(function(){
       var $valeur = $("#val").val();
        var $valeurOk = $valeur +"%"
        $('#valueText').html("<div>Valeur de la barre de progression : "+ $valeur +"<div>" );
        $('#barre1').css('width',$valeurOk);
        $('#barre2').css('width',$valeurOk);
        $('#barre3').css('width',$valeurOk);
            
        })
    $("input#valimg").change(function(){
       var $valeurimg = $("#valimg").val();
        var $valeurOkimg = $valeurimg + "deg"
        $('#valuerot').html("<div>Rotation d une image : "+ $valeurimg +" deg<div>" );
        $('.carre,.cercle').css('transform','rotate( ' + $valeurOkimg + ' )');
   
            
        })
    
    });