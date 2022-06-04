
// I wanted to attemp extra credit - just terrible time management from me



const {data} = require('./p4-data');
//const { question = '', answer = ''} = data[0];

function getQuestions() {
  return [data[0].question, data[1].question, data[2].question]
}

function getAnswers() {
  return [data[0].answer, data[1].answer, data[2].answer]
}

function getQuestionsAnswers() {
    return data
}

function getQuestion(number = "") {
    const num = parseInt(number);
    if (number === "") {
        return {
            error: 'Question number must be an integer',
            question: '',
            number: ''
          }
    }
    else if (num < 1) {
        return { error: 'Question number must be >= 1', question: '', number: '' }
    }
    else if (num > 3) {
        return {
            error: 'Question number must be less than the number of questions (3)',
            question: '',
            number: ''
          }
    }
    else {
        return { error: '', question: data[number - 1].question, number: num }
    }
}

function getAnswer(number = "") {
    const num = parseInt(number);
    if (number === "") {
        return {
            error: 'Answer number must be an integer',
            answer: '',
            number: ''
          }
    }
    else if (num < 1) {
        return { error: 'Answer number must be >= 1', answer: '', number: '' }
    }
    else if (num > 3) {
        return {
            error: 'Answer number must be less than the number of questions (3)',
            answer: '',
            number: ''
          }
    }
    else {
        return { error: '', answer: data[number - 1].answer, number: num }
    }
}

function getQuestionAnswer(number = "") {
    const num = parseInt(number);
    if (number === "") {
        return {
            error: 'Question number must be an integer',
            question: '',
            number: ''
          }
    }
    else if (num < 1) {
        return { error: 'Question number must be >= 1', question: '', number: '' }
    }
    else if (num > 3) {
        return {
            error: 'Question number must be less than the number of questions (3)',
            question: '',
            number: ''
          }
    }
    else {
        return { error: '', question: data[number - 1].question, number: num, answer: data[number - 1].answer }
    }
}

  module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
  };

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetAs = false;
  const testGetQs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }