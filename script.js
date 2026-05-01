const fortunes = [
    "超大吉　今日の君は無敵だ",
    "大吉　💛素敵な出会いがあるかも！",
    "中吉　少し勇気を出すとよいことが起きる",
    "小吉　今日はゆっくり過ごそう",
    "凶　無理せず慎重に行動しよう"
];

//ボタンと表示エリアを取得
const button = document.getElementById("omikuji-bt");
const result = document.getElementById("result");

//ボタンがクリックされた時の処理
button.addEventListener("click",function () {
    //ランダムな数字を作る
    const randomNumber = Math.floor(Math.random() * fortunes.lenght);
    const resultText = fortumes[(randomNumber)];

    //結果を表示
    result.textContent = fortunes[(randomNumber)];

    if (resultText.includes("大吉")) {
        result.style.color = "red";
        
    } else if (resultText.includes("中吉")) {
        result.style.color = "green";
    }
});
