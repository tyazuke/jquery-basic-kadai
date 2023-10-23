/*
HTMLドキュメントが読み込み完了したときに「loadイベントが発生しました」とコンソールに出力する
画面をスクロールしたときに「scrollイベントが発生しました」とコンソールに出力する
*/


$(window).on({
  "load": () => {$("div").css("background-color", "red");
  console.log("loadイベントが発生しました");},
  "scroll": () =>{console.log("scrollイベントが発生しました");},
});
