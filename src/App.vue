<script setup> //Setup habilita composition API
//Lógica
import { ref, onMounted} from 'vue';  //importamos ref , la reactividad
import {dataBase} from './data/componentes.js'; //importamos la base de datos de los componentes
import Componente from './components/Componente.vue'; //Importamos los componentes
import Header from './components/Header.vue'; //Importamos Header
import Footer from './components/Footer.vue'; //Importamos Pie de pagina
const componentes = ref([]);  //asignamos la base de datos a la variable componentes 
const carrito= ref([]); //Creamos una variable reactiva carrito
const componente= ref({}); //Creamos una variable reactiva componente para un objeto
    onMounted(()=>{
        componentes.value = dataBase;
        componente.value = dataBase[0]; //Ponemos 0 porque aunq sea el primero es un array el primer valor es
    })
    const agregarCarrito = (componente) => {
        const componenteEnCarrito = carrito.value.findIndex(producto => producto.id === componente.id);  //Buscamos el componente en el carrito con findIndez
        if (componenteEnCarrito >=0){
            carrito.value[componenteEnCarrito].cantidad++; //Incrementamos la cantidad y no agrega duplicados
        }else{
componente.cantidad = 1; //Añadimos la cantidad de 1
        carrito.value.push(componente); //Agregamos el componente al carrito y añade el elemento al array al final
        }
};
const decrementarCantidad = (id)=>{
    const componenteEnCarrito = carrito.value.findIndex(producto => producto.id === id); //Buscamos el componente en el carrito con findIndez
    if (carrito.value[componenteEnCarrito].cantidad > 1){
        carrito.value[componenteEnCarrito].cantidad--; //Decrementamos la cantidad
    }else{
        carrito.value.splice(componenteEnCarrito, 1); //Eliminamos el componente del carrito
    }
}
const incrementarCantidad = (id)=>{
    const componenteEnCarrito = carrito.value.findIndex(producto => producto.id === id); //Buscamos el componente en el carrito con findIndez
    carrito.value[componenteEnCarrito].cantidad++; //Incrementamos la cantidad
}

const eliminarProducto = (id) =>{
    const componenteEnCarrito = carrito.value.findIndex(producto => producto.id === id); //Buscamos el componente en el carrito con findIndez
    carrito.value.splice(componenteEnCarrito, 1); //Eliminamos el componente del carrito

}
</script>

<template>
    <Header
     v-bind:carrito="carrito"
     :componente="componente"
     @decrementar-cantidad="decrementarCantidad"
     @incrementar-cantidad="incrementarCantidad"
     @agregar-carrito="agregarCarrito"
     @eliminar-producto="eliminarProducto"/> <!--Renderización del componente Header.vue y customs events asociados a funciones-->
      
    <main class="container-xl mt-5">
        <h2 class="text-center">Nuestra Colección</h2>
        <div class="row mt-5">
        <Componente
         v-for="componente in componentes"
         v-bind:componente="componente"
         @agregar-carrito="agregarCarrito"
        /> <!--Renderización del componente Componente.vue  e iteramos con el for utilizando directivas v-for="El objeto" -->
        <!--También estamos utilizando propt con v-bind para conectar los componentes
        Pasamos un objeto componente que se llama componente.-->
        <!--Se pasa el Props de padre app.vue hacia el padre componente.vue-->
        </div>
        <Footer />
    </main>
</template>



//Single files components en VUE ( script, template, style).
//En VUE  se puede hacer uso de la sintaxis de script setup para simplificar la creación de componentes.
//En lugar de tener que definir las secciones de script, template y style por separado, se pueden definir todas juntas en un solo bloque de script.
//Esto hace que sea más fácil de leer y escribir componentes, ya que todo el código relacionado con un componente se encuentra en un solo lugar.