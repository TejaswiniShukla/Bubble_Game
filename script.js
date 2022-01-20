var timerelem=document.querySelector('#timerelem')
var clickelem=document.querySelector('#clickelem')
var scoreelem=document.querySelector('#scoreelem') 
var bot=document.querySelector('#bottom')

var timer= 60;
var rannum='';
var points=0;



function showbubble(){
    var temp=``;
    for(var i=1;i<85;i++){
        temp+=`<div class="bubble">${Math.floor(Math.random()*10)}</div> `
    }
    document.querySelector("#bottom").innerHTML=temp;
}




function timerinter(){
    set=setInterval(function(){
        if(timer<0){
    
        }
        else{
            timerelem.textContent=timer;
            timer--;
        }
    
    },1000)
    
}

function getrannum(){
    rannum=Math.floor(Math.random()*10)
    clickelem.textContent=rannum;

}

function scorincrement(){ 
        points=points+10;
        scoreelem.textContent=points
}

bot.addEventListener('click',function(dets){
    var bub = Number(dets.target.textContent);
    if(bub===rannum){   
        scorincrement()  
        getrannum()
        showbubble() 
    }
    else{
        getrannum()
        showbubble()
    }
       
       
})

showbubble()
timerinter()
getrannum()





