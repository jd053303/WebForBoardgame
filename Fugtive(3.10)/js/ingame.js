$(document).ready(function(){

    //메인 가기
    $(".mainBtn").click(function(){
        $(".gohome").show();
    });

    $(".go").click(function(){
        history.back();
    });
    $(".clo").click(function(){
        $(".gohome").hide();
    });
    
    $(".one").click(function(){
        onecards
    });

    newcard = Math.floor(Math.random()*10 + 4);  
    // document.write('(7) : ' +cardNum+ '<br>');  
});

var newcard;
var cardNum;
var mycards;
var mycardnum;
var repcard;
















// var userNum = document.querySelector('input[name="num"]').value;