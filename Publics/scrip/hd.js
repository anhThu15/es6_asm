
renderCart=()=>{
    var loadCart = '';
    var total = 0;
    var nameCart = [];
    axios.get('http://localhost:3000/carts')
    .then(res=>{
        // console.log(res.data);
        res.data.forEach(cart => {
            if(cart.status == 'active'){
                var money = cart.price * cart.quality;
                total += money;
                loadCart += 
                `<tr>
                <td>
                    ${cart.name}
                </td>
                <br>
                <td>
                    ${cart.price.toLocaleString()+'đ'}
                </td>
                <br>
                <td>
                    ${cart.quality}
                </td>
                </tr>`;
            }
            // nameCart += cart.name
            // console.log(nameCart);
        }); 
        document.querySelector("#loads").innerHTML = loadCart;
        document.querySelector("#total").innerHTML = total.toLocaleString()+'đ';
        // localStorage.setItem('carts',JSON.stringify(carts));
        change=()=>{
            var name = document.querySelector("#name").value
            var phone = document.querySelector("#phone").value
            var address = document.querySelector("#address").value
            var email = document.querySelector("#email").value
        
            // console.log(name, phone, address, email);

            res.data.forEach(nameCarts=>{
                nameCart.push(nameCarts.name)
                console.log(nameCart[nameCart.length-1]);
            })
            
            if(!name || !phone || !address || !email){
                alert("Vui lòng điền thông tin ")
            }
                    // console.log(n.name);
                    var waitCart={
                        name : name ,
                        phone : phone,
                        address : address,
                        email : email,
                        price : document.querySelector("#total").innerHTML = total.toLocaleString()+'đ',
                        carts : nameCart,
                        status : 'waits'
                    }
                    console.log(waitCart);
        
            axios.post('http://localhost:3000/waitCarts',waitCart)
            .then(res=>{
                console.log(waitCart);
            })
            
          }
    })
    
}
renderCart();



