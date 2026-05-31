
function addToCart(name, price){


let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

cart.push({
    name:name,
    price:price
});

localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);

showToast("Đã thêm vào giỏ hàng!");

updateCartCount();


}

function loadCart(){


let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

let container =
document.getElementById("cartItems");

if(!container) return;

let html = "";

let total = 0;

cart.forEach(item => {

    html += `
    <div class="cart-item">
        <h3>${item.name}</h3>
        <p>${item.price.toLocaleString()} VNĐ</p>
    </div>
    `;

    total += item.price;
});

container.innerHTML = html;

let totalPrice =
document.getElementById("totalPrice");

if(totalPrice){

    totalPrice.innerHTML =
    "Tổng tiền: " +
    total.toLocaleString() +
    " VNĐ";
}


}

function clearCart(){

localStorage.removeItem("cart");

showToast("Đã xóa giỏ hàng!");

setTimeout(function(){

    location.reload();

},1000);


}

function searchProduct(){


let input =
document.getElementById("searchInput")
.value.toUpperCase();

let products =
document.querySelectorAll(".product");

products.forEach(product => {

    let text =
    product.innerText.toUpperCase();

    if(text.indexOf(input) > -1){

        product.style.display = "";

    }else{

        product.style.display = "none";
    }

});


}

function showToast(message){


let toast =
document.getElementById("toast");

if(!toast) return;

toast.innerHTML = message;

toast.classList.add("show");

setTimeout(function(){

    toast.classList.remove("show");

},2000);


}

function register(){


let user =
document.getElementById("newUser").value;

let pass =
document.getElementById("newPass").value;

if(user === "" || pass === ""){

    showToast("Vui lòng nhập đầy đủ thông tin!");

    return;
}

localStorage.setItem("user", user);
localStorage.setItem("pass", pass);

showToast("Đăng ký thành công!");


}

function login(){


let user =
document.getElementById("username").value;

let pass =
document.getElementById("password").value;

let savedUser =
localStorage.getItem("user");

let savedPass =
localStorage.getItem("pass");

if(user === savedUser &&
   pass === savedPass){

    localStorage.setItem(
        "currentUser",
        user
    );

    showToast("Đăng nhập thành công!");

    setTimeout(function(){

        window.location.href =
        "index.html";

    },1500);

}else{

    showToast(
        "Sai tài khoản hoặc mật khẩu!"
    );

}


}

function showLogin(){


document.getElementById("choiceBox")
.style.display = "none";

document.getElementById("loginBox")
.style.display = "block";


}

function showRegister(){


document.getElementById("choiceBox")
.style.display = "none";

document.getElementById("registerBox")
.style.display = "block";


}

function sendContact(){


showToast("Gửi liên hệ thành công!");


}

function showUser(){


let user =
localStorage.getItem(
    "currentUser"
);

let info =
document.getElementById(
    "userInfo"
);

let logout =
document.getElementById(
    "logoutBtn"
);

if(info && user){

    info.innerHTML =
    "👋 Xin chào, " + user;

    if(logout){

        logout.style.display =
        "block";
    }
}


}

function logout(){


localStorage.removeItem(
    "currentUser"
);

showToast("Đã đăng xuất!");

setTimeout(function(){

    location.reload();

},1500);


}

function forgotPassword(){


showToast(
    "Liên hệ 0123456789 để được hỗ trợ!"
);


}
function updateCartCount(){

    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    let count =
    document.getElementById(
        "cartCount"
    );

    if(count){

        count.innerHTML =
        cart.length;
    }

}
let currentSlide = 0;

function startSlider(){

    let slides =
    document.querySelectorAll(".slide");

    if(slides.length === 0) return;

    setInterval(function(){

        slides[currentSlide]
        .classList.remove("active");

        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        slides[currentSlide]
        .classList.add("active");

    },3000);

}
window.onload = function(){

    loadCart();

    showUser();

    updateCartCount();

    startSlider();

}
