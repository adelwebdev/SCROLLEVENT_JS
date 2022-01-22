const imgImprovise = document.getElementById('img-improvise');
const popup = document.getElementById('pop-up');
let playOnce = 'true';

window.addEventListener('scroll', function(){
    console.log(window.innerHeight);
    console.log(window.scrollY);
    console.log(document.body.offsetHeight);

    scrollValue = (window.innerHeight+window.scrollY)/(document.body.offsetHeight);
    console.log(scrollValue);

    if(scrollValue > 0.45){
         imgImprovise.style.opacity = '1';
         imgImprovise.style.transform = 'none';
    }

    //newsletter popup
    function playFunctionOnce(){
        if (scrollValue > 0.84 && playOnce){
                this.setTimeout(() => {
                    popup.style.opacity = '1';
                    popup.style.transform = 'none';
                }, 1500);
                playOnce = false;
        };
    };
    playFunctionOnce();
})

document.getElementById('close').addEventListener('click', () => {
    popup.style.opacity = '0';
    popup.style.transform = 'translateX(500px)';
})