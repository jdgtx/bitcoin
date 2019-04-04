
$(document).ready(function(){

    function getExchangeData(){
  
      
      let currentPrice=parseFloat($('#current-exchange-price-buy').text());
      
     
    $.getJSON('https://blockchain.info/pl/ticker',function(btcData){
  
     if(currentPrice<btcData.PLN.buy){
      $('span').removeClass();
      $('span').html('<i class="fas fa-arrow-up"></i>');
      $('span').addClass('green');
     
     }
     
  
      else if(currentPrice>btcData.PLN.buy){
        $('span').removeClass();
        $('span').html('<i class="fas fa-arrow-down"></i>');
        $('span').addClass('red');
    
       }
  
       else{
        $('span').removeClass();
        $('span').html('<i class="fas fa-minus"></i>');
        $('span').addClass('black');
      
       }
  
    $('#current-exchange-price-buy').text(btcData.PLN.buy);
  
  
    });
  };
  
 

  
  //start sell  ###################################

  function getExchangeDataSell(){
  
      
    let currentPriceSell=parseFloat($('#current-exchange-price-sell').text());
    
   
  $.getJSON('https://blockchain.info/pl/ticker',function(btcData){

   if(currentPriceSell<btcData.PLN.sell){
    $('p').removeClass();
    $('p').html('<i class="fas fa-arrow-up"></i>');
    $('p').addClass('green');
   
   }
   

    else if(currentPriceSell>btcData.PLN.sell){
      $('p').removeClass();
      $('p').html('<i class="fas fa-arrow-down"></i>');
      $('p').addClass('red');
  
     }

     else{
      $('p').removeClass();
      $('p').html('<i class="fas fa-minus"></i>');
      $('p').addClass('black');
    
     }

  $('#current-exchange-price-sell').text(btcData.PLN.sell);


  });
};



$('button').click(function(){
  getExchangeDataSell();
  getExchangeData();
})








  //close jquery//
  });