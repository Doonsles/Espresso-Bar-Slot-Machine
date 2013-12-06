$(document).ready(function(){
  
  var TOPSPEED = 50;
  var BOTTOMSPEED = 45;
  var HIGHSTOP = 20;
  var LOWSTOP = 18;
  
  var first1 = Math.floor((Math.random()*2));
  var first2 = Math.floor((Math.random()*2));
  var first3 = Math.floor((Math.random()*2));
  
  $($('.slideshow1').children()[first1]).addClass("first");
  $($('.slideshow2').children()[first2]).addClass("first");
  $($('.slideshow3').children()[first3]).addClass("first");
  
  $('.spin-button').click(function  () {
    var slideSpeed1 = Math.floor((Math.random()*TOPSPEED)+BOTTOMSPEED);
    var stop1 = Math.floor((Math.random()*HIGHSTOP)+LOWSTOP);
    $('.slideshow1').cycle({ 
        delay:   -1000000000000000,
        timeout:  .00001,
        speed: slideSpeed1, 
        continuous: 1,
        autostop: 1,
        autostopCount: stop1,
      
    });
    
    var slideSpeed2 = Math.floor((Math.random()*TOPSPEED)+BOTTOMSPEED); 
    var stop2 = Math.floor((Math.random()*HIGHSTOP)+LOWSTOP);
    $('.slideshow2').cycle({ 
        delay:   -1000000000000000,
        timeout:  .00001,
        speed: slideSpeed2, 
        continuous: 1,
        autostop: 1,
        autostopCount: stop2,
    });
    
    var slideSpeed3 = Math.max(slideSpeed1, slideSpeed2);
    var stop3 = Math.max(stop1, stop2);
    $('.slideshow3').cycle({ 
        delay:   -1000000000000000,
        timeout:  .00001,
        speed: slideSpeed3, 
        continuous: 1,
        autostop: 1,
        autostopCount: stop3,
        end: function () {
          count_hash = new Object();
          for (var i = 0; i < 3; i++) {
            count_hash[i] = 0
          }
          
          count_hash[stop1 % 3] += 1
          count_hash[stop2 % 3] += 1
          count_hash[stop3 % 3] += 1
          
          if (count_hash[0] === 1 && count_hash[1] === 1 && count_hash[2] === 1){
            $('.spin-button').html("Sorry, try again.")
            console.log("Try again")
          }
          
          switch(count_hash[0])
          {
          case 2:
            $('.spin-button').html('You almost won a free coffee! Try again!');
            console.log("You almost won a free coffee!");
            break;
          case 3:
            $('.spin-button').html('Congrats! You won a free coffee! Play again!')
            console.log("You won a free coffee!");
          }
          
          switch(count_hash[1])
          {
          case 2:
            $('.spin-button').html("You almost won a free espresso! Try again!");
            console.log("You almost won a free espresso! Play again!");
            break;
          case 3:
            $('.spin-button').html("Congrats! You won a free espresso! Play again!");
            console.log("You won a free espresso! Play again!");
          }
          
          switch(count_hash[2])
          {
          case 2:
            $('.spin-button').html("You almost won a free tea! Try again!")
            console.log("You almost won a free tea! Play again!");
            break;
          case 3:
            $('.spin-button').html("Congrats! You won a free tea! Play again!")
            console.log("You won a free tea! Play again!");
          }
        }
    });
  }
  );
  
});