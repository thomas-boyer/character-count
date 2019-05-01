function countLetters(string)
{
  if (!string)
  {
    return "Please provide a proper string";
  }

  let result = {};

  for (const char of string)
  {
    if (char !== " ") continue;

    if (!result[char])
    {
      result[char] = 1;
    }
    else
    {
      result[char] = result[char] + 1;
    }
  }

  return result;
}

console.log(countLetters("lighthouse in the house"))