```css
/* =========================================================
   浦云大学附属中学
   实习教师招聘调查
   完整 style.css
   ========================================================= */


/* =========================================================
   1. 页面
   ========================================================= */

html,
body {

    margin: 0;

    padding: 0;

    min-height: 100%;

}


body {

    background: #f3f4f6;

    font-family:
        Arial,
        "Microsoft YaHei",
        sans-serif;

    color: #263238;

    transition:
        background 0.2s ease,
        color 0.2s ease;
}


/* =========================================================
   2. 主体
   ========================================================= */

.survey-container {

    width: 700px;

    max-width: 90%;

    margin: 70px auto;

    background: #ffffff;

    padding: 55px 60px;

    box-sizing: border-box;

    box-shadow:
        0 2px 12px
        rgba(0, 0, 0, 0.08);

    text-align: center;

}


/* =========================================================
   3. 校徽
   ========================================================= */

.school-logo {

    width: 130px;

    height: 130px;

    object-fit: contain;

    display: block;

    margin:
        0 auto 25px auto;

}


/* =========================================================
   4. 学校名称
   ========================================================= */

.school-name {

    font-size: 32px;

    font-weight: 600;

    letter-spacing: 2px;

    margin-bottom: 8px;

}


.school-name-en {

    font-size: 15px;

    color: #66727d;

    letter-spacing: 0.8px;

    margin-bottom: 35px;

}


/* =========================================================
   5. 首页标题
   ========================================================= */

h1 {

    font-size: 22px;

    font-weight: normal;

    margin-top: 0;

    margin-bottom: 25px;

    padding-top: 25px;

    border-top:
        1px solid #d9dde1;

}


/* =========================================================
   6. 首页说明
   ========================================================= */

.description {

    color: #52606d;

    line-height: 1.8;

    font-size: 15px;

}


.notice {

    margin-top: 35px;

    padding: 20px;

    background: #f7f8fa;

    border-left:
        3px solid #52606d;

    color: #52606d;

    line-height: 1.8;

    font-size: 14px;

    text-align: left;

}


/* =========================================================
   7. 按钮
   ========================================================= */

button {

    margin-top: 35px;

    padding:
        12px 32px;

    border: none;

    background: #263238;

    color: white;

    font-size: 15px;

    cursor: pointer;

    transition:
        opacity 0.2s ease,
        background 0.2s ease;

}


button:hover {

    opacity: 0.85;

}


button:disabled {

    opacity: 0.4;

    cursor: default;

}


/* =========================================================
   8. 问题页面
   ========================================================= */

#questionPage {

    text-align: left;

}


.question-number {

    text-align: left;

    font-size: 13px;

    color: #7b8794;

    margin-bottom: 25px;

}


#questionTitle {

    font-size: 23px;

    font-weight: normal;

    margin-bottom: 35px;

}


#questionContent {

    font-size: 16px;

    line-height: 1.8;

}


/* =========================================================
   9. 文本框
   ========================================================= */

.question-label {

    display: block;

    margin-bottom: 10px;

}


.text-input {

    width: 100%;

    box-sizing: border-box;

    padding: 12px;

    border:
        1px solid #cbd2d9;

    font-size: 16px;

    outline: none;

}


.text-input:focus {

    border-color: #52606d;

}


/* =========================================================
   10. 普通选项
   ========================================================= */

.option {

    display: block;

    padding:
        14px 16px;

    margin-bottom: 10px;

    border:
        1px solid #d9dde1;

    cursor: pointer;

    transition:
        background 0.2s ease,
        border-color 0.2s ease;

}


.option:hover {

    background: #f7f8fa;

}


.option input {

    margin-right: 10px;

}


/* =========================================================
   11. 上一题
   ========================================================= */

#previousButton {

    margin-top: 40px;

    margin-right: 10px;

    background: #68737d;

}


/* =========================================================
   12. 下一题
   ========================================================= */

#nextButton {

    display: inline-block;

    margin-top: 40px;

}


/* =========================================================
   13. Q11
   ========================================================= */

.student-question {

    margin-bottom: 25px;

}


.student-grid {

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 18px;

    margin-top: 20px;

}


.student-card {

    position: relative;

    display: block;

    padding: 22px;

    border:
        1px solid #d8d8d8;

    background: #ffffff;

    cursor: pointer;

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;

}


.student-card:hover {

    border-color: #999;

    box-shadow:
        0 4px 12px
        rgba(0, 0, 0, 0.08);

    transform:
        translateY(-2px);

}


.student-card input[type="radio"] {

    position: absolute;

    opacity: 0;

    pointer-events: none;

}


.student-card.selected {

    border-color: #222;

    box-shadow:
        0 0 0 2px #222;

}


.student-header {

    display: flex;

    align-items: center;

    gap: 12px;

    margin-bottom: 10px;

}


.student-id {

    display: flex;

    align-items: center;

    justify-content: center;

    width: 30px;

    height: 30px;

    border:
        1px solid #999;

    font-weight: bold;

}


.student-name {

    font-size: 18px;

    font-weight: bold;

}


.student-rank {

    margin-bottom: 15px;

    font-size: 13px;

    color: #666;

}


.student-scores {

    display: grid;

    grid-template-columns:
        repeat(5, 1fr);

    border-top:
        1px solid #eee;

    border-bottom:
        1px solid #eee;

    padding: 12px 0;

    margin-bottom: 15px;

}


.score-item {

    display: flex;

    flex-direction: column;

    align-items: center;

    gap: 5px;

    font-size: 12px;

}


.score-item span:last-child {

    font-size: 15px;

    font-weight: bold;

}


.student-section {

    margin-top: 12px;

    font-size: 12px;

    line-height: 1.7;

}


.student-section strong {

    display: block;

    margin-bottom: 3px;

}


.student-select {

    margin-top: 18px;

    padding-top: 12px;

    border-top:
        1px solid #eee;

    font-size: 12px;

    color: #777;

}


.student-card.selected
.student-select {

    color: #111;

    font-weight: bold;

}


/* =========================================================
   14. 普通系统提示
   ========================================================= */

#temporaryMessage {

    position: fixed;

    top: 24px;

    left: 50%;

    transform:
        translateX(-50%);

    padding:
        10px 22px;

    background:
        rgba(255, 255, 255, 0.97);

    border:
        1px solid #999;

    color: #444;

    font-size: 13px;

    letter-spacing: 1px;

    z-index: 9999;

    animation:
        messageAppear
        0.2s ease;

}


#secondTemporaryMessage {

    position: fixed;

    top: 61px;

    left: 50%;

    transform:
        translateX(-50%);

    padding:
        8px 18px;

    color: #555;

    font-size: 12px;

    letter-spacing: 1px;

    z-index: 9999;

}


@keyframes messageAppear {

    from {

        opacity: 0;

        transform:
            translateX(-50%)
            translateY(-5px);

    }

    to {

        opacity: 1;

        transform:
            translateX(-50%)
            translateY(0);

    }

}


/* =========================================================
   15. Q11 黑底绿字
   ========================================================= */

body.secret-mode {

    background: #020402;

    color: #55ff55;

}


/*
   非常重要：

   secret-mode 直接作用于整个 body，
   所以不是只有问卷框变黑，
   而是整个浏览器页面背景都会变成黑色。
*/

body.secret-mode .survey-container {

    background: #020402;

    color: #55ff55;

    box-shadow:
        0 0 30px
        rgba(0, 255, 0, 0.08);

}


body.secret-mode #questionTitle {

    color: #55ff55;

    font-family:
        "Courier New",
        monospace;

    letter-spacing: 2px;

}


body.secret-mode .question-number {

    color: #55ff55;

}


body.secret-mode #questionContent {

    color: #55ff55;

}


/* =========================================================
   16. Q11 机密警告
   ========================================================= */

.secret-warning {

    margin-bottom: 25px;

    color: #55ff55;

    font-family:
        "Courier New",
        monospace;

    font-size: 13px;

    letter-spacing: 2px;

    border-bottom:
        1px solid #1f7a1f;

    padding-bottom: 12px;

}


/* =========================================================
   17. Q11 机密档案
   ========================================================= */

.secret-grid {

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 18px;

}


.secret-card {

    border:
        1px solid #1f7a1f;

    padding: 20px;

    background:
        rgba(0, 30, 0, 0.35);

    font-family:
        "Courier New",
        monospace;

    box-shadow:
        0 0 8px
        rgba(0, 255, 0, 0.08);

}


.secret-student-id {

    color: #359c35;

    font-size: 11px;

    letter-spacing: 2px;

    margin-bottom: 8px;

}


.secret-student-name {

    font-size: 19px;

    font-weight: bold;

    color: #66ff66;

    margin-bottom: 15px;

}


.secret-line {

    font-size: 13px;

    color: #45c745;

    line-height: 1.7;

}


.secret-value {

    color: #55ff55;

    font-size: 15px;

    font-weight: bold;

}


.database-message {

    margin-top: 30px;

    color: #277c27;

    font-family:
        "Courier New",
        monospace;

    font-size: 11px;

    letter-spacing: 1px;

}


/* =========================================================
   18. Q11 机密页面按钮
   ========================================================= */

body.secret-mode #nextButton,
body.secret-mode #previousButton {

    background:
        #020402;

    color:
        #55ff55;

    border:
        1px solid #267326;

    font-family:
        "Courier New",
        monospace;

}


body.secret-mode #nextButton:hover,
body.secret-mode #previousButton:hover {

    background:
        #071107;

    opacity: 1;

}


/* =========================================================
   19. Q15
   ========================================================= */

.q15-container {

    width: 100%;

}


.q15-sentence {

    margin:
        0 0 22px 0;

    line-height: 2;

    transition:
        opacity 0.8s ease;

}


.q15-options {

    margin-top: 35px;

}


.q15-forced-question {

    font-size: 17px;

    line-height: 2;

    margin-bottom: 30px;

}


/* =========================================================
   20. Q15 第一次拒绝
   =========================================================

   注意：

   这里使用 visibility，而不是 display:none。

   这样页面布局不会突然跳动。
*/

body.q15-input-hidden
.q15-options,

body.q15-input-hidden
#nextButton,

body.q15-input-hidden
#previousButton {

    visibility: hidden;

}


/* =========================================================
   21. Q15 第五次：全屏花屏
   ========================================================= */

body.q15-glitch {

    background:
        #000;

    overflow:
        hidden;

}


/*
   整个浏览器视口的乱码层
*/

body.q15-glitch::before {

    content:
        "SYSTEM ERROR  ███ 010101  ERROR  "
        "DATA CORRUPTED  ▓▒░ 01 10 01  "
        "浦云大学附属中学  ERROR  "
        "ACCESS DENIED  0x0000  "
        "SYSTEM FAILURE  "
        "ERROR ERROR ERROR  "
        "010101010101  "
        "DATA LOST  "
        "R4N7D0M  "
        "████████  "
        "SYSTEM FAILURE  "
        "ERROR 404  "
        "CORRUPTED DATA  "
        "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒";

    position:
        fixed;

    top:
        -30%;

    left:
        -30%;

    width:
        160%;

    height:
        160%;

    z-index:
        99990;

    pointer-events:
        none;

    font-family:
        "Courier New",
        monospace;

    font-size:
        25px;

    font-weight:
        bold;

    line-height:
        1.15;

    letter-spacing:
        4px;

    word-break:
        break-all;

    color:
        rgba(255, 0, 0, 0.32);

    background:
        repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.0),
            rgba(0, 0, 0, 0.0) 4px,
            rgba(255, 0, 0, 0.09) 5px,
            rgba(255, 255, 255, 0.05) 7px
        );

    transform:
        rotate(-3deg)
        scale(1.1);

    overflow:
        hidden;

    animation:
        q15GlitchText
        0.08s
        infinite;

}


/* =========================================================
   22. Q15 全屏扫描线
   ========================================================= */

body.q15-glitch::after {

    content:
        "";

    position:
        fixed;

    inset:
        0;

    z-index:
        99991;

    pointer-events:
        none;

    background:
        repeating-linear-gradient(
            0deg,
            transparent 0px,
            transparent 5px,
            rgba(255, 0, 0, 0.12) 6px,
            transparent 8px
        );

    animation:
        q15Scanline
        0.1s
        infinite;

}


/* =========================================================
   23. 花屏文字运动
   ========================================================= */

@keyframes q15GlitchText {

    0% {

        transform:
            translate(
                0,
                0
            )
            rotate(-3deg)
            scale(1.1);

        filter:
            blur(0);

    }

    20% {

        transform:
            translate(
                -15px,
                8px
            )
            rotate(-2deg)
            scale(1.13);

        filter:
            blur(1px);

    }

    40% {

        transform:
            translate(
                12px,
                -10px
            )
            rotate(-4deg)
            scale(1.08);

        filter:
            blur(0);

    }

    60% {

        transform:
            translate(
                -8px,
                12px
            )
            rotate(-2deg)
            scale(1.15);

        filter:
            blur(2px);

    }

    80% {

        transform:
            translate(
                16px,
                -5px
            )
            rotate(-3deg)
            scale(1.09);

        filter:
            blur(0);

    }

    100% {

        transform:
            translate(
                0,
                0
            )
            rotate(-3deg)
            scale(1.1);

        filter:
            blur(0);

    }

}


/* =========================================================
   24. 扫描线
   ========================================================= */

@keyframes q15Scanline {

    0% {

        transform:
            translateY(0);

    }

    50% {

        transform:
            translateY(8px);

    }

    100% {

        transform:
            translateY(0);

    }

}


/* =========================================================
   25. 花屏期间内容隐藏一点
   ========================================================= */

body.q15-glitch .survey-container {

    animation:
        q15ContainerShake
        0.06s
        infinite;

}


body.q15-glitch #nextButton,
body.q15-glitch #previousButton,
body.q15-glitch .option {

    pointer-events:
        none;

}


@keyframes q15ContainerShake {

    0% {

        transform:
            translate(
                0,
                0
            );

    }

    25% {

        transform:
            translate(
                -3px,
                2px
            );

    }

    50% {

        transform:
            translate(
                3px,
                -2px
            );

    }

    75% {

        transform:
            translate(
                -2px,
                -1px
            );

    }

    100% {

        transform:
            translate(
                0,
                0
            );

    }

}


/* =========================================================
   26. Q15 弹窗遮罩
   ========================================================= */

#q15Overlay {

    position:
        fixed;

    inset:
        0;

    width:
        100vw;

    height:
        100vh;

    z-index:
        200000;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    background:
        rgba(
            0,
            0,
            0,
            0.82
        );

    box-sizing:
        border-box;

}


/* =========================================================
   27. Q15 黑底红框弹窗
   ========================================================= */

.q15-warning-box {

    position:
        relative;

    width:
        460px;

    max-width:
        calc(100vw - 40px);

    box-sizing:
        border-box;

    padding:
        40px 35px 32px 35px;

    background:
        #000000;

    border:
        2px solid #ff0000;

    box-shadow:
        0 0 25px
        rgba(
            255,
            0,
            0,
            0.25
        );

    text-align:
        center;

}


/* =========================================================
   28. Q15 红色警告文字
   ========================================================= */

.q15-warning-text {

    color:
        #ff0000;

    background:
        #000000;

    font-family:
        "Microsoft YaHei",
        Arial,
        sans-serif;

    font-size:
        20px;

    font-weight:
        bold;

    line-height:
        1.7;

    letter-spacing:
        1px;

}


/* =========================================================
   29. Q15 红色确定按钮
   ========================================================= */

#q15WarningButton {

    display:
        inline-block;

    margin-top:
        30px;

    padding:
        10px 35px;

    background:
        #000000;

    border:
        1px solid #ff0000;

    color:
        #ff0000;

    font-size:
        14px;

    cursor:
        pointer;

    opacity:
        1;

}


#q15WarningButton:hover {

    background:
        #000000;

    color:
        #ff3333;

    border-color:
        #ff3333;

    box-shadow:
        0 0 12px
        rgba(
            255,
            0,
            0,
            0.4
        );

    opacity:
        1;

}


/* =========================================================
   30. Q15 黑屏
   ========================================================= */

#q15BlackScreen {

    position:
        fixed;

    inset:
        0;

    width:
        100vw;

    height:
        100vh;

    background:
        #000000;

    z-index:
        300000;

    pointer-events:
        all;

}


/* =========================================================
   31. Q15 白屏
   ========================================================= */

#q15WhiteFlash {

    position:
        fixed;

    inset:
        0;

    width:
        100vw;

    height:
        100vh;

    background:
        #ffffff;

    z-index:
        300001;

    pointer-events:
        all;

    animation:
        q15WhiteFlash
        0.3s
        linear;

}


@keyframes q15WhiteFlash {

    0% {

        opacity:
            0;

    }

    15% {

        opacity:
            1;

    }

    70% {

        opacity:
            1;

    }

    100% {

        opacity:
            0;

    }

}


/* =========================================================
   32. 手机
   ========================================================= */

@media (max-width: 700px) {

    .survey-container {

        width:
            94%;

        max-width:
            94%;

        margin:
            25px auto;

        padding:
            35px 25px;

    }


    .student-grid {

        grid-template-columns:
            1fr;

    }


    .secret-grid {

        grid-template-columns:
            1fr;

    }


    .school-name {

        font-size:
            26px;

    }


    #questionTitle {

        font-size:
            20px;

    }


    .q15-warning-box {

        width:
            calc(100vw - 40px);

        padding:
            30px 22px;

    }


    .q15-warning-text {

        font-size:
            17px;

    }

}


/* =========================================================
   33. 小屏幕
   ========================================================= */

@media (max-width: 450px) {

    .survey-container {

        padding:
            28px 18px;

    }


    .school-logo {

        width:
            100px;

        height:
            100px;

    }


    .school-name {

        font-size:
            23px;

    }


    .school-name-en {

        font-size:
            11px;

    }


    .student-scores {

        font-size:
            10px;

    }


    .score-item {

        font-size:
            10px;

    }


    .score-item span:last-child {

        font-size:
            13px;

    }

}
```
