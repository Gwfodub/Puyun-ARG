/* =========================
   浦云大学附属中学
   实习教师招聘调查问卷
   Q1–Q10
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

        /* 隐藏评分 */

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

        /* 隐藏评分 */

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

        /* 隐藏评分 */

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

        /* 隐藏评分 */

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

        /* 隐藏评分 */

        scores: {

            "A. 可以": 3,

            "B. 基本可以": 2,

            "C. 需要考虑": 1,

            "D. 无法接受": 0

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

/*
   answers：

   0 = Q1
   1 = Q2
   2 = Q3
   ...
   9 = Q10

   score = 当前隐藏总分
*/

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
   创建“上一题”按钮
   ========================= */

/*
   不需要修改 HTML。
   JavaScript 会自动创建按钮。
*/

const previousButton =
    document.createElement("button");

previousButton.id =
    "previousButton";

previousButton.textContent =
    "上一题";


previousButton.style.display =
    "none";


/*
   把“上一题”按钮放到
   “下一题”按钮前面
*/

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
       文本输入题
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

        input.type = "text";

        input.className =
            "text-input";

        input.id =
            "answer";


        /*
           如果玩家之前已经填写过，
           返回时恢复之前的答案。
        */

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
       单选题
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


                /*
                   如果玩家之前已经选择过，
                   返回时自动恢复选择。
                */

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
       控制“上一题”按钮
       ===================== */

    if (currentQuestion === 0) {

        previousButton.style.display =
            "none";

    }

    else {

        previousButton.style.display =
            "inline-block";

    }


    /* =====================
       控制“下一题”按钮文字
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

}


/* =========================
   上一题
   ========================= */

previousButton.addEventListener(
    "click",
    function() {

        /*
           防止返回到问卷开始页面
        */

        if (currentQuestion <= 0) {

            return;

        }


        /*
           当前问题编号减一
        */

        currentQuestion--;


        /*
           重新显示上一题
        */

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


        /* =====================
           获取答案
           ===================== */

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
           单选题
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
           防止空白答案
           ===================== */

        if (answer === "") {

            alert(
                "请完成本题后继续。"
            );

            return;

        }


        /* =====================
           如果之前已经回答过
           需要先删除旧分数
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


        /* =====================
           保存新答案
           ===================== */

        answers[currentQuestion] =
            answer;


        /* =====================
           添加新评分
           ===================== */

        if (question.scores) {

            answers.score +=
                question.scores[answer]
                || 0;

        }


        /* =====================
           开发阶段查看数据
           ===================== */

        console.log(
            "当前玩家数据：",
            answers
        );


        /* =====================
           判断是否还有下一题
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
               暂时的结束页面
               ================= */

            questionTitle.textContent =
                "问卷已完成";


            questionContent.innerHTML =
                "<p>感谢您完成本次调查。</p>";


            nextButton.style.display =
                "none";


            previousButton.style.display =
                "none";


            /* =================
               开发阶段查看最终分数
               ================= */

            console.log(
                "最终隐藏评分：",
                answers.score
            );

        }

    }
);
