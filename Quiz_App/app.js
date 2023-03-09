const api_quiz = async (category) => {
  const apiKey = "ZouLiD7HspzugxpxJFxGqqa01hYZZ2zX84Ls1GgP";

  const api_response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=ZouLiD7HspzugxpxJFxGqqa01hYZZ2zX84Ls1GgP&category=${category}`);

  if (api_response.status === 200) {
    const data = await api_response.json();
    return data;
  }
};

const topic_display = document.querySelector('.topics');
const profile_display = document.querySelector('.profile-info');
const question_display = document.querySelector('.question-panel');
const score_display = document.querySelector('.score');
const length_question = document.querySelector('#length-question');
let length_question_value = "";
const question_number = document.querySelector('#question-number');
const question = document.querySelector('#question');
const btn_upgrade = document.querySelector('#btn-upgrade');
const btn_submit = document.querySelector('#btn-submit');


let question_value = 1;
let questionNumber = 0;
let question_started = false;

let correct_Answer = "";
let correct_Answer_count = 0;


let answers_start_letter = ["A", "B", "C", "D", "E", "F"];






const show_data = async (local, questionNumber) => {
  const data = await api_quiz(local);

  let answers = data[questionNumber].answers;
  let answers_values = Object.values(answers);

  let answer_correct_option = data[questionNumber].correct_answers;
  let answers_keys = Object.keys(answer_correct_option);
  let answers_correct_keys = Object.values(answer_correct_option);




  if (question_started != true) {
    topic_display.classList.toggle("d-none");
    question_display.classList.toggle("d-none");
    btn_submit.classList.toggle("d-none");
    btn_upgrade.classList.toggle("d-none");
    question_started = true;
  }
  length_question.textContent = data.length;
  length_question_value = data.length;
  question_number.textContent = question_value + ".";
  question.textContent = data[questionNumber].question;

  i = 0;
  j = 0;
  k = 0;
  answers_values.forEach(element => {
    if (element != null) {
      const answer_display = document.querySelector('.answers');
      const label = document.createElement('label');
      label.classList.add('toggler-wrapper');
      const input_checkbox = document.createElement('input');
      input_checkbox.type = 'checkbox';
      input_checkbox.value = answers_keys[i];
      input_checkbox.setAttribute("aria-details", answers_correct_keys[j]);

      input_checkbox.classList.add('checkbox');
      const toggler_slider = document.createElement('div');
      toggler_slider.classList.add('toggler-slider', 'd-flex');
      const answer_text = document.createElement('p');
      answer_text.classList.add('d-flex');
      answer_text.textContent = element;
      const toggler_knob = document.createElement('div');
      toggler_knob.classList.add('toggler-knob', 'd-flex');
      toggler_knob.textContent = answers_start_letter[k];
      answer_display.appendChild(label);
      label.appendChild(input_checkbox);
      label.appendChild(toggler_slider);
      toggler_slider.appendChild(answer_text);
      toggler_slider.appendChild(toggler_knob);
      i++;
      j++;
      k++;
    }
  });


  const checkbox = document.querySelectorAll(".checkbox");

  checkbox.forEach(element => {
    element.addEventListener("change", function () {
      if (this.checked) {
        checkbox.forEach(element => {
          element.disabled = true;
          this.disabled = false;
        });
        correct_Answer = this.getAttribute("aria-details");
      } else {
        checkbox.forEach(element => {
          element.disabled = false;
        });
      }
    });
  });

}

btn_submit.addEventListener("click", function () {
  if (question_value == 20) {

    console.log("bigger then 20");
    question_display.classList.toggle("d-none");
    profile_display.classList.toggle("d-none");
    score_display.classList.toggle("d-none");
    btn_submit.classList.toggle("d-none");

    const final_score = document.querySelector("#final-score");
    final_score.textContent = (100 * correct_Answer_count) / length_question_value + "% score";

    const question_answered = document.querySelector("#questions-answered");
    question_answered.textContent = length_question_value + " questions";

    const answers_answered = document.querySelector("#answer-correct");
    answers_answered.textContent = correct_Answer_count + " answers";


  } else {
    questionNumber++;
    question_value++;

    const answer_display = document.querySelector('.answers');
    answer_display.innerHTML = "";

    if (correct_Answer == "true") {
      correct_Answer_count++;
    }

    show_data("docker", questionNumber);
  }
})


document.querySelector(".btn-close").addEventListener("click", function () {
  profile_display.classList.toggle("d-none");
  topic_display.classList.toggle("d-none");
  score_display.classList.toggle("d-none");
  btn_upgrade.classList.toggle("d-none");
})