const shopContent = document.getElementById('shopContent');
const verCarrito = document.getElementById('verCarrito')
const modalContainer = document.getElementById('modal-container')
const cantidadCarrito = document.getElementById('cantidadCarrito')


let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const getProducts = async()=>{
const response = await fetch("data.json");
const data = await response.json();

data.forEach((product)=>{
    let content = document.createElement('div');
    content.className = 'col-12 col-md-6 col-lg-4  my-3 text-center'; 
    content.innerHTML = `
        <div class="card">
            <img src="${product.img}" class="card-img-top" alt="${product.nombre}">
            <div class="card-body">
                <h5 class="card-title">${product.nombre}</h5>
                <p class="card-text">Precio: ${product.precio} $</p>
               
            </div>
        </div>
    `;
    shopContent.append(content);

    let comprar = document.createElement('button')
    comprar.innerText = 'comprar';
    comprar.className = 'btn btn-primary comprar' ;

    content.append(comprar);

    comprar.addEventListener('click', ()=>{
       const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

     if(repeat){
        carrito.map((prod)=> {
     if (prod.id === product.id) {
        prod.cantidad++
      }
        })
     }else{
        carrito.push({
            id : product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad
        })
     }
        console.log(carrito);
        carritoCounter();
        saveLocal();
        Toastify({
            text: "Agregaste un producto",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
    })
 
    
});


};


getProducts();



const saveLocal = () =>{
    localStorage.setItem('carrito', JSON.stringify(carrito));

}

