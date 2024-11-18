function generateOrderId() {
    return Math.floor(Math.random() * 100000);
  }

  function orderFood() {
    const selectedItems = [];
    // document.querySelectorAll('.menu-item input:checked').forEach(item => {
    document.querySelectorAll('.menu-item').forEach(item => {
      selectedItems.push(item.value);
    });

    if (selectedItems.length === 0) {
      alert('Please select at least one food item!');
      return;
    }

    const orderId = generateOrderId();
    document.getElementById('id-number').textContent = orderId;
    document.getElementById('order-id').style.display = 'block';

    document.getElementById('order-status').textContent = 'Preparing your order...';
    document.getElementById('order-status').style.color = 'orange';

    // Simulating food preparation with a promise
    const preparationTime = Math.floor(Math.random() * 5) + 2; // 2-6 seconds
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, preparationTime * 1000);
    }).then(() => {
      document.getElementById('order-status').innerHTML = `
        Your order is ready! Enjoy your <b>${selectedItems.join(', ')}</b>.
      `;
      document.getElementById('order-status').style.color = 'green';
    });
  }