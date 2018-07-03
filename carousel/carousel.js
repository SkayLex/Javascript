var lis = document.getElementsByTagName('li');

for(var i = 0; i<lis.length; i++){
  lis[i].style.position = 'relative';
  var span = document.createElement('span');
  span.style.cssText = 'positionAbsolute; left:0; top:0';
  span.innerHTML =1;
  lis[i].appendChild(span);
}

var width = 1024;
var count = 1;

var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElements = carousel.querySelectorAll('li');

var position = 0;

carousel.querySelector('.prev').onclick = function(){
  position = Math.min(position + width * count,0);
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function (){
  position = Math.max(position - width * count, -width * (listElements.length - count));
  list.style.marginLeft = position + 'px';
};
