#!C:\Program Files\nodejs\ node
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const log = console.log;
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");

program.version("1.0.0").description("Simple Password Generator");
program
    // .command("generate")
  //   .action(() => {
  //     console.log("generated");
  //   })
  .option("-l, --length <number>", "Length of password", "8")
  .option("-s, --save", "Save password to passwords.txt")
  .option("-nn, --no-numbers", "Remove numbers")
  .option("-ns, --no-symbols", "Remove symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols);

if (save) {
  savePassword(generatedPassword);
}

clipboardy.writeSync(generatedPassword);

log(chalk.blue("Generated Password: ") + chalk.bold(generatedPassword));

log(chalk.yellow("Password copied to clipboard"));
