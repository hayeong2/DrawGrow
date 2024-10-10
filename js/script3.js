
$(function () {
    $("#tap>li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
    });

});


// 스크롤 높이에 따른 아이콘 등장
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 1500) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.ment_1>li:nth-child(2)').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.ment_1>li:nth-child(2)').fadeOut();//나타날 아이콘 클래스 수정!
    }
});

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 1500) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.ment_1>li:nth-child(3)').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.ment_1>li:nth-child(3)').fadeOut();//나타날 아이콘 클래스 수정!
    }
});

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 1700) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.ment_1>li:nth-child(4)').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.ment_1>li:nth-child(4)').fadeOut();//나타날 아이콘 클래스 수정!
    }
});
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 1700) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.ment_1>li:nth-child(5)').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.ment_1>li:nth-child(5)').fadeOut();//나타날 아이콘 클래스 수정!
    }
});

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 2000) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.ment_1>li:nth-child(6)').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.ment_1>li:nth-child(6)').fadeOut();//나타날 아이콘 클래스 수정!
    }
});
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 2300) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.ment_1>li:nth-child(7)').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.ment_1>li:nth-child(7)').fadeOut();//나타날 아이콘 클래스 수정!
    }
});

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 2650) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.con1-2').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.con1-2').fadeOut();//나타날 아이콘 클래스 수정!
    }
});