const KEY = 'AIzaSyBsdirtGTFaBkziY-FkoJDnJ2SHS_a8Gbc';
const URL = 'https://maps.googleapis.com/maps/api/distancematrix/json';


var from_address = 'Chisinau';
var to_address   = 'Paris';

function calculate(){

   var xhr = new XMLHttpRequest();
       xhr.open( "GET", URL + '?origins=' + from_address + '&destinations=' + to_address + '&key=' + KEY);
       xhr.onload = function(){
           var data = JSON.parse(xhr.responseText);
           var from = document.getElementById('from').value;
           var to = document.getElementById('to').value;
           var div = document.getElementById('result');
           div.innerHTML += '';
           div.appendChild(result);
        }
       xhr.send();
}


HOMEWORK
Select(language/en/ru/md/ro/ua);
select(transport/bicycle/driving,....);
assadd

https://ipapi.co/json/
