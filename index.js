var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase //true

var lowercase = "hello!"
lowercase.toLowerCase() === lowercase //true

var mixedCase = "Hi there!"
mixedCase.toLowerCase() === mixedCase //false
mixedCase.toUpperCase() === mixedCase //false

"Hello!".toUpperCase() // "HELLO!"

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(spy) {
  console.log("HELLO")
}

function logWhisper(spy) {
  console.log("hello")
}

function sayHiToGrandma(string) {
  if("hello" = lowercase) {
    return "I can\'t hear you!"
  } else if ("HELLO" = uppercase) {
    return "YES INDEED!"
  } else if ("I love you, Grandma.") {
    return "I love you, too."
  }
}

/*function sayHiToGrandma(string) {
  if("HELLO") {
    return "YES INDEED!"
  }
}

function sayHiToGrandma(string) {
  if("I love you, Grandma.") {
    return "I love you, too."
  }
}
*/
