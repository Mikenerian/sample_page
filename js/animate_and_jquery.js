$('.fadeInUpTrigger').on('inview', function(event, isInView) {
  // $はjQuery特有のコマンド
  if (isInView) {  // 表示領域に入ったとき
    $(this).addClass('animate__animated animate__fadeInUp');  // クラス名を付与。$(this)はイベントが発生した要素
  } else {  // 表示領域から出たとき。ここを除去すればスクロール時1回だけアニメーションが発動する
    $(this).removeClass('animate__animated animate__fadeInUp');  // クラス名を除去
  }
})