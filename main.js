function cirCount(element) {
let text = document.getElementById('text1')
  var count = parseInt(text.innerHTML);
  count++;
  text.innerHTML = count;
}



function mouseOverEffect() {
    let cir = document.getElementById('mouse');
    cir.style.stroke = "black";
    cir.style.strokewidth = "2px";
}
function mouseOutEffect() {
    let cir = document.getElementById('mouse');
    cir.style.stroke = "none";
}


var count = 0;
function hide() {
    let cir3 = document.getElementById('cir_three'); 
    count++;
    if(count % 2 == 0) { 
        cir3.style.opacity = "1";
    }
    else {
        cir3.style.opacity = "0";
    }

}
