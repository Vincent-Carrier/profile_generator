const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name, artist, food, sport, superpower;
rl.question("What is your name? ", answer => {
  name = answer;
  rl.question("What is your favorite artist? ", answer => {
    artist = answer;
    rl.question("What is your favorite food? ", answer => {
      food = answer;
      rl.question("What is your favorite sport? ", answer => {
        sport = answer;
        rl.question("What is your superpower? ", answer => {
          superpower = answer;
          rl.close();
          console.log(`${name} loves listening to ${artist} while coding,`,
          `devouring ${food} for brunch, prefers ${sport} over any sport and is`,
          `amazing at ${superpower}`);
        });
      });
    });
  });

});
