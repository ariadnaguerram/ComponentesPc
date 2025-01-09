<script setup>
   const props = defineProps({ 
    componente: {  //Definimos el objeto componente
        type: Object,      //Tipo de dato
        required: true //Requerido que lo hace obligatorio. Gracias al Props podemos pasar datos de un componente a otro. Ya puedo utilizar componente.nombre y acceder
    }
   });
   defineEmits(['agregar-carrito']) //Definimos el evento agregar-carrito
</script>
<template>

<div  class="col-md-6 col-lg-4 my-4 row align-items-center"> 
                <div class="col-4">
                    <img class="img-fluid" v-bind:src="'/img/' +componente.imagen + '.png'" 
                    :alt="'imagen componente' + componente.nombre"> <!--Para las imagenes hay que utilizar atributos dinamicos v-bind trata el src como una variable y .png x la extensión-->
                </div> <!--También hago el alt dinámico con vbind es importante para SEO y demas-->
                <div class="col-8">
                    <h3 class="text-black fs-4 fw-bold text-uppercase">{{componente.nombre}}</h3> <!--Colocamos componente que es la variable temporal que creamos en la línea 106 y accedemos a su nombre-->
                    <p>{{componente.descripcion}}</p> <!--Igualmente accedemos al valor de la descripción de componente dentro del dataBase-->
                    <p class="fw-black text-primary fs-3">{{componente.precio}}€</p> <!-- {{ Se utilzia en Vue para imprimir datos }}-->
                    <button type="button"class="btn btn-dark w-100 "  @click="$emit('agregar-carrito', componente)">Agregar al Carrito</button> <!--Inline handlers y utilizamos la arrow function incrementar--> 
                </div>
            </div>
</template>
<style>
</style>