const items=document.getElementById("items")
const itemsCasas=document.getElementById("items-casas")
const templatecard=document.getElementById("template-card").content;
const templateCardPerros=document.getElementById("template-card-perros").content;
const fragment =document.createDocumentFragment();
const fragmentCasas =document.createDocumentFragment();

export const btn=document.querySelector(".main-menu-btn")

let carrito={}

export const boton= btn.addEventListener("click", () => {
  document.querySelector(".main-menu-ul").classList.toggle("show");
});



document.addEventListener("DOMContentLoaded",()=>{
  gimnasios()
});

document.addEventListener("DOMContentLoaded",()=>{
  casas()
})

items.addEventListener("click", e => {
      addCarrito(e)
})

itemsCasas.addEventListener("click", e => {
  addCarrito(e)
})

const gimnasios=async()=>{
  try {
      const res=await fetch("https://us-central1-hausefun-page.cloudfunctions.net/app/api/gimnasios")
      const data= await res.json()
      // console.log(data)
      pintarcards(data)
     
  } catch (error) {
      console.log("error")
  }
}
const pintarcards= data => {
  data.forEach(producto => {
    templatecard.querySelector(".cards-img").setAttribute("src",producto.picture)
    templatecard.querySelector(".cards-h4").textContent=producto.name
    templatecard.querySelector(".cards-p").textContent=producto.description
    templatecard.querySelector(".cards-price").textContent=producto.price
    templatecard.querySelector(".cards-a").dataset.id=producto.id
    templatecard.querySelector(".cards-b").dataset.id=producto.id
    const clone=templatecard.cloneNode(true)
    fragment.appendChild(clone)
  }) 
  items.appendChild(fragment)
}

const casas=async()=>{
  try {
      const res=await fetch("https://us-central1-hausefun-page.cloudfunctions.net/app/api/casasPerros")
      const data= await res.json()
      // console.log(data)
      pintar(data)
     
  } catch (error) {
      console.log("error")
  }
}
const pintar= data => {
  data.forEach(producto => {
    templateCardPerros.querySelector(".cards-img").setAttribute("src",producto.picture)
    templateCardPerros.querySelector(".cards-h4").textContent=producto.name
    templateCardPerros.querySelector(".cards-p").textContent=producto.description
    templateCardPerros.querySelector(".cards-price").textContent=producto.price
    templateCardPerros.querySelector(".cards-a").dataset.id=producto.id
    templateCardPerros.querySelector(".cards-b").dataset.id=producto.id
    const cloneCasas=templateCardPerros.cloneNode(true)
    fragmentCasas.appendChild(cloneCasas)
  }) 
  itemsCasas.appendChild(fragmentCasas)
}


/*
// add to shopping cart to produts

const addCarrito=e=>{
  // console.log(e.target)
  if (e.target.classList.contains("cards-a")){
     setcarrito(e.target.parentElement.parentElement)
  }
  e.stopPropagation()
}

 const setcarrito= Objeto =>{
    // console.log(Objeto)
    const producto={
      id:Objeto.querySelector(".cards-a").dataset.id,
      name:Objeto.querySelector(".cards-h4").textContent,
      price:Objeto.querySelector(".cards-price").textContent,
      amount: 1
    }
    if (carrito.hasOwnProperty(producto.id)) {
      producto.amount=carrito[producto.id].amount + 1
    }
    carrito[producto.id]={...producto}
   
  console.log(carrito)
}
*/