//COMPONENTS
class Bird{
   constructor(){
      this.top = Math.round( ( 500 - 48 )* Math.random() );
      this.left = Math.round( ( 500 - 48 ) * Math.random() );
      this.color = 'red';
      this.speed = Math.round(Math.random()*4 + 1);
   }
   //выводит птицу в хтмл
   render(){
     this.div = document.createElement('div');
     this.div.setAttribute('class' , `bird ${this.color}`);
     document.body.firstElementChild.appendChild( this.div );
     // при помощи position. left , top чтоб птица двигалась

      this.div.style.top = `${this.top}px`;
      this.div.style.left = `${this.left}px`;
   }
  fly(){
    var self = this;
     setInterval(function(){
       if(self.left>(250 + Math.random()*200) || self.left<Math.random()*200){
         self.speed*=-1;
         if(Math.abs(self.speed) <20){
           self.speed *= 1.5;
         }
       }
       self.left+=self.speed;
       self.div.style.left = `${self.left}px`;
       console.log(self.left);
     },500);
 }

}
