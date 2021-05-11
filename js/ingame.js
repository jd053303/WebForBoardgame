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
    $(".sortBtn").click(function(){
        ssort(mycards);
    });
    
    //document.write('(호호) : ' +cardNum+ '<br>');
});

//남은 카드 개수(오른쪽 클릭)
var oneany = 11;
var twoany = 14;
var threeany = 13;
var right=0;

document.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    // console.log(e);
    right === 1 ? right=0 : right=1;
    any();
});
function any(){
    if(right==1){
        $('.onere').text(oneany);
        $('.twore').text(twoany);
        $('.threere').text(threeany);
    } else {
        $('.onere').text("4-14");
        $('.twore').text("15-28");
        $('.threere').text("29-41");
    }
}

//카드뽑기
var allcard = [];
var newnum;
var mycards = [];
var mycardnum = 0;
var repcard=[];

function getcard(sel){
    let a = Math.floor(Math.random()*11 + 4);
    let b = Math.floor(Math.random()*14 + 15);
    let c = Math.floor(Math.random()*13 + 29);

    newnum = sel === "one" ? a : sel === "two" ? b : c;

    if(allcard[newnum]==null){
        allcard[newnum] = 1;
        mycards[mycardnum]=newnum;
        delcards();
        showcard(newnum);
        mycardnum++;

        newnum < 15 ? oneany-- : (newnum>14&&newnum<29) ? twoany-- : threeany--;
        any();
    }else getcard(sel);
}

//카드다뽑았다
var onedone = document.querySelector('.one')
var twodone = document.querySelector('.two')
var threedone = document.querySelector('.three')
var cardsdone;

function delcards(){
    for(let i=4; i<=41; i++){
        if(i==4||i==15||i==29){
            cardsdone=1;
        }
        if( allcard[i]!=null){ 
            if(allcard[i]!=null&&(i==14||i==28||i==41)&& cardsdone==1){
                let wh = i === 14 ? onedone : i === 28 ? twodone : threedone;
                wh.style.cssText  = `transform: translateX(-50px); transition: 0.3s;`
                wh.classList.remove('delhov');
            }
        }else cardsdone=0;
    }
}

//카드서랍
var drawer = document.querySelector('.drawer');
function showcard(num){
    let img = new Image();
    img.src='../img/'+num+'.png'; 
    drawer.appendChild(img);
}

//카드정렬
function ssort(mycards){
    mycards.sort(function (a, b) {
        return a - b;
    });
    
    drawer.innerHTML = "";
    mycards.forEach(element => {
        showcard(element);
    });
}


    
// var userNum = document.querySelector('input[name="num"]').value;