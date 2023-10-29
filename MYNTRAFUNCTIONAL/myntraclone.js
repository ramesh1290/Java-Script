// let itemsContainerElement = document.querySelector(".items-container");
//FOR INDIVIDUAL ITEMS GIVEN CODE IS BELOW.

//   let item={
//     item_image:'1.jpg',
//     rating:{
//       stars:4.1,
//       noOfReviews:1400,
//     },
//     companyName:'Carlton London',
//     itemName:'Rhodium-Plated CZ floaral Studs',
//     pricing:{
//       discountedPrice:606,
//       originalPrice:1045,
//       discountPercent:42,
//     },

// };
// itemsContainerElement.innerHTML = `<div class="item-container1">
// <a href="#"><img class="img-box" src= "${items.image}" alt="image"></a>
// <div class="rating">
//   <span class="rating-num">${items.rating.stars}</span>
//   <span class="star-icon">⭐</span>
//   <span class="no-of-reviews">${items.rating.count}</span>
// </div>
// <div class="company-name">${items.company}</div>
// <div class="item-name">${items.item_Name}</div>
// <div class="pricing">
//   <span class="discounted-price">Rs${items.current_price}</span>
//   <span class="original-price">Rs${items.original_price}</span>
//   <span class="discount-percent">${items.discount_percentage}%off</span>
// </div>
// <button class="bag-button">Add to Bag</button>
// </div>`;

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector(".items-container");
  if (!itemsContainerElement) {
    return;
  }
  const items = [
    {
      id: "001",
      image: "1.jpg",
      company: "Carlton London",
      item_name: "Rhodium-Plated CZ Floral Studs",
      original_price: 1045,
      current_price: 606,
      discount_percentage: 42,
      rating: {
        stars: 4.5,
        count: 1400,
      },
    },
    {
      id: "002",
      image: "2.jpg",
      company: "CUKOO",
      item_name: "Women Padded Halter Neck Swimming Dress",
      original_price: 2599,
      current_price: 1507,
      discount_percentage: 42,
      rating: {
        stars: 4.3,
        count: 24,
      },
    },
    {
      id: "003",
      image: "3.jpg",
      company: "NUEVOSDAMAS",
      item_name: "Women Red & White Printed A-Line Knee-Length Skirts",
      original_price: 1599,
      current_price: 495,
      discount_percentage: 69,
      rating: {
        stars: 4.1,
        count: 249,
      },
    },
    {
      id: "004",
      image: "4.jpg",
      company: "ADIDAS",
      item_name: "Indian Cricket ODI Jersey",
      original_price: 999,
      current_price: 999,
      discount_percentage: 0,
      rating: {
        stars: 5.0,
        count: 10,
      },
    },
    {
      id: "005",
      image: "5.jpg",
      company: "Roadster",
      item_name: "Pure Cotton T-shirt",
      original_price: 1399,
      current_price: 489,
      discount_percentage: 65,
      rating: {
        stars: 4.2,
        count: 3500,
      },
    },
    {
      id: "006",
      image: "6.jpg",
      company: "Nike",
      item_name: "Men ReactX Running Shoes",
      original_price: 14995,
      current_price: 14995,
      discount_percentage: 0,
      rating: {
        stars: 0.0,
        count: 0,
      },
    },
    {
      id: "007",
      image: "7.jpg",
      company: "The Indian Garage Co",
      item_name: "Men Slim Fit Regular Shorts",
      original_price: 1599,
      current_price: 639,
      discount_percentage: 60,
      rating: {
        stars: 4.2,
        count: 388,
      },
    },
    {
      id: "008",
      image: "8.jpg",
      company: "Nivea",
      item_name: "Men Fresh Deodrant 150ml",
      original_price: 285,
      current_price: 142,
      discount_percentage: 50,
      rating: {
        stars: 4.2,
        count: 5200,
      },
    },
  ];

  let newHtml = "";
  items.forEach((item) => {
    newHtml += `<div class="item-container">
  <a href="#"><img class="img-box" src= "${item.image}" alt="image"></a>
  <div class="rating">
    <span class="rating-num">${item.rating.stars}</span>
    <span class="star-icon">⭐</span>
    <span class="no-of-reviews">${item.rating.count}</span>
  </div>
  <div class="company-name">${item.company}</div>
  <div class="item-name">${item.item_name}</div>
  <div class="pricing">
    <span class="discounted-price">Rs${item.current_price}</span>
    <span class="original-price">Rs${item.original_price}</span>
    <span class="discount-percent">${item.discount_percentage}%off</span>
  </div>
  <button class="bag-button"onclick="addToBag(${item.id});">Add to Bag</button>
  </div>`;
  });
  itemsContainerElement.innerHTML = newHtml;
}

let bagItems; //global declaration
onload();
function onload() {
  let bagStoreStr = localStorage.getItem("bagItems");
  bagItems = bagStoreStr ? JSON.parse(bagStoreStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
  // localStorage.clear();
}

function addToBag(itemID) {
  /*let bagCount = */ bagItems.push(itemID);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));

  displayBagIcon();
  // bagElement = document.querySelector(".showCount");
  // bagElement.innerText = bagCount;
}

function displayBagIcon() {
  let bagIconElement = document.querySelector(".showCount");
  if (bagItems.length > 0) {
    bagIconElement.innerText = bagItems.length;
    bagIconElement.style.visibility = "visible";
  } else {
    bagIconElement.style.visibility = "hidden";
  }
  // bagIconElement.innerText=bagItems.length;
}

// let bagElement = document.querySelector(".bag-button");
// addEventListener("click", eventFunction);
