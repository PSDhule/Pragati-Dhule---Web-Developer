var typed = new typed(".text",{
    String: ["Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})


 //circle skill///
 const circle = document.querySelectorAll('.circle')
 circles.forEach(element => {
     var dots = element.getAttribute("data-dots");
     var marked = element.getAttribute("data-percent");
     var percent = Math.floor(dots*marked/100);
     var points = "";
     var rotate = 360 / dots;


     for(let i = 0; i < dots; i++){
         points +=` <div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
     }
     element.innerHTML = points;
 });