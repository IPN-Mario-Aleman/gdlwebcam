(function(){
  "use strict";
  var regalo=document.getElementById('regalo');
  document.addEventListener('DOMContentLoaded', function(){

    var map = L.map('mapa').setView([19.395323, -99.090897], 17)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([19.395323, -99.090897]).addTo(map)
    .bindPopup('RadioPunch.<br> Evenetos disponibles.')
    .openPopup()
    .bindTooltip("UPIICSA")
    .openTooltip()
    /*
    //campos datos usuarios
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

    //campos pases
    var pase_dia = document.getElementById('pase_dia');
    var pase_dosdias = document.getElementById('pase_dosdias');
    var pase_completo = document.getElementById('pase_completo');

    //Botones y divs
    var calcular = document.getElementById('calcular');
    var errorDiv = document.getElementById('error');
    var botonRegistro = document.getElementById('btnRegistro');
    var resultado = document.getElementById('lista_productos');
    var suma = document.getElementById('suma-total');

    //extras
    var etiquetas= document.getElementById('etiquetas');
    var camisas=document.getElementById('camisa_evento');

    calcular.addEventListener('click', calcularMontos);
    pase_dia.addEventListener('blur', mostrarDias);
    pase_dosdias.addEventListener('blur', mostrarDias);
    pase_completo.addEventListener('blur', mostrarDias);
    apellido.addEventListener('blur', validarCampos);
    nombre.addEventListener('blur', validarCampos);
    email.addEventListener('blur', validarCampos);
    email.addEventListener('blur', validarMail);

    function validarCampos(event){
      if(this.value == ''){
        errorDiv.style.display='block';
        errorDiv.innerHTML='este campo es obligatorio';
        this.style.border='1px solid red';
        errorDiv.style.border='1px solid red';
      }else {
          errorDiv.style.border = 'none';
          this.style.border = '1px solid #cccccc';
          errorDiv.innerHTML = "";

      }
    }

    function validarMail(){
        if(this.value.indexOf("@") == -1 || this.value.indexOf(".com") == -1) {
          errorDiv.innerHTML = "La direccion de E-mail es invalida";
          this.style.border = '1px solid red';
          errorDiv.style.border = '2px solid #fe4918';
        }
    }

    function calcularMontos(event){
      event.preventDefault();
      if(regalo.value === ''){
        alert("Debes elegir un regalo");
        regalo.focus();
      }else{
        var boletosDia = parseInt(pase_dia.value, 10) || 0,
            boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
            boletoCompleto = parseInt(pase_completo.value, 10) || 0,
            cantCamisas= parseInt(camisas.value, 10) || 0,
            cantEtiquetas=parseInt(etiquetas.value, 10) || 0;

        var totalPagar = (boletosDia * 30)+(boletos2Dias * 45)+(boletoCompleto * 50)+((cantCamisas * 10)*.93)+(cantEtiquetas*2);
        var listadoProductos = [];
        if(boletosDia >= 1){
          listadoProductos.push(boletosDia+' Pases por día');
        }
        if(boletos2Dias >= 1){
          listadoProductos.push(boletos2Dias+' Pases por 2 días');
        }
        if (boletoCompleto >= 1) {
          listadoProductos.push(boletoCompleto+' Pases completo');
        }
        if (cantCamisas >= 1) {
          listadoProductos.push(cantCamisas+' Camisas');
        }
        if (cantEtiquetas >= 1) {
          listadoProductos.push(cantEtiquetas+' Etiquetas');
        }
        lista_productos.style.display="block";
        lista_productos.innerHTML='';
        for(var i=0; i<listadoProductos.length; i++){
          lista_productos.innerHTML +=listadoProductos[i]+'</br>'
        }
        suma.innerHTML='$ '+totalPagar.toFixed(2);

      }
    }

    function mostrarDias(){
      var boletosDia = parseInt(pase_dia.value, 10) || 0,
          boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
          boletoCompleto = parseInt(pase_completo.value, 10) || 0;

          var diasElegidos = [];
          if(boletosDia > 0){
            diasElegidos.push('viernes');
            console.log(diasElegidos);
          }
          if(boletos2Dias > 0){
            diasElegidos.push('viernes','sabado');
            console.log(diasElegidos);
          }
          if(boletoCompleto > 0){
            diasElegidos.push('viernes','sabado','domingo');
            console.log(diasElegidos);
          }
          for (var i = 0; i < diasElegidos.length; i++) {
            document.getElementById(diasElegidos[i]).style.display='block';
          }
          if(diasElegidos.length == 0 ) {
          var todosDias = document.getElementsByClassName('contenido-dia');
          for(var i = 0; i < todosDias.length; i++) {
                               todosDias[i].style.display = 'none';
          }
          }
    }
    */



 });//DOM CONTENT LOADED

})();

$(function(){
  /*Programa de eventos*/
  $('.programa-evento .info-curso:first').show();
  $('.menu-programa a:first').addClass('activo');

  $('.menu-programa a').on('click', function(){
    $ ('.menu-programa a').removeClass('activo');
    $(this).addClass('activo');
    $('.ocultar').hide();

    var enlace = $(this).attr('href');
    $(enlace).fadeIn(1000);
    return false;
  });
});
