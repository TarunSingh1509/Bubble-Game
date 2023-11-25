let timer=60;
let score=0;
let hitRn=0;
let timeIn;

function increaseScore(){
    score +=10;
    document.getElementById('scoreVal').innerHTML=score;
}

function timeInter(){
 timeIn= setInterval(function(){
    if(timer>0){
    timer--;
    document.getElementById('timerVal').innerHTML=timer;
    }
    else{
        document.getElementById("gbtm").classList.add('gameOver');
        document.getElementById("gbtm").innerHTML=`<h1>GAME OVER </h1>
        <h2>Your Score : ${score}</h2>
        `;
        clearInterval(timeIn)
    }
},1000)
}

function setHit(){
    hitRn=Math.floor(Math.random()*10);
    document.getElementById('hitVal').innerHTML=hitRn;
}


function makeBubble(){
    let bubble='';

    for(var i=0; i<102;i++){
        let rn=Math.floor(Math.random()*10);
        bubble+=`<div class="bubble">${rn}</div>`;
    }
    
    document.getElementById('gbtm').innerHTML=bubble;
}

document.getElementById("gbtm").addEventListener('click',function(dets){
    let checkNum= Number(dets.target.textContent);
    if(checkNum===hitRn){
        increaseScore();
        makeBubble();
        setHit();
    }
    else{
        document.getElementById("gbtm").classList.add('gameOver');
        document.getElementById("gbtm").innerHTML=`<h1>GAME OVER </h1>
        <h2>Your Score : ${score}</h2>
        `;
        clearInterval(timeIn)
    }
})


setHit();
timeInter();
makeBubble();