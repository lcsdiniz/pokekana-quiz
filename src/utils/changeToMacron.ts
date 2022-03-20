export function changeToMacron(character: string) {
  var characterToBeReturned = character;
  
  switch (character) {
    case 'â':
      characterToBeReturned = 'ā';
      break;
    case 'ê':
      characterToBeReturned = 'ē';
      break;
    case 'î':
      characterToBeReturned = 'ī';
      break;
    case 'ô':
      characterToBeReturned = 'ō';
      break;
    case 'û':
      characterToBeReturned = 'ū';
      break;
    default:
      break;
  }

  return characterToBeReturned;
}