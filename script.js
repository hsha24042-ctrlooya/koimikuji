const fortunes=[
    "大吉💛素敵な出会いがあるかも！",
    "中吉少し勇気を出すとよいことが起きる",
    "小吉今日はゆっくり過ごそう",
    "凶無理せず慎重に行動しよう"
];

//ボタンと表示エリアを取得
const button=document.getElementById("os")
const result=document.getElementById("result")

//ボタンがクリックされた時の処理
button.addEventListener("click",function(){
    //ランダムな数字を作る
    const randomNumber=Math.floor(Math.random()*foetunes.lenght);
   
    //結果を表示
    result.textContent=fortunes[(randomNumber)];
});
