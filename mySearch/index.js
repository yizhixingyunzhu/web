/*=============== SHOW MENU ===============*/
// 获取导航菜单、切换按钮和关闭按钮的元素
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// 为切换按钮添加点击事件监听器，当点击时显示导航菜单
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

// 为关闭按钮添加点击事件监听器，当点击时隐藏导航菜单
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
// 获取搜索框、搜索按钮和关闭按钮的元素
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

// 为搜索按钮添加点击事件监听器，当点击时显示搜索框
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

// 为关闭按钮添加点击事件监听器，当点击时隐藏搜索框
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
// 获取登录框、登录按钮和关闭按钮的元素
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

// 为登录按钮添加点击事件监听器，当点击时显示登录框
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

// 为关闭按钮添加点击事件监听器，当点击时隐藏登录框
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})
// 搜索功能实现
function searchBaidu() {
   var searchContent = document.getElementById('searchInput').value;
   var url = 'https://www.baidu.com/s?wd=' + encodeURIComponent(searchContent);
   window.open(url, '_blank');
}
var homeSearchBtn = document.querySelector('.homeSearch-btn')
var style1 = document.createElement('style')
var searchBox = document.querySelector('.search-box')
var timeBox = document.querySelector('.home-timeBox')
homeSearchBtn.addEventListener('focus', function () {
    style1.innerHTML = "body::before{ filter: blur(20px); transform: scale(1.01);}";
    document.head.appendChild(style1);
    searchBox.style.width = '440px'
})
homeSearchBtn.addEventListener('blur', function () {
    document.head.removeChild(style1);
    searchBox.style.width = ""
})

setInterval(function () {
    var date = new Date()
    let hh = padZero(date.getHours())
    let mm =padZero( date.getMinutes())
    let ss = padZero(date.getSeconds())
    timeBox.innerText = hh + ':' + mm + ':' + ss
}, 1000)

function padZero(n) {
    return n > 9 ? n : '0' + n
}
// 登录注册功能简单实现
let registeredData = {};

function handleLogin() {
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;

   if (registeredData[username] && registeredData[username] === password) {
         alert('登录成功！');
         window.location.href ='#';
         } 
   else {
      alert('登录失败，请检查用户名和密码！');
         }
 }

function handleRegister() {
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;

   if (!registeredData[username]) {
         registeredData[username] = password;
          alert('注册成功！');
      } 
   else {
       alert('用户名已存在，请选择其他用户名！');
      }
}
// 搜索的简单实现
// 定义一个对象，用于存储函数
const functions = {
   //空函数，用于赋值
   searchFunction:function(){},
   //百度搜索
   searchBaidu: function() {
      var searchContent = document.getElementById('searchInput').value;
   var url = 'https://www.baidu.com/s?wd=' + encodeURIComponent(searchContent);
   window.open(url, '_blank');
   },
   getbilibili: function() {
       // 获取输入框的值
   const searchInput = document.getElementById('searchInput').value;
// 视频搜索
   // 拼接B站自动搜索的URL
   const searchUrl = `https://search.bilibili.com/all?keyword=${encodeURIComponent(searchInput)}`;
   // 打开新窗口并跳转到搜索结果页面
   window.open(searchUrl, '_blank');
   },
   musi:function(){
      const musi = document.getElementById('searchInput').value;
      var urlmusi='https://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord=' + encodeURIComponent(musi);
      window.open(urlmusi, '_blank');
   },
};
// 将调用的空函数默认设为百度的函数，可后续调整
functions.searchFunction=functions.searchBaidu
// 根据传入的值调用相应的函数
function callFunction(funcName) {
   if (functions[funcName]) {
       functions[funcName]();
   } else {
       alert('未找到对应的函数');
   }
}
// 获取文本元素和导航栏按钮元素
// 视频搜索实现
const textElement = document.getElementById('video');
const navbarButtonElement = document.getElementById('show-menu');
// 监听文本元素的点击事件
textElement.addEventListener('click', function() {
   search.classList.add('show-search')
   functions.searchFunction=functions.getbilibili;//点击该按钮后将空函数变为b站搜索，实现点击后弹出的搜索框搜索逻辑改变
   // 模拟点击导航栏按钮的点击事件
   navbarButtonElement.click();
});
// 分割线
// 获取文本元素和导航栏按钮元素
// 1音乐搜索实现
const textElementmusi = document.getElementById('music');
const navbarButtonElementmusi = document.getElementById('show-menu');
// 监听文本元素的点击事件
textElementmusi.addEventListener('click', function() {
  search.classList.add('show-search')
  functions.searchFunction=functions.musi;//点击该按钮后将空函数变为b站搜索，实现点击后弹出的搜索框搜索逻辑改变
   // 模拟点击导航栏按钮的点击事件
  navbarButtonElementmusi.click();
});
// 为搜索按钮添加点击事件监听器，当点击时显示搜索框
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
   // 点击导航栏时，将空函数变回百度
   functions.searchFunction=functions.searchBaidu
})
// 为搜索按钮添加点击事件监听器，当点击时显示搜索框
searchBtn.addEventListener('click', () =>{
   baiduSearch.classList.add('show-search')
})
// 为关闭按钮添加点击事件监听器，当点击时隐藏搜索框
searchClose.addEventListener('click', () =>{
   baiduSearch.classList.remove('show-search')
})
var baiduSearch=document.getElementById('baidu');
var leftBaiduSearch=document.getElementById('show-menu');
baiduSearch.addEventListener('click',function(){
   search.classList.add('show-search')
   functions.searchFunction=functions.searchBaidu
   baiduSearch.click();
})
//分割线
// 页面里的搜素框实现
function searchBaidu2() {
   var baidu = document.getElementById('baiduSearch').value;
var baidu_url = 'https://www.baidu.com/s?wd=' + encodeURIComponent(baidu);
window.open(baidu_url, '_blank');
}
// 分割线
const hiddenButton = document.getElementById('showButton');
const hiddenText = document.getElementById('hiddenText');
var aboveImg=document.getElementById('bigImg');
let isTextHidden=true;
hiddenButton.addEventListener('mouseover',()=>{
    // 鼠标放置切换图片
    aboveImg.src="./mySearch/components/img/img2.jpg"
})
hiddenButton.addEventListener('click', () => {
   if(isTextHidden){
      hiddenText.style.display='block'
      isTextHidden=false;
   }else{
      hiddenText.style.display = 'none';
      isTextHidden=true;
   }
    
});
hiddenButton.addEventListener('mouseout', () => {
     // 恢复原来的图片
    aboveImg.src="./mySearch/components/img/img1.jpg"
    hiddenText.style.display = 'none';
});
// 2
const hiddenButton2 = document.getElementById('showButton2');
const hiddenText2 = document.getElementById('hiddenText2');
let isTextHidden2=true;
hiddenButton2.addEventListener('mouseover',()=>{
    // 鼠标放置切换图片
    aboveImg.src="./mySearch/components/img/img3.jpg"
})
hiddenButton2.addEventListener('click', () => {
   if(isTextHidden2){
      hiddenText2.style.display='block'
      isTextHidden2=false;
   }else{
      hiddenText2.style.display = 'none';
      isTextHidden2=true;
   }
    
});
hiddenButton2.addEventListener('mouseout', () => {
     // 恢复原来的图片
    aboveImg.src="./mySearch/components/img/img1.jpg"
    hiddenText2.style.display = 'none';
});
// 3
const hiddenButton3 = document.getElementById('showButton3');
const hiddenText3 = document.getElementById('hiddenText3');
let isTextHidden3=true;
// 鼠标放置切换图片
hiddenButton3.addEventListener('mouseover',()=>{
    aboveImg.src="./mySearch/components/img/img4.jpg"
})
hiddenButton3.addEventListener('click', () => {
   if(isTextHidden3){
      hiddenText3.style.display='block'
      isTextHidden3=false;
   }else{
      hiddenText3.style.display = 'none';
      isTextHidden3=true;
   } 
});
hiddenButton3.addEventListener('mouseout', () => {
    // 恢复原来的图片
    aboveImg.src="./mySearch/components/img/img1.jpg"
    hiddenText3.style.display = 'none';
});
// 4
const hiddenButton4 = document.getElementById('showButton4');
const hiddenText4 = document.getElementById('hiddenText4');
let isTextHidden4=true;
// 鼠标放置切换图片
hiddenButton4.addEventListener('mouseover',()=>{
    aboveImg.src="./mySearch/components/img/img5.jpg"
})
hiddenButton4.addEventListener('click', () => {
   if(isTextHidden4){
      hiddenText4.style.display='block'
      isTextHidden4=false;
   }else{
      hiddenText4.style.display = 'none';
      isTextHidden4=true;
   }
    
});
hiddenButton4.addEventListener('mouseout', () => {
     // 恢复原来的图片
    aboveImg.src="./mySearch/components/img/img1.jpg"
    hiddenText4.style.display = 'none';
});
// 5，第五个图标信息
const hiddenButton5 = document.getElementById('showButton5');
const hiddenText5 = document.getElementById('hiddenText5');
let isTextHidden5=true;
// 鼠标放置切换图片
hiddenButton5.addEventListener('mouseover',()=>{
    aboveImg.src="./mySearch/components/img/img6.jpg"
})
hiddenButton5.addEventListener('click', () => {
   if(isTextHidden4){
      hiddenText4.style.display='block'
      isTextHidden4=false;
   }else{
      hiddenText5.style.display = 'none';
      isTextHidden4=true;
   }
    
});
hiddenButton5.addEventListener('mouseout', () => {
     // 恢复原来的图片
    aboveImg.src="./mySearch/components/img/img1.jpg"
    hiddenText4.style.display = 'none';
});

// 分割线
// 无卵用的函数
function nothing(){
   alert('无事发生，要不要看看后面的按钮？')
}
document.getElementById("nothing2").addEventListener("click", function() {
  let result = confirm("即将跳转到bilibili主页，确定吗？");
   if (result) {
       var my = 'https://space.bilibili.com/399926894?spm_id_from=333.1007.0.0';
window.open(my,'_blank');
   } else {
       console.log("取消");
   }
});
// 夜间模式实现
// 
// 获取按键id和背景图片id
const day_night = document.getElementById('day_night')
var bgImg=document.getElementById('bgImg')
var isChangeDay_night=true
day_night.addEventListener('click', () =>{
   if(isChangeDay_night){
      bgImg.src="./mySearch/components/img/bg3.jpg"
      isChangeDay_night=false
   }
   else {
      bgImg.src="./mySearch/components/img/bg4.jpg"
       isChangeDay_night=true
   }
})
