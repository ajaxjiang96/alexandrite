'use strict'

const GREET = 'AJAX';
const NAME = 'Greeting!';

const greet = (GREET,myName) => {
  console.log(GREET +":" + myName)
}

greet(GREET,NAME);
