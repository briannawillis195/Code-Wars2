//You get any card as an argument. Your task is to return the suit of this card (in lowercase).

function defineSuit(card) {
  // good luck
if (card.includes('♣')){
  return 'clubs'
}else if(card.includes('♦')){
  return 'diamonds'
}else if(card.includes('♥')){
  return 'hearts'
}else if(card.includes('♠')){
  return 'spades'
}
}