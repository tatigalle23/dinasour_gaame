document.addEventListener("DOMContentLoaded", () => {

    
    const cactus = document.querySelector('.cactus');
    let cactusRight = 50;    
    let cactusMov=setInterval(function() {
        cactusRight += 1;
        cactus.style.right = `${cactusRight}px`
    },10); 

    setInterval(function(){
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
    },2000);   

});
