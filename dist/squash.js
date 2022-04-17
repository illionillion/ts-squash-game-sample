"use strict";
///<reference path="../dist/WWS.js"/>
// 変数の宣言
let ballX = 600; //ボールX座標
let ballY = 300; //ボールY座標
let ballXp = 0; //ボールX軸への速さ
let ballYp = 0; //ボールY軸への速さ
let barX = 600; //バーX
let barY = 700; //バーY
let score = 0;
let scene = 0;
// 起動時の処理
const setup = () => {
    canvasSize(1200, 800);
    lineW(3);
    loadImg(0, "image/bg.png");
    loadSound(0, 'sound/se.m4a');
};
// メインループ
const mainloop = () => {
    drawImg(0, 0, 0); //背景画像表示
    setAlp(50); //透明度を指定
    fRect(250, 50, 700, 750, "black");
    setAlp(100);
    sRect(250, 50, 700, 760, "silver");
    fText(`ＳＣＯＲＥ　${score}`, 600, 25, 36, "white");
    sCir(ballX, ballY, 10, 'lime');
    sRect(barX - 50, barY - 10, 100, 20, 'violet');
    if (scene === 0) { //タイトル
        fText('Squash Game', 600, 200, 48, 'cyan');
        fText('Click to start!', 600, 600, 36, 'gold');
        if (tapC === 1) {
            ballX = 600;
            ballY = 300;
            ballXp = 12;
            ballYp = 8;
            score = 0;
            scene = 1;
        }
    }
    else if (scene === 1) {
        ballX += ballXp;
        ballY += ballYp;
        if (ballX <= 260 || ballX >= 940)
            ballXp = -ballXp; //X軸 反転
        if (ballY <= 60 /*|| ballY >= 790*/)
            ballYp = 8 + rnd(8); //-ballYp //Y軸 反転
        if (ballY > 800)
            scene = 2;
        // sCir(ballX, ballY, 10 , "lime")
        barX = tapX; //マウスポインタの位置
        if (barX < 300)
            barX = 300; //バー(左)位置固定
        if (barX > 900)
            barX = 900; //バー(右)位置固定
        if (barX - 60 < ballX && ballX < barX + 60 && barY - 30 < ballY && ballY < barY - 10) {
            ballYp = -8 - rnd(8);
            score += 100;
            if (score % 500 === 0) { //Arrange:スコアが500ごとにスピードアップする
                // console.log('speed up');
                ballXp *= 1.1;
                ballYp *= 1.1;
            }
            playSE(0);
        }
        // sRect(barX - 50, barY - 10, 100, 20, "violet")
    }
    else if (scene === 2) { //ゲームオーバー
        fText(`GAME OVER`, 600, 400, 36, 'red');
        if (tapC === 1) {
            scene = 0;
            tapC = 0;
        }
    }
};
