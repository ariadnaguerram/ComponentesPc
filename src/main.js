import { createApp } from 'vue' //Importa la función createApp de la librería vue
import './style.css' //Importa el archivo style.css
import App from './App.vue' //Importa el componente App.vue
import { exampleFunction } from './exampleModule.js'; exampleFunction();
createApp(App).mount('#app')
//Crea la aplicación y la monta en el elemento con el id app #app
