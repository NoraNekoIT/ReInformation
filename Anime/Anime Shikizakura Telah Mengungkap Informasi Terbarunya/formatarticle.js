var nav = document.getElementById('populer');

window.onscroll = function () {

  if(window.pageYOffset > 100){

   populer.style.position = "fixed";
   populer.style.top = "40px";
   populer.style.right = "0px";
   populer.style.left = "830px";
  
 

   }else{
     // nav.style.position = "absolute";
     populer.style.position = 'relative'; //fixed
     populer.style.top = 100;
     populer.style.left = 0;
 
   }
}

/*komentar*/
let add = () => {
  let name = document.querySelector('.container #name'); 
  let comment = document.querySelector('.container #comment'); 
   
  if (name.value !== "" && comment.value != "") { 
   
  let list = document.querySelector('.list'); 
  let time = new Date();
  let h = time.getHours(); 
  let m = time.getMinutes(); 
  let s = time.getSeconds(); 
  let now = h + ":" + m + ":" + s + " ";
  let list_item = document.createElement ("l1"); 

  list_item.innerHTML = `
  <div style="background-color : #0ed1f4; border-radius:20px; padding:5px ;  box-sizing: border-box; overflow: auto;max-width : 600px; ">
  <span  >
  <p> <span style="font-size : 25px;">${name.value} </span> <span style="font-size: 10px;  ">${now}</span>  </p> 
  </span>
  <p style="font-size: 15px;  ">${comment.value}</p>
  </div>
  <br>
  `;
  list.append(list_item); 
  }
   
  if (name.value == "" || comment.value == "") {
  let list = document.querySelector('.list'); 
  let list_item = document.createElement ("l2"); 
  var warn = 'Please enter name & comment!';  
  list_item.innerHTML = `
  <span>
  <p>${warn}</p> 
  </span>
  `;
  list.append(list_item); 
   }
  name.value=comment.value = "";
  }
