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

document.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    console.log(e);
});

var allcard = [];
var newnum;
var remnum;
var mycards = [];
var mycardnum = 0;
var repcard=[];

//카드뽑기
function getcard(sel){
    let a = Math.floor(Math.random()*11 + 4);
    let b = Math.floor(Math.random()*14 + 15);
    let c = Math.floor(Math.random()*13 + 29);

    newnum = sel === "one" ? a : sel === "two" ? b : c;

    if(allcard[newnum]==null){
        allcard[newnum] = 1;
        delcards();
        mycards[mycardnum]=newnum;

        showcard(newnum);

        mycardnum++;
    } else getcard(sel);
}

var onedone = document.querySelector('.one')
var twodone = document.querySelector('.two')
var threedone = document.querySelector('.three')
//카드다뽑았다
function delcards(){
    
    for(let i=4; i<=41; i++){
        if(i==4||i==15||i==29){
            var cardsdone=1;
        }
        if( allcard[i]!=null){ 
            if((i==14||i==28||i==41)&& cardsdone==1){
                let wh = i === 14 ? "onedone" : i === 28 ? "twodone" : "threedone";
                wh.style.cssText  = `transform: translateX(-50px); transition: 0.3s;`
                wh.classList.remove('delhov');
                wh.classList.remove('delho');
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