const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Oh hey there callback hell
const generateUserStory = () => {
  let userStory = {};
  rl.question("What's your name? ", (answer) => {
    // TODO: Log the answer in a database
    userStory.name = answer;
    rl.question("How old are you?", (answer) => {
      // TODO: Log the answer in a database
      userStory.age = answer;
      rl.question("Where are you from?", (answer) => {
        // TODO: Log the answer in a database
        console.log(`Thank you for your valuable feedback`);
        userStory.country = answer;
        console.log(
          `${userStory.name} is ${userStory.age} and is from ${userStory.country}.`
        );
        rl.close();
      });
    });
  });
};

generateUserStory();
