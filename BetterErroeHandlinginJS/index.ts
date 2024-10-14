type Result<T> = [T, null] | [null, Error];

function betterParseInt(userInput: string): Result<number> {
  const parsed = +userInput;
  if (isNaN(parsed)) {
    return [null, new Error("Invalid input")];
  }
  return [parsed, null];
}

function main() {
  // const [result, error] = betterParseInt('123');
  const [result, error] = betterParseInt("abc");

  if (error !== null) {
    // console.error(error); // full stack trace
    console.error(error.message); // just the error message "Invalid Input"
    return;
  }

  console.log(result);
}

main();
