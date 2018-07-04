var slides = [
    {
        title: "My first slide",
        url: "http://www.elementsofstyleblog.com/wp-content/uploads/2010/02/600x400-princeville-sunset.jpg"
    },
    {
        title: "My second one",
        url: "http://u-f.ru/sites/default/files/styles/main_700/public/uploads/end-of-the-world-today-planet-nibiru-to-bring-race-of-aliens-and-trigger-apocalypse-600x400.jpg?itok=PM7rs4Dc"
    },
    {
        title: "The last",
        url: "https://www.pravmir.ru/wp-content/uploads/2018/06/tatmitropolia.ru_0-600x400.jpg"
    }
];

function showSlide( index ){
 //console.log(slides [index] );
 var div = document.body.children[0];
 div.innerHTML += `
 <div>
    <h2>${slides[index].title}</h2>
    <img src = "${slides[index].url}">
  </div>`
}
function showCarousel(){
  var div = document.body.children[0];
  div.innerHTML = '';
  var i;
  for(i=0; i<3; i++)
  showSlide(i);
}
function prev(){
      //push,pop, shift,unshift
      slides.push(slides.shift() );
      showCarousel();
  }
  function next(){
    slides.unshift(slides.pop() );

      showCarousel();
  }
showCarousel();
setInterval(next, 3000);
//JavaScript
//setTimeout(f, interval)
//setInterval(f, interval)
//clearTimeout(id)
// clearInterval(id)
var n = 1;
setTimeout(function(){alert(n) }, 500);
while(n<=10){
  n++;
}
