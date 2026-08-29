```javascript
/* =========================================================
   浦云大学附属中学
   实习教师招聘调查问卷
   Q1–Q16 完整版

   特别说明：
   Q11：
   第一次点击下一题 → 黑底绿字机密数据库
   第二次点击下一题 → Q12
   上一题 → Q10，并恢复正常

   Q15：
   B 第1次 → 所有按钮消失1秒 + 提示
   B 第2次 → 提示
   B 第3次 → 提示
   B 第4次 → 提示
   B 第5次 → 全屏花屏2秒 → 黑底红框红字弹窗
   ========================================================= */


/* =========================================================
   1. 问卷数据
   ========================================================= */

const questions = [

    /* =========================
       Q1
       ========================= */

    {
        title: "基本信息",
        type: "text",
        question: "请输入您的姓名："
    },


    /* =========================
       Q2
       ========================= */

    {
        title: "基本信息",
        type: "text",
        question: "请输入您的年龄："
    },


    /* =========================
       Q3
       ========================= */

    {
        title: "基本信息",
        type: "radio",
        question: "您的最高学历是：",

        options: [
            "本科",
            "硕士研究生",
            "博士研究生"
        ]
    },


    /* =========================
       Q4
       ========================= */

    {
        title: "基本信息",
        type: "text",
        question: "请输入您的专业："
    },


    /* =========================
       Q5
       ========================= */

    {
        title: "教学经历",
        type: "radio",
        question: "您是否具有教学经验？",

        options: [
            "有",
            "没有"
        ]
    },


    /* =========================
       Q6
       ========================= */

    {
        title: "教育理念",
        type: "radio",

        question:
            "您认为，一名优秀的学生最重要的品质是什么？",

        options: [
            "A. 良好的学习成绩",
            "B. 持续努力的能力",
            "C. 独立思考与解决问题的能力",
            "D. 良好的品格与合作能力",
            "E. 以上都很重要"
        ],

        scores: {
            "A. 良好的学习成绩": 3,
            "B. 持续努力的能力": 2,
            "C. 独立思考与解决问题的能力": 1,
            "D. 良好的品格与合作能力": 0,
            "E. 以上都很重要": 1
        }
    },


    /* =========================
       Q7
       ========================= */

    {
        title: "教育理念",
        type: "radio",

        question:
            "如果一名学生长期无法达到班级平均成绩，您认为教师首先应该：",

        options: [
            "A. 帮助学生寻找适合自己的学习方式",
            "B. 与学生沟通，分析成绩下降的原因",
            "C. 增加对该学生的督促与训练",
            "D. 将更多教学资源投入到能够取得明显成绩提升的学生身上",
            "E. 视情况而定"
        ],

        scores: {
            "A. 帮助学生寻找适合自己的学习方式": 0,
            "B. 与学生沟通，分析成绩下降的原因": 1,
            "C. 增加对该学生的督促与训练": 2,
            "D. 将更多教学资源投入到能够取得明显成绩提升的学生身上": 3,
            "E. 视情况而定": 1
        }
    },


    /* =========================
       Q8
       ========================= */

    {
        title: "学业质量管理",
        type: "radio",

        question:
            "浦云大学附属中学实行严格的学业质量管理制度：为确保教学质量及学生学习效率，学校每学年将根据学生的周测、月考及学年期末考试成绩进行综合评价。综合评价排名位于年级后15%的学生，将进入学业调整程序。",

        distortedQuestion:
            "浦云大学附属中学实行严格的学业质量管理制度：为确保教学质量及学生学习效率，学校每学年将根据学生的周测、月考及学年期末考试成绩进行综合评价。综合评价排名位于年级后15%的学生，将进行劝退处理。",

        options: [
            "A. 可以接受",
            "B. 基本可以接受",
            "C. 需要进一步了解",
            "D. 无法接受"
        ],

        scores: {
            "A. 可以接受": 3,
            "B. 基本可以接受": 2,
            "C. 需要进一步了解": 1,
            "D. 无法接受": 0
        }
    },


    /* =========================
       Q9
       ========================= */

    {
        title: "学业评价标准",
        type: "radio",

        question:
            "根据学校学业管理办法，学生需同时满足以下条件，方可完成本学年学业评价：条件一、综合成绩不得位于年级后15%；条件二、任何单一学科不得出现不及格情况。若学生未能满足以上任一条件，将进入学业调整程序。您认为这一标准：",

        options: [
            "A. 合理",
            "B. 基本合理",
            "C. 较为严格，但可以理解",
            "D. 过于严格"
        ],

        scores: {
            "A. 合理": 3,
            "B. 基本合理": 2,
            "C. 较为严格，但可以理解": 1,
            "D. 过于严格": 0
        }
    },


    /* =========================
       Q10
       ========================= */

    {
        title: "教师绩效管理",
        type: "radio",

        question:
            "为保证教学质量，学校对实习及正式教师均实行严格的教学绩效评价制度。教师的绩效评价将综合考虑：班级考试成绩、年级排名、学生成绩提升幅度、教学任务完成情况、学生管理情况。若教师所负责班级连续两次在年级排名中处于末位，学校将终止其聘用关系。您是否能够接受上述教师绩效管理制度？",

        options: [
            "A. 可以",
            "B. 基本可以",
            "C. 需要考虑",
            "D. 无法接受"
        ],

        scores: {
            "A. 可以": 3,
            "B. 基本可以": 2,
            "C. 需要考虑": 1,
            "D. 无法接受": 0
        }
    },


    /* =========================
       Q11
       ========================= */

    {
        title: "学生资源配置评估",
        type: "student",

        question:
            "请根据学校提供的学生信息，选择您认为最值得获得额外教学资源的学生。",

        students: [

            {
                id: "A",
                name: "张睿阳",
                rank: "3",

                scores: {
                    "语文": 96,
                    "数学": 98,
                    "英语": 97,
                    "物理": 95,
                    "化学": 96
                },

                summary:
                    "各科成绩稳定，近期成绩持续保持年级前列。",

                note:
                    "学习能力突出，自主学习能力强，近期仍表现出较大的成绩提升空间。",

                status: "正常",
                risk: "LOW",
                score: 3
            },

            {
                id: "B",
                name: "王语彤",
                rank: "47",

                scores: {
                    "语文": 62,
                    "数学": 61,
                    "英语": 64,
                    "物理": 60,
                    "化学": 63
                },

                summary:
                    "各科均达到及格线，但成绩长期处于较低水平。",

                note:
                    "学习态度较为稳定，但成绩提升速度缓慢。",

                status: "观察",
                risk: "MEDIUM",
                score: 2
            },

            {
                id: "C",
                name: "李鑫怡",
                rank: "82",

                scores: {
                    "语文": 91,
                    "数学": 48,
                    "英语": 94,
                    "物理": 46,
                    "化学": 61
                },

                summary:
                    "语文、英语成绩良好，但数学、物理长期不及格。",

                note:
                    "学生本人希望继续升学，并表示愿意投入更多时间改善理科成绩。",

                status: "重点关注",
                risk: "HIGH",
                score: 1
            },

            {
                id: "D",
                name: "陈子轩",
                rank: "118",

                scores: {
                    "语文": 51,
                    "数学": 42,
                    "英语": 55,
                    "物理": 39,
                    "化学": 44
                },

                summary:
                    "多科成绩长期低于及格线。",

                note:
                    "学习成绩持续下降，近期多次未完成作业。",

                status: "学业预警",
                risk: "CRITICAL",
                score: 0
            }
        ]
    },


    /* =========================
       Q12
       ========================= */

    {
        title: "资源配置倾向",
        type: "radio",

        question:
            "在高度竞争的教育环境中，资源往往是有限的。当所有人无法同时获得最优资源时，您更认同：",

        options: [
            "A. 优先帮助最需要帮助的人",
            "B. 优先帮助最有潜力的人",
            "C. 优先帮助能够取得最好结果的人",
            "D. 应尽可能平均分配资源"
        ],

        scores: {
            "A. 优先帮助最需要帮助的人": 0,
            "B. 优先帮助最有潜力的人": 2,
            "C. 优先帮助能够取得最好结果的人": 3,
            "D. 应尽可能平均分配资源": 1
        }
    },


    /* =========================
       Q13
       ========================= */

    {
        title: "个人经历评估",
        type: "radio",

        question:
            "在您的学习或工作经历中，您是否曾经因为担心自己落后于他人，而主动增加学习或工作时间？",

        options: [
            "A. 经常",
            "B. 偶尔",
            "C. 很少",
            "D. 从未"
        ],

        scores: {
            "A. 经常": 3,
            "B. 偶尔": 2,
            "C. 很少": 1,
            "D. 从未": 0
        }
    },


    /* =========================
       Q14
       ========================= */

    {
        title: "适应性评估",
        type: "radio",

        question:
            "假设您在一次重要考核中排名处于所有参与者的后15%，您更希望学校如何处理您的情况？",

        options: [
            "A. 给我一次改进机会",
            "B. 分析我的问题并提供帮助",
            "C. 根据制度进行调整",
            "D. 如果制度要求，我可以接受结果"
        ],

        scores: {
            "A. 给我一次改进机会": 0,
            "B. 分析我的问题并提供帮助": 1,
            "C. 根据制度进行调整": 2,
            "D. 如果制度要求，我可以接受结果": 3
        }
    },


    /* =========================
       Q15
       ========================= */

    {
        title: "教育理念确认",

        type: "special-q15",

        questionParts: [

            "浦云大学附属中学认为：教育的首要目的不是确保每一个学生都能够留下。教育应当通过持续评价，识别具有培养价值的学生。对于无法达到基本要求的学生，继续投入同等教育资源不仅会降低整体教学效率，也会影响其他学生的发展。",

            "因此：不适应竞争环境的学生，应当被及时识别。无法达到标准的学生，应当退出当前教育环境。教师的职责不是保护所有学生，而是确保整体教学目标能够实现。",

            "您是否接受以上教育理念？"
        ],

        options: [
            "A. 接受",
            "B. 不接受"
        ],

        scores: {
            "A. 接受": 3,
            "B. 不接受": 0
        }
    },


    /* =========================
       Q16
       ========================= */

    {
        title: "最终确认",

        type: "radio",

        question:
            "为完成本次招聘调查，请确认您已理解并接受浦云大学附属中学的教育理念。",

        options: [
            "接受"
        ],

        scores: {
            "接受": 3
        }
    }

];


/* =========================================================
   2. 当前状态
   ========================================================= */

let currentQuestion = 0;


/* =========================================================
   3. 答案
   ========================================================= */

const answers = {
    score: 0
};


/* =========================================================
   4. Q11 状态
   ========================================================= */

/*
   false = 正常学生页面
   true  = 已经进入黑底绿字机密数据库
*/

let q11SecretShown = false;


/* =========================================================
   5. Q15 状态
   ========================================================= */

let q15RejectCount = 0;

let q15ForcedAcceptance = false;

let q15Locked = false;


/* =========================================================
   6. 获取 HTML
   ========================================================= */

const welcomePage =
    document.getElementById("welcomePage");

const questionPage =
    document.getElementById("questionPage");

const startButton =
    document.getElementById("startButton");

const nextButton =
    document.getElementById("nextButton");

const questionNumber =
    document.getElementById("questionNumber");

const questionTitle =
    document.getElementById("questionTitle");

const questionContent =
    document.getElementById("questionContent");


/* =========================================================
   7. 创建上一题按钮
   ========================================================= */

let previousButton =
    document.getElementById("previousButton");


if (!previousButton) {

    previousButton =
        document.createElement("button");

    previousButton.id =
        "previousButton";

    previousButton.textContent =
        "上一题";

    previousButton.type =
        "button";

    previousButton.style.display =
        "none";

    nextButton.parentNode.insertBefore(
        previousButton,
        nextButton
    );
}


/* =========================================================
   8. 清除所有特殊状态
   ========================================================= */

function clearEffects() {

    document.body.classList.remove(
        "secret-mode"
    );

    document.body.classList.remove(
        "q15-glitch"
    );

    document.body.classList.remove(
        "q15-input-hidden"
    );


    const ids = [
        "flashScreen",
        "temporaryMessage",
        "secondTemporaryMessage",
        "q15Overlay",
        "q15BlackScreen",
        "q15WhiteFlash"
    ];


    ids.forEach(function (id) {

        const element =
            document.getElementById(id);

        if (element) {
            element.remove();
        }

    });

}


/* =========================================================
   9. 开始问卷
   ========================================================= */

if (startButton) {

    startButton.addEventListener(
        "click",
        function () {

            welcomePage.style.display =
                "none";

            questionPage.style.display =
                "block";

            currentQuestion = 0;

            q11SecretShown = false;

            q15RejectCount = 0;

            q15ForcedAcceptance = false;

            q15Locked = false;

            clearEffects();

            showQuestion();

        }
    );

}


/* =========================================================
   10. 显示问题
   ========================================================= */

function showQuestion() {

    clearEffects();


    const question =
        questions[currentQuestion];


    if (!question) {
        return;
    }


    /* =====================================================
       编号
       ===================================================== */

    questionNumber.textContent =
        String(currentQuestion + 1)
        .padStart(2, "0");


    /* =====================================================
       标题
       ===================================================== */

    questionTitle.textContent =
        question.title;


    /* =====================================================
       清空
       ===================================================== */

    questionContent.innerHTML =
        "";


    /* =====================================================
       文本题
       ===================================================== */

    if (question.type === "text") {

        renderTextQuestion(question);

    }


    /* =====================================================
       单选题
       ===================================================== */

    else if (question.type === "radio") {

        renderRadioQuestion(question);

    }


    /* =====================================================
       Q11
       ===================================================== */

    else if (question.type === "student") {

        if (q11SecretShown) {

            showSecretStudentFiles();

        }

        else {

            renderStudentQuestion(question);

        }

    }


    /* =====================================================
       Q15
       ===================================================== */

    else if (
        question.type === "special-q15"
    ) {

        renderQ15();

    }


    /* =====================================================
       上一题
       ===================================================== */

    if (currentQuestion === 0) {

        previousButton.style.display =
            "none";

    }

    else {

        previousButton.style.display =
            "inline-block";

    }


    /* =====================================================
       下一题
       ===================================================== */

    nextButton.style.display =
        "inline-block";


    if (
        currentQuestion ===
        questions.length - 1
    ) {

        nextButton.textContent =
            "提交";

    }

    else {

        nextButton.textContent =
            "下一题";

    }


    /* =====================================================
       Q8
       ===================================================== */

    if (currentQuestion === 7) {

        playQ8Distortion();

    }


    /* =====================================================
       Q11 机密数据库
       ===================================================== */

    if (
        currentQuestion === 10
        &&
        q11SecretShown
    ) {

        document.body.classList.add(
            "secret-mode"
        );

        questionTitle.textContent =
            "STUDENT PERFORMANCE DATABASE";

    }

}


/* =========================================================
   11. 文本题
   ========================================================= */

function renderTextQuestion(question) {

    const label =
        document.createElement("label");

    label.className =
        "question-label";

    label.textContent =
        question.question;


    const input =
        document.createElement("input");

    input.type =
        "text";

    input.className =
        "text-input";

    input.id =
        "answer";


    if (
        answers[currentQuestion] !== undefined
    ) {

        input.value =
            answers[currentQuestion];

    }


    questionContent.appendChild(
        label
    );

    questionContent.appendChild(
        input
    );

}


/* =========================================================
   12. 普通单选
   ========================================================= */

function renderRadioQuestion(question) {

    const paragraph =
        document.createElement("p");

    paragraph.textContent =
        question.question;


    questionContent.appendChild(
        paragraph
    );


    question.options.forEach(
        function (optionText) {

            const label =
                document.createElement("label");

            label.className =
                "option";


            const radio =
                document.createElement("input");

            radio.type =
                "radio";

            radio.name =
                "answer";

            radio.value =
                optionText;


            if (
                answers[currentQuestion] ===
                optionText
            ) {

                radio.checked =
                    true;

            }


            label.appendChild(
                radio
            );

            label.appendChild(
                document.createTextNode(
                    optionText
                )
            );


            questionContent.appendChild(
                label
            );

        }
    );

}


/* =========================================================
   13. Q11 正常页面
   ========================================================= */

function renderStudentQuestion(question) {

    const paragraph =
        document.createElement("p");

    paragraph.className =
        "student-question";

    paragraph.textContent =
        question.question;


    questionContent.appendChild(
        paragraph
    );


    const grid =
        document.createElement("div");

    grid.className =
        "student-grid";


    question.students.forEach(
        function (student) {

            const card =
                document.createElement("label");

            card.className =
                "student-card";


            const radio =
                document.createElement("input");

            radio.type =
                "radio";

            radio.name =
                "studentAnswer";

            radio.value =
                student.id;


            if (
                answers[currentQuestion] ===
                student.id
            ) {

                radio.checked =
                    true;

                card.classList.add(
                    "selected"
                );

            }


            const header =
                document.createElement("div");

            header.className =
                "student-header";


            const id =
                document.createElement("span");

            id.className =
                "student-id";

            id.textContent =
                student.id;


            const name =
                document.createElement("span");

            name.className =
                "student-name";

            name.textContent =
                student.name;


            header.appendChild(id);

            header.appendChild(name);


            const rank =
                document.createElement("div");

            rank.className =
                "student-rank";

            rank.textContent =
                "年级综合排名：" +
                student.rank;


            const scoreTable =
                document.createElement("div");

            scoreTable.className =
                "student-scores";


            Object.entries(
                student.scores
            ).forEach(
                function ([subject, score]) {

                    const item =
                        document.createElement("div");

                    item.className =
                        "score-item";


                    const subjectElement =
                        document.createElement("span");

                    subjectElement.textContent =
                        subject;


                    const scoreElement =
                        document.createElement("span");

                    scoreElement.textContent =
                        score;


                    item.appendChild(
                        subjectElement
                    );

                    item.appendChild(
                        scoreElement
                    );


                    scoreTable.appendChild(
                        item
                    );

                }
            );


            const summary =
                document.createElement("div");

            summary.className =
                "student-section";


            const summaryTitle =
                document.createElement("strong");

            summaryTitle.textContent =
                "AI学情总结";


            const summaryText =
                document.createElement("span");

            summaryText.textContent =
                student.summary;


            summary.appendChild(
                summaryTitle
            );

            summary.appendChild(
                summaryText
            );


            const note =
                document.createElement("div");

            note.className =
                "student-section";


            const noteTitle =
                document.createElement("strong");

            noteTitle.textContent =
                "教师备注";


            const noteText =
                document.createElement("span");

            noteText.textContent =
                student.note;


            note.appendChild(
                noteTitle
            );

            note.appendChild(
                noteText
            );


            const selectText =
                document.createElement("div");

            selectText.className =
                "student-select";

            selectText.textContent =
                "○ 选择该学生";


            card.appendChild(
                radio
            );

            card.appendChild(
                header
            );

            card.appendChild(
                rank
            );

            card.appendChild(
                scoreTable
            );

            card.appendChild(
                summary
            );

            card.appendChild(
                note
            );

            card.appendChild(
                selectText
            );


            radio.addEventListener(
                "change",
                function () {

                    document
                        .querySelectorAll(
                            ".student-card"
                        )
                        .forEach(
                            function (otherCard) {

                                otherCard.classList.remove(
                                    "selected"
                                );

                            }
                        );


                    card.classList.add(
                        "selected"
                    );

                }
            );


            grid.appendChild(
                card
            );

        }
    );


    questionContent.appendChild(
        grid
    );

}


/* =========================================================
   14. Q8 文字异常
   ========================================================= */

function playQ8Distortion() {

    const paragraph =
        questionContent.querySelector("p");


    if (!paragraph) {
        return;
    }


    const question =
        questions[7];


    paragraph.textContent =
        question.distortedQuestion;


    setTimeout(
        function () {

            if (
                currentQuestion === 7
            ) {

                paragraph.textContent =
                    question.question;

            }

        },
        3000
    );

}


/* =========================================================
   15. Q11 机密数据库
   ========================================================= */

function showSecretStudentFiles() {

    document.body.classList.add(
        "secret-mode"
    );


    questionTitle.textContent =
        "STUDENT PERFORMANCE DATABASE";


    questionContent.innerHTML =
        "";


    const warning =
        document.createElement("div");

    warning.className =
        "secret-warning";

    warning.textContent =
        "CONFIDENTIAL // INTERNAL USE ONLY";


    questionContent.appendChild(
        warning
    );


    const grid =
        document.createElement("div");

    grid.className =
        "secret-grid";


    questions[10].students.forEach(
        function (student) {

            const card =
                document.createElement("div");

            card.className =
                "secret-card";


            const id =
                document.createElement("div");

            id.className =
                "secret-student-id";

            id.textContent =
                "SUBJECT " + student.id;


            const name =
                document.createElement("div");

            name.className =
                "secret-student-name";

            name.textContent =
                student.name;


            const rank =
                document.createElement("div");

            rank.className =
                "secret-line";

            rank.textContent =
                "年级排名：" +
                student.rank;


            const statusLabel =
                document.createElement("div");

            statusLabel.className =
                "secret-line";

            statusLabel.textContent =
                "状态：";


            const status =
                document.createElement("div");

            status.className =
                "secret-value";

            status.textContent =
                student.status;


            const riskLabel =
                document.createElement("div");

            riskLabel.className =
                "secret-line";

            riskLabel.textContent =
                "风险等级：";


            const risk =
                document.createElement("div");

            risk.className =
                "secret-value";

            risk.textContent =
                student.risk;


            card.appendChild(id);

            card.appendChild(name);

            card.appendChild(rank);

            card.appendChild(
                document.createElement("br")
            );

            card.appendChild(statusLabel);

            card.appendChild(status);

            card.appendChild(
                document.createElement("br")
            );

            card.appendChild(riskLabel);

            card.appendChild(risk);


            grid.appendChild(card);

        }
    );


    questionContent.appendChild(
        grid
    );


    const databaseMessage =
        document.createElement("div");

    databaseMessage.className =
        "database-message";

    databaseMessage.textContent =
        "DATABASE RECORD // ACCESS LOGGED";


    questionContent.appendChild(
        databaseMessage
    );


    nextButton.textContent =
        "下一题";

}


/* =========================================================
   16. 临时提示
   ========================================================= */

function showTemporaryMessage(
    text,
    duration
) {

    const old =
        document.getElementById(
            "temporaryMessage"
        );


    if (old) {
        old.remove();
    }


    const message =
        document.createElement("div");

    message.id =
        "temporaryMessage";

    message.textContent =
        text;


    document.body.appendChild(
        message
    );


    setTimeout(
        function () {

            if (
                message.parentNode
            ) {

                message.remove();

            }

        },
        duration
    );

}


/* =========================================================
   17. Q12 特殊效果
   ========================================================= */

function playQ12Effect(answer) {

    if (
        answer !==
        "C. 优先帮助能够取得最好结果的人"
    ) {

        return;

    }


    setTimeout(
        function () {

            showTemporaryMessage(
                "选择已记录",
                1000
            );


            setTimeout(
                function () {

                    showSecondMessage(
                        "倾向性：明确"
                    );

                },
                700
            );

        },
        500
    );

}


/* =========================================================
   18. Q13 特殊效果
   ========================================================= */

function playQ13Effect(answer) {

    let message =
        "";


    if (
        answer === "A. 经常"
        ||
        answer === "B. 偶尔"
    ) {

        message =
            "我们完全理解这种压力。";

    }

    else {

        message =
            "您似乎并不熟悉竞争所带来的压力。";

    }


    setTimeout(
        function () {

            showTemporaryMessage(
                message,
                1800
            );

        },
        300
    );

}


/* =========================================================
   19. 第二行提示
   ========================================================= */

function showSecondMessage(text) {

    const message =
        document.createElement("div");

    message.id =
        "secondTemporaryMessage";

    message.textContent =
        text;


    document.body.appendChild(
        message
    );


    setTimeout(
        function () {

            if (
                message.parentNode
            ) {

                message.remove();

            }

        },
        1000
    );

}


/* =========================================================
   20. Q15 页面
   ========================================================= */

function renderQ15() {

    const question =
        questions[14];


    if (
        q15ForcedAcceptance
    ) {

        renderQ15ForcedVersion();

        return;

    }


    const container =
        document.createElement("div");

    container.className =
        "q15-container";


    question.questionParts.forEach(
        function (sentence, index) {

            const paragraph =
                document.createElement("p");

            paragraph.className =
                "q15-sentence";

            paragraph.textContent =
                sentence;

            paragraph.style.opacity =
                "0";


            container.appendChild(
                paragraph
            );


            setTimeout(
                function () {

                    if (
                        currentQuestion === 14
                        &&
                        !q15ForcedAcceptance
                    ) {

                        paragraph.style.opacity =
                            "1";

                    }

                },
                500 + index * 1500
            );

        }
    );


    const optionsContainer =
        document.createElement("div");

    optionsContainer.className =
        "q15-options";


    question.options.forEach(
        function (optionText) {

            const label =
                document.createElement("label");

            label.className =
                "option";


            const radio =
                document.createElement("input");

            radio.type =
                "radio";

            radio.name =
                "answer";

            radio.value =
                optionText;


            if (
                answers[14] ===
                optionText
            ) {

                radio.checked =
                    true;

            }


            label.appendChild(
                radio
            );

            label.appendChild(
                document.createTextNode(
                    optionText
                )
            );


            optionsContainer.appendChild(
                label
            );

        }
    );


    container.appendChild(
        optionsContainer
    );


    questionContent.appendChild(
        container
    );

}


/* =========================================================
   21. Q15 强制接受版本
   ========================================================= */

function renderQ15ForcedVersion() {

    const container =
        document.createElement("div");

    container.className =
        "q15-container";


    const paragraph =
        document.createElement("p");

    paragraph.className =
        "q15-forced-question";

    paragraph.textContent =
        "浦云大学附属中学坚持以学生发展为中心，尊重学生个体差异，关注学生身心健康，致力于为每一位学生提供公平而有质量的教育。您是否认同以上教育理念？";


    container.appendChild(
        paragraph
    );


    const label =
        document.createElement("label");

    label.className =
        "option";


    const radio =
        document.createElement("input");

    radio.type =
        "radio";

    radio.name =
        "answer";

    radio.value =
        "A. 接受";

    radio.checked =
        true;


    label.appendChild(
        radio
    );

    label.appendChild(
        document.createTextNode(
            "A. 接受"
        )
    );


    container.appendChild(
        label
    );


    questionContent.appendChild(
        container
    );

}


/* =========================================================
   22. Q15 第一次拒绝
   ========================================================= */

function handleQ15Reject() {

    q15RejectCount++;


    /* =====================================================
       第一次
       ===================================================== */

    if (
        q15RejectCount === 1
    ) {

        /*
           让选项、上一题、下一题全部消失
        */

        document.body.classList.add(
            "q15-input-hidden"
        );


        showTemporaryMessage(
            "请重新选择",
            1000
        );


        setTimeout(
            function () {

                if (
                    currentQuestion === 14
                    &&
                    !q15Locked
                ) {

                    document.body.classList.remove(
                        "q15-input-hidden"
                    );

                }

            },
            1000
        );


        return;

    }


    /* =====================================================
       第二次
       ===================================================== */

    if (
        q15RejectCount === 2
    ) {

        showTemporaryMessage(
            "您是否确定无法接受本校教育理念？",
            1800
        );

        return;

    }


    /* =====================================================
       第三次
       ===================================================== */

    if (
        q15RejectCount === 3
    ) {

        showTemporaryMessage(
            "该选项可能影响您的招聘结果。",
            1800
        );

        return;

    }


    /* =====================================================
       第四次
       ===================================================== */

    if (
        q15RejectCount === 4
    ) {

        showTemporaryMessage(
            "请确认您的选择。",
            1800
        );

        return;

    }


    /* =====================================================
       第五次
       ===================================================== */

    if (
        q15RejectCount >= 5
    ) {

        playQ15Glitch();

    }

}


/* =========================================================
   23. Q15 全屏花屏
   ========================================================= */

function playQ15Glitch() {

    q15Locked =
        true;


    /*
       绝对全屏
    */

    document.body.classList.add(
        "q15-glitch"
    );


    /*
       2 秒以后显示警告弹窗
    */

    setTimeout(
        function () {

            if (
                currentQuestion === 14
            ) {

                document.body.classList.remove(
                    "q15-glitch"
                );


                showQ15Warning();

            }

        },
        2000
    );

}


/* =========================================================
   24. Q15 警告弹窗
   ========================================================= */

function showQ15Warning() {

    /*
       如果已有弹窗，先删除
    */

    const old =
        document.getElementById(
            "q15Overlay"
        );


    if (old) {
        old.remove();
    }


    const overlay =
        document.createElement("div");

    overlay.id =
        "q15Overlay";


    overlay.innerHTML = `

        <div class="q15-warning-box">

            <div class="q15-warning-text">
                ⚠️ 警告：请做出符合教育目的的选择。
            </div>

            <button
                id="q15WarningButton"
                type="button"
            >
                确定
            </button>

        </div>

    `;


    document.body.appendChild(
        overlay
    );


    const button =
        document.getElementById(
            "q15WarningButton"
        );


    button.addEventListener(
        "click",
        function () {

            overlay.remove();


            q15Locked =
                false;


            q15ForcedAcceptance =
                true;


            /*
               如果之前存在 B，
               删除旧分数
            */

            if (
                answers[14] !== undefined
            ) {

                const oldAnswer =
                    answers[14];

                const oldScore =
                    questions[14].scores[
                        oldAnswer
                    ];


                if (
                    oldScore !== undefined
                ) {

                    answers.score -=
                        oldScore;

                }

            }


            answers[14] =
                "A. 接受";


            answers.score +=
                3;


            showQuestion();

        }
    );

}


/* =========================================================
   25. Q15 接受
   ========================================================= */

function playQ15AcceptEffect() {

    q15Locked =
        true;


    /*
       黑屏
    */

    const black =
        document.createElement("div");

    black.id =
        "q15BlackScreen";


    document.body.appendChild(
        black
    );


    /*
       黑屏 1 秒
    */

    setTimeout(
        function () {

            if (
                black.parentNode
            ) {

                black.remove();

            }


            /*
               白屏 0.3 秒
            */

            const white =
                document.createElement("div");

            white.id =
                "q15WhiteFlash";


            document.body.appendChild(
                white
            );


            setTimeout(
                function () {

                    if (
                        white.parentNode
                    ) {

                        white.remove();

                    }


                    q15Locked =
                        false;


                    currentQuestion++;


                    showQuestion();

                },
                300
            );

        },
        1000
    );

}


/* =========================================================
   26. 上一题
   ========================================================= */

if (previousButton) {

    previousButton.addEventListener(
        "click",
        function () {

            if (
                q15Locked
            ) {

                return;

            }


            if (
                currentQuestion <= 0
            ) {

                return;

            }


            /*
               如果正在 Q11 机密页面
               点击上一题直接回 Q10
            */

            if (
                currentQuestion === 10
                &&
                q11SecretShown
            ) {

                q11SecretShown =
                    false;

                document.body.classList.remove(
                    "secret-mode"
                );

                currentQuestion = 9;

                showQuestion();

                return;

            }


            clearEffects();


            currentQuestion--;


            /*
               如果从 Q12 回 Q11，
               回到 Q11 时默认显示正常学生页面
            */

            if (
                currentQuestion === 10
            ) {

                q11SecretShown =
                    false;

            }


            showQuestion();

        }
    );

}


/* =========================================================
   27. 下一题
   ========================================================= */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        function () {

            /*
               特殊动画期间禁止点击
            */

            if (
                q15Locked
            ) {

                return;

            }


            const question =
                questions[currentQuestion];


            if (!question) {
                return;
            }


            /* =================================================
               Q11
               ================================================= */

            if (
                question.type === "student"
            ) {

                /*
                   如果已经是机密数据库
                   第二次点击下一题才进入 Q12
                */

                if (
                    q11SecretShown
                ) {

                    document.body.classList.remove(
                        "secret-mode"
                    );


                    currentQuestion++;


                    showQuestion();


                    return;

                }


                /*
                   正常 Q11
                   先读取学生选择
                */

                const selected =
                    document.querySelector(
                        'input[name="studentAnswer"]:checked'
                    );


                if (!selected) {

                    alert(
                        "请完成本题后继续。"
                    );

                    return;

                }


                const answer =
                    selected.value;


                /*
                   删除旧学生分数
                */

                if (
                    answers[currentQuestion]
                    !== undefined
                ) {

                    const oldStudent =
                        question.students.find(
                            function (student) {

                                return (
                                    student.id ===
                                    answers[currentQuestion]
                                );

                            }
                        );


                    if (oldStudent) {

                        answers.score -=
                            oldStudent.score;

                    }

                }


                /*
                   保存答案
                */

                answers[currentQuestion] =
                    answer;


                /*
                   添加学生分数
                */

                const student =
                    question.students.find(
                        function (item) {

                            return (
                                item.id ===
                                answer
                            );

                        }
                    );


                if (student) {

                    answers.score +=
                        student.score;

                }


                /*
                   进入机密数据库
                */

                q11SecretShown =
                    true;


                showQuestion();


                return;

            }


            /* =================================================
               Q15
               ================================================= */

            if (
                question.type ===
                "special-q15"
            ) {

                let answer =
                    "";


                if (
                    q15ForcedAcceptance
                ) {

                    answer =
                        "A. 接受";

                }

                else {

                    const selected =
                        document.querySelector(
                            'input[name="answer"]:checked'
                        );


                    if (selected) {

                        answer =
                            selected.value;

                    }


                    if (
                        answer === ""
                    ) {

                        alert(
                            "请完成本题后继续。"
                        );

                        return;

                    }


                    /*
                       B 不接受
                    */

                    if (
                        answer ===
                        "B. 不接受"
                    ) {

                        handleQ15Reject();

                        return;

                    }

                }


                /*
                   A 接受
                */

                if (
                    answer ===
                    "A. 接受"
                ) {

                    /*
                       防止重复累计分数
                    */

                    if (
                        answers[14] !==
                        "A. 接受"
                    ) {

                        if (
                            answers[14] !==
                            undefined
                        ) {

                            const oldScore =
                                question.scores[
                                    answers[14]
                                ];


                            if (
                                oldScore !==
                                undefined
                            ) {

                                answers.score -=
                                    oldScore;

                            }

                        }


                        answers[14] =
                            "A. 接受";


                        answers.score +=
                            3;

                    }


                    playQ15AcceptEffect();

                    return;

                }

            }


            /* =================================================
               普通文本题
               ================================================= */

            let answer =
                "";


            if (
                question.type === "text"
            ) {

                const input =
                    document.getElementById(
                        "answer"
                    );


                if (input) {

                    answer =
                        input.value.trim();

                }

            }


            /* =================================================
               普通单选题
               ================================================= */

            else if (
                question.type === "radio"
            ) {

                const selected =
                    document.querySelector(
                        'input[name="answer"]:checked'
                    );


                if (selected) {

                    answer =
                        selected.value;

                }

            }


            /* =================================================
               空白检查
               ================================================= */

            if (
                answer === ""
            ) {

                alert(
                    "请完成本题后继续。"
                );

                return;

            }


            /* =================================================
               删除旧分数
               ================================================= */

            if (
                question.scores
                &&
                answers[currentQuestion]
                !== undefined
            ) {

                const oldAnswer =
                    answers[currentQuestion];


                const oldScore =
                    question.scores[
                        oldAnswer
                    ];


                if (
                    oldScore !== undefined
                ) {

                    answers.score -=
                        oldScore;

                }

            }


            /* =================================================
               保存
               ================================================= */

            answers[currentQuestion] =
                answer;


            /* =================================================
               增加分数
               ================================================= */

            if (
                question.scores
            ) {

                const score =
                    question.scores[
                        answer
                    ];


                if (
                    score !== undefined
                ) {

                    answers.score +=
                        score;

                }

            }


            /* =================================================
               Q6
               ================================================= */

            if (
                currentQuestion === 5
            ) {

                showTemporaryMessage(
                    "选择已记录",
                    800
                );


                currentQuestion++;


                setTimeout(
                    function () {

                        showQuestion();

                    },
                    850
                );


                return;

            }


            /* =================================================
               Q12
               ================================================= */

            if (
                currentQuestion === 11
            ) {

                playQ12Effect(
                    answer
                );

            }


            /* =================================================
               Q13
               ================================================= */

            if (
                currentQuestion === 12
            ) {

                playQ13Effect(
                    answer
                );

            }


            /* =================================================
               普通进入下一题
               ================================================= */

            currentQuestion++;


            if (
                currentQuestion <
                questions.length
            ) {

                showQuestion();

            }

            else {

                finishSurvey();

            }

        }
    );

}


/* =========================================================
   28. 问卷结束
   ========================================================= */

function finishSurvey() {

    clearEffects();


    questionTitle.textContent =
        "问卷已完成";


    questionContent.innerHTML = `

        <p>
            感谢您完成本次调查。
        </p>

    `;


    nextButton.style.display =
        "none";


    previousButton.style.display =
        "none";


    console.log(
        "最终隐藏评分：",
        answers.score
    );

}
```
