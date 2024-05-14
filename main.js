
$(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});





// 動きのきっかけの起点となるアニメーションの名前を定義
function moveAnimation() {

    //読み込まれたらすぐにランダムに出現	
    var randomElm = $(".randomBox");//親要素取得
    var randomElmChild = $(randomElm).children();//親の子要素を取得
    if (!$(randomElm).hasClass("play")) {	//親要素にクラス名playが付いてなければ処理をおこなう
        randomAnime();
    }

    function randomAnime() {
        $(randomElm).addClass("play");//親要素にplayクラスを付与
        var rnd = Math.floor(Math.random() * randomElmChild.length); //配列数からランダム数値を取得
        var moveData = "fadeUp";//アニメーション名＝CSSのクラス名を指定
        $(randomElmChild[rnd]).addClass(moveData);//アニメーションのクラスを追加
        randomElmChild.splice(rnd, 1);//アニメーション追加となった要素を配列から削除
        if (randomElmChild.length == 0) {//配列の残りがあるか確認
            $(randomElm).removeClass("play");//なくなった場合は親要素のplayクラスを削除
        } else {
            setTimeout(function () { randomAnime(); }, 800);	//0.5秒間隔でアニメーションをスタートさせる。※ランダムのスピード調整はこの数字を変更させる	
        }

    }
}

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    moveAnimation();
});



function fadeAnime() {

    

    $('.fadeLeftTrigger').each(function () { //fadeLeftTriggerというクラス名が
        var elemPos = $(this).offset().top - 50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
        } else {
            $(this).removeClass('fadeLeft');// 画面外に出たらfadeLeftというクラス名を外す
        }
    });

    $('.rotateYTrigger').each(function () { //rotateYTriggerというクラス名が
        var elemPos = $(this).offset().top - 50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('rotateY');// 画面内に入ったらrotateYというクラス名を追記
        } else {
            $(this).removeClass('rotateY');// 画面外に出たらrotateYというクラス名を外す
        }
    });
}


$(window).scroll(function () {
    fadeAnime();
});



//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
    if(hashIDName){
      //タブ設定
      $('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
        var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得 
        if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
          var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
          $('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
          $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
          //表示させるエリア設定
          $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
          $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加 
        }
      });
    }
  }
  
  //タブをクリックしたら
  $('.tab a').on('click', function() {
    var idName = $(this).attr('href'); //タブ内のリンク名を取得  
    GethashID (idName);//設定したタブの読み込みと
    return false;//aタグを無効にする
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
  var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
  GethashID (hashName);//設定したタブの読み込み
});





