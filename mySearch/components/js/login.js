/// 要操作到的元素
let login=document.getElementById('login');
let register=document.getElementById('register');
let form_box=document.getElementsByClassName('form-box')[0];
let register_box=document.getElementsByClassName('register-box')[0];
let login_box=document.getElementsByClassName('login-box')[0];
// 去注册按钮点击事件
register.addEventListener('click',()=>{
    form_box.style.transform='translateX(80%)';
    login_box.classList.add('hidden');
    register_box.classList.remove('hidden');
})
// 去登录按钮点击事件
login.addEventListener('click',()=>{
    form_box.style.transform='translateX(0%)';
    register_box.classList.add('hidden');
    login_box.classList.remove('hidden');
})
// 登录注册功能简单实现
let registeredData = {};

function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username==""||password==""){
        alert("登录失败，请检查用户名和密码！")
    }
    else{
            if (registeredData[username] && registeredData[username] === password) {
                alert('登录成功！');
                window.location.href ='../../index.html';
                } 
            else {
                alert('登录失败，请检查用户名和密码！');
                }
        }
}

function handleRegister() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // 判断输入框是否为空
    if(username!=""&&password!==""){

        if (!registeredData[username]) {
        registeredData[username] = password;
            alert('注册成功！');} 
        else {
            alert('用户名已存在，请选择其他用户名！');
             }
    }
    else{
        alert("请输入账号和密码!")
    }

 }