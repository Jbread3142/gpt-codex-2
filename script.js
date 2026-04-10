const surveyData = [
  {
    id: "section-1",
    title: "미세 통증/불편 무시",
    description: "몸의 작은 불편 신호를 얼마나 그냥 넘기는지 체크해보세요.",
    questions: [
      {
        id: "q1",
        title: "몸 어딘가가 평소보다 약간 불편해도, 바로 조정하기보다 그냥 참고 하던 일을 계속하는 편이다.",
        alt: "대체문항: 몸이 살짝 불편해도, 쉬거나 풀기보다 그냥 버티는 편이다.",
        leftCaption: "불편해도 그냥 간다",
        rightCaption: "쉬거나 풀어보는 편",
      },
      {
        id: "q2",
        title: "머리가 약간 무겁거나 지끈거려도, 그 신호를 중요하게 보기보다 대수롭지 않게 넘기는 편이다.",
        alt: "대체문항: 머리가 좀 아프거나 무거워도, 별일 아니라고 넘기는 편이다.",
        leftCaption: "별일 아니라고 넘긴다",
        rightCaption: "몸 신호를 살펴본다",
      },
      {
        id: "q3",
        title: "목, 어깨, 턱 같은 곳에 긴장이 느껴져도, 풀어야 할 신호로 보기보다 그냥 익숙한 불편처럼 넘기는 편이다.",
        alt: "대체문항: 목이나 어깨가 뻣뻣해도, 관리해야 한다기보다 원래 그런가 보다 하고 넘기는 편이다.",
        leftCaption: "긴장을 그냥 넘긴다",
        rightCaption: "풀어야 할 신호로 본다",
      },
    ],
  },
  {
    id: "section-2",
    title: "상태 변화 감지 실패",
    description: "평소와 다른 변화를 얼마나 늦게 알아차리는지 체크해보세요.",
    questions: [
      {
        id: "q4",
        title: "평소와 달리 말투가 날카로워지거나 예민해져도, 그 변화를 바로 알아차리지 못하는 편이다.",
        alt: "대체문항: 내가 평소보다 예민해져도, 그걸 바로 잘 못 느끼는 편이다.",
        leftCaption: "변화를 잘 못 느낀다",
        rightCaption: "바로 알아차리는 편",
      },
      {
        id: "q5",
        title: "집중이 잘 안 되거나 머리가 흐려지는 날에도, 평소와 상태가 다르다는 점을 늦게 알아차리는 편이다.",
        alt: "대체문항: 집중이 안 되는 날에도, 내가 평소와 다르다는 걸 늦게 느끼는 편이다.",
        leftCaption: "늦게 알아차리는 편",
        rightCaption: "다름을 빨리 느낀다",
      },
      {
        id: "q6",
        title: "사람을 만났을 때 유난히 빨리 지치거나 닫히는 날에도, 왜 그런지보다 그냥 넘어가는 편이다.",
        alt: "대체문항: 사람 만날 때 평소보다 더 지쳐도, 그 변화를 잘 못 알아차리는 편이다.",
        leftCaption: "그냥 넘어가는 편",
        rightCaption: "왜 그런지 살펴본다",
      },
    ],
  },
  {
    id: "section-3",
    title: "감지 후 해석 실패",
    description: "변화를 느낀 뒤에도 그것을 상태 신호로 해석하는지 체크해보세요.",
    questions: [
      {
        id: "q7",
        title: "몸이나 기분이 평소와 다르다는 걸 느껴도, 그것을 상태 변화의 신호로 해석하지 않는 편이다.",
        alt: "대체문항: 내가 평소와 다르다는 걸 느껴도, 그걸 컨디션 문제로는 잘 생각하지 않는 편이다.",
        leftCaption: "상태 신호로 안 본다",
        rightCaption: "컨디션 신호로 본다",
      },
      {
        id: "q8",
        title: "예민함이나 짜증이 올라와도, 피로나 긴장 때문일 수 있다는 생각보다 그냥 기분 문제로 넘기는 편이다.",
        alt: "대체문항: 짜증이 나도, 내가 지쳐서 그런 건지 생각하지 않는 편이다.",
        leftCaption: "그냥 기분 문제로 본다",
        rightCaption: "피로나 긴장을 본다",
      },
      {
        id: "q9",
        title: "집중력 저하나 멍한 느낌이 와도, 몸과 마음의 상태보다 의지 문제로 보는 편이다.",
        alt: "대체문항: 머리가 잘 안 돌아가면, 컨디션보다 의지 부족이라고 느끼는 편이다.",
        leftCaption: "의지 문제로 느낀다",
        rightCaption: "상태 문제로 본다",
      },
    ],
  },
  {
    id: "section-4",
    title: "해석 후 조정 실패",
    description: "상태를 알아도 실제 조정 행동으로 이어지는지 체크해보세요.",
    questions: [
      {
        id: "q10",
        title: "내 상태가 좋지 않다는 걸 알아도, 실제로 쉬거나 속도를 줄이는 행동으로는 잘 이어지지 않는 편이다.",
        alt: "대체문항: 상태가 안 좋은 걸 알아도, 생활을 바로 조정하지는 않는 편이다.",
        leftCaption: "알아도 안 바꾸는 편",
        rightCaption: "바로 조정하는 편",
      },
      {
        id: "q11",
        title: "피곤하거나 예민한 날에도, 해야 할 일이나 사람 만나는 방식을 거의 바꾸지 않는 편이다.",
        alt: "대체문항: 피곤해도 원래 하던 계획을 잘 안 바꾸는 편이다.",
        leftCaption: "계획을 거의 안 바꾼다",
        rightCaption: "상태에 맞게 바꾼다",
      },
      {
        id: "q12",
        title: "몸이 보내는 신호를 느껴도, 잠깐 멈추고 조절하기보다 그냥 흘려보내는 편이다.",
        alt: "대체문항: 몸이 힘들다고 해도, 잠깐 멈추기보다 그냥 넘어가는 편이다.",
        leftCaption: "그냥 흘려보낸다",
        rightCaption: "잠깐 멈춰 조절한다",
      },
    ],
  },
  {
    id: "section-5",
    title: "의지로 덮기",
    description: "상태 신호를 쉬기보다 의지로 덮는 경향이 있는지 체크해보세요.",
    questions: [
      {
        id: "q13",
        title: "상태가 무너지는 느낌이 들어도, 조정하기보다 마음먹기에 달렸다고 여기며 밀어붙이는 편이다.",
        alt: "대체문항: 힘들어도 쉬기보다 의지로 버텨야 한다고 느끼는 편이다.",
        leftCaption: "의지로 밀어붙인다",
        rightCaption: "상태에 맞게 조절한다",
      },
      {
        id: "q14",
        title: "집중이 잘 안 될수록 쉬기보다 더 붙잡고 하려는 편이다.",
        alt: "대체문항: 집중이 안 되면 쉬기보다 더 억지로 하려는 편이다.",
        leftCaption: "더 억지로 붙든다",
        rightCaption: "쉬거나 끊어가는 편",
      },
      {
        id: "q15",
        title: "몸이나 마음이 이미 지쳐 있어도, 이 정도는 참아야 한다고 생각하며 넘기는 편이다.",
        alt: "대체문항: 많이 힘들어도, 이 정도는 버텨야 한다고 생각하는 편이다.",
        leftCaption: "이 정도는 버틴다",
        rightCaption: "힘들면 조절하는 편",
      },
    ],
  },
  {
    id: "section-6",
    title: "비정상 정상화",
    description: "지속되는 피로와 긴장을 원래 내 상태로 받아들이는지 체크해보세요.",
    questions: [
      {
        id: "q16",
        title: "늘 피곤하거나 무거운 상태가 반복돼도, 그것을 문제라기보다 원래 내 상태처럼 느끼는 편이다.",
        alt: "대체문항: 자주 피곤해도, 원래 나는 이런 편이라고 느끼는 편이다.",
        leftCaption: "원래 그렇다고 느낀다",
        rightCaption: "문제로 인식하는 편",
      },
      {
        id: "q17",
        title: "자고 일어나도 개운하지 않은 날이 많아도, 관리가 필요한 문제로 보기보다 그냥 익숙한 상태로 받아들이는 편이다.",
        alt: "대체문항: 자도 개운하지 않아도, 원래 그런가 보다 하고 넘기는 편이다.",
        leftCaption: "익숙한 상태로 넘긴다",
        rightCaption: "관리 필요로 본다",
      },
      {
        id: "q18",
        title: "몸의 긴장이나 불편이 오래 이어져도, 비정상이라고 느끼기보다 평소처럼 받아들이는 편이다.",
        alt: "대체문항: 몸이 계속 긴장돼 있어도, 이상하다고 보기보다 원래 그런 줄 아는 편이다.",
        leftCaption: "평소처럼 받아들인다",
        rightCaption: "이상 신호로 본다",
      },
    ],
  },
  {
    id: "section-7",
    title: "감정-상태 연결 차단",
    description: "감정 반응을 내 상태와 연결해서 보는지 체크해보세요.",
    questions: [
      {
        id: "q19",
        title: "짜증이나 예민함이 올라올 때, 내 상태보다 상대나 상황의 문제를 먼저 보게 되는 편이다.",
        alt: "대체문항: 짜증이 날 때, 내가 힘든 상태인지보다 상대 탓을 먼저 하게 되는 편이다.",
        leftCaption: "상대나 상황을 먼저 본다",
        rightCaption: "내 상태를 먼저 본다",
      },
      {
        id: "q20",
        title: "기분이 가라앉거나 마음이 닫힐 때, 몸의 피로나 긴장과 연결해서 보는 경우는 드문 편이다.",
        alt: "대체문항: 마음이 힘들 때, 몸이 지쳐서 그런 건지 생각하는 경우가 별로 없다.",
        leftCaption: "몸 상태와 잘 안 잇는다",
        rightCaption: "몸 피로와 연결해 본다",
      },
      {
        id: "q21",
        title: "감정이 거칠어질 때도, 내가 과각성되었거나 지쳐 있다는 점은 잘 떠올리지 못하는 편이다.",
        alt: "대체문항: 감정이 거칠어져도, 내가 지쳐서 그런 건지 잘 생각하지 않는 편이다.",
        leftCaption: "지친 상태를 못 떠올린다",
        rightCaption: "지침과 연결해 본다",
      },
    ],
  },
  {
    id: "section-8",
    title: "전환 실패",
    description: "일과 긴장에서 쉬는 모드로 전환이 잘 되는지 체크해보세요.",
    questions: [
      {
        id: "q22",
        title: "해야 할 일을 마친 뒤에도 몸과 마음이 바로 풀리지 않고, 긴장된 상태가 오래 가는 편이다.",
        alt: "대체문항: 일이 끝나도 긴장이 바로 안 풀리는 편이다.",
        leftCaption: "긴장이 오래 남는 편",
        rightCaption: "비교적 잘 풀리는 편",
      },
      {
        id: "q23",
        title: "쉬어야 할 시간에도 계속 생각하거나 자극을 찾느라, 편하게 내려놓는 모드로 잘 넘어가지 못하는 편이다.",
        alt: "대체문항: 쉬는 시간에도 계속 머리나 몸이 쉬지 못하는 편이다.",
        leftCaption: "쉬는 모드로 안 넘어간다",
        rightCaption: "편히 내려놓는 편",
      },
      {
        id: "q24",
        title: "집에 와서도 일할 때의 긴장감이나 책임감이 계속 남아 있는 편이다.",
        alt: "대체문항: 집에 와도 긴장이 계속 남아 있는 편이다.",
        leftCaption: "집에서도 긴장이 남는다",
        rightCaption: "집에선 풀리는 편",
      },
    ],
  },
  {
    id: "section-9",
    title: "회복 감각 부재",
    description: "내가 실제로 회복되는 감각을 구분하는지 체크해보세요.",
    questions: [
      {
        id: "q25",
        title: "내가 정말 쉬어졌는지, 아니면 그냥 멈춰만 있었는지를 잘 구분하지 못하는 편이다.",
        alt: "대체문항: 내가 진짜 회복됐는지 아닌지 잘 모를 때가 많다.",
        leftCaption: "회복 여부를 잘 모른다",
        rightCaption: "회복감을 구분하는 편",
      },
      {
        id: "q26",
        title: "쉬고 나서도 왜 개운하지 않은지, 무엇이 회복을 막는지 잘 감이 안 오는 편이다.",
        alt: "대체문항: 쉬어도 왜 안 풀리는지 잘 모르는 편이다.",
        leftCaption: "왜 안 풀리는지 모르겠다",
        rightCaption: "막는 요인을 아는 편",
      },
      {
        id: "q27",
        title: "회복이 필요한 상태일 때도, 어떤 방식으로 쉬어야 나아지는지 잘 모르는 편이다.",
        alt: "대체문항: 힘들 때 어떻게 쉬어야 진짜 나아지는지 잘 모르는 편이다.",
        leftCaption: "어떻게 쉬어야 할지 모른다",
        rightCaption: "맞는 회복법을 아는 편",
      },
    ],
  },
  {
    id: "section-10",
    title: "상태 악화의 분기점 무시",
    description: "무너지기 전 반복되는 전조와 패턴을 얼마나 보는지 체크해보세요.",
    questions: [
      {
        id: "q28",
        title: "처음엔 괜찮다가 어느 순간 급격히 무너지는 일이 반복돼도, 그 전에 있었던 작은 신호들을 잘 못 짚는 편이다.",
        alt: "대체문항: 갑자기 확 무너질 때가 있어도, 그 전조를 잘 못 알아보는 편이다.",
        leftCaption: "전조를 잘 못 짚는다",
        rightCaption: "전조를 살피는 편",
      },
      {
        id: "q29",
        title: "말투, 집중력, 감정, 몸 상태가 나빠지기 시작하는 지점을 평소에 세밀하게 보지 않는 편이다.",
        alt: "대체문항: 내가 언제부터 상태가 나빠지는지 평소에 잘 안 보는 편이다.",
        leftCaption: "나빠지는 지점을 안 본다",
        rightCaption: "변화 지점을 보는 편",
      },
      {
        id: "q30",
        title: "상태가 악화되기 전 늘 비슷한 흐름이 있어도, 그 반복 패턴을 잘 인식하지 못하는 편이다.",
        alt: "대체문항: 내가 무너지기 전에 늘 비슷한 과정이 있어도 그걸 잘 못 알아차리는 편이다.",
        leftCaption: "반복 패턴을 잘 모른다",
        rightCaption: "반복 흐름을 읽는 편",
      },
    ],
  },
];

const infoForm = document.getElementById("infoForm");
const startBtn = document.getElementById("startBtn");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const surveySection = document.getElementById("surveySection");
const surveyRoot = document.getElementById("surveyRoot");
const surveyForm = document.getElementById("surveyForm");
const toast = document.getElementById("toast");
const resultCard = document.getElementById("resultCard");
const resultCopy = document.getElementById("resultCopy");
const progressText = document.getElementById("progressText");
const copyButton = document.getElementById("copyButton");
const resetButton = document.getElementById("resetButton");
const increaseFontButton = document.getElementById("increaseFontButton");
const decreaseFontButton = document.getElementById("decreaseFontButton");

const infoStorageKey = "state-sense-basic-info";
const answersStorageKey = "state-sense-survey-answers";
const typeScaleStorageKey = "state-sense-survey-scale";
const typeScaleValues = [0.94, 1, 1.08];
const totalQuestions = surveyData.reduce((sum, section) => sum + section.questions.length, 0);
const defaultInfo = {
  name: "홍길동",
  age: "34",
};
let toastTimer;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function showToast(message) {
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function getSavedObject(storageKey) {
  const raw = localStorage.getItem(storageKey);
  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    localStorage.removeItem(storageKey);
    return {};
  }
}

function saveInfo() {
  const payload = {
    name: nameInput?.value.trim() ?? "",
    age: ageInput?.value.trim() ?? "",
  };

  localStorage.setItem(infoStorageKey, JSON.stringify(payload));
}

function restoreInfo() {
  const info = {
    ...defaultInfo,
    ...getSavedObject(infoStorageKey),
  };
  if (!nameInput || !ageInput) {
    return;
  }

  nameInput.value = info.name ?? "";
  ageInput.value = info.age ?? "";
}

function getSavedAnswers() {
  return getSavedObject(answersStorageKey);
}

function saveAnswers() {
  if (!surveyForm) {
    return;
  }

  const formData = new FormData(surveyForm);
  const answers = {};

  surveyData.forEach((section) => {
    section.questions.forEach((question) => {
      const value = formData.get(question.id);
      if (value) {
        answers[question.id] = value;
      }
    });
  });

  localStorage.setItem(answersStorageKey, JSON.stringify(answers));
  updateProgress();
}

function buildQuestionMarkup(question, index) {
  const dots = [5, 4, 3, 2, 1]
    .map(
      (value) => `
        <label class="likert-option" aria-label="문항 ${index} ${value}점">
          <input type="radio" name="${question.id}" value="${value}" />
          <span class="likert-dot" aria-hidden="true"></span>
        </label>
      `
    )
    .join("");

  return `
    <article class="question-card" data-question-id="${question.id}">
      <div class="question-number">문항 ${index}</div>
      <p class="question-title">${escapeHtml(question.title)}</p>
      <p class="question-alt">${escapeHtml(question.alt)}</p>
      <div class="likert-shell">
        <div class="likert-row">
          <div class="likert-label">
            <strong>그렇다</strong>
            <span class="likert-caption">${escapeHtml(question.leftCaption ?? "그렇다에 가깝다")}</span>
          </div>
          <div class="likert-options" role="radiogroup" aria-label="문항 ${index}의 5점 척도 선택">
            ${dots}
          </div>
          <div class="likert-label right">
            <strong>그렇지 않다</strong>
            <span class="likert-caption">${escapeHtml(question.rightCaption ?? "그렇지 않다에 가깝다")}</span>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderSurvey() {
  if (!surveyRoot) {
    return;
  }

  let questionIndex = 0;
  surveyRoot.innerHTML = surveyData
    .map((section, sectionIndex) => {
      const questions = section.questions
        .map((question) => {
          questionIndex += 1;
          return buildQuestionMarkup(question, questionIndex);
        })
        .join("");

      return `
        <section class="section-card ${sectionIndex === 0 ? "section-card-intro" : ""}" id="${section.id}">
          <div class="section-head ${sectionIndex === 0 ? "section-head-intro" : ""}">
            ${
              sectionIndex === 0
                ? `
                  <div class="section-intro-title-wrap">
                    <div class="section-badge section-badge-main">무감각화 검사</div>
                  </div>
                `
                : ""
            }
            <h2 class="section-title">${escapeHtml(section.title)}</h2>
            <p class="section-copy">${escapeHtml(section.description)}</p>
          </div>
          <div class="question-list">${questions}</div>
        </section>
      `;
    })
    .join("");
}

function restoreAnswers() {
  const answers = getSavedAnswers();

  Object.entries(answers).forEach(([questionId, value]) => {
    const input = surveyForm?.querySelector(`input[name="${questionId}"][value="${value}"]`);
    if (input) {
      input.checked = true;
    }
  });
}

function updateProgress() {
  const selectedCount = surveyForm ? Array.from(new FormData(surveyForm).keys()).length : 0;
  if (progressText) {
    progressText.textContent = `${selectedCount} / ${totalQuestions} 문항 선택됨`;
  }
}

function getSavedTypeScale() {
  const raw = Number(localStorage.getItem(typeScaleStorageKey));
  return typeScaleValues.includes(raw) ? raw : 1;
}

function applyTypeScale(scale) {
  document.documentElement.style.setProperty("--type-scale", String(scale));
}

function updateTypeScale(step) {
  const current = getSavedTypeScale();
  const currentIndex = typeScaleValues.indexOf(current);
  const nextIndex = Math.max(0, Math.min(typeScaleValues.length - 1, currentIndex + step));
  const nextScale = typeScaleValues[nextIndex];

  localStorage.setItem(typeScaleStorageKey, String(nextScale));
  applyTypeScale(nextScale);
}

function openSurvey() {
  surveySection?.classList.remove("is-hidden");
}

function validateSurvey() {
  let missingQuestionId = "";

  surveyData.forEach((section) => {
    section.questions.forEach((question) => {
      const block = surveyForm?.querySelector(`[data-question-id="${question.id}"]`);
      const checked = surveyForm?.querySelector(`input[name="${question.id}"]:checked`);
      block?.classList.remove("is-missing");

      if (!missingQuestionId && !checked) {
        missingQuestionId = question.id;
        block?.classList.add("is-missing");
      }
    });
  });

  if (!missingQuestionId) {
    return true;
  }

  surveyForm
    ?.querySelector(`[data-question-id="${missingQuestionId}"]`)
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
  showToast("체크하지 않은 문항이 있습니다. 30문항을 모두 선택해주세요.");
  return false;
}

function buildSummary() {
  const info = getSavedObject(infoStorageKey);
  const answers = getSavedAnswers();
  const lines = [
    "상태감각 유형검사 응답",
    "",
    `이름: ${info.name ?? ""}`,
    `나이: ${info.age ?? ""}`,
  ];

  surveyData.forEach((section, sectionIndex) => {
    lines.push("", `${sectionIndex + 1}. ${section.title}`);
    section.questions.forEach((question, questionIndex) => {
      const absoluteIndex = sectionIndex * 3 + questionIndex + 1;
      lines.push(`문항 ${absoluteIndex}: ${answers[question.id] ?? "-"}점`);
    });
  });

  return lines.join("\n");
}

function showResult() {
  const selectedCount = Object.keys(getSavedAnswers()).length;
  if (!resultCard || !resultCopy) {
    return;
  }

  resultCopy.textContent = `${selectedCount}개 문항 응답이 저장되었습니다. 아래 버튼으로 기본 정보와 점수 내용을 함께 복사할 수 있습니다.`;
  resultCard.classList.remove("is-hidden");
}

function resetSurvey() {
  localStorage.removeItem(infoStorageKey);
  localStorage.removeItem(answersStorageKey);
  if (infoForm) {
    infoForm.reset();
  }
  if (surveyForm) {
    surveyForm.reset();
    surveyForm.querySelectorAll(".question-card.is-missing").forEach((card) => {
      card.classList.remove("is-missing");
    });
  }
  surveySection?.classList.add("is-hidden");
  resultCard?.classList.add("is-hidden");
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
  showToast("기본 정보와 응답을 초기화했습니다.");
}

renderSurvey();
restoreInfo();
restoreAnswers();
applyTypeScale(getSavedTypeScale());
updateProgress();

if (Object.keys(getSavedAnswers()).length > 0) {
  openSurvey();
}

if (Object.values(getSavedObject(infoStorageKey)).some(Boolean)) {
  openSurvey();
}

function handleStartSurvey() {
  if (!nameInput || !ageInput) {
    return;
  }

  const name = nameInput.value.trim();
  const age = ageInput.value.trim();

  if (!name) {
    nameInput.reportValidity();
    nameInput.focus();
    return;
  }

  if (!age) {
    ageInput.reportValidity();
    ageInput.focus();
    return;
  }

  saveInfo();
  openSurvey();
  surveySection?.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("기본 정보가 저장되었습니다. 아래에서 설문을 진행해주세요.");
}

startBtn?.addEventListener("click", (event) => {
  event.preventDefault();
  handleStartSurvey();
});

surveyForm?.addEventListener("change", () => {
  saveAnswers();
});

surveyForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  saveAnswers();

  if (!validateSurvey()) {
    return;
  }

  showResult();
  resultCard?.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("응답이 저장되었습니다.");
});

copyButton?.addEventListener("click", () => {
  navigator.clipboard
    .writeText(buildSummary())
    .then(() => {
      showToast("응답 내용을 복사했습니다.");
    })
    .catch(() => {
      showToast("복사에 실패했습니다.");
    });
});

resetButton?.addEventListener("click", resetSurvey);
increaseFontButton?.addEventListener("click", () => updateTypeScale(1));
decreaseFontButton?.addEventListener("click", () => updateTypeScale(-1));
