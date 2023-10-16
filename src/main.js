// Header에 페이지 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
    if(window.scrollY > headerHeight){
        header.classList.add('header--dark');
    } else{
        header.classList.remove('header--dark');
    }
});


//HOME 섹션을 아래로 스크롤시 투명하게 처리
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', ()=> {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


// Home에 있을때 aside 화살표 버튼 숨기고 밑으로 내리면 생기게 함
const aside = document.querySelector('.aside');
const asideHeight = home.offsetHeight;
document.addEventListener('scroll', () =>{
    aside.style.opacity = 1 - asideHeight + window.scrollY;
});

