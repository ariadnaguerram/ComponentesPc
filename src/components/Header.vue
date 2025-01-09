// Este componente es el header de la página web, en el cual se muestra el logo de la tienda, el carrito de compras y el producto principal.
<script setup>
import{computed} from 'vue'; //
    const props = defineProps({ 
        carrito: {  //Definimos el objeto componente
            type: Array,      //Tipo de dato
            required: true,//Requerido que lo hace obligatorio. Gracias al Props podemos pasar datos de un componente a otro. Ya puedo utilizar componente.nombre y acceder
        },
            componente: {  //Definimos el objeto componente
            type: Object,      //Tipo de dato
            required: true //Requerido que lo hace obligatorio. Gracias al Props podemos pasar datos de un componente a otro. Ya puedo utilizar componente.nombre y acceder
        }
    });

    defineEmits(['decrementar-cantidad', 'incrementar-cantidad', 'agregar-carrito', 'eliminar-producto']) //Definimos los eventos que usemos enn el header

    const totalPagar= computed(()=>{
        return props.carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio),0) //Calculamos el total a pagar utilizando reduce y accedemos a la cantidad y precio de cada producto
    }); //cantidad de producto por precio de producto
</script>
<template>
<header class="py-5 header">
        <div class="container-xl">
            <div class="row justify-content-center justify-content-md-between">
                <div class="col-8 col-md-3">
                    <a href="index.html">
                        <img class="img-fluid" src="/img/logotienda.png" alt="imagen logo">
                    </a>
                </div>
                <nav class="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        class="carrito"
                    >
                        <img class="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

                        <div id="carrito" class="bg-white p-3">
                            <p v-if="carrito.length === 0" class="text-center m-0">El carrito esta vacio</p> <!--Condicional v-if  si se cumple la condición muestra esto-->
                            <!--El v-else tiene que estar colocado justo después del if-->
                            <div v-else>    <!--Condicional v-else-if si se cumple la condición muestra esto-->
                                <table class="w-100 table"> 
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                        v-for="producto in carrito"

                                        >
                                            <td>
                                                <img class="img-fluid" :src="'/img/' + producto.imagen + '.png'" :alt="'imagen componente' + producto.nombre"> <!--Se hace dinámico-->
                                            </td>
                                            <td >{{ producto.nombre }}</td> <!--Nombre y precio dinamico-->
                                            <td class="fw-bold">
                                                    {{ producto.precio }}€
                                            </td>
                                            <td class="flex align-items-start gap-4">
                                                <button
                                                    type="button"
                                                    class="btn btn-dark"
                                                    @click="$emit('decrementar-cantidad', producto.id)"
                                                > <!--Evento click que decrementa la cantidad al producto ocn la id que seleccionamos-->
                                                    -
                                                </button>
                                                    {{ producto.cantidad }}
                                                <button
                                                    type="button"
                                                    class="btn btn-dark"
                                                    @click="$emit('incrementar-cantidad', producto.id)"
                                                > <!--Evento click que incrementa la cantidad al producto con la id que seleccionemos-->
                                                    +
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    class="btn btn-danger"
                                                    type="button"
                                                    @click="$emit('eliminar-producto', producto.id)"
                                                >
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p class="text-end">Total pagar: <span class="fw-bold">{{ totalPagar }}€</span></p>
                                <button class="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div><!--.row-->

            <div class="row mt-5">
                
                <div class="col-md-6 text-center text-md-start pt-5"> 
                    <h1 class="display-2 fw-bold">{{ componente.nombre }}</h1>
                    <p class="mt-5 fs-5 text-white">{{ componente.descripcion }}</p>
                    <p class="text-primary fs-1 fw-black">{{ componente.precio }}€</p>
                    <button 
                        type="button"
                        class="btn fs-4 bg-primary text-white py-2 px-5"
                        @click="$emit('agregar-carrito', componente)"
                    >Agregar al Carrito</button>
                </div>
            </div>
        </div>

        <img class="header-componente shadow" src="/img/productoprinc.png" alt="imagen header">
    </header>
</template>
<style lang="scss" scoped>
</style>