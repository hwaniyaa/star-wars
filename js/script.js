window.onload = function(){
  let character01 = document.querySelector(".character01");


  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  let speed = 0.008;

  window.addEventListener("mousemove", moveE, false);

  function moveE(e){
    x = (e.clientX - window.innerWidth / 2);
    y = (e.clientY - window.innerHeight / 2);

    loop();
  }

  function loop(){
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    character01.style.transform = "translate("+ -(mx/100)+"px, "+ -(my/100)+"px"+")";
    // boxColorBg.style.transform = "translate("+ (mx/100)+"px, "+ (my/100)+"px"+")";
    // boxColor.style.transform = "translate("+ (mx/100)+"px, "+ (my/100)+"px"+")";
    // centerLi.style.transform = "translate("+ (mx/100)+"px, "+ (my/100)+"px"+")";
    // centerLi.style.transform = "translate3d("+ -(mx/10) +"px," + -(my/10) +"px,0) rotate3d(0,1,0,"+ -mx / 50 +"deg)";

    window.requestAnimationFrame(loop);
  }
}