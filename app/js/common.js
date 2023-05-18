
//click on butter at menu mobile
    var button = document.getElementById('butt');
    var humburg = document.querySelector('.hamburger')
    var mobil = document.getElementById('menu_mobil');
    var menuShow = document.getElementById('menu__show');
    var menuHidden = document.getElementById('menu-hidden');
    button.onclick = function () {
        mobil.classList.toggle('active');
        humburg.classList.toggle('active');
    }
    menuShow.onclick = function (e) {
        e.preventDefault();
        menuHidden.classList.toggle('active');
    }
//open and close search from header
var search = document.getElementById('search-btn');
var openForm = document.getElementById('search-form');
var body = document.getElementById('body');
if( window.innerWidth <= 992 ){
    search.onclick = function () {
        openForm.classList.toggle('active');
        search.classList.toggle('active');
        document.getElementById('input-search').value = "";
        // body1.classList.toggle('active');
    }
}
else{
    search.onclick = function () {
        document.getElementById('input-search').value = "";
        openForm.classList.toggle('active-desctop');
        search.classList.toggle('active-desctop');
        body.classList.toggle('active');
    }
}
//open and close search from header in index-chronicle.html
var search1 = document.getElementById('search-btn1');
var openForm1 = document.getElementById('search-form1');

if( window.innerWidth <= 992 ){
    search1.onclick = function () {
        openForm1.classList.toggle('active');
        search1.classList.toggle('active');
        document.getElementById('input-search1').value = "";
    }
}
else{
    search1.onclick = function () {
        document.getElementById('input-search1').value = "";
        openForm1.classList.toggle('active-desctop');
        search1.classList.toggle('active-desctop');
        body.classList.toggle('active');
    }

}

//click index-tegs.html
var showBtn = document.querySelector('.show-btn');
var textHidden = document.querySelector('.text-hidden');
var hiddenBtn = document.querySelector('.hidden-btn');
showBtn.onclick = function () {
    this.classList.toggle('active')
    textHidden.classList.toggle('active');
}
hiddenBtn.onclick = function () {
    textHidden.classList.toggle('active');
    showBtn.classList.toggle('active')
}

//open text from rubric
if( window.innerWidth <= 568 ){
    var tabBtn1 = document.getElementById('tab-btn_1');
    var tabBtn2 = document.getElementById('tab-btn_2');
    tabBtn1.innerHTML='по рубрикам';
    tabBtn2.innerHTML='последнее';
}

//submit search form
function submitFunction(e){
    {
        var submit = document.getElementById('search-form');
        submit.submit()
    }
    return false;
}



//click comments...
// var cancel = document.querySelector('.content__news__cancel');
// var submit = document.querySelector('.comments__send .about-box__link');
// var reply = document.querySelector('.comments__review__reply');
// var cancelForm = document.querySelector('.comments__review__form');
// cancel.onclick = function () {
//     cancelForm.classList.add('no-active');
//     reply.classList.add('no-active');
//     cancelForm.classList.remove('active');
//     reply.classList.remove('no-active');
// }
// submit.onclick = function () {
//     reply.classList.remove('no-active');
// }
// var back = document.querySelector('.comments__review__back');
// back.onclick = function () {
//     cancelForm.classList.add('active');
//     reply.classList.add('no-active');
// }
// var imgCl = document.querySelector('.comments__img-cl');
// var imgBl = document.querySelector('.comments__img');
// imgCl.onclick = function (e) {
//
//     imgBl.classList.add('no-active');
// }










