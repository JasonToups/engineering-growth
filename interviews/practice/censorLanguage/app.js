// Interview question
// Create a way to take our comments and filter out the bad language.
// We will be obfuscating the bad language with *
// Feel free to ask questions
// This a multi part question and will be adding different parameters as we go.
// **note**
// take a close look at the "position" returned from our data
// Example Responses:
// "what the fuck!" => "what the f***!"
// "hey asshole, fuck you" => "hey a******, f*** you"

/*
From Stack Overflow
If you want to remove specific punctuation from a string, it will probably be best to explicitly remove exactly what you want like

replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")

Doing the above still doesn't return the string as you have specified it. If you want to remove any extra spaces that were left over from removing crazy punctuation, then you are going to want to do something like

replace(/\s{2,}/g," ");

My full example:

var s = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation";
var punctuationless = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
var finalString = punctuationless.replace(/\s{2,}/g," "); */


const badLanguage = ['fuck', 'shit', 'asshole'],
      data = [
          {
              comment: 'hey bro, good game',
              position: [0],
              count: 0
            },
          {
              comment: 'what the fuck!',
              position: [10],
              count: 1
            },
          {
              comment: 'hey asshole, fuck you',
              position: [10, 15],
              count: 2
            }
        ];
console.log('Hello World');

const languageFilter = (array) => {
  let words = array.slice(0,3);
  // console.log(data)
  for (let i = 0; i < data.length; i++) {
    let splitString = data[i].comment.split('')
    // console.log(splitString)
    for (let j = 0; j < splitString.length; j++) {
      console.log(splitString[j]);
      for (let k = 0; j < badLanguage.length; j++){
        let splitCheck = badLanguage[j].split('');
        // console.log(splitCheck)
        for (let l = 0; k < splitCheck.length; k++){
          // console.log(splitCheck[k])
        }
      }
    }
  } 

}

languageFilter(badLanguage)