const allProducts = [
    { 
        id: 1, 
        category: "手机通讯",
        name: "Apple iPhone 15 (128GB) - 黑色", 
        price: 5999.00, 
        image: "images/iphone15.jpg",
        desc: "创新设计，灵动岛功能，4800万像素主摄，2倍长焦，全天候电池续航。",
        features: [
            "A16 仿生芯片，6核中央处理器，5核图形处理器",
            "6.1英寸超视网膜 XDR 显示屏",
            "航空级铝金属边框，融色玻璃背板",
            "车祸检测功能，关键时刻派上用场",
            "USB-C 接口，充电传输更便捷"
        ]
    },
    { 
        id: 2, 
        category: "电脑办公",
        name: "MacBook Air 13英寸 M2芯片", 
        price: 8999.00, 
        image: "images/macbookair.jpg",
        desc: "重新设计的 MacBook Air，极致轻薄，配备绚丽的 Liquid 视网膜显示屏。",
        features: [
            "M2 芯片，8核中央处理器，8核图形处理器",
            "13.6英寸 Liquid 视网膜显示屏，支持10亿色彩",
            "1080p FaceTime 高清摄像头",
            "四扬声器音响系统，支持空间音频",
            "MagSafe 3 充电端口，两个雷雳端口"
        ]
    },
    { 
        id: 3, 
        category: "数码配件",
        name: "Sony WH-1000XM5 头戴式降噪耳机", 
        price: 2499.00, 
        image: "images/sonyheadphones.jpg",
        desc: "双芯驱动，8麦克风降噪，AI智能降噪，呈现高解析度音质。",
        features: [
            "集成处理器V1 + 降噪处理器QN1",
            "30mm 驱动单元，碳纤维复合材料",
            "约30小时长久续航，支持PD快充",
            "智能免摘对话，佩戴感应",
            "多点连接，同时连接两台设备"
        ]
    },
    { 
        id: 4, 
        category: "电子教育",
        name: "Kindle Paperwhite 5", 
        price: 1099.00, 
        image: "images/kindle.jpg",
        desc: "专为阅读设计，6.8英寸超清墨水屏，可调节冷暖色温。",
        features: [
            "6.8英寸 300ppi 纯平电子墨水屏",
            "IPX8级防水，浴室海边也能安心阅读",
            "翻页速度提升20%，USB-C 接口",
            "一次充电，续航长达数周",
            "海量图书资源，随身携带的图书馆"
        ]
    },
    { 
        id: 5, 
        category: "游戏设备",
        name: "Nintendo Switch OLED版", 
        price: 2199.00, 
        image: "images/switch.jpg",
        desc: "配置色彩更艳丽的7.0寸OLED屏幕，随时随地享受游戏乐趣。",
        features: [
            "7.0英寸 OLED 屏幕，色彩鲜艳，边框更窄",
            "转轴式支架，角度调节更自由",
            "底座自带有线网络接口",
            "64GB 主机内存",
            "支持电视模式、桌面模式、掌上模式"
        ]
    },
    { 
        id: 6, 
        category: "电脑办公",
        name: "Logitech MX Master 3S 鼠标", 
        price: 699.00, 
        image: "images/mouse.jpg",
        desc: "罗技旗舰级办公鼠标，8000 DPI 传感器，静音点击，MagSpeed 电磁滚轮。",
        features: [
            "8000 DPI 传感器，支持玻璃表面追踪",
            "静音点击设计，噪音降低90%",
            "MagSpeed 电磁滚轮，一秒滚动1000行",
            "人体工学设计，贴合手型",
            "Flow 技术，跨电脑控制和文件传输"
        ]
    },
    { 
        id: 7, 
        category: "电脑办公",
        name: "Dell U2723QE 4K 显示器", 
        price: 3499.00, 
        image: "images/monitor.jpg",
        desc: "27英寸 4K IPS Black 面板，2000:1 对比度，98% DCI-P3 色域。",
        features: [
            "IPS Black 技术，黑色更深邃，对比度翻倍",
            "4K 超高清分辨率 (3840 x 2160)",
            "ComfortView Plus 硬件级防蓝光",
            "Type-C 90W 反向供电，一线连接",
            "支持画中画 (PIP) 和画旁画 (PBP)"
        ]
    },
    { 
        id: 8, 
        category: "游戏设备",
        name: "PlayStation 5 游戏主机", 
        price: 3599.00, 
        image: "images/ps5.jpg",
        desc: "体验闪电般的加载速度，触觉反馈、自适应扳机和 3D 音效技术。",
        features: [
            "超高速 SSD，近乎即时的加载速度",
            "支持光线追踪，逼真的阴影和反射效果",
            "最高支持 120fps / 120Hz 输出",
            "DualSense 无线控制器，沉浸式触觉反馈",
            "Tempest 3D AudioTech 音效技术"
        ]
    }
];
let displayedProducts = [...allProducts];
let currentCategory = "全部商品";
function formatPrice(price) {
    return '¥' + price.toFixed(2);
}
function getImageHTML(product) {
    if (product.image) {
        return `<img src="${product.image}" alt="${product.name}" style="width:100%; height:200px; object-fit:contain; margin-bottom:15px;">`;
    }
    return `<div class="product-image-placeholder">${product.name}</div>`;
}
function showToast(message, type = 'success') {
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
        pageLoader.style.display = 'none';
        pageLoader.remove();
    }
    const toast = document.createElement('div');
    const icon = type === 'success' ? '✓' : '⚠';
    const bgColor = type === 'success' ? '#232F3E' : '#B12704';
    const accentColor = type === 'success' ? '#FF9900' : '#fff';
    toast.innerHTML = `
        <div style="font-size: 1.5rem; margin-right: 12px; color: ${accentColor}; font-weight: bold;">${icon}</div>
        <div style="font-size: 1rem; font-weight: 500; color: white;">${message}</div>
    `;
    toast.setAttribute('id', 'super-toast-' + Date.now());
    toast.style.cssText = `
        position: fixed !important;
        top: 90px !important;
        right: 30px !important;
        z-index: 2147483647 !important;
        background: ${bgColor} !important;
        border: 3px solid ${accentColor} !important;
        box-shadow: 0 4px 20px rgba(0,0,0,0.5) !important;
        border-radius: 8px !important;
        padding: 16px 24px !important;
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        justify-content: flex-start !important;
        min-width: 300px !important;
        max-width: 400px !important;
        pointer-events: auto !important;
        visibility: visible !important;
        opacity: 1 !important;
        animation: toastSlideIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
    `;
    document.body.appendChild(toast);
    console.log('✅ Toast显示成功！');
    setTimeout(() => {
        toast.style.animation = 'toastSlideOut 0.3s ease-out forwards';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}
if (!document.getElementById('toast-animations')) {
    const style = document.createElement('style');
    style.id = 'toast-animations';
    style.textContent = `
        @keyframes toastSlideIn {
            0% {
                transform: translateX(400px) !important;
                opacity: 0 !important;
            }
            100% {
                transform: translateX(0) !important;
                opacity: 1 !important;
            }
        }
        @keyframes toastSlideOut {
            to {
                transform: translateX(400px) !important;
                opacity: 0 !important;
            }
        }
    `;
    document.head.appendChild(style);
}
function getCurrentUser() {
    return localStorage.getItem('currentUser');
}
function login(username) {
    localStorage.setItem('currentUser', username);
}
function logout() {
    localStorage.removeItem('currentUser');
    window.location.reload();
}
function updateHeader() {
    const userMenuContainer = document.getElementById('user-menu-container');
    const logoutBtn = document.getElementById('logout-btn');
    const user = getCurrentUser();
    if (userMenuContainer) {
        if (user) {
            userMenuContainer.innerHTML = `
                <div class="nav-item user-menu-item">
                    <span class="nav-line-1">你好, ${user}</span>
                    <span class="nav-line-2">我的账户</span>
                    <div class="user-dropdown">
                        <a href="settings.html?tab=account" class="user-dropdown-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <span>账户信息</span>
                        </a>
                        <a href="orders.html" class="user-dropdown-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="3" width="20" height="18" rx="2" ry="2"></rect>
                                <line x1="8" y1="3" x2="8" y2="21"></line>
                            </svg>
                            <span>我的订单</span>
                        </a>
                        <a href="settings.html?tab=address" class="user-dropdown-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>收货地址</span>
                        </a>
                        <a href="#" onclick="handleLogout(event)" class="user-dropdown-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                <polyline points="16 17 21 12 16 7"></polyline>
                                <line x1="21" y1="12" x2="9" y2="12"></line>
                            </svg>
                            <span>退出登录</span>
                        </a>
                    </div>
                </div>
            `;
            if (logoutBtn) {
                logoutBtn.style.display = 'flex';
            }
        } else {
            userMenuContainer.innerHTML = `
                <a href="login.html" class="nav-item">
                    <span class="nav-line-1">你好, 请登录</span>
                    <span class="nav-line-2">账户列表</span>
                </a>
            `;
            if (logoutBtn) {
                logoutBtn.style.display = 'none';
            }
        }
    }
    const cartBadge = document.getElementById('cart-count-badge');
    if (cartBadge) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const count = cart.reduce((acc, item) => acc + item.qty, 0);
        const oldCount = parseInt(cartBadge.innerText) || 0;
        if (count !== oldCount) {
            cartBadge.classList.add('updated');
            setTimeout(() => cartBadge.classList.remove('updated'), 500);
        }
        cartBadge.innerText = count;
    }
}
function renderCategories() {
    const categoryList = document.getElementById('category-list');
    if (!categoryList) return;
    const categories = ["全部商品", ...new Set(allProducts.map(p => p.category))];
    categoryList.innerHTML = categories.map(cat => `
        <li class="${cat === currentCategory ? 'active' : ''}" onclick="filterByCategory('${cat}')">
            ${cat}
        </li>
    `).join('');
}
function filterByCategory(category) {
    currentCategory = category;
    if (category === "全部商品") {
        displayedProducts = [...allProducts];
    } else {
        displayedProducts = allProducts.filter(p => p.category === category);
    }
    renderCategories();
    loadProducts();
}
function handleSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    const query = searchInput.value.toLowerCase().trim();
    if (query === "") {
        filterByCategory(currentCategory);
    } else {
        displayedProducts = allProducts.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.desc.toLowerCase().includes(query)
        );
        const categoryList = document.getElementById('category-list');
        if(categoryList) {
             const items = categoryList.querySelectorAll('li');
             items.forEach(item => item.classList.remove('active'));
        }
        loadProducts();
    }
}
function loadProducts() {
    const grid = document.querySelector('.product-grid');
    if (grid) {
        if (displayedProducts.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 20px;">没有找到相关商品。</p>';
            return;
        }
        grid.innerHTML = displayedProducts.map(p => `
            <div class="product-card">
                <a href="detail.html?id=${p.id}" style="text-decoration:none; color:inherit;">
                    ${getImageHTML(p)}
                    <h3>${p.name}</h3>
                </a>
                <div style="margin-top:auto;">
                    <div class="price">${p.price.toFixed(2)}</div>
                    <button onclick="addToCart(${p.id})" class="btn btn-primary" style="width:100%; margin-top:10px;">加入购物车</button>
                </div>
            </div>
        `).join('');
    }
}
function loadDetail() {
    const container = document.querySelector('#product-detail');
    if (!container) return;
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    if (!id) {
        container.innerHTML = '<p>未指定商品。</p>';
        return;
    }
    const product = allProducts.find(p => p.id === id);
    if (product) {
        const featuresList = product.features ? 
            `<ul style="margin-top: 15px; padding-left: 20px; color: #555;">
                ${product.features.map(f => `<li>${f}</li>`).join('')}
             </ul>` : '';
        container.innerHTML = `
            <div class="detail-container">
                <div class="detail-image">
                    ${getImageHTML(product)}
                </div>
                <div class="detail-info">
                    <div style="font-size: 0.9rem; color: #565959; margin-bottom: 10px;">
                        <a href="index.html" style="color: #565959; text-decoration: none;">首页</a> > 
                        <span>${product.category}</span>
                    </div>
                    <h1>${product.name}</h1>
                    <hr style="border:0; border-top:1px solid #eee; margin: 10px 0;">
                    <div class="price" style="font-size: 1.5rem;">${product.price.toFixed(2)}</div>
                    <p style="font-size: 1.1rem; font-weight: bold; margin-top: 15px;">关于此商品</p>
                    <p>${product.desc}</p>
                    ${featuresList}
                    <div style="margin-top: 2rem;">
                        <button onclick="addToCart(${product.id})" class="btn btn-primary">加入购物车</button>
                    </div>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = '<p>商品未找到。</p>';
    }
}
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty++;
    } else {
        cart.push({ id: id, qty: 1, selected: true });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateHeader();
    showToast('已成功加入购物车！');
}
function updateCartItem(id, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
        updateHeader();
    }
}
function loadCart() {
    const tbody = document.querySelector('#cart-items');
    const totalEl = document.querySelector('#cart-total');
    if (tbody) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;">您的购物车是空的。</td></tr>';
            if(totalEl) totalEl.innerText = '¥0.00';
            updateCartSummary();
            return;
        }
        let total = 0;
        tbody.innerHTML = cart.map(item => {
            const product = allProducts.find(p => p.id === item.id);
            if (!product) return '';
            const subtotal = product.price * item.qty;
            const isSelected = item.selected !== false;
            if (isSelected) {
                total += subtotal;
            }
            return `
                <tr class="cart-row">
                    <td style="text-align: center;">
                        <input type="checkbox" class="item-checkbox" data-id="${item.id}" 
                            ${isSelected ? 'checked' : ''} 
                            onchange="toggleItemSelect(${item.id})" 
                            style="cursor: pointer; width: 18px; height: 18px;">
                    </td>
                    <td>
                        <div style="font-weight:bold;">${product.name}</div>
                        <div style="font-size:0.8rem; color:#007600;">有货</div>
                    </td>
                    <td class="price">${product.price.toFixed(2)}</td>
                    <td>
                        <button onclick="updateCartItem(${item.id}, -1)" class="btn btn-secondary" style="padding: 2px 8px; border-radius: 4px;">-</button>
                        <span style="margin: 0 10px;">${item.qty}</span>
                        <button onclick="updateCartItem(${item.id}, 1)" class="btn btn-secondary" style="padding: 2px 8px; border-radius: 4px;">+</button>
                    </td>
                    <td class="price">${subtotal.toFixed(2)}</td>
                    <td><button onclick="removeFromCart(${item.id})" class="btn btn-danger">删除</button></td>
                </tr>
            `;
        }).join('');
        if(totalEl) totalEl.innerText = formatPrice(total);
        updateCartSummary();
    }
}
function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(i => i.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateHeader();
    showToast('商品已从购物车移除', 'error');
}
function proceedToCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const selectedItems = cart.filter(item => item.selected !== false);
    if (selectedItems.length === 0) {
        showToast('请选择要结算的商品', 'error');
        return;
    }
    if (!getCurrentUser()) {
        showToast('请先登录！', 'error');
        localStorage.setItem('returnUrl', 'checkout.html');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
    } else {
        window.location.href = 'checkout.html';
    }
}
function toggleSelectAll(event) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const clickedCheckbox = event ? event.target : document.getElementById('select-all');
    const isChecked = clickedCheckbox.checked;
    const selectAllCheckbox = document.getElementById('select-all');
    const selectAllBottomCheckbox = document.getElementById('select-all-bottom');
    if (selectAllCheckbox) selectAllCheckbox.checked = isChecked;
    if (selectAllBottomCheckbox) selectAllBottomCheckbox.checked = isChecked;
    cart.forEach(item => {
        item.selected = isChecked;
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    document.querySelectorAll('.item-checkbox').forEach(checkbox => {
        checkbox.checked = isChecked;
    });
    updateCartSummary();
}
function toggleItemSelect(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(i => i.id === id);
    if (item) {
        item.selected = !item.selected;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartSummary();
    }
}
function updateCartSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const selectedItems = cart.filter(item => item.selected !== false);
    const allSelected = cart.length > 0 && selectedItems.length === cart.length;
    const selectAllCheckbox = document.getElementById('select-all');
    const selectAllBottomCheckbox = document.getElementById('select-all-bottom');
    if (selectAllCheckbox) selectAllCheckbox.checked = allSelected;
    if (selectAllBottomCheckbox) selectAllBottomCheckbox.checked = allSelected;
    let totalQuantity = 0;
    selectedItems.forEach(item => {
        totalQuantity += item.qty;
    });
    const selectedCountEl = document.getElementById('selected-count');
    if (selectedCountEl) {
        const oldCount = parseInt(selectedCountEl.innerText) || 0;
        const newCount = totalQuantity;
        if (oldCount !== newCount) {
            selectedCountEl.classList.add('count-up');
            setTimeout(() => selectedCountEl.classList.remove('count-up'), 500);
        }
        selectedCountEl.innerText = newCount;
    }
    const checkoutCountEl = document.getElementById('checkout-count');
    if (checkoutCountEl) {
        checkoutCountEl.innerText = totalQuantity;
    }
    let total = 0;
    selectedItems.forEach(item => {
        const product = allProducts.find(p => p.id === item.id);
        if (product) {
            total += product.price * item.qty;
        }
    });
    const totalEl = document.querySelector('#cart-total');
    if (totalEl) {
        totalEl.classList.add('price-animate');
        setTimeout(() => totalEl.classList.remove('price-animate'), 500);
        totalEl.innerText = formatPrice(total);
    }
}
function deleteSelected() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const selectedItems = cart.filter(item => item.selected !== false);
    if (selectedItems.length === 0) {
        showToast('请选择要删除的商品', 'error');
        return;
    }
    if (confirm(`确定要删除选中的 ${selectedItems.length} 件商品吗？`)) {
        cart = cart.filter(item => item.selected === false);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
        updateHeader();
        showToast(`已删除 ${selectedItems.length} 件商品`, 'success');
    }
}
function checkLoginRedirect() {
    if (!getCurrentUser()) {
        window.location.href = 'login.html';
    }
}
function loadCheckoutTotal() {
    const totalEl = document.getElementById('checkout-total');
    if (totalEl) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const selectedItems = cart.filter(item => item.selected !== false);
        let total = 0;
        selectedItems.forEach(item => {
            const product = allProducts.find(p => p.id === item.id);
            if (product) {
                total += product.price * item.qty;
            }
        });
        totalEl.innerText = formatPrice(total);
    }
}
function handlePlaceOrder(event) {
    event.preventDefault();
    window.location.href = 'order.html';
}
document.addEventListener('DOMContentLoaded', () => {
    updateHeader();
    renderCategories();
    loadProducts();
    loadDetail();
    loadCart();
    const searchBtn = document.getElementById('search-btn');
    if(searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }
    const searchInput = document.getElementById('search-input');
    if(searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
    initScrollAnimations();
    initSmoothScroll();
    initInputEffects();
    animateNumbers();
});
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    document.querySelectorAll('.product-card').forEach(card => {
        card.classList.add('scroll-fade-in');
        observer.observe(card);
    });
}
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
function initInputEffects() {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement?.classList.add('focused');
        });
        input.addEventListener('blur', function() {
            this.parentElement?.classList.remove('focused');
        });
    });
}
function animateNumbers() {
    const numbers = document.querySelectorAll('.price, .cart-count');
    numbers.forEach(num => {
        const text = num.textContent.replace(/[^0-9.]/g, '');
        const value = parseFloat(text);
        if (!isNaN(value) && value > 0) {
            num.style.opacity = '0';
            setTimeout(() => {
                num.style.transition = 'opacity 0.5s ease';
                num.style.opacity = '1';
            }, 100);
        }
    });
}
function addBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--amazon-orange);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(backToTopBtn);
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.transform = 'scale(1)';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.transform = 'scale(0.8)';
        }
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    backToTopBtn.addEventListener('mouseenter', () => {
        backToTopBtn.style.transform = 'scale(1.1)';
        backToTopBtn.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
    });
    backToTopBtn.addEventListener('mouseleave', () => {
        backToTopBtn.style.transform = 'scale(1)';
        backToTopBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    });
}
setTimeout(addBackToTop, 1000);
window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => {
                if (loader.parentNode) {
                    loader.remove();
                }
            }, 600);
        }, 500);
    }
});
function loadSettingsData() {
    const navItems = document.querySelectorAll('.settings-nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const tab = item.dataset.tab;
            switchTab(tab);
        });
    });
    
    // 检查URL参数，切换到指定的标签页
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    if (tabParam) {
        switchTab(tabParam);
    }
    
    loadAddressList();
    loadAccountInfo();
}
function switchTab(tabName) {
    document.querySelectorAll('.settings-nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.querySelectorAll('.settings-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.getElementById(`panel-${tabName}`).classList.add('active');
}
function getAddresses() {
    const currentUser = getCurrentUser();
    if (!currentUser) return [];
    const key = `addresses_${currentUser}`;
    return JSON.parse(localStorage.getItem(key)) || [];
}
function saveAddresses(addresses) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    const key = `addresses_${currentUser}`;
    localStorage.setItem(key, JSON.stringify(addresses));
}
function loadAddressList() {
    const addressList = document.getElementById('addressList');
    if (!addressList) return;
    const addresses = getAddresses();
    if (addresses.length === 0) {
        addressList.innerHTML = `
            <div class="empty-state">
                <svg xmlns="http:
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <p>暂无收货地址</p>
                <button class="btn btn-primary" onclick="openAddressModal()">添加地址</button>
            </div>
        `;
        return;
    }
    addressList.innerHTML = addresses.map(addr => `
        <div class="address-card ${addr.isDefault ? 'default' : ''}" data-id="${addr.id}">
            <div class="address-card-header">
                <div>
                    <span class="address-card-name">${addr.name}</span>
                    <span class="address-card-phone">${addr.phone}</span>
                </div>
                ${addr.isDefault ? '<span class="default-badge">默认地址</span>' : ''}
            </div>
            <div class="address-card-body">
                ${addr.province} ${addr.city} ${addr.detail}
            </div>
            <div class="address-card-actions">
                ${!addr.isDefault ? `<button class="btn-text" onclick="setDefaultAddress('${addr.id}')">设为默认</button>` : ''}
                <button class="btn-text" onclick="editAddress('${addr.id}')">编辑</button>
                <button class="btn-text danger" onclick="deleteAddress('${addr.id}')">删除</button>
            </div>
        </div>
    `).join('');
}
function openAddressModal(addressId = null) {
    const modal = document.getElementById('addressModal');
    const form = modal.querySelector('form');
    const title = document.getElementById('modalTitle');
    form.reset();
    document.getElementById('addressId').value = '';
    if (addressId) {
        title.textContent = '编辑收货地址';
        const addresses = getAddresses();
        const address = addresses.find(a => a.id === addressId);
        if (address) {
            document.getElementById('addressName').value = address.name;
            document.getElementById('addressPhone').value = address.phone;
            document.getElementById('addressProvince').value = address.province;
            document.getElementById('addressCity').value = address.city;
            document.getElementById('addressDetail').value = address.detail;
            document.getElementById('addressDefault').checked = address.isDefault || false;
            document.getElementById('addressId').value = address.id;
        }
    } else {
        title.textContent = '添加收货地址';
    }
    modal.classList.add('show');
}
function closeAddressModal() {
    const modal = document.getElementById('addressModal');
    modal.classList.remove('show');
}
function handleSaveAddress(event) {
    event.preventDefault();
    const addressId = document.getElementById('addressId').value;
    const isDefault = document.getElementById('addressDefault').checked;
    const addressData = {
        id: addressId || Date.now().toString(),
        name: document.getElementById('addressName').value.trim(),
        phone: document.getElementById('addressPhone').value.trim(),
        province: document.getElementById('addressProvince').value.trim(),
        city: document.getElementById('addressCity').value.trim(),
        detail: document.getElementById('addressDetail').value.trim(),
        isDefault: isDefault
    };
    let addresses = getAddresses();
    if (addressId) {
        const index = addresses.findIndex(a => a.id === addressId);
        if (index !== -1) {
            if (isDefault) {
                addresses.forEach(a => a.isDefault = false);
            }
            addresses[index] = addressData;
        }
    } else {
        if (isDefault) {
            addresses.forEach(a => a.isDefault = false);
        }
        if (addresses.length === 0) {
            addressData.isDefault = true;
        }
        addresses.push(addressData);
    }
    saveAddresses(addresses);
    loadAddressList();
    closeAddressModal();
    showToast(addressId ? '地址已更新' : '地址已添加', 'success');
}
function editAddress(addressId) {
    openAddressModal(addressId);
}
function deleteAddress(addressId) {
    if (!confirm('确定要删除这个地址吗？')) return;
    let addresses = getAddresses();
    const index = addresses.findIndex(a => a.id === addressId);
    if (index !== -1) {
        const wasDefault = addresses[index].isDefault;
        addresses.splice(index, 1);
        if (wasDefault && addresses.length > 0) {
            addresses[0].isDefault = true;
        }
        saveAddresses(addresses);
        loadAddressList();
        showToast('地址已删除', 'success');
    }
}
function setDefaultAddress(addressId) {
    let addresses = getAddresses();
    addresses.forEach(a => a.isDefault = false);
    const address = addresses.find(a => a.id === addressId);
    if (address) {
        address.isDefault = true;
        saveAddresses(addresses);
        loadAddressList();
        showToast('已设为默认地址', 'success');
    }
}
function loadAccountInfo() {
    const usernameEl = document.getElementById('accountUsername');
    const regTimeEl = document.getElementById('accountRegTime');
    const ordersEl = document.getElementById('accountOrders');
    if (!usernameEl) return;
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const userInfo = users[currentUser];
    usernameEl.textContent = currentUser;
    if (userInfo && userInfo.regTime) {
        regTimeEl.textContent = new Date(userInfo.regTime).toLocaleDateString('zh-CN');
    } else {
        regTimeEl.textContent = '未知';
    }
    const orders = getUserOrders();
    ordersEl.textContent = orders.length + ' 个';
}
function handleChangePassword(event) {
    event.preventDefault();
    const currentUser = getCurrentUser();
    if (!currentUser) {
        showToast('请先登录', 'error');
        return;
    }
    const oldPassword = document.getElementById('oldPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (newPassword.length < 6) {
        showToast('新密码长度至少6位', 'error');
        return;
    }
    if (newPassword !== confirmPassword) {
        showToast('两次输入的新密码不一致', 'error');
        return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const userInfo = users[currentUser];
    if (!userInfo) {
        showToast('用户信息不存在', 'error');
        return;
    }
    if (userInfo.password !== oldPassword) {
        showToast('当前密码错误', 'error');
        return;
    }
    userInfo.password = newPassword;
    users[currentUser] = userInfo;
    localStorage.setItem('users', JSON.stringify(users));
    event.target.reset();
    showToast('密码修改成功', 'success');
}
function loadDefaultAddress() {
    const addresses = getAddresses();
    const defaultAddr = addresses.find(a => a.isDefault);
    if (defaultAddr) {
        const nameInput = document.getElementById('fullname');
        const phoneInput = document.getElementById('phone');
        const addressInput = document.getElementById('address');
        if (nameInput) nameInput.value = defaultAddr.name;
        if (phoneInput) phoneInput.value = defaultAddr.phone;
        if (addressInput) addressInput.value = `${defaultAddr.province} ${defaultAddr.city} ${defaultAddr.detail}`;
    }
}
window.openAddressModal = openAddressModal;
window.closeAddressModal = closeAddressModal;
window.handleSaveAddress = handleSaveAddress;
window.editAddress = editAddress;
window.deleteAddress = deleteAddress;
window.setDefaultAddress = setDefaultAddress;
window.handleChangePassword = handleChangePassword;
const ORDER_STATUS = {
    PENDING: 'pending',
    PAID: 'paid',
    RECEIVED: 'received',
    COMPLETED: 'completed'
};
const ORDER_STATUS_TEXT = {
    pending: '待付款',
    paid: '待收货',
    received: '待评价',
    completed: '已完成'
};
function getUserOrders() {
    const currentUser = getCurrentUser();
    if (!currentUser) return [];
    const key = `orders_${currentUser}`;
    return JSON.parse(localStorage.getItem(key)) || [];
}
function saveUserOrders(orders) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    const key = `orders_${currentUser}`;
    localStorage.setItem(key, JSON.stringify(orders));
}
function createOrder(items, address, total) {
    const order = {
        id: 'ORD' + Date.now(),
        orderNumber: generateOrderNumber(),
        items: items,
        address: address,
        total: total,
        status: ORDER_STATUS.PENDING,
        createTime: new Date().toISOString(),
        updateTime: new Date().toISOString()
    };
    let orders = getUserOrders();
    orders.unshift(order);
    saveUserOrders(orders);
    return order;
}
function generateOrderNumber() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const random = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
    return `${year}${month}${day}${hours}${minutes}${seconds}${random}`;
}
function loadOrders(filterStatus = 'all') {
    const ordersList = document.getElementById('ordersList');
    if (!ordersList) return;
    let orders = getUserOrders();
    if (filterStatus !== 'all') {
        orders = orders.filter(order => order.status === filterStatus);
    }
    updateOrderCounts();
    if (orders.length === 0) {
        ordersList.innerHTML = `
            <div class="orders-empty">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="3" width="20" height="18" rx="2" ry="2"></rect>
                    <line x1="8" y1="3" x2="8" y2="21"></line>
                    <line x1="2" y1="9" x2="22" y2="9"></line>
                    <line x1="2" y1="15" x2="22" y2="15"></line>
                </svg>
                <h3>${filterStatus === 'all' ? '暂无订单' : '暂无' + ORDER_STATUS_TEXT[filterStatus] + '订单'}</h3>
                <p>快去挑选心仪的商品吧~</p>
                <a href="index.html" class="btn btn-primary">去购物</a>
            </div>
        `;
        return;
    }
    ordersList.innerHTML = orders.map(order => renderOrderCard(order)).join('');
}
function renderOrderCard(order) {
    const statusText = ORDER_STATUS_TEXT[order.status];
    const createDate = new Date(order.createTime).toLocaleString('zh-CN');
    return `
        <div class="order-card" data-order-id="${order.id}">
            <div class="order-header">
                <div class="order-info">
                    <div class="order-info-item">
                        <span class="order-info-label">订单号:</span>
                        <span>${order.orderNumber}</span>
                    </div>
                    <div class="order-info-item">
                        <span class="order-info-label">下单时间:</span>
                        <span>${createDate}</span>
                    </div>
                </div>
                <div class="order-status ${order.status}">${statusText}</div>
            </div>
            <div class="order-products">
                ${order.items.map(item => {
                    const product = allProducts.find(p => p.id === item.id);
                    if (!product) return '';
                    return `
                        <div class="order-product-item">
                            <img src="${product.image}" alt="${product.name}" class="order-product-image">
                            <div class="order-product-details">
                                <div class="order-product-name">${product.name}</div>
                                <div class="order-product-price">
                                    <span class="price">${formatPrice(product.price)}</span>
                                    <span class="order-product-qty">x${item.qty}</span>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
            <div class="order-footer">
                <div class="order-total">
                    <span class="order-total-label">订单总额:</span>
                    <span class="order-total-price">${formatPrice(order.total)}</span>
                </div>
                <div class="order-actions">
                    ${getOrderActions(order)}
                </div>
            </div>
        </div>
    `;
}
function getOrderActions(order) {
    let buttons = [];
    switch(order.status) {
        case ORDER_STATUS.PENDING:
            buttons.push(`<button class="btn-order primary" onclick="payOrder('${order.id}')">立即付款</button>`);
            buttons.push(`<button class="btn-order danger" onclick="cancelOrder('${order.id}')">取消订单</button>`);
            break;
        case ORDER_STATUS.PAID:
            buttons.push(`<button class="btn-order" onclick="viewOrderDetail('${order.id}')">查看物流</button>`);
            buttons.push(`<button class="btn-order primary" onclick="confirmReceipt('${order.id}')">确认收货</button>`);
            break;
        case ORDER_STATUS.RECEIVED:
            buttons.push(`<button class="btn-order primary" onclick="reviewOrder('${order.id}')">评价订单</button>`);
            buttons.push(`<button class="btn-order" onclick="viewOrderDetail('${order.id}')">查看详情</button>`);
            break;
        case ORDER_STATUS.COMPLETED:
            buttons.push(`<button class="btn-order" onclick="viewOrderDetail('${order.id}')">查看详情</button>`);
            buttons.push(`<button class="btn-order" onclick="buyAgain('${order.id}')">再次购买</button>`);
            break;
    }
    return buttons.join('');
}
function filterOrders(status) {
    document.querySelectorAll('.order-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-status="${status}"]`).classList.add('active');
    loadOrders(status);
}
function updateOrderCounts() {
    const orders = getUserOrders();
    const counts = {
        all: orders.length,
        pending: orders.filter(o => o.status === ORDER_STATUS.PENDING).length,
        paid: orders.filter(o => o.status === ORDER_STATUS.PAID).length,
        received: orders.filter(o => o.status === ORDER_STATUS.RECEIVED).length
    };
    Object.keys(counts).forEach(key => {
        const el = document.getElementById(`count-${key}`);
        if (el) {
            el.textContent = counts[key];
            el.style.display = counts[key] > 0 ? 'block' : 'none';
        }
    });
}
function payOrder(orderId) {
    const orders = getUserOrders();
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    if (confirm(`确认支付 ${formatPrice(order.total)} 吗？`)) {
        order.status = ORDER_STATUS.PAID;
        order.updateTime = new Date().toISOString();
        order.payTime = new Date().toISOString();
        saveUserOrders(orders);
        showToast('支付成功！', 'success');
        const activeTab = document.querySelector('.order-tab.active');
        const currentStatus = activeTab ? activeTab.dataset.status : 'all';
        loadOrders(currentStatus);
    }
}
function cancelOrder(orderId) {
    if (!confirm('确定要取消该订单吗？')) return;
    const orders = getUserOrders();
    const index = orders.findIndex(o => o.id === orderId);
    if (index !== -1) {
        orders.splice(index, 1);
        saveUserOrders(orders);
        showToast('订单已取消', 'success');
        const activeTab = document.querySelector('.order-tab.active');
        const currentStatus = activeTab ? activeTab.dataset.status : 'all';
        loadOrders(currentStatus);
    }
}
function confirmReceipt(orderId) {
    const orders = getUserOrders();
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    if (confirm('确认已收到货物吗？')) {
        order.status = ORDER_STATUS.RECEIVED;
        order.updateTime = new Date().toISOString();
        order.receiveTime = new Date().toISOString();
        saveUserOrders(orders);
        showToast('确认收货成功！', 'success');
        const activeTab = document.querySelector('.order-tab.active');
        const currentStatus = activeTab ? activeTab.dataset.status : 'all';
        loadOrders(currentStatus);
    }
}
function reviewOrder(orderId) {
    const orders = getUserOrders();
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    const review = prompt('请给商品打分并留下评价（按确定即完成评价）：');
    if (review !== null) {
        order.status = ORDER_STATUS.COMPLETED;
        order.updateTime = new Date().toISOString();
        order.reviewTime = new Date().toISOString();
        order.review = review || '好评！';
        saveUserOrders(orders);
        showToast('评价成功！', 'success');
        const activeTab = document.querySelector('.order-tab.active');
        const currentStatus = activeTab ? activeTab.dataset.status : 'all';
        loadOrders(currentStatus);
    }
}
function viewOrderDetail(orderId) {
    const orders = getUserOrders();
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    alert(`订单详情\n\n订单号：${order.orderNumber}\n状态：${ORDER_STATUS_TEXT[order.status]}\n总金额：${formatPrice(order.total)}\n下单时间：${new Date(order.createTime).toLocaleString('zh-CN')}`);
}
function buyAgain(orderId) {
    const orders = getUserOrders();
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    order.items.forEach(item => {
        const existingItem = cart.find(c => c.id === item.id);
        if (existingItem) {
            existingItem.qty += item.qty;
        } else {
            cart.push({ ...item, selected: true });
        }
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    showToast('商品已加入购物车！', 'success');
    updateHeader();
}
function handlePlaceOrderWithOrder(event) {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const selectedItems = cart.filter(item => item.selected !== false);
    if (selectedItems.length === 0) {
        showToast('请选择要结算的商品', 'error');
        return;
    }
    let total = 0;
    selectedItems.forEach(item => {
        const product = allProducts.find(p => p.id === item.id);
        if (product) {
            total += product.price * item.qty;
        }
    });
    const orderAddress = {
        name: fullname,
        phone: phone,
        address: address
    };
    createOrder(selectedItems, orderAddress, total);
    const remainingCart = cart.filter(item => item.selected === false);
    localStorage.setItem('cart', JSON.stringify(remainingCart));
    showToast('订单提交成功！', 'success');
    setTimeout(() => {
        window.location.href = 'orders.html';
    }, 1000);
}
window.filterOrders = filterOrders;
window.payOrder = payOrder;
window.cancelOrder = cancelOrder;
window.confirmReceipt = confirmReceipt;
window.reviewOrder = reviewOrder;
window.viewOrderDetail = viewOrderDetail;
window.buyAgain = buyAgain;
window.loadOrders = loadOrders;
function handleLogout(event) {
    event.preventDefault();
    if (confirm('确定要退出登录吗？')) {
        logout();
        showToast('已退出登录', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 500);
    }
}
window.handleLogout = handleLogout;