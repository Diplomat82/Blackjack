/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
for (let i = 0; i < hand.length-1; i++){
  var hand = 2;
  var names = [2, 3, 4, 5, 6, 7, 8, 9, 10,];
  var facecard = ["jack", "queen", "king"];
  var cardVal = ''

// if (hand[i] == 'K' || 'Q' || 'J');
  if (hand[i] == "K"){
    return cardVal = cardVal + 10;

  }else if(hand[i] == "Q"){
    return cardVal = cardVal + 10;
  }else if(hand[i] == "J"){
    return cardVal = cardVal + 10;
  }

  else if(hand[i] == "2"){
    return cardVal = cardVal + 2;
  }

  else if(hand[i] == "3"){
    return cardVal = cardVal + 3;
  }

  else if(hand[i] == "4"){
    return cardVal = cardVal + 4;
  }

  else if(hand[i] == "5"){
    return cardVal = cardVal + 5;
  }
  else if(hand[i] == "6"){
    return cardVal = cardVal + 6;
  }
  else if(hand[i] == "7"){
    return cardVal = cardVal + 7;
  }
  else if(hand[i] == "8"){
    return cardVal = cardVal + 8;
  }
  else if(hand[i] == "9"){
    return cardVal = cardVal + 9;
  }
  else if(hand[i] == "10"){
    return cardVal = cardVal + 10;
  }
  else if(hand[i] == "A"){
    for (let j = 0; j < hand.length-1; j++){
      if (cardVal > 11){
      return cardVal + 1;
    }
    if (cardVal < 11 ){
      return cardVal + 11;
    }

//If the handValue equals "Facecard", or "Ace", then it has to be a number.
}

}
return handValue;
}
/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
