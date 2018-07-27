
const KEY ='5ff9a8e29f16b814151fc52c22c03975';
const URL = "http://data.fixer.io/api/";
var base = 'EUR';
var date = '2018-07-26';
var eur_to_mdl = 0;

function load(){
  var xhr = new XMLHttpRequest();
    xhr.open("GET",URL + date + '?access_key=' + KEY + '&base=' + base);
    xhr.onload = function(){
        // convert Json --> Object
        var data = JSON.parse( xhr.responseText );
        //alert (xhr.responseText);
        // console.log(data.rates.MDL );
        eur_to_mdl = data.rates.MDL;
        //загружаем список валют

        var rates = Object.keys(data.rates);
        for( var i=0;i<rates.length;i++){
            rates[i] //<option> одеть в опшен еще appendChild и createElement        
        }
        console.log(rates);
    }
    xhr.send();

}
load();

function convert(){
  var total =  document.getElementById('total').value;
  var suma = document.getElementById('suma');
 suma.value = total * eur_to_mdl;
    
}