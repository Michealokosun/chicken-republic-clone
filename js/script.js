let items = document.querySelectorAll('.item1')
let item = document.querySelector('.items')



const maxscroolleft = item.scrollWidth - item.clientWidth;


function autoplay() {
    if(item.scrollLeft > (maxscroolleft -1) ){
        item.scrollLeft -=maxscroolleft;

    }else{
        item.scrollLeft += 1
    }
    
}

let play =  setInterval( autoplay, 100);



for(let i = 0; i < items.length; i++){
    items[i].addEventListener("mouseover", () =>{
        clearInterval(play)
    })
    items[i].addEventListener("mouseout", () =>{
       return play = setInterval(autoplay, 100)
    })

}





let slides = document.querySelectorAll('.sliders');
let slide = document.querySelector('.news-slide');
let btn_left = document.querySelector('.left-btn')
let btn_right = document.querySelector('.right-btn')

btn_left.addEventListener('click', () =>{
    slide.scrollLeft -= 125

})
btn_right.addEventListener('click', () =>{
    slide.scrollLeft += 125
})

// -=============================================




var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<b class="wrap">'+this.txt+'</b>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 1000;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};


window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    // css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};







// hamburger moblie view
const hamburger = document.getElementById('btn');
const menu = document.getElementById("nav-menu")
const remove = document.getElementById("close")

hamburger.onclick = function (){
    menu.classList.add('open')
}

remove.onclick = function (){
    menu.classList.remove("open")
}



// pop-up
const pop = document.getElementById('pop-up')
const pop_close = document.getElementById('pop-close')

setTimeout(()=>{
    
        pop.style.visibility= 'visible'
    
    

}, 1000)


pop_close.onclick = function(){
    pop.style.visibility = 'hidden'
}



// loader

const loader = document.getElementById("pre-loader")



window.addEventListener('load', ()=>{
    loader.style.display = 'none'
})
 
// window.onload = function(){
//     
// }