
var carts =[];
if( localStorage.getItem('carts') != null ){
    carts = JSON.parse(localStorage.getItem('carts'))
}
// document.querySelector("#sl").innerText = carts.length;
updateCart=()=>{
    var loadCart = '';
    var total = 0;
    for(const gh of carts) {
        var money = gh.price * gh.soluong;
        total += money;
        loadCart += 
        `<div class="col-md">
        <div class="container-fluid text-center brtb" style="display: flex; justify-content: left;">
        <div class="row">
        <div class="col">
        <img src="/Publics/img/${gh.img[0]}" width="300px" class="br"  alt="">
        </div>
        <div class="col">
        <div class="container text-center">
        <div class="row mt-4" >
        <div class="col-6 col-sm-3" style="width: 400px;">
        <h3 style="margin-left: -30px;">${gh.name}</h3>
        </div>
        <div class="w-100"></div>
        
        <div class="col-6 col-sm-3 row">
        <h1>${gh.price.toLocaleString()}₫</h1>
        <input type="number" onchange="doiSL(${gh.id}, this)" value="${gh.soluong}" name="" id="">
        <button type="button" onclick="xoaSP(${gh.id})" class="btn btn-secondary btt ">Xóa</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div> `;
    } 
    document.querySelector("#loads").innerHTML = loadCart;
    document.querySelector("#total").innerHTML = total.toLocaleString()+'đ';
    localStorage.setItem('carts',JSON.stringify(carts));
}
updateCart();


doiSL=(id, input)=>{
    console.log(id,input.value);
    for (var gh of carts) {
        if(gh.id == id){
            gh.soluong = Number(input.value);
            break;
        }
    }
    localStorage.setItem('carts',JSON.stringify(carts));
    updateCart();
}

xoaSP=(id)=>{
    var sp = carts.findIndex(i => i.id === id);
    carts.splice(sp,1);
    updateCart();
}

xoaHet=()=>{
    carts = [];
    updateCart();
}

