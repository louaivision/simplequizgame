const questions = [
    {
        question: "من هو الهداف التاريخي لكأس العالم؟",
        answers: [
            "بيليه",
            "ميسي",
            "رونالدو",
            "ميروسلاف كلوزه"
        ],
        correctAnswer: 3
    },
    {
        question: "في أي عام أُسس الاتحاد الدولي لكرة القدم (فيفا)؟",
        answers: [
            "1900",
            "1904",
            "1906",
            "1910"
        ],
        correctAnswer: 1
    },
    {
        question: "ما هي المدة الزمنية لمباراة كرة القدم الرسمية؟",
        answers: [
            "80 دقيقة",
            "90 دقيقة",
            "100 دقيقة",
            "120 دقيقة"
        ],
        correctAnswer: 1
    },
    {
        question: "من هو أكثر لاعب فاز بجائزة الكرة الذهبية؟",
        answers: [
            "ليونيل ميسي",
            "كريستيانو رونالدو",
            "مارادونا",
            "بيليه"
        ],
        correctAnswer: 0
    },
    {
        question: "ما هو اسم الملعب الذي استضاف نهائي كأس العالم 2018؟",
        answers: [
            "سان سيرو",
            "ويمبلي",
            "لوجنيكي",
            "ماراكانا"
        ],
        correctAnswer: 2
    },
    {
        question: "في أي عام تأسس دوري أبطال أوروبا؟",
        answers: [
            "1950",
            "1955",
            "1960",
            "1965"
        ],
        correctAnswer: 1
    },
    {
        question: "من هو اللاعب الوحيد الذي فاز بكأس العالم ثلاث مرات كلاعب؟",
        answers: [
            "بيليه",
            "زين الدين زيدان",
            "رونالدو",
            "فرانس بيكنباور"
        ],
        correctAnswer: 0
    },
    {
        question: "ما هي أول دولة عربية فازت بكأس الأمم الأفريقية؟",
        answers: [
            "مصر",
            "الجزائر",
            "المغرب",
            "تونس"
        ],
        correctAnswer: 0
    },
    {
        question: "من هو المدرب الذي قاد منتخب ألمانيا للفوز بكأس العالم 2014؟",
        answers: [
            "يورغن كلينسمان",
            "يواخيم لوف",
            "يورغن لوف",
            "يواخيم كلاوس"
        ],
        correctAnswer: 2
    },
    {
        question: "أين يقع ملعب 'سانتياغو برنابيو'؟",
        answers: [
            "مدريد، إسبانيا",
            "ميلانو، إيطاليا",
            "لندن، إنجلترا",
            "ميونخ، ألمانيا"
        ],
        correctAnswer: 0
    },
    {
        question: "من هو الهداف التاريخي لبطولة الدوري الإسباني 'لا ليغا'؟",
        answers: [
            "ليونيل ميسي",
            "كريستيانو رونالدو",
            "كارلوس سانشيز",
            "تيلمو زارا"
        ],
        correctAnswer: 0
    },
    {
        question: "كم عدد اللاعبين في فريق كرة القدم على أرض الملعب؟",
        answers: [
            "10 لاعبين",
            "11 لاعبًا",
            "12 لاعبًا",
            "9 لاعبين"
        ],
        correctAnswer: 1
    },
    {
        question: "ما هو النادي الأكثر تتويجًا بدوري أبطال أوروبا؟",
        answers: [
            "ريال مدريد",
            "برشلونة",
            "ميلان",
            "بايرن ميونخ"
        ],
        correctAnswer: 0
    },
    {
        question: "من هو اللاعب الذي انتقل من برشلونة إلى ريال مدريد بعد فترة قصيرة من انضمامه لبرشلونة؟",
        answers: [
            "لويس فيغو",
            "لويس إنريكي",
            "لويس فاكا",
            "لويس رونالدو"
        ],
        correctAnswer: 0
    },
    {
        question: "متى تأسست كأس العالم للأندية؟",
        answers: [
            "1998",
            "2000",
            "2005",
            "2000"
        ],
        correctAnswer: 3
    },
    {
        question: "من هو اللاعب الذي فاز بأول نسخة من جائزة أفضل لاعب في العالم؟",
        answers: [
            "بوبي تشارلتون",
            "جورج بيست",
            "لويس سواريز",
            "عمر سيك"
        ],
        correctAnswer: 0
    },
    {
        question: "ما هو النادي الذي فاز بالدوري الإنجليزي الممتاز بشكل متتالي من 2017 حتى 2020؟",
        answers: [
            "تشيلسي",
            "ليفربول",
            "مانشستر سيتي",
            "مانشستر يونايتد"
        ],
        correctAnswer: 2
    },
    {
        question: "من هو أكبر هداف في تاريخ منتخب البرازيل؟",
        answers: [
            "بيليه",
            "روماريو",
            "رونالدو نازاريو",
            "نيمار"
        ],
        correctAnswer: 0
    },
    {
        question: "أين أقيمت بطولة كأس العالم للسيدات في عام 2019؟",
        answers: [
            "فرنسا",
            "كندا",
            "الولايات المتحدة الأمريكية",
            "الصين"
        ],
        correctAnswer: 0
    },
    {
        question: "ما هو اسم الملعب الذي أقيمت فيه نهائيات كأس العالم 2006؟",
        answers: [
            "سانتياغو برنابيو",
            "أولمبياشتاديون",
            "فيلودروم",
            "ستاد دو فرانس"
        ],
        correctAnswer: 3
    },
    {
        question: "من هو أول لاعب فاز بالحذاء الذهبي في بطولة كأس العالم؟",
        answers: [
            "جيرد مولر",
            "إميليو بوتراجينيو",
            "جوزيف بينغولا",
            "ستانلي ماثيوس"
        ],
        correctAnswer: 0
    },
    {
        question: "ما هو اسم الجائزة التي تمنح لأفضل لاعب شاب في كأس العالم؟",
        answers: [
            "الكرة الذهبية",
            "الحذاء الذهبي",
            "الفتى الذهبي",
            "الكرة الفضية"
        ],
        correctAnswer: 2
    },
    {
        question: "من هو اللاعب الذي يلقب بـ 'المارد الأحمر'؟",
        answers: [
            "باولو مالديني",
            "فرانك لامبارد",
            "باولو فوتري",
            "بيليه"
        ],
        correctAnswer: 2
    },
    {
        question: "في أي عام أقيمت بطولة كأس الأمم الأفريقية للمرة الأولى؟",
        answers: [
            "1950",
            "1957",
            "1960",
            "1965"
        ],
        correctAnswer: 1
    },
    {
        question: "من هو المدرب الذي قاد منتخب إسبانيا للفوز بكأس العالم 2010؟",
        answers: [
            "لويس أراغونيس",
            "فرانسيسكو فرانكو",
            "فيسينتي ديل بوسكي",
            "خوان دي لا كروز"
        ],
        correctAnswer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const answersList = document.getElementById('answers-list');
const nextBtn = document.getElementById('next-btn');
const result = document.getElementById('result');
nextBtn.style.display = 'none';
const correctSound = new Audio('correct.mp3');
const wrongSound = new Audio('wrong.mp3');
const suuSound = new Audio('suu.mp3');

function displayQuestion() {
    questionText.textContent = questions[currentQuestion].question;

    answersList.innerHTML = '';
    for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
        const answerBtn = document.createElement('button');
        answerBtn.textContent = questions[currentQuestion].answers[i];
        answerBtn.classList.add('answer-btn');
        answerBtn.onclick = function() {
            checkAnswer(i);
        };
        answersList.appendChild(answerBtn);
    }
}




function checkAnswer(answerIndex) {
    nextBtn.style.display = 'none';
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      score++;
      result.textContent = "إجابة صحيحة!";
      result.style.color = "#2ecc71";
      correctSound.currentTime = 0; 
      correctSound.play(); 
    } else {
      result.textContent = "إجابة خاطئة!";
      result.style.color = "#e74c3c";
      wrongSound.currentTime = 0; 
      wrongSound.play(); 
    }
    nextBtn.style.display = 'block';
    answersList.style.pointerEvents = 'none'; 
  }

function nextQuestion() {
    currentQuestion++;
    result.textContent = '';
    answersList.style.pointerEvents = 'auto'; 
    nextBtn.style.display = 'none';

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    suuSound.play(); 
    questionText.textContent = `انتهت الأسئلة! نتيجتك: ${score} من ${questions.length}`;
    answersList.style.display = 'none';
    nextBtn.style.display = 'none';
}
// دالة لتبديل السمة
function toggleTheme() {
    const isChecked = document.getElementById('theme-toggle').checked;
    if (isChecked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
    // Update the theme on all pages
    updateThemeOnAllPages();
}

// ضبط السمة عند التحميل
window.onload = function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    // Update the theme on all pages
    updateThemeOnAllPages();
}

// Function to update the theme on all pages
function updateThemeOnAllPages() {
    // Get all pages (assuming they have a common class or attribute)
    const pages = document.querySelectorAll('.page');
    pages.forEach((page) => {
        if (localStorage.getItem('theme') === 'dark') {
            page.classList.add('dark-mode');
        } else {
            page.classList.remove('dark-mode');
        }
    });
}
// Display the first question when the page loads
displayQuestion();
