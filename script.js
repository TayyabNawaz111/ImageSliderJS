let flag = 0;

function controller(x){
    flag += x;
    sildeshow(flag);
}

sildeshow(flag);

function sildeshow(num){
   let slides =  document.getElementsByClassName("slider");
   
   if(num == slides.length){
    num = 0;
    flag = 0;
   }

   if(num < 0){
    num = slides.length-1
    flag = slides.length-1
   }

   for(let y of slides){
    y.style.display = "none";
   }
    slides[num].style.display = "block";
}

