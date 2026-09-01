const cards = [
  {
    id: 1,
    title: "Modern Lounge Chair",
    description: "A comfortable and stylish lounge chair designed for modern living spaces.",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
    price: 129.99,
    originalPrice: 159.99,
    currency: "USD",
    category: "Furniture",
    subcategory: "Chairs",
    brand: "Urban Home",
    rating: 4.7,
    reviews: 248,
    badge: "Best Seller",
    inStock: true,
    stockCount: 12,
    discount: 19,
    color: "Beige",
    tags: ["Modern", "Comfortable", "Indoor"],
    features: [
      "Ergonomic design",
      "Premium fabric",
      "Solid wood frame"
    ],
    dimensions: {
      width: "72 cm",
      height: "85 cm",
      depth: "78 cm"
    }
  },
  {
    id: 2,
    title: "Wireless Noise Cancelling Headphones",
    description: "Premium wireless headphones with active noise cancellation and immersive sound.",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 89.99,
    originalPrice: 119.99,
    currency: "USD",
    category: "Electronics",
    subcategory: "Audio",
    brand: "SoundMax",
    rating: 4.8,
    reviews: 1542,
    badge: "Top Rated",
    inStock: true,
    stockCount: 35,
    discount: 25,
    color: "Black",
    tags: ["Wireless", "Bluetooth", "Noise Cancelling"],
    features: [
      "Active noise cancellation",
      "30-hour battery",
      "Bluetooth 5.3",
      "Fast charging"
    ],
    specifications: {
      battery: "30 hours",
      connectivity: "Bluetooth 5.3",
      weight: "250 g",
      warranty: "2 years"
    }
  },
  {
    id: 3,
    title: "Smart Fitness Watch",
    description: "Track your workouts, health metrics, notifications, and daily activities.",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzcyUyMHdhdGNofGVufDB8fDB8fHww",
    price: 199.99,
    originalPrice: 249.99,
    currency: "USD",
    category: "Wearables",
    subcategory: "Smart Watches",
    brand: "TechFit",
    rating: 4.6,
    reviews: 892,
    badge: "New",
    inStock: true,
    stockCount: 18,
    discount: 20,
    color: "Midnight Blue",
    tags: ["Fitness", "Smartwatch", "GPS"],
    features: [
      "Heart rate monitoring",
      "Built-in GPS",
      "Sleep tracking",
      "Water resistant",
      "7-day battery"
    ],
    specifications: {
      display: "1.5 inch AMOLED",
      battery: "7 days",
      waterResistance: "5 ATM",
      compatibility: "iOS & Android"
    }
  },
  {
    id: 4,
    title: "Premium Travel Backpack",
    description: "A durable and spacious backpack perfect for travel, work, and everyday use.",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwYmFja3BhY2t8ZW58MHx8MHx8fDA%3D",
    price: 59.99,
    originalPrice: 79.99,
    currency: "USD",
    category: "Travel",
    subcategory: "Backpacks",
    brand: "TravelPro",
    rating: 4.5,
    reviews: 631,
    badge: "Popular",
    inStock: true,
    stockCount: 24,
    discount: 25,
    color: "Dark Gray",
    tags: ["Travel", "Laptop", "Water Resistant"],
    features: [
      "15-inch laptop compartment",
      "Water-resistant material",
      "USB charging port",
      "Multiple compartments"
    ],
    dimensions: {
      width: "32 cm",
      height: "48 cm",
      depth: "18 cm",
      capacity: "28 L"
    }
  },
  {
    id: 5,
    title: "Automatic Coffee Maker",
    description: "Make fresh and delicious coffee at home with this easy-to-use automatic coffee maker.",
    image: "https://images.unsplash.com/photo-1565452344518-47faca79dc69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwbWFrZXJ8ZW58MHx8MHx8fDA%3D",
    price: 79.99,
    originalPrice: 99.99,
    currency: "USD",
    category: "Kitchen",
    subcategory: "Coffee Machines",
    brand: "BrewMaster",
    rating: 4.4,
    reviews: 425,
    badge: "Sale",
    inStock: true,
    stockCount: 9,
    discount: 20,
    color: "Silver",
    tags: ["Coffee", "Kitchen", "Automatic"],
    features: [
      "12-cup capacity",
      "Programmable timer",
      "Auto shut-off",
      "Reusable filter"
    ],
    specifications: {
      capacity: "1.8 L",
      power: "1000 W",
      material: "Stainless Steel",
      warranty: "1 year"
    }
  },
  {
    id: 6,
    title: "Minimalist Desk Lamp",
    description: "Elegant LED desk lamp with adjustable brightness and a modern minimalist design.",
    image: "https://images.unsplash.com/photo-1621447980929-6638614633c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzayUyMGxhbXB8ZW58MHx8MHx8fDA%3D",
    price: 39.99,
    originalPrice: 49.99,
    currency: "USD",
    category: "Home Decor",
    subcategory: "Lighting",
    brand: "LumiHome",
    rating: 4.3,
    reviews: 317,
    badge: "Trending",
    inStock: true,
    stockCount: 42,
    discount: 20,
    color: "White",
    tags: ["LED", "Desk", "Minimalist"],
    features: [
      "3 brightness levels",
      "Touch controls",
      "USB charging port",
      "Energy efficient"
    ]}
];

const cardContainor = document.getElementById('card-container');
cardContainor.innerHTML = '';
cards.forEach(card => {
    const html = `
        <div class="col-lg-4 col-md-6 mb-4"><div class="card h-100 w-100"><img src="${card.image}" class="card-img-top" alt="...">
        <p class="Id px-3 pt-2 text-muted">ID: ${card.id}</p><div class="card-body"><h5 class="card-title">${card.title}</h5>
        <p class="card-text">${card.description}</p><p class ="card-text"><strong>Features: </strong>${card.features}</p>
        <button class="btn btn-primary btn-sm mt-6">${card.price} to be paid</button>
        </div>
        </div>
        </div>
    `;
    cardContainor.innerHTML += html;
});
if (tableBody) {
    tableBody.innerHTML = cards.map(card => `
        <tr>
            <td><img src="${card.image}" alt="${card.title}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;"></td>
            <td class="text-muted">#0${card.id}</td><td class="fw-bold">${card.title}</td>
            <td style="max-width: 250px;"><small class="text-muted">${card.description}</small></td>
            <td><span class="badge bg-light text-dark border me-1">${card.features.join('</span><span class="badge bg-light text-dark border me-1">')}</span></td>
            <td><button class="btn btn-primary btn-sm text-nowrap">$${card.price} Pay</button></td></tr>`).join('');
}
const toggleButton = document.getElementById('toggle-btn');

toggleButton.addEventListener('change', function() {
  if (this.checked) {
    console.log("Toggle is ON");
  } else {
    console.log("Toggle is OFF");
  }
});
