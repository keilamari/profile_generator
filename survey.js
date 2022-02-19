const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = ["What's your name? Nicknames are also acceptable. ", "What is your hobby? ", "What is your favourite band? ", "Which meal is your favourite (e.g. dinner, brunch, etc)? ", "What is your favourite thing to eat for that meal? ", "What is your favourite movie of all time? "];

(async () => {
  let answers = [];
  for (let question of questions) {
    answers.push(
      await new Promise(resolve => {
        rl.question(question, (answer) => {
          resolve(answer);
        });
      })
    );
  }
  rl.close();
  console.log(`This is ${answers[0]}, who loves ${answers[1]} while listening to ${answers[2]}. ${answers[0]} loves eating ${answers[4]} for ${answers[3]}, but mostly you can expect to find ${answers[0]} watching ${answers[5]} over and over again.`)
}) ();
