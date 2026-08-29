/* =========================
   浦云大学附属中学
   实习教师招聘调查问卷
   Q1–Q11
   ========================= */


/* =========================
   问卷数据
   ========================= */

const questions = [

    /* =====================
       Q1
       ===================== */

    {
        title: "基本信息",
        type: "text",
        question: "请输入您的姓名："
    },


    /* =====================
       Q2
       ===================== */

    {
        title: "基本信息",
        type: "text",
        question: "请输入您的年龄："
    },


    /* =====================
       Q3
       ===================== */

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


    /* =====================
       Q4
       ===================== */

    {
        title: "基本信息",
        type: "text",
        question: "请输入您的专业："
    },


    /* =====================
       Q5
       ===================== */

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
            "浦云大学附属中学实行严格的学业质量管理制度：为确保教学质量及学生学习效率，学校每学年将根据学生的周测、月考及学年期末考试成绩进行综合评价。综合评价排名位于年级后15%的学生，将进入学业调整程序。您能否接受这一评价制度？",

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

            /* =================
               A
               ================= */

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


            /* =================
               B
               ================= */

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


            /* =================
               C
               ================= */

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


            /* =================
               D
               ================= */

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


    /* =====================
       问题编号
       ===================== */

    questionNumber.textContent =
        String(currentQuestion + 1)
        .padStart(2, "0");


    /* =====================
       问题标题
       ===================== */

    questionTitle.textContent =
        question.title;


    /* =====================
       清空问题内容
       ===================== */

    questionContent.innerHTML = "";


    /* =====================
       普通文本题
       ===================== */

    if (question.type === "text") {

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

    if (question.type === "radio") {

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
       学生档案卡片
       ===================== */

    if (question.type === "student") {

        const questionText =
            document.createElement("p");

        questionText.className =
            "student-question";

        questionText.textContent =
            question.question;


        questionContent.appendChild(
            questionText
        );


        /*
           创建学生卡片容器
        */

        const studentGrid =
            document.createElement("div");

        studentGrid.className =
            "student-grid";


        /*
           创建四张学生档案卡片
        */

        question.students.forEach(
            function(student) {

                const card =
                    document.createElement("label");

                card.className =
                    "student-card";


                /*
                   单选按钮
                */

                const radio =
                    document.createElement("input");

                radio.type =
                    "radio";

                radio.name =
                    "studentAnswer";

                radio.value =
                    student.id;


                /*
                   恢复之前的选择
                */

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


                /* =================
                   卡片头部
                   ================= */

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


                /* =================
                   排名
                   ================= */

                const rank =
                    document.createElement("div");

                rank.className =
                    "student-rank";

                rank.textContent =
                    "年级综合排名：" +
                    student.rank;


                /* =================
                   成绩表
                   ================= */

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
                            document.createElement("div");

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


                /* =================
                   AI学情总结
                   ================= */

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


                /* =================
                   教师备注
                   ================= */

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


                /* =================
                   选择提示
                   ================= */

                const selectText =
                    document.createElement("div");

                selectText.className =
                    "student-select";

                selectText.textContent =
                    "○ 选择该学生";


                /* =================
                   组装卡片
                   ================= */

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


                /* =================
                   点击卡片后的视觉效果
                   ================= */

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


    /* =========================
       上一题按钮
       ========================= */

    if (currentQuestion === 0) {

        previousButton.style.display =
            "none";

    }

    else {

        previousButton.style.display =
            "inline-block";

    }


    /* =========================
       下一题按钮
       ========================= */

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

}


/* =========================
   上一题
   ========================= */

previousButton.addEventListener(
    "click",
    function() {

        if (currentQuestion <= 0) {

            return;

        }


        currentQuestion--;


        showQuestion();

    }
);


/* =========================
   下一题 / 提交
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


            answer =
                input.value.trim();

        }


        /* =====================
           普通单选题
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
           学生档案题
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
           防止空白答案
           ===================== */

        if (answer === "") {

            alert(
                "请完成本题后继续。"
            );

            return;

        }


        /* =====================
           删除旧分数
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
                question.scores[oldAnswer]
                || 0;

        }


        /*
           Q11 的旧答案需要单独处理
        */

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
           增加普通题目分数
           ===================== */

        if (question.scores) {

            answers.score +=
                question.scores[answer]
                || 0;

        }


        /* =====================
           增加 Q11 学生档案分数
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
           开发阶段查看数据
           ===================== */

        console.log(
            "当前玩家数据：",
            answers
        );


        /* =====================
           进入下一题
           ===================== */

        if (
            currentQuestion
            <
            questions.length - 1
        ) {

            currentQuestion++;

            showQuestion();

        }

        else {

            /* =================
               暂时结束页面
               ================= */

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
