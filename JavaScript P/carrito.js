const pintarCarrito = ()=>{
    modalContainer.innerHTML = '';
    modalContainer.style.display = "flex";

    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header'
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>

    `
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement('h1');
    modalbutton.innerText = 'Cerrar'
    modalbutton.className = 'modal-header-button'

modalbutton.addEventListener('click', ()=>{
    modalContainer.style.display = "none";
    Swal.fire({
        title: '¡Carrito cerrado!',
        icon: 'success',
        timer: 1800, 
        showConfirmButton: false
    });
})

    modalHeader.append(modalbutton);


carrito.forEach((product)=>{
    let carritoContent = document.createElement('div');
    carritoContent.className = 'modal-content'
    carritoContent.innerHTML = `
    
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio} $</p>
    <span class="restar"> - </span>
    <p>Cantidad: ${product.cantidad}</p>
    <span class="sumar"> + </span>
    <p>Total: ${product.cantidad * product.precio}</p>
    <span class="delete-product"> eliminar❌ </span>
    
    `;
    modalContainer.append(carritoContent)
    


let restar = carritoContent.querySelector(".restar")

restar.addEventListener('click', ()=>{
    if(product.cantidad !== 1)
    product.cantidad--;

saveLocal()
pintarCarrito();    
})
  

let sumar = carritoContent.querySelector(".sumar")

sumar.addEventListener('click', ()=> {
product.cantidad++;
saveLocal()
pintarCarrito()


})
let eliminar = carritoContent.querySelector(".delete-product")

eliminar.addEventListener("click", ()=>{
    eliminarProducto(product.id);

})
   
    
})



const total = carrito.reduce((acc, el)=> acc + el.precio * el.cantidad, 0)

const totalBuying = document.createElement("div");
totalBuying.className = "total-content"
totalBuying.innerHTML = `total a pagar: ${total} $`
modalContainer.append(totalBuying)


};

verCarrito.addEventListener('click', pintarCarrito)



const eliminarProducto = (id)=>{
const foundId = carrito.find((element)=> element.id === id);

console.log(foundId);

carrito = carrito.filter((carritoId)=>{
    return carritoId !== foundId;
    
})

carritoCounter()
saveLocal()
pintarCarrito()

Toastify({
    text: "Eliminaste un producto",
    className: "info",
    style: {
      background: "linear-gradient(to right, #FF5733, #FF7F50, #FFA07A)",
    }
  }).showToast();
};

const carritoCounter = ()=>{
    cantidadCarrito.style.display = "block";

const carritoLenght = carrito.length;

localStorage.setItem('carritoLenght', JSON.stringify(carritoLenght))

cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLenght"))

};


carritoCounter()

