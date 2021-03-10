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
        getcard("one");
    });
    $(".two").click(function(){
        getcard("two");
    });
    $(".three").click(function(){
        getcard("three");
    });

   
    //document.write('(호호) : ' +cardNum+ '<br>');
    
});

var allcard = [];
var newnum;
var cardNum;
var mycards = [];
var mycardnum = 0;
var repcard=[];
var same=1;

function getcard(sel){
    let a = Math.floor(Math.random()*11 + 4);
    let b = Math.floor(Math.random()*14 + 15);
    let c = Math.floor(Math.random()*13 + 29);

    newnum = sel === "one" ? a : sel === "two" ? b : c;
    if( allcard[newnum]==null){
        repcard[newnum] = 1;
        mycards[mycardnum]=newnum;
        mycardnum++;
        same=0;
        console.log('(호호) : ' +newnum+ '<br>');
    } else getcard(nan);
}



















// var userNum = document.querySelector('input[name="num"]').value;