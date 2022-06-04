const fs = require("fs");
const fastify = require("fastify")();
const { 
    getQuestions, 
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
} = require("./p4-module.js");

//getQuestions()
//Return all questions
fastify.get("/cit/question", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({ error: "",
              statusCode: 200,
              questions: getQuestions(),
        });
});

//getAnswers()
//Return all answers
fastify.get("/cit/answer", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({ error: "",
              statusCode: 200,
              answers: getAnswers(),
        });
});

//getQuestionsAnswers()
//Return all questions and answers
fastify.get("/cit/questionanswer", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({ error: "",
              statusCode: 200,
              questions_answers: getQuestionsAnswers(),
        });
});

//getQuestion(num)
//Return a specific question
fastify.get("/cit/question/:number", (request, reply) => {
    const { number } = request.params;
    const num = parseInt(number);

    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({ error: getQuestion(num).error,
              statusCode: 200,
              question: getQuestion(num).question,
              number: getQuestion(num).number,
        });
});

//getAnswer(num)
//Return a specific answer
fastify.get("/cit/answer/:number", (request, reply) => {
    const { number } = request.params;
    const num = parseInt(number);

    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({ error: getAnswer(num).error,
              statusCode: 200,
              answer: getAnswer(num).answer,
              number: getAnswer(num).number,
        });
});

//getQuestionAnswer(num)
//Return a specific question and answer
fastify.get("/cit/questionanswer/:number", (request, reply) => {
    const { number } = request.params;
    const num = parseInt(number);

    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({ error: getQuestionAnswer(num).error,
              statusCode: 200,
              question: getQuestionAnswer(num).question,
              answer: (number >= 1 && number <=3 ? getQuestionAnswer(num).answer : ""),
              number: getQuestionAnswer(num).number,
        });
});

//* route
//Unmatched route handler
fastify.get("/cit/*", (request, reply) => {
    reply
      .code(404)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({ error: "Route not found",
              statusCode: 404,
        });
});



const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
