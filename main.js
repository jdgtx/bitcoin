
$(document).ready(function(){

    function getExchangeData(){
  
      
      let currentPrice=parseFloat($('#current-exchange-price').text());
     
    $.getJSON('https://blockchain.info/pl/ticker',function(btcData){
  
     if(currentPrice<btcData.PLN.last){
      $('span').removeClass();
      $('span').html('<i class="fas fa-arrow-up"></i>');
      $('span').addClass('green');
     
     }
     
  
      else if(currentPrice>btcData.PLN.last){
        $('span').removeClass();
        $('span').html('<i class="fas fa-arrow-down"></i>');
        $('span').addClass('red');
    
       }
  
       else{
        $('span').removeClass();
        $('span').html('<i class="fas fa-minus"></i>');
        $('span').addClass('black');
      
       }
  
    $('#current-exchange-price').text(btcData.PLN.last);
  
  
    });
  };
  
  
  
  $('button').click(function(){
    getExchangeData();
  })
  
  
  });