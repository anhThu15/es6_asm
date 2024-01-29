// const users = [
//     {
//         id:1,
//         name: "Anh Thư",
//         password: "123456",
//         email: "thu@gmail.com",
//         quyen : "admin"
//     },
//     {
//         id:2,
//         name: "xuanquynh",
//         password: "123456",
//         email: "xuanquynh@gmail.com",
//         quyen : "user"
//     },
//     {
//         id:3,
//         name: "jack 5 củ",
//         password: "123456",
//         email: "jack@gmail.com",
//         quyen : "user"
//     }
// ]

checkLogin=()=>{
    var name = document.querySelector("#name").value;
    var pass = document.querySelector("#pass").value;

    if(!name || !pass){
        alert("Không được để trống");
    }

    axios.get('http://localhost:3000/users')
    .then(res=>{
        console.log(res.data);
        res.data.forEach(user =>{
            if(user.email == name && user.password == pass && user.quyen == 'admin'){
                localStorage.setItem("login",[user.name]);
                window.location.href='admin.html';
            }else if( name != user.email || pass != user.password ){
                alert('nhập sai tên đăng nhập hoặc mật khẩu r kìa');
            } 
            if(user.email == name && user.password == pass && user.quyen == 'user'){
                localStorage.setItem("login",[user.name]);
                window.location.href='index.html';
            }
        })
    })
}

checkSigin=()=>{
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var pass1 = document.querySelector("#pass1").value;
    var pass2 = document.querySelector("#pass2").value;

    if(!name || !email || !pass1 || !pass2){
        alert("Không được để trống");
    }else if( pass1 !== pass2){
        alert("Mật Khẩu không trùng");
    }else{
        var newUser = {
            name : name,
            email : email,
            password : pass1,
            quyen : 'user'
        }
        alert("Tạo Tài Khoản Thành Công");
        window.location.href='index.html';
    }

    axios.post('http://localhost:3000/users',newUser)
    .then(res=>{
        console.log(res.data);
    })
    // console.log(newUser);
    // users.push(newUser);
    // console.log(users);
}


