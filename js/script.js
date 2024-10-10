// 부드럽게 움직이기
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);//움직이는 시간 조정
                return false;
            }
        }
    });
});

// 원하는 높이에서 나타나기
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 1200) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.content2_title_1').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.content2_title_1').fadeOut();//나타날 아이콘 클래스 수정!
    }
});

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 1500) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.book_wrap').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.book_wrap').fadeOut();//나타날 아이콘 클래스 수정!
    }
});

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 1500) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.book_intro_wrap').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.book_intro_wrap').fadeOut();//나타날 아이콘 클래스 수정!
    }
});

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 1800) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.content2_title_2').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.content2_title_2').fadeOut();//나타날 아이콘 클래스 수정!
    }
});

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 2100) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.item_intro').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.item_intro').fadeOut();//나타날 아이콘 클래스 수정!
    }
});




// 가에서 중앙으로 슝 (content3,4 / map1,2)

// 스크롤을 감지하여 특정 위치에서 애니메이션을 적용하는 함수
function checkPositionAndAnimate() {
    const elements = document.querySelectorAll('.moving-element');
    const triggerHeight = window.innerHeight * 0.7; // 화면의 70% 지점에서 트리거

    elements.forEach(element => {
        // 요소가 화면의 80% 지점에 도달하면 애니메이션 실행
        if (element.getBoundingClientRect().top < triggerHeight) {
            element.classList.add('animate');
        } else {
            // 스크롤을 올렸을 때 애니메이션 제거
            element.classList.remove('animate');
        }
    });
}

// 스크롤할 때마다 함수 실행
window.addEventListener('scroll', checkPositionAndAnimate);

// 초기 페이지 로드 시에도 애니메이션 체크
document.addEventListener('DOMContentLoaded', checkPositionAndAnimate);



$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 4300) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.content5_title').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.content5_title').fadeOut();//나타날 아이콘 클래스 수정!
    }
});











