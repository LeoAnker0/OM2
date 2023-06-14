import menuModal from '../html/menuModal.html?raw';

export function MENUdisplay(params, event) {
    console.log(params);



    var x = event.clientX;
    var y = event.clientY;


    /*
    let x = 886;
    let y = 317;*/

    const MENUmodalEnvironment = document.getElementById('MENUmodalEnvironment');
    MENUmodalEnvironment.innerHTML = menuModal;

    MENUmodalEnvironment.style.display = "block";

    const MENUmodalBody = document.getElementById('MENUmodalBody');
    MENUmodalEnvironment.addEventListener('click', menuHide);


    const MENUmodalBodyWidth = MENUmodalBody.offsetWidth;
    const MENUmodalBodyHeight = MENUmodalBody.offsetHeight;

    x = (x - MENUmodalBodyWidth) + "px";
    y = (y) + "px";


    MENUmodalBody.style.top = y;
    MENUmodalBody.style.left = x;

}

function menuHide(event) {
    const background = document.getElementById('MENUmodalEnvironment');

    // Check if the click target is the background itself
    if (event.target === background) {
        background.style.display = 'none';
    }
}