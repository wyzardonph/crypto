document.addEventListener("DOMContentLoaded", () => {
    const cryptoContainer = document.getElementById('crypto-container');
  
    const cryptocurrencies = [
      { name: 'Bitcoin', price: 50000 },
      { name: 'Ethereum', price: 3000 },
      { name: 'Ripple', price: 1.5 },
      { name: 'Dogecoin', price: 0.19 },
      { name: 'CumStar', price: 5.26 },
      { name: 'Pepe', price: 0.000008418 },
      { name: 'USD Coin', price: 0.9999 },
      { name: 'Baby Pepe', price: 0.000002311 },
    ];
  
    cryptocurrencies.forEach(crypto => {
      const cryptoCard = document.createElement('div');
      cryptoCard.classList.add('crypto-card');
      cryptoCard.innerHTML = `
        <h2>${crypto.name}</h2>
        <p>Price: $${crypto.price}</p>
      `;
      cryptoContainer.appendChild(cryptoCard);
    });
  });