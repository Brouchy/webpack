
import {saludar} from './js/componente';
import './styles.css';
const nombre ='fernando';

saludar(nombre);

const nombre2 = (nombre)=>{
    console.log('Creando etiqueta h2');

    const h2 = document.createElement('h2');
    h2.innerText=`Hola, ${nombre}`;
    document.body.append(h2);
};
console.log('kfksdsdsd');
nombre2('pedro');