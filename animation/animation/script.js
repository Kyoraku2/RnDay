//Embedded JavaScript code for the animations of the webpage

//Content for the slider
const items = document.querySelectorAll(".slider div");
const nbSlide = items.length;
const next = document.querySelector('.left');
const back = document.querySelector('.right');

const quit = document.querySelectorAll(".modal_close");
const openInstructions = document.querySelector("#Instructions");
const openTarget = document.querySelector("#targetImg");

//Hiding hypertext at the launch of the page
hide();

//Events listeners to show hypertext links when a window is closed
quit[0].addEventListener('click',show);
quit[1].addEventListener('click',show);
quit[2].addEventListener('click',show);
quit[3].addEventListener('click',show);
quit[4].addEventListener('click',show);
quit[5].addEventListener('click',show);
quit[6].addEventListener('click',show);
quit[7].addEventListener('click',show);

//Events listeners to hide hypertext links when a window is opened
openInstructions.addEventListener('click',hide);
openTarget.addEventListener('click',hide);

function hide() {
    document.getElementById('targetImg').style.visibility = "hidden";
    document.getElementById('Instructions').style.visibility = "hidden";
    document.getElementById('settings').style.visibility = "hidden";
    showFixedImg();
}

function show() {
    document.getElementById('targetImg').style.visibility = "visible";
    document.getElementById('Instructions').style.visibility = "visible";
    document.getElementById('settings').style.visibility = "visible";
}

function hideFixedImg(){
    document.getElementById('main_img').setAttribute("src", "img/animation.gif");
}

function showFixedImg(){
    document.getElementById('main_img').setAttribute("src", "img/animation_img.png");
}


let count = 0;

function slideNext() {
    items[count].classList.remove('active');
    if(count<nbSlide-1){
        count++;
   
    }
    items[count].classList.add('active');
}

next.addEventListener('click',slideNext);

function slideBack() {
    items[count].classList.remove('active');
    if(count>0){
        count--;
    }
    items[count].classList.add('active');
}

back.addEventListener('click',slideBack);


//Computing results
const intensity = document.getElementsByName("choice");
const submit = document.getElementById("send");

submit.addEventListener('click',computeResults);

function trigger(nb) {  
    switch(nb){
        case 1:
            window.location.href='#good_result';
        break;
        case 2:
            window.location.href='#wrong_1';
        break;
        case 3:
            window.location.href='#wrong_2';
        break;
        case 4:
            window.location.href='#wrong_3';
        break;
        case 5:
            window.location.href='#wrong_4';
        break;
        case 6:
            window.location.href='#wrong_5';
    }
    hide();
}

function computeResults() {
    let check = document.getElementById("box").checked; 
    hideFixedImg();
    for(let i = 0; i<3; ++i){
        if(intensity[2].checked&&!check){
            setTimeout(trigger,5000,1);
        }
        else{
            if(intensity[0].checked&&check){
                setTimeout(trigger,6000,2);
            }
            else if(intensity[1].checked&&check){
                setTimeout(trigger,6000,3);
            }
            else if(intensity[2].checked&&check){
                setTimeout(trigger,6000,4);
            }
            else if(intensity[0].checked&&!check){
                setTimeout(trigger,6000,5);
            }
            else{
                setTimeout(trigger,6000,6);
            }
        }
    } 
}

function inputNumber(val) {
    document.getElementById("output").value+=val
}

function erase() {
    document.getElementById("output").value='';
} 

let box = document.getElementById('box');

box.addEventListener('click',desactivateMeasure);

function desactivateMeasure() {
    window.location.href='#panel';
    box.checked=true;
    alert("Mot de passe requis");
}

function validate() {
    if(document.getElementById("output").value=="1996") {
        box.checked=false;
        window.location.href='#validation';
    }
}