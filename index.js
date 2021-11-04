document.addEventListener("DOMContentLoaded", () => {

    
    const cactus = document.querySelector('.cactus');
    let cactusRight = 50;    
    let cactusMov=setInterval(function() {
        cactusRight += 1;
        cactus.style.right = `${cactusRight}px`
    },5); 

    /*setInterval(function(){
    const dino = document.querySelector('.dino');
    let dinoUp = 21;    
    let dinoJump=setInterval(function() {
        dinoUp += 1;
        dino.style.bottom = `${dinoUp}px`
        
    }, 10);
    setTimeout(() => {clearInterval(dinoJump);}, 1000);
    setTimeout(() => {
        let dinoDown = 120;
        let dinoJumpDown=setInterval(function() {
            dinoDown -= 1;
            dino.style.bottom= `${dinoDown}px`
            
        }, 10);
        setTimeout(() => {clearInterval(dinoJumpDown);}, 1000);
    }, 1000);
    },2000);*/
    
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
                    //bottom=bottom*gravity
                    dino.style.bottom=bottom+'px'
                },30)
            }
            isJumping=false
            bottom+=40
            bottom=bottom*gravity
            dino.style.bottom=bottom+'px'
        },30)
        
    }
    

    function control(e){
        if(e.keyCode==38 || e.keyCode==32){
            jump()
        }
    }
    document.addEventListener('keydown',control)

});
