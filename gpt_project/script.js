// Example Data
const orders = [
    { id: 1, customer: "John Doe", status: "Shipped", total: "$150" },
    { id: 2, customer: "Jane Smith", status: "Processing", total: "$250" },
    { id: 3, customer: "Mike Johnson", status: "Delivered", total: "$500" },
    { id: 4, customer: "Chris Evans", status: "Cancelled", total: "$100" },
];

// Render Orders in Table
const orderData = document.getElementById('order-data');

orders.forEach(order => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${order.id}</td>
        <td>${order.customer}</td>
        <td>${order.status}</td>
        <td>${order.total}</td>
    `;
    orderData.appendChild(row);
});
