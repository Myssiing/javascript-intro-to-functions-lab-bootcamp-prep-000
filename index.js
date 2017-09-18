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
  console.log("hello")
  if(uppercase) {
    return "I can\'t hear you!"
}
}
