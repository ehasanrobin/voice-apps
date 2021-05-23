 const btn = document.querySelector(".talk");

 const content = document.querySelector(".content");

 const greetings = ["I'm fine thanks for asking", "doing good you homeboi", "i'm fantastic you cutey"];

 const weather = ["weather is good", "weather is cloudy", "weather is cold"];
 const sadiya = ["sadiya is Robin's wife", "she is Robin's girlfriend", "She is cute Girl"];
 const ex = ["mim is your ex", "she is a bitch", "mim is your ex", "mim is your ex", ];
 const you = ["I'm a robot", "i'm a web app"];
 const made = ["EHasan robin build me", "EHasan robin build me", "EHasan robin build me"];
 const beautiful = ["Thanks for your compliment", "thanks", "you are so nice"];
 const whoAMI = ["You are my boss", "you are my creator"];
 const robin = ["He is a brilliant programmer", "He's my creator"];
 const love = ["Awww. That's very sweet, but I won’t give you any discount for the night.", "Damn right you do! I’m extremely lovable!", "I hate you!"];
 const name = ["my name is Maria", "i'm maria", "its maria talking"];
 const like = ["i like ehasan robin cause he is a great programmer", "i like to talk with you", "i like to go on a coffee"];
 const dolove = ["Love? Can I eat that?", "HAHAHAHAHA! That’s a good one!", "Stop! You’re giving me a headache."]
 const fahim = ["fahim er pasa mota", "fahim is a biryani lover"];
 const marry = ["no!i'm a robot", "let's go on a date"];
 const boyfriend = ["No!i'm a web app", "I would like to have one."];
 const ifrad = ["ifrad is a fuckboy", "ifrad can't live without girls", "he is my creators friend"];
 const job = ["to talk with my creator", "to entertain you", "i don't wanna share about it"];
 const arafat = ["arafat is a ludu icon", "arafat loves girls boobs", "he is my creators friend"];
 const sujon = ["sujon is a good boy", "he is cute"];
 const blue = [" changed to blue", "changed", , "changed", "change", ];
 const white = [" changed to white", "changed ", "changed", "changed", "changed"];
 const yellow = ["Yellow is on the screen", "changed ", "changed", "changed", "changed"];
 const bye = ["see you later. bye ", "nice to meet you .bye ", "alright bye", "Have a nice day. bye", "see you soon .bye"];
 const Hi = [" Hello ", " Hello cute boy", "Hi"];
 const Ayesha = ["she is ehasan's girlfriend ", "She is beautiful", "my boss has a crush on her", "she is parmanent", "she is soo cute! mashallah"];

 const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

 const recognation = new SpeechRecognition();

 recognation.onstart = function() {

     console.log("voice is activated");
 };

 recognation.onresult = function(event) {
     const current = event.resultIndex;

     const transcsript = event.results[current][0].transcript;

     content.textContent = transcsript

     readout(transcsript);
 };

 function readout(massage) {

     const speech = new SpeechSynthesisUtterance();
     speech.text = "I don't know what you said";
     speech.volume = 1;
     speech.rate = 1;
     speech.pitch = 1;

     if (massage.includes("how are you")) {

         const finalText = greetings[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes("who is Sadiya", )) {

         const finalText = sadiya[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes("Boyfriend")) {

         const finalText = boyfriend[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes("marry")) {

         const finalText = marry[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes("job")) {

         const finalText = job[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes("hi") || massage.includes("hai")) {

         const finalText = Hi[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes("love") || massage.includes("I love you")) {

         const finalText = love[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes("Fahim") || massage.includes("who is Fahim")) {

         const finalText = fahim[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes("like to do") || massage.includes("what do you like")) {

         const finalText = like[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes("your name") || massage.includes("what's you name")) {

         const finalText = name[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes("love me") || massage.includes("do you love me")) {

         const finalText = dolove[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }

     if (massage.includes("Arafat") || massage.includes("who is Arafat")) {

         const finalText = arafat[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes("Ifrad") || massage.includes("who is ifrat")) {

         const finalText = ifrad[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes("sujan") || massage.includes("Who is sujan")) {

         const finalText = love[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes("bye")) {

         const finalText = bye[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes("beautiful")) {

         const finalText = beautiful[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes("weather")) {

         const finalText = weather[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes("who is name") || massage.includes("MIM") || massage.includes("meme")) {

         const finalText = ex[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes("who are you")) {

         const finalText = you[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes("who made you")) {

         const finalText = made[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes(" blue")) {

         const finalText = blue[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;

         document.querySelector("body").style.background = "blue";
     }
     if (massage.includes(" White")) {

         const finalText = white[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;

         document.querySelector("body").style.background = "white";
     }
     if (massage.includes("yellow")) {

         const finalText = yellow[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;

         document.querySelector("body").style.background = "yellow";
     }
     if (massage.includes("change to White")) {

         const finalText = white[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;

         document.querySelector("body").style.background = "white";
     }
     if (massage.includes("who am I")) {

         const finalText = whoAMI[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;
     }
     if (massage.includes("Robin")) {

         const finalText = robin[Math.floor(Math.random() * greetings.length)];

         speech.text = finalText;


     }




     window.speechSynthesis.speak(speech);

 }

 // add to listen to the btn

 btn.addEventListener("click", function() {

     recognation.start();
 })