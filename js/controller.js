angular.module("todo",[])//asi se puede modular el codigo y que no se llame por var y las prox por app.etc
.controller("todocontroller",
["$scope", function(d){
  d.nombre= "^u^ ¿Deseas agregar algo importante al To Do?";
  d.nuevocomentario={comentario: ""};
  d.comentarios=[];
  if(localStorage.getItem("comentarios")){
  var localComentariosToJson = JSON.parse(localStorage.getItem("comentarios"));
  d.comentarios = localComentariosToJson;
  }
    d.agregarcomentario= function(){
      d.comentarios.push(d.nuevocomentario);
      var localcomentarios = JSON.stringify(angular.copy(d.comentarios));
      localStorage.setItem("comentarios", localcomentarios);
      d.nuevocomentario={}; //aqui se limpia la variable y agrega uno nuevo
    }
    d.delete=function($index){
      d.comentarios.splice(d.comentarios.indexOf($index),1);
      var localcomentarios = JSON.stringify(angular.copy(d.comentarios));
      localStorage.setItem("comentarios", localcomentarios);
    }

    d.eliminartodo=function($index){
      d.comentarios=[];
      localStorage.setItem("comentarios", '');
    }
  }]
);
