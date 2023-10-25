$(function(){

  $('#change-color').on('click',function(){
    $('#target').css('color','blue');
  });

  $('#change-text').on('click',function(){
    $('#target').text('こんばんわ!');
  });

  $('#fade-out').on('click',function(){
    $('#target').fadeOut(3000,function(){
      alert('fadeOut完了');
    });
  });

  $('#fade-in').on('click',function(){
    $('#target').fadeIn();
  });
});
