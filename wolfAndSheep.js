//If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

function warnTheSheep(queue) {
const wolfIndex = queue.indexOf('wolf');
  
  if (wolfIndex === queue.length - 1) {

    return "Pls go away and stop eating my sheep";
  } else {

    const sheepNumber = queue.length - wolfIndex - 1;
    return `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`;
  }
}

