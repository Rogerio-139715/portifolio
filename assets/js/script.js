// FUNCTION CLICK EVENT

var hamburguer = document.querySelector(".hamburguer").addEventListener("click", () =>
   document.querySelector(".container").classList.toggle("show-menu")
);

// SESSÃO ORÇAMENTO

document.querySelector("#qtde").addEventListener("change", atualizarPreco);
document.querySelector("#js").addEventListener("change", atualizarPreco);
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco);
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco);
document.querySelector("#prazo").addEventListener("change", function () {


   const prazo = document.querySelector("#prazo").value
   if (prazo > 1) {
      document.querySelector("label[for=prazo]").innerHTML = `prazo: ${prazo} semanas` // CONDIÇÃO PARA AJUSTAS CONCORDÂNCIA VERBAL
   } else {
      document.querySelector("label[for=prazo]").innerHTML = `prazo: ${prazo} semana`
   }
   
   atualizarPreco()
});

function atualizarPreco() {
   const qtde = document.querySelector("#qtde").value
   const temJs = document.querySelector("#js").checked
   const incluiLayout = document.querySelector("#layout-sim").checked
   const prazo = document.querySelector("#prazo").value
   let preco = qtde * 100;
   if (temJs) preco *= 1.1
   if (incluiLayout) preco += 500
   let taxaUrgencia = 1 - prazo * 0.1;
   preco *= 1 + taxaUrgencia

   document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}
// J-QUERY FUNCTION
/*
$(document).ready(function(){
        
   $(window).scroll(function(){
     if($(this).scrollTop() > 60){
         $('#topBtn').fadeIn(); 
     } else{
       $('#topBtn').fadeOut();
     }
     
   });


  $("topBtn").click(function() {

  $('html ,body').animate({scrollTop : 0}, 800);
    
  });
  
});
 */

 $(document).ready(function() {

    // SHOW HIDE BUTTON ON SCROLL
    $(window).scroll(function() {
       if($(this).scrollTop() > 150){
          $('.scrollToTop').fadeIn();
       } else {
          $('.scrollToTop').fadeOut();
       }
    });

     //SMOOTH SCROLLING TO TOP
     $('.scrollToTop').click(function(){
       $('html,body').animate({scrollTop: 0}, 300)
     })

 });



