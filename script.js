/* =========================
   问卷数据
   ========================= */

const questions = [

    {
        title: "基本信息",
        type: "text",
        question: "请输入您的姓名："
    },

    {
        title: "基本信息",
        type: "text",
        question: "请输入您的年龄："
    },

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

    {
        title: "基本信息",
        type: "text",
        question: "请输入您的专业："
    },

{
    title: "教学经历",
    type: "radio",
    question: "您是否具有教学经验？",
    options: [
        "有",
        "没有"
    ]
},

{
    title: "教育理念",
    type: "radio",
    question: "您认为，一名优秀的学生最重要的品质是什么？",
    options: [
        "A. 良好的学习成绩",
        "B. 持续努力的能力",
        "C. 独立思考与解决问题的能力",
        "D. 良好的品格与合作能力",
        "E. 以上都很重要"
    ]
}

/* =========================
   当前问题
   ========================= */

let currentQuestion = 0;


/* =========================
   玩家答案
   ========================= */

const answers = {};


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
   开始问卷
   ========================= */

startButton.addEventListener(
    "click",
    function() {

        welcomePage.style.display = "none";

        questionPage.style.display = "block";

        showQuestion();

    }
);


/* =========================
   显示问题
   ========================= */

function showQuestion() {

    const question =
        questions[currentQuestion];


    /* 问题编号 */

    questionNumber.textContent =
        String(currentQuestion + 1)
        .padStart(2, "0");


    /* 问题标题 */

    questionTitle.textContent =
        question.title;


    /* 清空问题内容 */

    questionContent.innerHTML = "";


    /* =====================
       文本输入
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


        questionContent.appendChild(label);

        questionContent.appendChild(input);

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
            function(optionText, index) {

                const label =
                    document.createElement("label");

                label.className =
                    "option";


                const radio =
                    document.createElement("input");

                radio.type = "radio";

                radio.name = "answer";

                radio.value =
                    optionText;


                label.appendChild(radio);

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

}


/* =========================
   下一题
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


        if (question.type === "text") {

            const input =
                document.getElementById("answer");

            answer =
                input.value.trim();

        }


        if (question.type === "radio") {

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

            alert("请完成本题后继续。");

            return;

        }


        /* =====================
           保存答案
           ===================== */

        answers[currentQuestion] =
            answer;


        console.log(answers);


        /* =====================
           进入下一题
           ===================== */

        currentQuestion++;


        if (
            currentQuestion
            < questions.length
        ) {

            showQuestion();

        }

        else {

            questionTitle.textContent =
                "问卷已完成";

            questionContent.innerHTML =
                "<p>感谢您完成本次调查。</p>";

            nextButton.style.display =
                "none";

        }

    }
);
