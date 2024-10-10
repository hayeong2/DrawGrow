// 탭 
$(function () {
    $("#tap>li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
    });

});


// 부드럽게 이동하기
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

