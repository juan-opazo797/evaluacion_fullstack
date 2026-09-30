// =========================================================
// 1. LISTA DE PRODUCTOS
// =========================================================
const productos = [
    { 
        id: "FR001", 
        nombre: "Manzanas Fuji", 
        precio: "$1,500 CLP", 
        stock: "150 kilos",
        categoria: "Frutas Frescas",
        descripcion: "Descripción: Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. Perfectas para meriendas saludables o como ingrediente en postres. Estas manzanas son conocidas por su textura firme y su sabor equilibrado entre dulce y ácido.",
        imagen: "imagenes/Manzanas Fuji.jpg"
    },
    { 
        id: "FR002", 
        nombre: "Naranjas Valencia", 
        precio: "$1,200 CLP", 
        stock: "200 kilos",
        categoria: "Frutas Frescas",
        descripcion: "Descripción: Jugosas y ricas en vitamina C, estas naranjas Valencia son ideales para zumos frescos y refrescantes. Cultivadas en condiciones climáticas óptimas que aseguran su dulzura y jugosidad.",
        imagen: "imagenes/Naranjas Valencia.jpg"
    },
    { 
        id: "FR003", 
        nombre: "Plátanos Cavendish", 
        precio: "$1,800 CLP", 
        stock: "250 kilos",
        categoria: "Frutas Frescas",
        descripcion: "Descripción: Plátanos maduros y dulces, perfectos para el desayuno o como snack energético. Estos plátanos son ricos en potasio y vitaminas, ideales para mantener una dieta equilibrada.",
        imagen: "imagenes/Platanos.jpg"
    },
    { 
        id: "VR001", 
        nombre: "Zanahorias Orgánicas", 
        precio: "$900 CLP", 
        stock: "100 kilos",
        categoria: "Verduras Orgánicas",
        descripcion: "Descripción: Zanahorias crujientes cultivadas sin pesticidas en la Región de O'Higgins. Excelente fuente de vitamina A y fibra, ideales para ensaladas, jugos o como snack saludable.",
        imagen: "imagenes/Zanahoria.jpg"
    },
    { 
        id: "VR002", 
        nombre: "Espinacas Frescas", 
        precio: "$1,100 CLP", 
        stock: "80 bolsas",
        categoria: "Verduras Orgánicas",
        descripcion: "Descripción: Espinacas frescas y nutritivas, perfectas para ensaladas y batidos verdes. Estas espinacas son cultivadas bajo prácticas orgánicas que garantizan su calidad y valor nutricional.",
        imagen: "imagenes/Espinacas.jpg"
    },
    { 
        id: "VR003", 
        nombre: "Pimientos Tricolores", 
        precio: "$2,000 CLP", 
        stock: "120 kilos",
        categoria: "Verduras Orgánicas",
        descripcion: "Descripción: Pimientos rojos, amarillos y verdes, ideales para salteados y platos coloridos. Ricos en antioxidantes y vitaminas, estos pimientos añaden un toque vibrante y saludable a cualquier receta.",
        imagen: "imagenes/Pimientos.jpg"
    },
    { 
        id: "PO001", 
        nombre: "Miel Orgánica", 
        precio: "$4,500 CLP", 
        stock: "50 frascos",
        categoria: "Productos Orgánicos",
        descripcion: "Descripción: Miel pura y orgánica producida por apicultores locales. Rica en antioxidantes y con un sabor inigualable, perfecta para endulzar de manera natural tus comidas y bebidas.",
        imagen: "imagenes/miel.jpg"
    },
    { 
        id: "PO003", 
        nombre: "Quinua Orgánica", 
        precio: "$3,200 CLP", 
        stock: "90 kilos",
        categoria: "Productos Orgánicos",
        descripcion: "Quinua orgánica de alta calidad, fuente excelente de proteína vegetal.",
        imagen: "imagenes/Quinua.jpg"
    },
    { 
        id: "PL001", 
        nombre: "Leche Entera", 
        precio: "$1,600 CLP", 
        stock: "100 litros",
        categoria: "Productos Lácteos",
        descripcion: "Leche entera fresca de campo, ideal para el consumo diario.",
        imagen: "imagenes/Leche.jpg"
    }
];

// =========================================================
// 2. DETALLE DE PRODUCTO
// =========================================================
function cargarDetalleProducto() {
    const parametrosURL = new URLSearchParams(window.location.search);
    const idDelProducto = parametrosURL.get("id");

    if (idDelProducto) {
        const productoEncontrado = productos.find(prod => prod.id === idDelProducto);

        if (productoEncontrado) {
            if (document.getElementById("detalle-nombre")) document.getElementById("detalle-nombre").textContent = productoEncontrado.nombre;
            if (document.getElementById("detalle-precio")) document.getElementById("detalle-precio").textContent = productoEncontrado.precio;
            if (document.getElementById("detalle-desc")) document.getElementById("detalle-desc").textContent = productoEncontrado.descripcion;
            if (document.getElementById("detalle-cat")) document.getElementById("detalle-cat").textContent = productoEncontrado.categoria;
            if (document.getElementById("detalle-stock")) document.getElementById("detalle-stock").textContent = "Stock disponible: " + productoEncontrado.stock;
            
            const imagenPrincipal = document.getElementById("detalle-imagen");
            if (imagenPrincipal) {
                imagenPrincipal.src = productoEncontrado.imagen;
                imagenPrincipal.alt = productoEncontrado.nombre;
            }
        }
    }
}

// =========================================================
// 4. INICIALIZACIÓN
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
    cargarDetalleProducto();
    actualizarContadorCarrito();
    renderizarCarrito();
});