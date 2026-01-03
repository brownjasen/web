function checkMerchantLogin() {
    const merchantUser = localStorage.getItem('merchantUser');
    if (!merchantUser && window.location.pathname.includes('merchant-dashboard')) {
        window.location.href = 'merchant-login.html';
    }
}
function merchantLogout() {
    if (confirm('确定要退出商家后台吗？')) {
        localStorage.removeItem('merchantUser');
        window.location.href = 'index.html';
    }
}
function showPanel(panelName) {
    document.querySelectorAll('.merchant-nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelectorAll('.merchant-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    event.target.closest('.merchant-nav-item').classList.add('active');
    document.getElementById(panelName + '-panel').classList.add('active');
    if (panelName === 'products') {
        loadMerchantProducts();
    } else if (panelName === 'orders') {
        loadMerchantOrders();
    } else if (panelName === 'stats') {
        loadStats();
    }
}
function loadMerchantProducts() {
    const productsList = document.getElementById('merchantProductsList');
    if (!productsList) return;
    const products = allProducts || [];
    if (products.length === 0) {
        productsList.innerHTML = `
            <div style="text-align: center; padding: 60px; color: #999;">
                <p>暂无商品</p>
                <button class="btn btn-primary" onclick="openAddProductModal()">添加第一个商品</button>
            </div>
        `;
        return;
    }
    productsList.innerHTML = products.map(product => `
        <div class="merchant-product-card">
            <img src="${product.image}" alt="${product.name}" class="merchant-product-image">
            <div class="merchant-product-info">
                <div class="merchant-product-name">${product.name}</div>
                <div class="merchant-product-category">${product.category}</div>
                <div class="merchant-product-price">¥${product.price.toFixed(2)}</div>
            </div>
            <div class="merchant-product-actions">
                <button class="btn-small" onclick="editProduct(${product.id})">编辑</button>
                <button class="btn-small btn-danger" onclick="deleteProduct(${product.id})">删除</button>
            </div>
        </div>
    `).join('');
}
function openAddProductModal() {
    document.getElementById('productModalTitle').textContent = '添加商品';
    document.getElementById('productForm').reset();
    document.getElementById('productId').value = '';
    document.getElementById('productModal').style.display = 'flex';
}
function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
}
function editProduct(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    document.getElementById('productModalTitle').textContent = '编辑商品';
    document.getElementById('productId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productImage').value = product.image;
    document.getElementById('productDesc').value = product.description || '';
    document.getElementById('productModal').style.display = 'flex';
}
function deleteProduct(productId) {
    if (!confirm('确定要删除该商品吗？')) return;
    const index = allProducts.findIndex(p => p.id === productId);
    if (index !== -1) {
        allProducts.splice(index, 1);
        saveProductsToStorage();
        loadMerchantProducts();
        showToast('商品已删除', 'success');
    }
}
function saveProductsToStorage() {
    localStorage.setItem('allProducts', JSON.stringify(allProducts));
}
document.addEventListener('DOMContentLoaded', () => {
    checkMerchantLogin();
    const productForm = document.getElementById('productForm');
    if (productForm) {
        productForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const productId = document.getElementById('productId').value;
            const productData = {
                id: productId ? parseInt(productId) : Date.now(),
                name: document.getElementById('productName').value,
                price: parseFloat(document.getElementById('productPrice').value),
                category: document.getElementById('productCategory').value,
                image: document.getElementById('productImage').value,
                description: document.getElementById('productDesc').value
            };
            if (productId) {
                const index = allProducts.findIndex(p => p.id === parseInt(productId));
                if (index !== -1) {
                    allProducts[index] = productData;
                    showToast('商品已更新', 'success');
                }
            } else {
                allProducts.push(productData);
                showToast('商品已添加', 'success');
            }
            saveProductsToStorage();
            loadMerchantProducts();
            closeProductModal();
        });
        loadMerchantProducts();
    }
});
function loadMerchantOrders() {
    const ordersList = document.getElementById('merchantOrdersList');
    if (!ordersList) return;
    let allOrders = [];
    const users = JSON.parse(localStorage.getItem('users')) || {};
    Object.keys(users).forEach(username => {
        const userOrders = JSON.parse(localStorage.getItem(`orders_${username}`)) || [];
        userOrders.forEach(order => {
            allOrders.push({
                ...order,
                username: username
            });
        });
    });
    allOrders.sort((a, b) => new Date(b.createTime) - new Date(a.createTime));
    if (allOrders.length === 0) {
        ordersList.innerHTML = `
            <div style="text-align: center; padding: 60px; color: #999;">
                <p>暂无订单</p>
            </div>
        `;
        return;
    }
    ordersList.innerHTML = allOrders.map(order => {
        const statusText = ORDER_STATUS_TEXT[order.status] || order.status;
        const createDate = new Date(order.createTime).toLocaleString('zh-CN');
        return `
            <div class="merchant-order-card">
                <div class="merchant-order-header">
                    <div>
                        <strong>订单号：</strong>${order.orderNumber}<br>
                        <strong>用户：</strong>${order.username}<br>
                        <strong>时间：</strong>${createDate}
                    </div>
                    <div class="order-status ${order.status}">${statusText}</div>
                </div>
                <div class="merchant-order-items">
                    ${order.items.map(item => {
                        const product = allProducts.find(p => p.id === item.id);
                        if (!product) return '';
                        return `
                            <div class="merchant-order-item">
                                <img src="${product.image}" alt="${product.name}">
                                <div>
                                    <div>${product.name}</div>
                                    <div>¥${product.price.toFixed(2)} x ${item.qty}</div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                <div class="merchant-order-footer">
                    <div class="merchant-order-total">总金额：¥${order.total.toFixed(2)}</div>
                </div>
            </div>
        `;
    }).join('');
}
function loadStats() {
    const totalProducts = allProducts.length;
    document.getElementById('totalProducts').textContent = totalProducts;
    let allOrders = [];
    let totalSales = 0;
    let pendingCount = 0;
    const users = JSON.parse(localStorage.getItem('users')) || {};
    Object.keys(users).forEach(username => {
        const userOrders = JSON.parse(localStorage.getItem(`orders_${username}`)) || [];
        allOrders = allOrders.concat(userOrders);
    });
    allOrders.forEach(order => {
        if (order.status === 'paid' || order.status === 'received' || order.status === 'completed') {
            totalSales += order.total;
        }
        if (order.status === 'pending') {
            pendingCount++;
        }
    });
    document.getElementById('totalOrders').textContent = allOrders.length;
    document.getElementById('pendingOrders').textContent = pendingCount;
    document.getElementById('totalSales').textContent = '¥' + totalSales.toFixed(2);
}
window.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('merchant-dashboard')) {
        loadStats();
    }
});