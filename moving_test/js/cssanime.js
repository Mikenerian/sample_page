
// 画面が読み込まれた後に動く記述
$(window).on('load', function(){
  fadeAnime();
});

// 画面がスクロールされたら動く記述
$(window).scroll(function(){
  fadeAnime();
});

function fadeAnime () {  // 動かすきっかけをfadeUpTriggerというクラスで定義
  $('.fadeUpTrigger').each(function(){
    var elemPos = $(this).offset().top-50; //上の50px要素より、
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');  // 画面内に入ったらfadeUpというクラス名を追記
    }else{
      $(this).removeClass('fadeUp');  // 画面外に出たらfadeUpというクラス名を外す
    }
  });
}