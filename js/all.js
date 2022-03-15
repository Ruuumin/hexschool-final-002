$(document).ready(function () {

// 選單
    $('.dropdown').click(function (e) { 
        e.preventDefault();
        $('.dropdown-open').slideToggle();
    });

// 回到頂端
    $('.top').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 400)
    });  

// Swiper
    var mySwiper = new Swiper ( ".swiper-container", {
  		// 參數設定[註1]
  		direction: "horizontal", // 方向
  		loop: true,  // 循環
  		pagination: {
  			el: ".swiper-pagination",  // 分頁物件
  		},
  		navigation: {
  			nextEl: ".swiper-button-next", // 上一頁按鈕物件
  			prevEl: ".swiper-button-prev", // 下一頁按鈕物件
  		},
  		scrollbar: {
  			el: ".swiper-scrollbar", // 捲軸物件
  		}
  	})

});
