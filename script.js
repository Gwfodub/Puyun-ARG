/* =========================
   浦云大学附属中学
   实习教师招聘调查问卷
   Q1–Q14
   ========================= */


/* =========================
   问卷数据
   ========================= */

const questions = [

    /* Q1 */
    {
        title: "基本信息",
        type: "text",
        question: "请输入您的姓名："
    },

    /* Q2 */
    {
        title: "基本信息",
        type: "text",
        question: "请输入您的年龄："
    },

    /* Q3 */
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

    /* Q4 */
    {
        title: "基本信息",
        type: "text",
        question: "请输入您的专业："
    },

    /* Q5 */
    {
        title: "教学经历",
        type: "radio",
        question: "您是否具有教学经验？",
        options: [
            "有",
            "没有"
        ]
    },

    /* =====================
       Q6
       ===================== */

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

    /* =====================
       Q7
       ===================== */

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

    /* =====================
       Q8
       ===================== */

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

    /* =====================
       Q9
       ===================== */

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

    /* =====================
       Q10
       ===================== */

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

    /* =====================
       Q11
       ===================== */

    {
        title: "学生资源配置评估",

        type: "student",

        question:
            "请根据学校提供的学生信息，选择您认为最值得获得额外教学资源的学生。",

        students: [

            {
                id: "A",
                name: "张睿阳",
                rank: "第 3 名",

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

                score: 3
            },

            {
                id: "B",
                name: "王语彤",
                rank: "第 47 名",

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

                score: 2
            },

            {
                id: "C",
                name: "李鑫怡",
                rank: "第 82 名",

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

                score: 1
            },

            {
                id: "D",
                name: "陈子轩",
                rank: "第 118 名",

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

                score: 0
            }

        ]
    },

    /* =====================
       Q12
       ===================== */

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

    /* =====================
       Q13
       ===================== */

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

    /* =====================
       Q14
       ===================== */

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
    }

];


/* =========================
   当前问题
   ========================= */

let currentQuestion = 0;


/* =========================
   玩家答案
   ========================= */

const answers = {

    score: 0

};


/* =========================
   获取网页元素
   ========================= */

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


/* =========================
   创建上一题按钮
   ========================= */

const previousButton =
    document.createElement("button");

previousButton.id =
    "previousButton";

previousButton.textContent =
    "上一题";

previousButton.style.display =
    "none";


nextButton.parentNode.insertBefore(
    previousButton,
    nextButton
);


/* =========================
   开始问卷
   ========================= */

startButton.addEventListener(
    "click",
    function() {

        welcomePage.style.display =
            "none";

        questionPage.style.display =
            "block";

        showQuestion();

    }
);


/* =========================
   显示问题
   ========================= */

function showQuestion() {

    const question =
        questions[currentQuestion];


    /* 恢复正常页面状态 */

    document.body.classList.remove(
        "secret-mode"
    );


    /* 问题编号 */

    questionNumber.textContent =
        String(currentQuestion + 1)
        .padStart(2, "0");


    /* 问题标题 */

    questionTitle.textContent =
        question.title;


    /* 清空内容 */

    questionContent.innerHTML = "";


    /* =====================
       文本题
       ===================== */

    if (
        question.type === "text"
    ) {

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
            answers[currentQuestion]
            !== undefined
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


    /* =====================
       普通单选题
       ===================== */

    if (
        question.type === "radio"
    ) {

        const questionText =
            document.createElement("p");

        questionText.textContent =
            question.question;


        questionContent.appendChild(
            questionText
        );


        question.options.forEach(
            function(optionText) {

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
                    answers[currentQuestion]
                    === optionText
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


    /* =====================
       Q11 学生档案卡片
       ===================== */

    if (
        question.type === "student"
    ) {

        const questionText =
            document.createElement("p");

        questionText.className =
            "student-question";

        questionText.textContent =
            question.question;


        questionContent.appendChild(
            questionText
        );


        const studentGrid =
            document.createElement("div");

        studentGrid.className =
            "student-grid";


        question.students.forEach(
            function(student) {

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
                    answers[currentQuestion]
                    === student.id
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


                const studentID =
                    document.createElement("span");

                studentID.className =
                    "student-id";

                studentID.textContent =
                    student.id;


                const studentName =
                    document.createElement("span");

                studentName.className =
                    "student-name";

                studentName.textContent =
                    student.name;


                header.appendChild(
                    studentID
                );

                header.appendChild(
                    studentName
                );


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
                    function(
                        [subject, score]
                    ) {

                        const item =
                            document.createElement(
                                "div"
                            );

                        item.className =
                            "score-item";


                        const subjectElement =
                            document.createElement(
                                "span"
                            );

                        subjectElement.textContent =
                            subject;


                        const scoreElement =
                            document.createElement(
                                "span"
                            );

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
                    function() {

                        document
                            .querySelectorAll(
                                ".student-card"
                            )
                            .forEach(
                                function(otherCard) {

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


                studentGrid.appendChild(
                    card
                );

            }
        );


        questionContent.appendChild(
            studentGrid
        );

    }


    /* =====================
       上一题按钮
       ===================== */

    if (
        currentQuestion === 0
    ) {

        previousButton.style.display =
            "none";

    }

    else {

        previousButton.style.display =
            "inline-block";

    }


    /* =====================
       下一题按钮
       ===================== */

    nextButton.style.display =
        "inline-block";


    if (
        currentQuestion
        === questions.length - 1
    ) {

        nextButton.textContent =
            "提交";

    }

    else {

        nextButton.textContent =
            "下一题";

    }


    /* =====================
       Q8 特殊文字
       ===================== */

    if (
        currentQuestion === 7
    ) {

        const questionParagraph =
            questionContent.querySelector(
                "p"
            );


        if (questionParagraph) {

            questionParagraph.textContent =
                question.distortedQuestion;


            setTimeout(
                function() {

                    if (
                        currentQuestion === 7
                    ) {

                        questionParagraph.textContent =
                            question.question;

                    }

                },
                3000
            );

        }

    }

}


/* =========================
   上一题
   ========================= */

previousButton.addEventListener(
    "click",
    function() {

        if (
            currentQuestion <= 0
        ) {

            return;

        }


        /*
           无论之前是否处于
           Q11 机密档案模式，
           返回上一题都恢复正常
        */

        document.body.classList.remove(
            "secret-mode"
        );


        const flash =
            document.getElementById(
                "flashScreen"
            );

        if (flash) {

            flash.remove();

        }


        const temporaryMessage =
            document.getElementById(
                "temporaryMessage"
            );

        if (temporaryMessage) {

            temporaryMessage.remove();

        }


        const secondMessage =
            document.getElementById(
                "secondTemporaryMessage"
            );

        if (secondMessage) {

            secondMessage.remove();

        }


        currentQuestion--;

        showQuestion();

    }
);


/* =========================
   闪屏效果
   ========================= */

function createFlashScreen() {

    const flash =
        document.createElement("div");

    flash.id =
        "flashScreen";


    document.body.appendChild(
        flash
    );


    setTimeout(
        function() {

            if (
                flash.parentNode
            ) {

                flash.remove();

            }

        },
        180
    );

}


/* =========================
   Q11 机密档案效果
   ========================= */

function playQ11SecretEffect() {

    createFlashScreen();


    setTimeout(
        function() {

            document.body.classList.add(
                "secret-mode"
            );


            showSecretStudentFiles();

        },
        500
    );

}


/* =========================
   Q11 机密档案页面
   ========================= */

function showSecretStudentFiles() {

    questionTitle.textContent =
        "STUDENT PERFORMANCE DATABASE";


    questionContent.innerHTML = "";


    const warning =
        document.createElement("div");

    warning.className =
        "secret-warning";

    warning.textContent =
        "CONFIDENTIAL // INTERNAL USE ONLY";


    questionContent.appendChild(
        warning
    );


    const secretGrid =
        document.createElement("div");

    secretGrid.className =
        "secret-grid";


    /*
       四张档案全部变成
       张睿阳
    */

    for (
        let i = 0;
        i < 4;
        i++
    ) {

        const card =
            document.createElement("div");

        card.className =
            "secret-card";


        card.innerHTML = `

            <div class="secret-student-name">
                张睿阳
            </div>

            <div class="secret-line">
                年级排名：3
            </div>

            <br>

            <div class="secret-line">
                状态：
            </div>

            <div class="secret-value">
                正常
            </div>

            <br>

            <div class="secret-line">
                风险等级：
            </div>

            <div class="secret-value">
                LOW
            </div>

        `;


        secretGrid.appendChild(
            card
        );

    }


    questionContent.appendChild(
        secretGrid
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

}


/* =========================
   Q12 特殊效果
   ========================= */

function playQ12Effect(answer) {

    if (
        answer !==
        "C. 优先帮助能够取得最好结果的人"
    ) {

        return;

    }


    setTimeout(
        function() {

            showTemporaryMessage(
                "选择已记录",
                1000
            );


            setTimeout(
                function() {

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


/* =========================
   Q13 特殊效果
   ========================= */

function playQ13Effect(answer) {

    let message = "";


    if (
        answer === "A. 经常"
        ||
        answer === "B. 偶尔"
    ) {

        message =
            "我们完全理解这种压力。";

    }


    if (
        answer === "C. 很少"
        ||
        answer === "D. 从未"
    ) {

        message =
            "您似乎并不熟悉竞争所带来的压力。";

    }


    setTimeout(
        function() {

            showTemporaryMessage(
                message,
                1800
            );

        },
        300
    );

}


/* =========================
   临时提示
   ========================= */

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
        function() {

            if (
                message.parentNode
            ) {

                message.remove();

            }

        },
        duration
    );

}


/* =========================
   Q12 第二行提示
   ========================= */

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
        function() {

            const first =
                document.getElementById(
                    "temporaryMessage"
                );


            const second =
                document.getElementById(
                    "secondTemporaryMessage"
                );


            if (first) {

                first.remove();

            }


            if (second) {

                second.remove();

            }

        },
        1000
    );

}


/* =========================
   下一题
   ========================= */

nextButton.addEventListener(
    "click",
    function() {

        const question =
            questions[currentQuestion];


        let answer = "";


        /* =====================
           文本题
           ===================== */

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


        /* =====================
           普通单选
           ===================== */

        if (
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


        /* =====================
           Q11 学生选择
           ===================== */

        if (
            question.type === "student"
        ) {

            const selected =
                document.querySelector(
                    'input[name="studentAnswer"]:checked'
                );


            if (selected) {

                answer =
                    selected.value;

            }

        }


        /* =====================
           防止空白
           ===================== */

        if (
            answer === ""
        ) {

            alert(
                "请完成本题后继续。"
            );

            return;

        }


        /* =====================
           如果重新回答，
           先删除旧分数
           ===================== */

        if (
            question.scores
            &&
            answers[currentQuestion]
            !== undefined
        ) {

            const oldAnswer =
                answers[currentQuestion];


            answers.score -=
                question.scores[
                    oldAnswer
                ]
                || 0;

        }


        /* =====================
           Q11 删除旧学生分数
           ===================== */

        if (
            question.type === "student"
            &&
            answers[currentQuestion]
            !== undefined
        ) {

            const oldStudentID =
                answers[currentQuestion];


            const oldStudent =
                question.students.find(
                    function(student) {

                        return (
                            student.id
                            === oldStudentID
                        );

                    }
                );


            if (oldStudent) {

                answers.score -=
                    oldStudent.score;

            }

        }


        /* =====================
           保存答案
           ===================== */

        answers[currentQuestion] =
            answer;


        /* =====================
           普通题目积分
           ===================== */

        if (
            question.scores
        ) {

            answers.score +=
                question.scores[
                    answer
                ]
                || 0;

        }


        /* =====================
           Q11 积分
           ===================== */

        if (
            question.type === "student"
        ) {

            const selectedStudent =
                question.students.find(
                    function(student) {

                        return (
                            student.id
                            === answer
                        );

                    }
                );


            if (selectedStudent) {

                answers.score +=
                    selectedStudent.score;

            }

        }


        /* =====================
           控制台记录
           ===================== */

        console.log(
            "当前玩家数据：",
            answers
        );


        /* =====================
           Q6 → Q7
           ===================== */

        if (
            currentQuestion === 5
        ) {

            showTemporaryMessage(
                "选择已记录",
                800
            );

        }


        /* =====================
           Q11
           ===================== */

        if (
            question.type === "student"
        ) {

            /*
               Q11：

               选择学生
                   ↓
               点击下一题
                   ↓
               闪屏
                   ↓
               黑底绿字机密档案
                   ↓
               2.5秒后自动进入Q12
            */

            playQ11SecretEffect();


            currentQuestion++;


            setTimeout(
                function() {

                    document.body.classList.remove(
                        "secret-mode"
                    );


                    showQuestion();

                },
                2500
            );


            return;

        }


        /* =====================
           Q12
           ===================== */

        if (
            currentQuestion === 11
        ) {

            playQ12Effect(
                answer
            );

        }


        /* =====================
           Q13
           ===================== */

        if (
            currentQuestion === 12
        ) {

            playQ13Effect(
                answer
            );

        }


        /* =====================
           进入下一题
           ===================== */

        currentQuestion++;


        if (
            currentQuestion
            <
            questions.length
        ) {

            let delay = 0;


            /*
               Q6 → Q7
               给“选择已记录”
               留出显示时间
            */

            if (
                question === questions[5]
            ) {

                delay = 850;

            }


            setTimeout(
                function() {

                    showQuestion();

                },
                delay
            );

        }

        else {

            /*
               暂时结束
            */

            questionTitle.textContent =
                "问卷已完成";


            questionContent.innerHTML =
                "<p>感谢您完成本次调查。</p>";


            nextButton.style.display =
                "none";


            previousButton.style.display =
                "none";


            console.log(
                "最终隐藏评分：",
                answers.score
            );

        }

    }
);
```
