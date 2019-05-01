function countLetters(string)
{
  if (!string)
  {
    return "Please provide a proper string";
  }

  let result = {};

  for (const char in string)
  {
    if (string[char] === " ") continue;

    if (!result[string[char]])
    {
      result[string[char]] = [char];
    }
    else
    {
      result[string[char]].push(char);
    }
  }

  return result;
}

console.log(countLetters("lighthouse in the house"))