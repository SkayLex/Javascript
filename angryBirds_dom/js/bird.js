//COMPONENTS
class Bird{
   constructor(){
      this.top = Math.round( 500 * Math.random() );
      this.left = Math.round( 500 * Math.random() );;
      this.color = 'red';
   }
   //выводит птицу в хтмл
   render(){
     this.div =document.createElement('div');
     this.div.setAttribute('class' , `bird ${this.color}`);
     document.body.firstElementChild.appendChild( this.div );
     // при помощи position. left , top чтоб птица двигалась
   }
}
var b = new Bird();
b.render();
