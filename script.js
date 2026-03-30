const form = document.getElementById("infoForm");
const toast = document.getElementById("toast");
const saveButton = document.getElementById("saveButton");
const questionSection = document.getElementById("questionSection");
const questionForm = document.getElementById("questionForm");
const rewardSection = document.getElementById("rewardSection");
const rewardForm = document.getElementById("rewardForm");
const relationshipSection = document.getElementById("relationshipSection");
const relationshipForm = document.getElementById("relationshipForm");
const pressureSection = document.getElementById("pressureSection");
const pressureForm = document.getElementById("pressureForm");
const constraintSection = document.getElementById("constraintSection");
const constraintForm = document.getElementById("constraintForm");
const accumulationSection = document.getElementById("accumulationSection");
const accumulationForm = document.getElementById("accumulationForm");
const levelGuideSection = document.getElementById("levelGuideSection");
const levelSelectorForm = document.getElementById("levelSelectorForm");
const copyLevelSummaryButton = document.getElementById("copyLevelSummaryButton");
const storageKey = "state-sense-form";
const questionStorageKey = "state-sense-answers";
const rewardStorageKey = "reward-answers";
const relationshipStorageKey = "relationship-answers";
const pressureStorageKey = "pressure-answers";
const constraintStorageKey = "constraint-answers";
const accumulationStorageKey = "accumulation-answers";
const selectedLevelStorageKey = "selected-floor-level";
const defaultDraft = {
  name: "홍길동",
  age: "34",
  job: "기획자",
  email: "sample@naver.com",
};

let toastTimer;

function showToast(message) {
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
}

function getFormData() {
  return {
    name: form?.name.value.trim() ?? "",
    age: form?.age.value.trim() ?? "",
    job: form?.job.value.trim() ?? "",
    email: form?.email.value.trim() ?? "",
  };
}

function fillForm(data) {
  if (!data || !form) {
    return;
  }

  form.name.value = data.name ?? "";
  form.age.value = data.age ?? "";
  form.job.value = data.job ?? "";
  form.email.value = data.email ?? "";
}

function saveDraft() {
  const data = getFormData();
  localStorage.setItem(storageKey, JSON.stringify(data));
  showToast("입력한 내용이 임시 저장되었습니다.");
}

function getStoredObject(key) {
  const raw = localStorage.getItem(key);
  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    localStorage.removeItem(key);
    return {};
  }
}

function buildSubmissionPayload() {
  const basicInfo = getFormData();
  const allAnswers = {
    ...getStoredObject(questionStorageKey),
    ...getStoredObject(rewardStorageKey),
    ...getStoredObject(relationshipStorageKey),
    ...getStoredObject(pressureStorageKey),
    ...getStoredObject(constraintStorageKey),
    ...getStoredObject(accumulationStorageKey),
  };

  return {
    basicInfo,
    answers: allAnswers,
  };
}

function buildClipboardSummary() {
  const summary = buildSubmissionPayload();
  const { basicInfo, answers } = summary;
  const getLine = (title, keys) =>
    `${title}: ${keys.map((key) => answers[key] ?? "-").join(", ")}`;
  const selectedLevel =
    levelSelectorForm?.querySelector('input[name="selectedLevel"]:checked')?.value ??
    localStorage.getItem(selectedLevelStorageKey) ??
    "";

  const lines = [
    `이름 : ${basicInfo.name}`,
    `나이 : ${basicInfo.age}`,
    `직업 : ${basicInfo.job}`,
    `이메일 : ${basicInfo.email}`,
    "",
    getLine("1. 상태감각능력", ["q1", "q2", "q3", "q4", "q5"]),
    getLine("2. 보상/각성 판단", ["q6", "q7", "q8", "q9", "q10"]),
    getLine("3. 관계민감도", ["q11", "q12", "q13", "q14", "q15"]),
    getLine("4. 책임압박", ["q16", "q17", "q18", "q19", "q20"]),
    getLine("5. 상태취약 정도", ["q21", "q22", "q23", "q24", "q25"]),
    getLine("6. 상태취약 누적", ["q26", "q27", "q28", "q29", "q30"]),
  ];

  if (selectedLevel) {
    lines.push("", `선택한 층: ${selectedLevel}`);
  }

  return lines.join("\n");
}

function restoreSelectedLevel() {
  if (!levelSelectorForm) {
    return false;
  }

  const savedLevel = localStorage.getItem(selectedLevelStorageKey);
  if (!savedLevel) {
    return false;
  }

  const input = levelSelectorForm.querySelector(
    `input[name="selectedLevel"][value="${savedLevel}"]`
  );

  if (!input) {
    localStorage.removeItem(selectedLevelStorageKey);
    return false;
  }

  input.checked = true;
  return true;
}

function revealLevelGuideSection() {
  if (!levelGuideSection) {
    return;
  }

  levelGuideSection.classList.remove("is-hidden");
  levelGuideSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function copySummaryToClipboard(successMessage) {
  navigator.clipboard
    .writeText(buildClipboardSummary())
    .then(() => {
      showToast(successMessage);
    })
    .catch(() => {
      showToast("?묐떟? ??λ릺?덉?留??대┰蹂대뱶 蹂듭궗???ㅽ뙣?덉뒿?덈떎.");
    });
}

function saveAnswers() {
  if (!questionForm) {
    return;
  }

  const formData = new FormData(questionForm);
  const answers = Object.fromEntries(formData.entries());
  localStorage.setItem(questionStorageKey, JSON.stringify(answers));
}

function restoreAnswers() {
  if (!questionForm) {
    return false;
  }

  const savedAnswers = localStorage.getItem(questionStorageKey);
  if (!savedAnswers) {
    return false;
  }

  try {
    const answers = JSON.parse(savedAnswers);
    Object.entries(answers).forEach(([name, value]) => {
      const input = questionForm.querySelector(`input[name="${name}"][value="${value}"]`);
      if (input) {
        input.checked = true;
      }
    });
    return true;
  } catch (error) {
    localStorage.removeItem(questionStorageKey);
    return false;
  }
}

function saveRewardAnswers() {
  if (!rewardForm) {
    return;
  }

  const formData = new FormData(rewardForm);
  const answers = Object.fromEntries(formData.entries());
  localStorage.setItem(rewardStorageKey, JSON.stringify(answers));
}

function restoreRewardAnswers() {
  if (!rewardForm) {
    return false;
  }

  const savedAnswers = localStorage.getItem(rewardStorageKey);
  if (!savedAnswers) {
    return false;
  }

  try {
    const answers = JSON.parse(savedAnswers);
    Object.entries(answers).forEach(([name, value]) => {
      const input = rewardForm.querySelector(`input[name="${name}"][value="${value}"]`);
      if (input) {
        input.checked = true;
      }
    });
    return true;
  } catch (error) {
    localStorage.removeItem(rewardStorageKey);
    return false;
  }
}

function saveRelationshipAnswers() {
  if (!relationshipForm) {
    return;
  }

  const formData = new FormData(relationshipForm);
  const answers = Object.fromEntries(formData.entries());
  localStorage.setItem(relationshipStorageKey, JSON.stringify(answers));
}

function restoreRelationshipAnswers() {
  if (!relationshipForm) {
    return false;
  }

  const savedAnswers = localStorage.getItem(relationshipStorageKey);
  if (!savedAnswers) {
    return false;
  }

  try {
    const answers = JSON.parse(savedAnswers);
    Object.entries(answers).forEach(([name, value]) => {
      const input = relationshipForm.querySelector(`input[name="${name}"][value="${value}"]`);
      if (input) {
        input.checked = true;
      }
    });
    return true;
  } catch (error) {
    localStorage.removeItem(relationshipStorageKey);
    return false;
  }
}

function savePressureAnswers() {
  if (!pressureForm) {
    return;
  }

  const formData = new FormData(pressureForm);
  const answers = Object.fromEntries(formData.entries());
  localStorage.setItem(pressureStorageKey, JSON.stringify(answers));
}

function restorePressureAnswers() {
  if (!pressureForm) {
    return false;
  }

  const savedAnswers = localStorage.getItem(pressureStorageKey);
  if (!savedAnswers) {
    return false;
  }

  try {
    const answers = JSON.parse(savedAnswers);
    Object.entries(answers).forEach(([name, value]) => {
      const input = pressureForm.querySelector(`input[name="${name}"][value="${value}"]`);
      if (input) {
        input.checked = true;
      }
    });
    return true;
  } catch (error) {
    localStorage.removeItem(pressureStorageKey);
    return false;
  }
}

function saveConstraintAnswers() {
  if (!constraintForm) {
    return;
  }

  const formData = new FormData(constraintForm);
  const answers = Object.fromEntries(formData.entries());
  localStorage.setItem(constraintStorageKey, JSON.stringify(answers));
}

function restoreConstraintAnswers() {
  if (!constraintForm) {
    return false;
  }

  const savedAnswers = localStorage.getItem(constraintStorageKey);
  if (!savedAnswers) {
    return false;
  }

  try {
    const answers = JSON.parse(savedAnswers);
    Object.entries(answers).forEach(([name, value]) => {
      const input = constraintForm.querySelector(`input[name="${name}"][value="${value}"]`);
      if (input) {
        input.checked = true;
      }
    });
    return true;
  } catch (error) {
    localStorage.removeItem(constraintStorageKey);
    return false;
  }
}

function saveAccumulationAnswers() {
  if (!accumulationForm) {
    return;
  }

  const formData = new FormData(accumulationForm);
  const answers = Object.fromEntries(formData.entries());
  localStorage.setItem(accumulationStorageKey, JSON.stringify(answers));
}

function restoreAccumulationAnswers() {
  if (!accumulationForm) {
    return false;
  }

  const savedAnswers = localStorage.getItem(accumulationStorageKey);
  if (!savedAnswers) {
    return false;
  }

  try {
    const answers = JSON.parse(savedAnswers);
    Object.entries(answers).forEach(([name, value]) => {
      const input = accumulationForm.querySelector(`input[name="${name}"][value="${value}"]`);
      if (input) {
        input.checked = true;
      }
    });
    return true;
  } catch (error) {
    localStorage.removeItem(accumulationStorageKey);
    return false;
  }
}

function validateQuestionForm(formElement) {
  if (!formElement) {
    return true;
  }

  const radioNames = [
    ...new Set(
      Array.from(formElement.querySelectorAll('input[type="radio"][name]')).map(
        (input) => input.name
      )
    ),
  ];

  const firstMissingName = radioNames.find(
    (name) => !formElement.querySelector(`input[name="${name}"]:checked`)
  );

  if (!firstMissingName) {
    return true;
  }

  const missingInput = formElement.querySelector(`input[name="${firstMissingName}"]`);
  const missingBlock = missingInput?.closest(".question-block");

  missingBlock?.scrollIntoView({ behavior: "smooth", block: "center" });
  showToast("체크하지 않은 항목이 있습니다. 5문항을 모두 선택해 주세요.");

  return false;
}

const savedDraft = localStorage.getItem(storageKey);
if (savedDraft) {
  try {
    fillForm(JSON.parse(savedDraft));
  } catch (error) {
    localStorage.removeItem(storageKey);
    fillForm(defaultDraft);
  }
} else {
  fillForm(defaultDraft);
}

const hasSavedAnswers = restoreAnswers();
if (hasSavedAnswers && questionSection) {
  questionSection.classList.remove("is-hidden");
}

const hasSavedRewardAnswers = restoreRewardAnswers();
if (hasSavedRewardAnswers && rewardSection) {
  rewardSection.classList.remove("is-hidden");
}

const hasSavedRelationshipAnswers = restoreRelationshipAnswers();
if (hasSavedRelationshipAnswers && relationshipSection) {
  relationshipSection.classList.remove("is-hidden");
}

const hasSavedPressureAnswers = restorePressureAnswers();
if (hasSavedPressureAnswers && pressureSection) {
  pressureSection.classList.remove("is-hidden");
}

const hasSavedConstraintAnswers = restoreConstraintAnswers();
if (hasSavedConstraintAnswers && constraintSection) {
  constraintSection.classList.remove("is-hidden");
}

const hasSavedAccumulationAnswers = restoreAccumulationAnswers();
if (hasSavedAccumulationAnswers && accumulationSection) {
  accumulationSection.classList.remove("is-hidden");
}

const hasSavedSelectedLevel = restoreSelectedLevel();
if (hasSavedSelectedLevel && levelGuideSection) {
  levelGuideSection.classList.remove("is-hidden");
}

saveButton?.addEventListener("click", saveDraft);

questionForm?.addEventListener("change", () => {
  saveAnswers();
});

rewardForm?.addEventListener("change", () => {
  saveRewardAnswers();
});

relationshipForm?.addEventListener("change", () => {
  saveRelationshipAnswers();
});

pressureForm?.addEventListener("change", () => {
  savePressureAnswers();
});

constraintForm?.addEventListener("change", () => {
  saveConstraintAnswers();
});

accumulationForm?.addEventListener("change", () => {
  saveAccumulationAnswers();
});

levelSelectorForm?.addEventListener("change", () => {
  const selectedLevel =
    levelSelectorForm.querySelector('input[name="selectedLevel"]:checked')?.value ?? "";

  if (!selectedLevel) {
    return;
  }

  localStorage.setItem(selectedLevelStorageKey, selectedLevel);
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) {
    return;
  }

  saveDraft();
  questionSection?.classList.remove("is-hidden");
  questionSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("기본 정보가 저장되었습니다. 아래에서 상태감각능력 문항을 선택해주세요.");
});

questionForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateQuestionForm(questionForm) || !questionForm.reportValidity()) {
    return;
  }

  saveAnswers();

  if (rewardSection) {
    rewardSection.classList.remove("is-hidden");
    rewardSection.scrollIntoView({ behavior: "smooth", block: "start" });
    showToast("상태감각능력 문항이 저장되었습니다. 아래에서 다음 문항을 선택해주세요.");
    return;
  }

  navigator.clipboard
    .writeText(buildClipboardSummary())
    .then(() => {
      showToast("응답이 클립보드에 복사되었습니다. 바로 붙여넣어 사용할 수 있어요.");
    })
    .catch(() => {
      showToast("응답은 저장되었지만 클립보드 복사는 실패했습니다.");
    });
});

rewardForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateQuestionForm(rewardForm) || !rewardForm.reportValidity()) {
    return;
  }

  saveRewardAnswers();
  relationshipSection?.classList.remove("is-hidden");
  relationshipSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("보상/각성 판단 문항이 저장되었습니다. 아래에서 관계민감도 문항을 이어서 선택해주세요.");
});

relationshipForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateQuestionForm(relationshipForm) || !relationshipForm.reportValidity()) {
    return;
  }

  saveRelationshipAnswers();
  pressureSection?.classList.remove("is-hidden");
  pressureSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("관계민감도 문항이 저장되었습니다. 아래에서 책임압박 문항을 이어서 선택해주세요.");
});

pressureForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateQuestionForm(pressureForm) || !pressureForm.reportValidity()) {
    return;
  }

  savePressureAnswers();
  constraintSection?.classList.remove("is-hidden");
  constraintSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("책임압박 문항이 저장되었습니다. 아래에서 상태취약 정도 문항을 선택해주세요.");
});

constraintForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateQuestionForm(constraintForm) || !constraintForm.reportValidity()) {
    return;
  }

  saveConstraintAnswers();
  accumulationSection?.classList.remove("is-hidden");
  accumulationSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("상태취약 정도 문항이 저장되었습니다. 아래에서 마지막 문항을 선택해주세요.");
});

accumulationForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateQuestionForm(accumulationForm) || !accumulationForm.reportValidity()) {
    return;
  }

  saveAccumulationAnswers();
  navigator.clipboard
    .writeText(buildClipboardSummary())
    .then(() => {
      showToast("응답이 클립보드에 복사되었습니다.\n카카오톡 채팅창에 붙여넣기 해주세요.");
    })
    .catch(() => {
      showToast("응답은 저장되었지만 클립보드 복사는 실패했습니다.");
    });
});
accumulationForm?.addEventListener("submit", () => {
  window.setTimeout(() => {
    revealLevelGuideSection();
  }, 0);
});

copyLevelSummaryButton?.addEventListener("click", () => {
  const selectedLevel =
    levelSelectorForm?.querySelector('input[name="selectedLevel"]:checked')?.value ?? "";

  if (!selectedLevel) {
    showToast("먼저 확인하고 싶은 층을 선택해 주세요.");
    return;
  }

  localStorage.setItem(selectedLevelStorageKey, selectedLevel);
  copySummaryToClipboard("선택한 층 정보까지 클립보드에 다시 저장했습니다.");
});
