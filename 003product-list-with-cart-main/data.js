document.addEventListener('DOMContentLoaded', function() {    
    const desserts = [
        {
            "image": {
                "desktop": "./assets/images/image-waffle-desktop.jpg"
            },
            "name": "Waffle with Berries",
            "category": "Waffle",
            "price": 20000
        },
        {
            "image": {
                "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
            },
            "name": "Vanilla Bean Crème Brûlée",
            "category": "Crème Brûlée",
            "price": 37500
        },
        {
            "image": {
                "desktop": "./assets/images/image-macaron-desktop.jpg"
            },
            "name": "Macaron Mix of Five",
            "category": "Macaron",
            "price": 12900
        },
        {
            "image": {
                "desktop": "./assets/images/image-tiramisu-desktop.jpg"
            },
            "name": "Classic Tiramisu",
            "category": "Tiramisu",
            "price": 23000
        },
        {
            "image": {
                "desktop": "./assets/images/image-baklava-desktop.jpg"
            },
            "name": "Pistachio Baklava",
            "category": "Baklava",
            "price": 21500
        },
        {
            "image": {
                "desktop": "./assets/images/image-meringue-desktop.jpg"
            },
            "name": "Lemon Meringue Pie",
            "category": "Pie",
            "price": 9000
        },
        {
            "image": {
                "desktop": "./assets/images/image-cake-desktop.jpg"
            },
            "name": "Red Velvet Cake",
            "category": "Cake",
            "price": 17300
        },
        {
            "image": {
                "desktop": "./assets/images/image-brownie-desktop.jpg"
            },
            "name": "Salted Caramel Brownie",
            "category": "Brownie",
            "price": 14900
        },
        {
            "image": {
                "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
            },
            "name": "Vanilla Panna Cotta",
            "category": "Panna Cotta",
            "price": 21000
        }
    ];

    const menuContainer = document.getElementById('menu');
    const templateCard = document.getElementById('template-card');
    const addProductCardContainer = document.getElementById('addProductCard');
    const totalPedido = document.getElementById('totalPedido');
    const totalProductos = document.getElementById('totalProductos');

    const container_add = document.querySelector('.remove_imageTransitions');


    
    let total = 0; // Variable para mantener el total acumulado
    let countTotal = 0;


    if (menuContainer && templateCard && addProductCardContainer) {
        desserts.forEach((dessert, index) => {
            // Clonar la tarjeta de plantilla
            const cardClone = templateCard.cloneNode(true);
            cardClone.style.display = "block"; // Mostrar la tarjeta clonada
            cardClone.removeAttribute('id'); // Eliminar el ID para evitar duplicados

            // Rellenar los datos en la tarjeta clonada
            const image = cardClone.querySelector('.imageDessert');
            const name = cardClone.querySelector('.name');
            const description = cardClone.querySelector('.descripcion');
            const price = cardClone.querySelector('.precio');
            const addButton = cardClone.querySelector('#click_addProduct');

            if (image && name && description && price && addButton) {
                image.src = dessert.image.desktop;
                image.alt = dessert.name;
                name.textContent = dessert.name;
                description.textContent = `${dessert.category}`;
                price.textContent = `$${dessert.price.toLocaleString('en-US')}`;

                // Asignar un identificador único al botón de "Add to Cart"
                addButton.setAttribute('data-product-index', index);

                // Agregar evento click al botón
                addButton.addEventListener('click', function() {
                    // Crear un nuevo producto en el carrito
                    const productClone = document.createElement('div');
                    productClone.className = 'card';
                    productClone.innerHTML = `
                        <div id="nameCard">${dessert.name}</div>
                        <div>
                            <span class="cantidadProducto">1</span>
                            <span class="precioUnitario"><span>@</span>$${dessert.price.toLocaleString('en-US')}</span>
                            <span class="precioSumaCantidad">$${dessert.price.toLocaleString('en-US')}</span>
                            <button id="removerItem" class="remove">
                                <img src="./assets/images/icon-remove-item.svg" alt="">
                            </button>
                        </div>
                        <div class="divLine"></div>
                    `;


                    

                    // Evento para remover el producto
                    productClone.querySelector('#removerItem').addEventListener('click', function() {
                        productClone.remove();
                        buttonElement.style.transform = 'translate(0px, 0px)'; 


                        total -= dessert.price;
                        totalPedido.textContent = `$${total.toLocaleString('en-US')}`;  
                        
                        
                        countTotal -= 1;
                        totalProductos.textContent = `${countTotal}`;

                        if(countTotal === 0) {
                            container_add.style.height = '';
                        }
                    });

                    // Agregar el producto clonado a la lista de productos
                    addProductCardContainer.appendChild(productClone);


                    //Total de los precios entre todos los productos
                    total += dessert.price;
                    totalPedido.textContent = `$${total.toLocaleString('en-US')}`;


                    //Total de los productos
                    countTotal += 1;
                    totalProductos.textContent = `${countTotal}`

                    const containerAdd = document.getElementById('addProductCard');          
                    containerAdd.appendChild(productClone);

                    var buttonElement = addButton.nextElementSibling;
                    buttonElement.style.transform = 'translate(0px, -42px)'; 

                    container_add.style.height = '0px';
                    
                });

                
                // Agregar la tarjeta clonada al contenedor
                menuContainer.appendChild(cardClone);
            } else {
                console.error("No se encontraron algunos elementos dentro de la plantilla.");
            }
        });
    } else {
        console.error("No se encontró el contenedor principal o la plantilla.");
    }



});
