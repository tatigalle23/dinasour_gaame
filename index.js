document.addEventListener("DOMContentLoaded", () => {
    var count=0 

    const score= document.querySelector('.count');
    const cactus = document.querySelector('.cactus');
    let cactusRight = 0;    
    let cactusMov=setInterval(function() {
        let cactusAgain=setInterval(function(){
            if(cactusRight>1400){
                cactusRight=0;
            }
        },3);
        cactusRight += 1;
        cactus.style.right = `${cactusRight}px`
        count+=1;
        score.textContent("SCORE: "+count);
        
                
    },3);  
    

   

    const cactus3= document.querySelector('.cactus3');
    let cactusRight3 = -500;    
    let cactusMov3=setInterval(function() {
        let cactusAgain=setInterval(function(){
            if(cactusRight3>1400){
                cactusRight3=-500;
            }
        },3);
        cactusRight3 += 1;
        cactus3.style.right = `${cactusRight3}px`
    },3);

    
    const dino = document.querySelector('.dino');
    let bottom=21
    let gravity=0.9
    let isJumping= false
    function jump(){
        if(isJumping) return 
        let timerUpId= setInterval(function(){
            if(bottom>150){
                clearInterval(timerUpId)
                let timerDownId=setInterval(function(){
                    if(bottom<21){
                        clearInterval(timerDownId)
                        isJumping=false
                    }
                    bottom -=5
                    dino.style.bottom=bottom+'px'
                },30)
            }
            isJumping=true
            bottom+=40
            bottom=bottom*gravity
            dino.style.bottom=bottom+'px'
        },30)
        
    }    

    function control(e){
        if(e.keyCode===38 || e.keyCode===32){
            jump()
        }
    }
    document.addEventListener('keydown',control)

    let stopGame=setInterval(function(){
        let cactusLeft=cactus.getClientRects()[0].left
        let cactusLeft1=cactus3.getClientRects()[0].left

        let dinoTop=dino.getClientRects()[0].bottom
        console.log(dinoTop)
        if(cactusLeft<80 && cactusLeft>0 && dinoTop>=467 || cactusLeft1<80 && cactusLeft1>0 && dinoTop>=467){
            alert("Game over");
        }
    },10);

});
