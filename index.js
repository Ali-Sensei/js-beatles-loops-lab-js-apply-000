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
    arrFacts[j] = arrFacts[j] + "!";
  }
  return arrFacts;
}