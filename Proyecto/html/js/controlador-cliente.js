var local = window.localStorage;
var zapatos; 
if(local.getItem('zapatos')==null){
    let zapatos=[
        {
            URLImagen:'img/zapatos/a1.jpg',
            marca: 'Adidas'
        },{
            URLImagen:'img/zapatos/p1.jpg',
            marca:'Puma'
        },{
            URLImagen:'img/zapatos/a2.jpg',
            marca:'Adidas'
        },{
            URLImagen:'img/zapatos/p2.jpg',
            marca:'Puma'
        }
    ];
    local.setItem("zapatos",JSON.stringify(zapatos));
}else{
    zapatos=JSON.parse(local.getItem('zapatos'));
}
console.log(zapatos);

function generarListado(){
    document.getElementById('listaZapatos').innerHTML='';
    
    for(let i=0; i<zapatos.length; i++){
        document.getElementById('listaZapatos').innerHTML +=`
        <div class="card" style ="width: 35rem">
            <img src="${zapatos[i].URLImagen}"    class="card-img-top">
            <div class="card-body">
                Marca:${zapatos[i].marca}
                <button class="form-control btn       btn-primary">Comprar</button>
            </div>
        </div> `;
    }
    console.log(zapatos);
}
generarListado();