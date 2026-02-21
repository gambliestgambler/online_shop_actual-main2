let products = [
  {
    id: 1,
    name: "кроссовки Nike Air",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    price: 200,
    finalPrice: 150,
    isHot: true,
    isSale: false,
  },
  {
    id: 2,
    name: "кожаная куртка",
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    price: 350,
    finalPrice: 280,
    isHot: false,
    isSale: true,
  },
  {
    id: 3,
    name: "джинсы Levi's",
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    price: 120,
    finalPrice: 120,
    isHot: true,
    isSale: false,
  },
  {
    id: 4,
    name: "футболка поло",
    imageUrl: "https://images.unsplash.com/photo-1581655353564-df123a1eb820",
    price: 80,
    finalPrice: 60,
    isHot: false,
    isSale: true,
  },
  {
    id: 5,
    name: "часы Casio",
    imageUrl: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    price: 450,
    finalPrice: 450,
    isHot: true,
    isSale: false,
  },
  {
    id: 6,
    name: "рюкзак для ноутбука",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    price: 95,
    finalPrice: 75,
    isHot: false,
    isSale: true,
  },
  {
    id: 7,
    name: "ботинки Timberland",
    imageUrl: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0",
    price: 280,
    finalPrice: 280,
    isHot: true,
    isSale: false,
  },
  {
    id: 8,
    name: "свитер шерстяной",
    imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    price: 150,
    finalPrice: 120,
    isHot: false,
    isSale: true,
  },
  {
    id: 9,
    name: "костюм классический",
    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35",
    price: 600,
    finalPrice: 600,
    isHot: false,
    isSale: false,
  },
  {
    id: 10,
    name: "солнцезащитные очки Ray-Ban",
    imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    price: 180,
    finalPrice: 135,
    isHot: true,
    isSale: true,
  },
  {
    id: 11,
    name: "спортивная куртка",
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
    price: 220,
    finalPrice: 220,
    isHot: true,
    isSale: false,
  },
  {
    id: 12,
    name: "кожаный ремень",
    imageUrl: "https://images.unsplash.com/photo-1624222247344-700c2311c00b",
    price: 65,
    finalPrice: 50,
    isHot: false,
    isSale: true,
  },
];

function setCards(array) {
  //1) ищем контейнер для карточек
  const container = document.querySelector(".products .container");
  //2) очищаем его
  container.innerHTML = "";

  //3) перебираем все карточки
  array.forEach((card) => {
    container.innerHTML += `
    <div class="products-card">
         ${
           card.isSale
             ? `
            <div class="sale">
              <h4>sale</h4>
            </div>
            `
             : ""
         }

            ${
              card.isHot
                ? `
              <div class="hot">
              <h4>hot</h4>
              </div>
              `
                : ``
            }

            <div class="img-box">
              <img src="${card.imageUrl}" alt="">
            </div>
            <div class="title">
              <h3>Sweatshirt</h3>
              ${
                card.isSale
                  ? `
              <h4>$${card.finalPrice} - <span class="last-word">$${card.price}</span></h4>
               `
                  : `
               <h4>$${card.finalPrice}</h4>
               `
              }
            </div>
          </div>
    `;
  });
}
// вызов функции
setCards(products);


function filterCards(filterType, btn){
  const buttons = document.querySelectorAll(".filter button");
  buttons.forEach(item => item.classList.remove("selected"))
  btn.classList.add("selected")

  let tempCards = [];
  if(filterType == "sale"){
    // возращаем все товары со скидкой 
    tempCards = products.filter(item => item.isSale)
  }
  else if(filterType == "hot"){
    tempCards = products.filter(item => item.isHot)
  }
  else{
    // если фильтров нет - то возращаем все товары
    tempCards = products
  }

  //переразмещаем карточки
  setCards(tempCards)
}

function sortCards(select){
  const sortType = select.value;

  let tempCards = [...products];
  if(sortType == "price-up"){
    tempCards.sort((a, b) => a.finalPrice - b.finalPrice);
  }
  else if(sortType == "price-down"){
    tempCards.sort((a, b) => b.finalPrice - a.finalPrice);
  }
  else if(sortType == "name-a"){
    tempCards.sort((a, b) => a.name.localeCompare(b.name));
  }
  else if(sortType == "name-z"){
    tempCards.sort((a, b) => b.name.localeCompare(a.name));
  }
  
  setCards(tempCards);
}

// Product parameter selection functionality
document.addEventListener('DOMContentLoaded', function() {
  // Size selection
  const sizeElements = document.querySelectorAll('.size p');
  sizeElements.forEach(size => {
    size.addEventListener('click', function() {
      // Remove active class from all sizes
      sizeElements.forEach(s => s.classList.remove('active'));
      // Add active class to clicked size
      this.classList.add('active');
    });
  });

  // Color selection
  const colorElements = document.querySelectorAll('.color .circle');
  colorElements.forEach(color => {
    color.addEventListener('click', function() {
      // Remove active class from all colors
      colorElements.forEach(c => c.classList.remove('active'));
      // Add active class to clicked color
      this.classList.add('active');
    });
  });

  // Quantity counter
  const minusBtn = document.querySelector('.btn-minus');
  const plusBtn = document.querySelector('.btn-plus');
  const countInput = document.querySelector('.count');

  if (minusBtn && plusBtn && countInput) {
    // Set initial disabled state for minus button
    minusBtn.disabled = countInput.value == 1;
    minusBtn.addEventListener('click', function() {
      let currentValue = parseInt(countInput.value);
      if (currentValue > 1) {
        countInput.value = currentValue - 1;
        // Update disabled state
        if (countInput.value == 1) {
          this.disabled = true;
        }
      }
      // Add visual feedback
      this.style.opacity = '0.7';
      setTimeout(() => { this.style.opacity = '1'; }, 150);
    });

    plusBtn.addEventListener('click', function() {
      let currentValue = parseInt(countInput.value);
      countInput.value = currentValue + 1;
      // Enable minus button when quantity > 1
      minusBtn.disabled = false;
      // Add visual feedback
      this.style.opacity = '0.7';
      setTimeout(() => { this.style.opacity = '1'; }, 150);
    });

    // Input validation
    countInput.addEventListener('input', function() {
      let value = parseInt(this.value);
      if (isNaN(value) || value < 1) {
        this.value = 1;
      }
    });
  }
});

// Cart functionality
function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart() {
  const selectedSize = document.querySelector('.size p.active');
  const selectedColor = document.querySelector('.color .circle.active');
  const quantity = parseInt(document.querySelector('.count').value);
  
  if (!selectedSize || !selectedColor) {
    alert('Please select size and color');
    return;
  }
  
  const product = {
    id: Date.now(),
    name: 'Biker Hoodie',
    price: 24.00,
    size: selectedSize.textContent,
    color: window.getComputedStyle(selectedColor).backgroundColor,
    quantity: quantity,
    image: '../img/flower.jpg'
  };
  
  const cart = getCart();
  cart.push(product);
  saveCart(cart);
  
  alert('Product added to cart!');
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  renderCart();
}

function updateQuantity(productId, newQuantity) {
  if (newQuantity < 1) return;
  
  let cart = getCart();
  const product = cart.find(item => item.id === productId);
  if (product) {
    product.quantity = newQuantity;
    saveCart(cart);
    renderCart();
  }
}

function calculateTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}
