
function ready(){
    $('.animation_loading').css('display','flex');
    $(window).on('load',function(e){
        setTimeout(function(){
    $('.animation_loading').hide();

        },1000)

    })
}

ready();

function createID (){
    var id = "";
    id = Math.random().toString().substr(2,4) +"_"+ String(new Date().getTime()).substr(2,4);
    
    return id;
}
console.log(createID());

function renderFlashSale(){
    let listProduct = getProductFromLocal();
    var htmlFlash = '';
    listProduct.forEach(function(e,index){
        htmlFlash = htmlFlash + `<div class="carousel-item">
        <div class="product-item">
            <div class="product-action">
                <a href="" class="product-action__link">
                    <i class="ti-heart product-action__icon"></i>
                    <!-- <i class="fas fa-heart product-action__icon--liked"></i> -->
                </a>
            </div>
            <a href="" class="product-item__link">
                <img src="${listProduct[index].img}" alt=""
                    class="product-item__img">
            </a>
            <div class="product-item__info">
                <a href="" class="product-item__name" title="${listProduct[index].pName}">${listProduct[index].pName}</a>
                <div class="product-item__price">
                    <span class="product-item__price-current">${listProduct[index].price}₫</span>
                    <span class="product-item__price-old">${listProduct[index].price*120/100}₫</span>
                </div>
            </div>
            <span  class="add-to-cart__link">
                <button type="button" class="add-to-cart__btn" onclick = "handleAddCart(${listProduct[index].pID})">
                    <i class="add-to-cart__icon ti-shopping-cart"></i>
                    <span class="add-to-cart__text">Thêm vào giỏ</span>
                </button>
            </span>
        </div>
    </div>`;
    }
    )
  $(".carousel").html(htmlFlash);
}

function renderBook_s5(){
    let listProduct = getProductFromLocal();
    let htmlB = '';
    var count = 0;
    for(var i = 0;i<listProduct.length;i++){
            if(listProduct[i].category=='book'){
                count++;
                htmlB = htmlB + `<div class="product-item">
                <div class="product-action">
                    <a href="" class="product-action__link">
                        <i class="ti-heart product-action__icon"></i>
                        <!-- <i class="fas fa-heart product-action__icon--liked"></i> -->
                    </a>
                </div>
                <a href="" class="product-item__link">
                    <img src="${listProduct[i].img}" alt=""
                        class="product-item__img">
                </a>
                <div class="product-item__info product-item__info-action">
                    <a href="" class="product-item__name" title="${listProduct[i].pName}">${listProduct[i].pName}</a>
                    <div class="product-item__price">
                        <span style="color: var(--primary-color);" class="product-item__price-current">${listProduct[i].price}₫</span>
                        <span class="product-item__price-old">${listProduct[i].oldPrice}</span>
                    </div>
                </div>
                <a href="" class="add-to-cart__link add-to-cart__action">
                    <button style="background-color: var(--primary-color);" class="add-to-cart__btn">
                        <i class="add-to-cart__icon ti-shopping-cart"></i>
                        <span class="add-to-cart__text">Thêm vào giỏ</span>
                    </button>
                </a>
            </div>`;
            }  
    }
$('.carousel-3').html(htmlB);
}

function renderNote_s5(){
    let listProduct = getProductFromLocal();
    let htmlB = '';
    var count = 0;
    for(var i = 0;i<listProduct.length;i++){
            if(listProduct[i].category=='note'){
                count++;
                htmlB = htmlB + `<div class="product-item">
                <div class="product-action">
                    <a href="" class="product-action__link">
                        <i class="ti-heart product-action__icon"></i>
                        <!-- <i class="fas fa-heart product-action__icon--liked"></i> -->
                    </a>
                </div>
                <a href="" class="product-item__link">
                    <img src="${listProduct[i].img}" alt=""
                        class="product-item__img">
                </a>
                <div class="product-item__info product-item__info-action">
                    <a href="" class="product-item__name" title="${listProduct[i].pName}">${listProduct[i].pName}</a>
                    <div class="product-item__price">
                        <span style="color: var(--primary-color);" class="product-item__price-current">${listProduct[i].price}₫</span>
                        <span class="product-item__price-old">${listProduct[i].oldPrice}</span>
                    </div>
                </div>
                <a href="" class="add-to-cart__link add-to-cart__action">
                    <button style="background-color: var(--primary-color);" class="add-to-cart__btn">
                        <i class="add-to-cart__icon ti-shopping-cart"></i>
                        <span class="add-to-cart__text">Thêm vào giỏ</span>
                    </button>
                </a>
            </div>`;
            }  
    }
$('.carousel-4').html(htmlB);
}




function handleAddCart(id){
    let listCart = getCartFromLocal();
    let listUser = getUserFromLocal();
    let check = false;
    let check2 = false;
    let idUser = '';
    for(let i = 0;i<listUser.length;i++){
        if(listUser[i].login == true){
            check = true;
            idUser =  listUser[i].id;
            break;
        }
    }
    if(check == false){
        alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng')
    }

    if(check == true){
        for(let j = 0;j<listCart.length;j++){
            if(listCart[j].pID == id){
                check2 = true;
                alert('Sản phẩm đã có trong giỏ hàng của bạn!');
            }
        }
        if(check2 == false){
            var obj = {};
            obj.pID = id.toString();
            obj.pOfID = idUser;
            obj.check = 'false';
            obj.quantity = 1;
            console.log(obj);
            listCart.push(obj);
            pushCartToLocal(listCart);
            renderCartHome();
            renderPayHome();
            handleCountCart();
            alert('Đã thêm sản phẩm của đại ca vào giỏ hàng');
        }
        
    }
    
}

//get and set localstorage
function  getUserFromLocal(){
    return JSON.parse(localStorage.getItem('u'));
}
function pushUsertoLocal(array){
    localStorage.setItem('u',JSON.stringify(array));
}
function getProductFromLocal(){
    return JSON.parse(localStorage.getItem('p'));
}
function pushProductToLocal(array){
    localStorage.setItem('p',JSON.stringify(array));
}
function getCartFromLocal(){
    return JSON.parse(localStorage.getItem('c'));
}
function pushCartToLocal(array){
    localStorage.setItem('c',JSON.stringify(array));
}
 // login and register
       

    function renderavthome (){ 
        let listUser = getUserFromLocal();
        let checkid = '';
        for(let i = 0;i<listUser.length;i++){
            if(listUser[i].login == true){
                checkid = listUser[i].id;
            }
        }
        if(checkid!=''){
            for(var i = 0;i<listUser.length;i++){
                if(listUser[i].id  == checkid){  
                    var htmAVT = 
                    `<img src="${listUser[i].img}" alt="" class="avt_user-home-img">
                    
                        <ul class = "avt_user-home-list">
                            <li class = "avt_user-home-item">
                            <a title="Tài khoản của tôi"  href="./profile.html" class="avt_user-home-link">
                                Tài Khoản Của Tôi
                            </a>
                            </li>                      
                            <li class = "avt_user-home-item">
                            
                            <span class="avt_user-home-link log_out-home" onclick = "logout()">Đăng Xuất </span>
                            </li>   
                        </ul>
                    `;
                }
            }
            $('.avt_user-home').html(htmAVT);
            $('.avt_user-home').show();
            $('.header__user-account,.js-click-login,.header__user-account').hide();
            $('.header__user-item--log-in').hover(function(){
                $('.header__user-account,.js-click-login,.header__user-account').hide();
            }); 
        }
    }  

function logout(){
    let listUser = getUserFromLocal();
        for(let i = 0;i<listUser.length;i++){
            listUser[i].login = false;
        }   
        pushUsertoLocal(listUser);
        window.location.reload();
       
}

    $('#log-in-password').on('keydown',function(e){
        if(e.keyCode ==13){

            $('#btn_submit-login').click();
        }
    })
    $('#btn_submit-login').on('click',function(){
        let email = $('#log-in-email').val();
        let password = $('#log-in-password').val();
        let listUser = getUserFromLocal();  
        var check = false;
        for(var i = 0;i<listUser.length;i++){    
           if(listUser[i].email == email && listUser[i].password== password){           
               check = true;
                listUser[i].login = true;
               pushUsertoLocal(listUser);
                $('.animation_loading').css('display','flex');
                $('.js-click-login').hide();
                $('.avt_user-home').show();
                const modalogin = document.querySelector('.js-modal-login');
                    const modalRegister = document.querySelector('.js-modal-register');
                    modalogin.classList.remove('open');
                    modalRegister.classList.remove('open');
                    setTimeout(function(){   
                        window.location.reload();
                    },2500);
               break;
           }
       }
       if(check == false){
           alert('Vui lòng kiểm tra email và mật khẩu rồi thử lại!');
       }
});

// end login and register

// active class
    var listActive = document.querySelectorAll('.sec-2-link');
    function removeAllActive(){
        for(var i = 0;i<listActive.length;i++){
            listActive[i].classList.remove('active_left');
        }
    }
    for(var i = 0;i<listActive.length;i++){
        listActive[i].onclick = function(e){
            removeAllActive();
            e.target.classList.add('active_left');
        }
    }
// end active class
//show sec-2 tab n
$('.sec-2-tab-1').show();

    function closeAll(){
        $('.sec-2-tab-1,.sec-2-tab-1-1,.sec-2-tab-2,.sec-2-tab-3,.sec-2-tab-4,.sec-2-tab-5,.sec-2-tab-6,.sec-2-tab-7').hide();
    }
    $('.info_link').on('click',function(){
        closeAll();
        $('.sec-2-tab-1').show();
    })
    $('.sec-2-tab-1-edit').on('click',function(){
        closeAll();
        $('.sec-2-tab-1-1').show();
    })
    $('.cart_link').on('click',function(){
        closeAll();
        $('.sec-2-tab-2').show();
    })
    $('.pass_link').on('click',function(){
        closeAll();
        $('.sec-2-tab-3').show();
    })
    $('.address_link').on('click',function(){
        closeAll();
        $('.sec-2-tab-4').show();
    })
    $('.create_link').on('click',function(){
        closeAll();
        $('.sec-2-tab-5').show();
    })
    $('.change_link').on('click',function(){
        closeAll();
        $('.sec-2-tab-6').show();
    })
//end show sec 2 tab n

// render profile
function renderUser(){
    let listUsers = getUserFromLocal();
    for(var i = 0;i<listUsers.length;i++){
        if(listUsers[i].login == true){
            $('#p_name').html(listUsers[i].name);
            $('#p_email').html(listUsers[i].email);
            $('#p_day').html(listUsers[i].day);
            $('#p_phone').html(listUsers[i].phone);
            $('.tab-title').html(listUsers[i].name);
            $('.sec-2-hi').html(`Xin Chào ${listUser[i].name}!`)
        }
    }
}
// end render prfile
function renderChangeUser(){
    let htmlChange = '';
    let listUser = getUserFromLocal();
    for(let i = 0;i<listUser.length;i++){
        if(listUser[i].login == true){
            htmlChange = htmlChange + `
            <h2 class="sec-2-tab-1-1-title">
            CHỈNH SỬA THÔNG TIN
        </h2>
        <form action="" class="tab-1-1-from">
            <div class="tab-1-1-group">
                <label for="tab-1-1Name" class="label-tab-1-1">Họ Tên</label>
                <input type="text" name="" value="${listUser[i].name}" id="tab-1-1Name" class="input_tab-1-1">
            </div>
            <div class="tab-1-1-group">
                <label for="tab-1-1phone" class="label-tab-1-1">Số điện thoại</label>
                <input type="text" name="" value="${listUser[i].phone}" id="tab-1-1phone" class="input_tab-1-1">
            </div>
            <div class="tab-1-1-group">
                <label for="tab-1-1email" class="label-tab-1-1">Email</label>
                <input type="text" name="" value="${listUser[i].email}" id="tab-1-1email" class="input_tab-1-1">
            </div>
            <div class="tab-1-1-group">
                <label for="tab-1-day" class="label-tab-1-1">Ngày sinh</label>
                <input type="text" name="" value="${listUser[i].day}" id="tab-1-day" class="input_tab-1-1">
            </div>
            <span class="btn_submit-changeUser" onclick = "changeUser()">
                Lưu Thay Đổi
            </span>
        </form>
            `;

        }
    }
    $('.sec-2-tab-1-1').html(htmlChange);
}
function changeUser(){
     let listUser = getUserFromLocal();
    for(let i = 0;i<listUser.length;i++){
        if(listUser[i].login == true){

            if($('#tab-1-1Name').val()){
                listUser[i].name = $('#tab-1-1Name').val();
            }
            if($('#tab-1-1phone').val()){
                listUser[i].phone = $('#tab-1-1phone').val();
            }
            if($('#tab-1-1email').val()){
                listUser[i].email = $('#tab-1-1email').val();
            }
            if($('#tab-1-day').val()){
                listUser[i].day = $('#tab-1-day').val();
            }

        }
    }
    pushUsertoLocal(listUser);
    window.location.reload();
}


function changePassword(){
    let oldpass = $('#tab-3-oldPassword').val();
    let newpass = $('#tab-3-newPassword').val();
    let renewpass = $('#tab-3-reNewPassword').val();
    let listUser = getUserFromLocal();
    for(let i = 0;i<listUser.length;i++){
        if(listUser[i].login == true){
            if(oldpass == listUser[i].password){
                if(newpass == renewpass){
                    listUser[i].password = newpass;
                    alert('Đổi mật khẩu thành công!')
                    closeAll();
                    $('.sec-2-tab-1').show();
                    window.location.reload();
                }else {
                    alert('Mật khẩu mới không khớp');
                }
            }else {
                alert('Bạn đã nhập mật khẩu cũ sai');
            }
        }
    }

    pushUsertoLocal(listUser);
   
    
}

// render cart
function handleCountCart(){
    let count = 0;
    let listUser = getUserFromLocal();
    let listCart = getCartFromLocal();
    for(let i = 0;i<listUser.length;i++){
        if(listUser[i].login == true){
            for(let j= 0;j<listCart.length;j++){
                if(listCart[j].pOfID == listUser[i].id){
                    count++;
                }
            }

        }
    }
    $('.header__user-count').html(count);
}
function renderCart(){

    let listUser = getUserFromLocal();
    var checkid ='';
    for(var k = 0;k<listUser.length;k++){
        if(listUser[k].login == true){
            checkid = listUser[k].id;
        }
    }
    var htmlCart = '';
    var listCart = getCartFromLocal();
    var listProductsAll = getProductFromLocal();
    for(var i = 0;i<listCart.length;i++){
        if(listCart[i].pOfID == checkid){
            for(var j = 0;j<listProductsAll.length;j++){
                if(listCart[i].pID == listProductsAll[j].pID){
                    if(listCart[i].check == 'true'){
                        htmlCart = htmlCart + `
                    <tr>
                    <th>
                        <span>
                            <span class="sec-2-checkbox sec-2-checked" onclick = "checkedCart(${listCart[i].pID})">
                                <i class="fas fa-check"></i>
                            </span>
                        </span>
                    </th>
                    <th class="sec-2-p sec-2-pName">
                        <span> <img src="${listProductsAll[j].img}" class="sec-2-img" alt=""></span>
                        <span class="s2-pName"> ${listProductsAll[j].pName}</span>
                    </th>
                    <th class="sec-2-p">
                        <span class="c-price">
                            ${listProductsAll[j].price}
                        </span>
                    </th>
                    <th class="sec-2-p sec-2-change">
                        <div class="btn-change-s">
                            <span class="btn-change-q" onclick ="reduce(${listCart[i].pID})"><i class="fas fa-minus-square"></i></span>
                            <input type="number" name="" id="" value="${listCart[i].quantity}" min="0" class="input_change-input">
                            <span class="btn-change-q" onclick ="increase(${listCart[i].pID})" ><i class="fas fa-plus-square"></i></span>
                        </div>
                    </th>
                    <th class="sec-2-p">
                        <span class="c-sumPrice">
                            ${listCart[i].quantity*listProductsAll[j].price}
                        </span>
                    </th>
                    <th class="sec-2-p">
                        <div class="sec-2-new-same">
                            <span class="sec-2-delete" onclick = "deleteCart(${listCart[i].pID})">Xóa</span>
                            <span class="sec-2-same">Tìm sản phẩm tương tự</span>
                        </div>
                    </th>
                </tr>  
                    `;
                    }else if(listCart[i].check == 'false'){
                        htmlCart = htmlCart + `
                        <tr>
                        <th>
                            <span>
                                <span class="sec-2-checkbox" onclick = "checkedCart(${listCart[i].pID})">
                                    <i class="fas fa-check"></i>
                                </span>
                            </span>                        
                        </th>
                        <th class="sec-2-p sec-2-pName">
                            <span> <img src="${listProductsAll[j].img}" class="sec-2-img" alt=""></span>
                            <span class="s2-pName"> ${listProductsAll[j].pName}</span>
                        </th>
                        <th class="sec-2-p">
                            <span class="c-price">
                                ${listProductsAll[j].price}
                            </span>
                        </th>
                        <th class="sec-2-p sec-2-change">
                            <div class="btn-change-s">
                                <span class="btn-change-q" onclick ="reduce(${listCart[i].pID})"><i class="fas fa-minus-square"></i></span>
                                <input type="number" name="" id="" value="${listCart[i].quantity}" min="0" class="input_change-input">
                                <span class="btn-change-q" onclick ="increase(${listCart[i].pID})" ><i class="fas fa-plus-square"></i></span>
                            </div>
                        </th>
                        <th class="sec-2-p">
                            <span class="c-sumPrice">
                                ${listCart[i].quantity*listProductsAll[j].price}
                            </span>
                        </th>
                        <th class="sec-2-p">
                            <div class="sec-2-new-same">
                                <span class="sec-2-delete" onclick = "deleteCart(${listCart[i].pID})">Xóa</span>
                                <span class="sec-2-same">Tìm sản phẩm tương tự</span>
                            </div>
                        </th>
                    </tr>  
                        `;
                    } 
                }
            }
        }
    }
    let htmlCartHead = `<tr>
                            <th></th>
                            <th class="sec-2-cart-attribute">Sản phẩm</th>
                            <th class="sec-2-cart-attribute">Đơn giá</th>
                            <th class="sec-2-cart-attribute">Số lượng</th>
                            <th class="sec-2-cart-attribute">Số tiền</th>
                            <th class="sec-2-cart-attribute">Thao tác</th>
                        </tr>`;
    htmlCartHead = htmlCartHead + htmlCart;
  
    $('.sec-2-tab-2-table').html(htmlCartHead);
}
function renderCartHome(){
    let listUser = getUserFromLocal();
    var checkid ='';
    for(var k = 0;k<listUser.length;k++){
        if(listUser[k].login == true){
            checkid = listUser[k].id;
        }
    }
    var htmlCart = '';
    var listCart = getCartFromLocal();
    var listProductsAll = getProductFromLocal();
    for(var i = 0;i<listCart.length;i++){
        if(listCart[i].pOfID == checkid){
            for(var j = 0;j<listProductsAll.length;j++){
                if(listCart[i].pID == listProductsAll[j].pID){
                    htmlCart = htmlCart + `
                    <li class="slide-in-cart__item">
                <div class="cart__item-wrap">
                    <a href="" class="cart__item-img-link">
                        <img src="${listProductsAll[j].img}" alt="" class="cart__item-img">
                    </a>
                    <div class="cart__item-info">
                        <a href="" class="cart__item-name">${listProductsAll[j].pName}</a>
                        <div class="cart-item__numbers">
                            <div class="cart__item-quantity">
                                <span>Số lượng</span>
                                <div class="cart__item-quantity-adjustment">
                                    <button type="button" class="cart-btn-reset cart__item-quantity-adjustment--minus" onclick = "reduce(${listCart[i].pID})">-</button>
                                    <input type="number" class="cart-btn-reset cart__item-quantity-adjustment-input" value="${listCart[i].quantity}">
                                    <button type="button" class="cart-btn-reset cart__item-quantity-adjustment--add" onclick = "increase(${listCart[i].pID})">+</button>
                                </div>
                            </div>
                            <div class="cart__item-price">
                                <span class="cart__item-price-numbers">${listProductsAll[j].price}₫</span>
                                <span class="cart__item-remove" onclick = "deleteCart(${listCart[i].pID})">Xóa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>`;
                }
            }
        }
    }
    $('.cart__list').html(htmlCart);
}
function renderPayHome(){
    let listUser = getUserFromLocal();
    let listCart = getCartFromLocal();
    let checkid;
    for(var l = 0;l<listUser.length;l++){
        if(listUser[l].login == true){
            checkid = listUser[l].id;
        }
    }
    var price = 0;

    for(var i = 0;i<listCart.length;i++){
        if(listCart[i].pOfID == checkid){
            for(var j = 0;j<listProducts.length;j++){
                if(listCart[i].pID == listProducts[j].pID){
                  
                        price = price + listCart[i].quantity* listProducts[j].price;
                     
                }
            }
        }
    }
    var htmlsPay = `<div class="cart__pay-totalPrice">
                        <div class="cart__pay-totalPrice-text">Tổng tiền</div>
                        <div class="cart__pay-totalPrice-number">${price}₫</div>
                    </div>
                    <a href="./muahang.html" class = "cart__pay-btn"> Thanh Toán</a>
                   `;

        $('.cart__pay').html(htmlsPay);
}
function renderChangeProduct(){
    let listProduct = getProductFromLocal();
    let listUser = getUserFromLocal();
    let htmlChangeProduct = '';

    for(let i = 0;i<listUser.length;i++){
        if(listUser[i].login == true){
            
            for(let j = 0;j<listProduct.length;j++){
                
                if(listProduct[j].pOfUser == listUser[i].id){
                    
                    htmlChangeProduct = htmlChangeProduct+ `<li class="sec-2-tab-6-item">
                    <div class="row">
                        <div class="col col-xl-8">
                            <div class="tab-6-info">
                                <span class="tab-6-info-checkbox">
                                    <i class="fas fa-check"></i>
                                </span>
                                <span class="tab-6-info-image">
                                    <img src="${listProduct[j].img}" alt="" class="tab-6-img">
                                </span>
                                <span class="tab-6-pName">
                                    ${listProduct[j].pName}
                                </span>
                            </div>
                        </div>
                  
                        <div class="col col-xl-4 tab-6-align">
                            <div class="tab-6-operation">
                                <span class="tab-6-operation-chan" onclick = "renderFormChangeProduct(${listProduct[j].pID})">
                                    Chỉnh Sửa
                                </span>
                                <span class="tab-6-operation-del" onclick = "deleteProduct(${listProduct[i].pID})">
                                    Xóa
                                </span>
                            </div>
                        </div>
                    </div>
                </li>`;
                }
            }
        }
    }
    $('.sec-2-tab-6-list').html(htmlChangeProduct);
}
function renderFormChangeProduct(id){
    
    closeAll();
    let htmlChPr = '';
    let listProduct = getProductFromLocal();
  
    for(let i = 0;i<listProduct.length;i++){
        if(listProduct[i].pID == id){
            
            htmlChPr = htmlChPr + `<div class="tab-5-form-group">
            <label for="pName" class="form_label">Tên sản phẩm</label>
            <input type="text" name="" id="pName-change" class="input_control" value = "${listProduct[i].pName}">
            <span class="tab-5-form-message"></span>
        </div>
        <div class="tab-5-form-group">
            <label for="pImgfile" class="form_label">Hình ảnh</label>
            <input type="file" name="" id="pImgfile-change" class="file_control">
            <span class="tab-5-form-message"></span>
        </div>
        <div class="tab-5-form-group">
            <label for="pImgLink" class="form_label">Hoặc đường dẫn của sản phẩm</label>
            <input type="text" name="" id="pImgLink-change" class="input_control">
            <span class="tab-5-form-message"></span>
        </div>
        <div class="tab-5-form-group">
            <label for="pPrice" class="form_label">Giá bán</label>
            <input type="number" min="0" name="" id="pPrice-change" class="input_control" value = "${listProduct[i].price}">
            <span class="tab-5-form-message"></span>
        </div>
        <div class="tab-5-form-group">
            <label for="pQuantity" class="form_label">Số lượng</label>
            <input type="number" min = "0" name="" id="pQuantity-change" class="input_control" value = "${listProduct[i].quantity}">
            <span class="tab-5-form-message"></span>
        </div>
        <div class="tab-5-form-group">
            <label for="pCategory" class="form_label">Phân loại sản phẩm</label>
            <select name="" id="pCategory" class="option_control">
                <option value="" class="category_option">Chọn ngành hàng phù hợp</option>

                <option value="" class="category_option">Bút</option>
                <option value="" class="category_option">Tập vở</option>
                <option value="" class="category_option">Thước kẻ</option>
                <option value="" class="category_option">Giấy các loại</option>
                <option value="" class="category_option">Nhãn vở</option>
                <option value="" class="category_option">Bìa bao</option>
            </select>
            <span class="tab-5-form-message"></span>
        </div>
        <div class="tab-5-form-group">
            <label for="pInfo" class="form_label">Thông tin sản phẩm</label>
            <textarea name="" id="pInfo" cols="30" rows="10" class="textarea_control"></textarea>
            <span class="tab-5-form-message"></span>
        </div>
        <button type="button" class="btn_create-product" onclick = "handleChangeProduct(${listProduct[i].pID})">Lưu Thay Đổi</button>`;
        }

    }
$('.sec-2-tab-7').show();
$('.sec-2-tab-7-form').html(htmlChPr);

}
function handleChangeProduct(id){
    var listProduct = getProductFromLocal();
    


}
renderChangeProduct();

function deleteProduct(idProduct){
    let listProduct = getProductFromLocal();
    for(let i = 0;i<listProduct.length;i++){
        if(listProduct[i].pID == idProduct){
            listProduct.splice(i,1);
            pushProductToLocal(listProduct);
            renderChangeProduct();
        }
    }
}
function renderPay(){
    let listUser = getUserFromLocal();
    let checkid;
    for(var l = 0;l<listUser.length;l++){
        if(listUser[l].login == true){
            checkid = listUser[l].id;
        }
    }
    var price = 0;
    var quantityProduct = new Number;
    let listCart = getCartFromLocal();
    let listProducts = getProductFromLocal();
    listCart.forEach(function(e){
        if(e.pOfID ==checkid){
            if(e.check =="true"){
                quantityProduct = quantityProduct + parseInt(e.quantity,10) ;
            }
        }
    });

    for(var i = 0;i<listCart.length;i++){
        if(listCart[i].pOfID == checkid){
            for(var j = 0;j<listProducts.length;j++){
                if(listCart[i].pID == listProducts[j].pID){
                    if(listCart[i].check=="true"){
                        price = price + listCart[i].quantity* listProducts[j].price;
                    } 
                }
            }
        }
    }
    var htmlsPay = `<div class="sec-2-pay-left">
                        <div class="sec-2-left-inp">
                            
                        </div>
                        <span class="sec-2-left-description">Stationery</span>
                    </div>
                    <div class="sec-2-pay-right">
                         <span class="sec-2-pay-description">
                            Tổng thanh toán ( 
            
                             </span>
                         <span class="sec-2-pay-description p_quantity">&nbsp${quantityProduct}</span>
                         <span class="sec-2-pay-description">&nbsp sản phẩm)</span>
       
                        <span class="sec-2-pay-price">
                         ${price}đ
                         </span>
                        <a href="./muahang.html" class="sec-2-pay-link">
                         Mua hàng
                         </a>
                        </div>`;

        $('.sec-2-pay').html(htmlsPay);
        
}

function increase(idProduct){
    let listCart = getCartFromLocal();
    for(var i = 0;i<listCart.length;i++){
        if(listCart[i].pID == idProduct){
            listCart[i].quantity++;
        }
    }
    pushCartToLocal(listCart);
    renderCart();
    renderPay();
    renderCartHome();
    renderPayHome();
}

function reduce(idProduct){
    let listCart = getCartFromLocal();
    for(var i = 0;i<listCart.length;i++){
        if(listCart[i].pID == idProduct){
            listCart[i].quantity--;
        }
    }
    pushCartToLocal(listCart);
    renderCart();
    renderCartHome();
    renderPayHome();
}
function checkedCart(id){
    let listCart = getCartFromLocal();
    for(var i = 0;i<listCart.length;i++){
        if(listCart[i].pID == id){
            if(listCart[i].check=='true'){
                listCart[i].check = 'false';
            }else {
                listCart[i].check = 'true';  
            }
        }
    }
    pushCartToLocal(listCart);
    renderCart();
    renderPay();
}
function deleteCart(id){
    let listCart = getCartFromLocal();
    for(let i = 0;i<listCart.length;i++){
        if(listCart[i].pID == id){
            listCart.splice(i,1);
        }
    }
    pushCartToLocal(listCart);
    renderCart();
    renderCartHome();
    renderPayHome();
    handleCountCart();
}



function startProfile(){
    renderPayHome();
    renderCartHome();
    renderPay();
    renderavthome();
    renderUser();
    renderCart();  
    renderFlashSale();
    renderBook_s5();
    renderNote_s5();
    renderChangeUser();
    handleCountCart();


}
startProfile();