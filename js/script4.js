// 공지사항 탭
$(function () {
    $(".notice> ul> li").click(function () {
        $(this).children(".text_info").slideToggle();
        $(this).siblings().children(".text_info").slideUp();
    });
});
$(function () {
    $(".notice> ul> li").click(function () {
        $(this).toggleClass("turn");

        if ($(this).hasClass("turn") === true) {
            $(this).siblings().removeClass("turn");

        }

    });
});


// 이벤트 탭 제이쿼리
$(function () {
    $("#tap>li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
    });

});


// 호버 할 3콘텐츠
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 900) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.hover_icon_wrap').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.hover_icon_wrap').fadeOut();//나타날 아이콘 클래스 수정!
    }
});
