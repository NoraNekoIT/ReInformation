var nav = document.getElementById('populer');

window.onscroll = function () {

  if(window.pageYOffset > 1000){

   populer.style.position = "fixed";
   populer.style.top = "40px";
   populer.style.right = "0px";
   populer.style.left = "830px";
 

   }else{
     // nav.style.position = "absolute";
     populer.style.position = 'relative'; //fixed
     populer.style.top = 90;
     populer.style.left = 0;
   }
}