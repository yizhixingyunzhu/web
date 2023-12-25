//获取页面实体（输入框、表单）---------------------------------------
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phonn1 = document.getElementById("phone");

//form表单提交事件-----------------------------------
form.addEventListener('submit', (e) => {
    checkInputs();
    e.preventDefault();//防止浏览器刷新页面提交表单
})

//总验证方法-------------------------------------------
function checkInputs() {
    //获取输入框实体的输入值
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phonn1.value.trim();
    //用户名验证
    if (usernameValue==="") {
        setErrorFor(username, "用户名不能为空");
    } else {
        setSuccessFor(username);
    }
    //邮箱验证
    if(emailValue===""){
        setErrorFor(email,"邮箱不能为空");
    }else if(!valiEmail(emailValue)){//aliEmail返回的false表示邮箱不正确，则对其取反为true，if执行
        setErrorFor(email,"邮箱格式不正确，请重新输入");
    }else{
        setSuccessFor(email);
    }
    //密码验证
    if(phoneValue===""){
        setErrorFor(phone,"联系方式");
    }else{
        setSuccessFor(phonn1)
    }
}

//简单封装验证成功和失败的方法-------------------------------
//验证原理：输入框的父组件上添加成功或失败的样式，并且将验证错误信息动态添加到<small>标签中

//验证失败
function setErrorFor(input, message) {
    //input即为组件名（在这里因只有输入框所以写成input），message是错误信息（在总验证方法中传回错误信息message）
    const formControl = input.parentElement;//所验证实体（输入框）的父组件
    const small = formControl.querySelector('small');
    small.textContent = message;
    //此处须注意细节，如果只添加错误样式，输入错误信息后再次输入正确的信息，两个样式相互重叠，造成偏差，
    //所以之前应先去除已出现的样式，没明白的话，可以将添加success的代码注释掉，看看效果
    formControl.classList.remove('success');
    formControl.classList.add('error');
}
//验证成功
function setSuccessFor(input) {
    const formControl = input.parentElement;
    //同理
    formControl.classList.remove('error');
    formControl.classList.add('success');
    var result = confirm("正在提交至q3036875448@163.com");
    if (result) {
        alert('提交成功')
        var result2 = confirm("已经提交成功，要回主页看看吗？");
        if(result2){
            var my = '../../index.html';
            window.open(my);
        }elseconsle.log(取消)
        input.preventDefault();
    } else {
        console.log("取消");
        alert('已取消提交')
    }
}

//邮箱验证特殊情况：邮箱格式不正确----------------------------
function valiEmail(email){
    const regEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    //将传过来的email值与定义的邮箱范围相比较
    return regEmail.test(email);//返回true或false
}