// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var array = [];
  for (var j=0; j < musicians.length; j++)
  {
    array[j] = musicians[j] + " plays " + instruments[j]
  }
  return array;
}

function johnLennonFacts(arrFacts)
{
  for (var j=0; j < arrFacts.length; j++)
  {
    arrFacts[j] = arrFacts[j] + "!!!";
  }
  return arrFacts;
}

function iLoveTheBeatles(num)
{
  array = [];
  if (num > 15)
  {
    array[0] = "I love the Beatles";
    return array;
  }
    
  do
  {
    array[num] = "I love the Beatles!"
    num ++;
  }
  while (num < 16)
}