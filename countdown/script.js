const vardias = document.getElementById('dias');
const varhoras = document.getElementById('horas');
const varmin = document.getElementById('min');
const varsec = document.getElementById('sec');

const novoAno = '01-01-2022';

function contador(){
    const DataNovoAno = new Date(novoAno);

    const DataAtual= new Date();

    /* pego o valor em milisegundos e multiplica por 1k para dar o valor em segundos */
    const totalSegundos = (DataNovoAno-DataAtual) / 1000;
    
    //Math floor(arredonda pra baixo) round(arredonda pra ) 
    const dias = Math.floor(totalSegundos/3600/24);
    const horas = Math.floor(totalSegundos/3600) % 24;   
    const mins = Math.floor(totalSegundos/60) % 60;
    const seconds = Math.floor(totalSegundos)%60;

    //editar o elemento no html

    vardias.innerHTML = formatarNumero(dias); 
    varhoras.innerHTML = formatarNumero(horas); 
    varmin.innerHTML = formatarNumero(mins); 
    varsec.innerHTML = formatarNumero(seconds);   
}
function formatarNumero(time){
    return time < 10 ? `0${time}` : time;

}

contador();

setInterval(contador,1000);
