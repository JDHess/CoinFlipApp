// ----
//MARK Decision entry section
// ----

const sendBtn = document.querySelector('#sendBtn');
//variable that targets input element with id = 'messageIn'
const messageIn = document.querySelector('#messageIn');
//variable that targets paragraph element with id = 'messageOut'
const messageOut = document.querySelector('#messageOut');
//when button with id ="sendBtn" is clicked....
//run sendMsg function
sendBtn.addEventListener('click', sendMsg)
//sendMsg function
function sendMsg(){
  //collect value of messageIn 
  //variable content will hold the value entered in input field
  //input field has an id = "messageIn"  
  let content = messageIn.value;
  //console.log(content);
  //if the input field is empty and button is clicked...
  if(content === '') {
    //send an alert message 
    //instruct user to enter text    
    alert('Please enter what you\'r deciding before pressing \'Ok\'');
    
    } else {
    //if the input field has text and user clicks button  //output message     entered in input field
    //<p id = "messageOut">innerHTML is content from input field
    //remember ...
    //pass input value 
     //place vaue input in message out 
    messageOut.innerHTML= content;
    //input field is empty once button is clicked  
    messageIn.value = '';
  }  
}
// ----
//MARK coin flip function section
// ----
// ---- Variable Declarations
const coin = document.querySelector("#coin");
const coinHeads = document.querySelector("#heads");
const coinTails = document.querySelector("#tails");

const flipButton = document.querySelector("#flip");
const notif = document.querySelector("#notification");
const result = document.querySelector("#result");

const headsStat= document.querySelector("#heads-stat");
const tailsStat = document.querySelector("#tails-stat");

const resetStats = document.querySelector("#reset-stats");

// ---- Setting beginning stats
headsStat.textContent = 0;
tailsStat.textContent = 0;

// ---- Removing the results if user clicks the RESET button
function resetResult() {
    notif.style.opacity = "0";
    result.textContent = "";
}

// ---- Starting a coin toss
flipButton.addEventListener('click', function() {
    resetResult();
    coinHeads.style.opacity = "1";
    coinHeads.classList.add('heads-flip-animation');
    coinTails.classList.add('tails-flip-animation');
    flipButton.textContent = "FLIP AGAIN";
    window.setTimeout(function() {
        coinHeads.classList.remove('heads-flip-animation');
        coinTails.classList.remove('tails-flip-animation');
        getCoinFace();
    }, 1000);
});
// ----
// ---- Determining the coin face
// ----
function getCoinFace() {
    notif.style.opacity = "1";
    let face = Math.random();
    let h = parseInt(headsStat.textContent);
    let t  = parseInt(tailsStat.textContent);
    if ( face > 0.5 ) {
        headsStat.textContent = (h + 1);
        // ----
        //This array has all the yes answers
        //if yes function picks a yes answer at random
        // ----
        const answer = ['Yes','Yeah','Absolutely!','DEFINENTLY!','Yes! Yes! Yes!','Afrikaans: Ja (Yes)','Arabic: ?????? (Yes)','Armenian: ??????: (Yes)','Bengali: ??????????????? (Yes)','Bosnian: Ja (Yes)','Chinese: ??? (Yes)','Croatian: Da (Yes)','Czech: Ano (Yes)','Danish: Ja (Yes)','Dutch: Ja (Yes)','Esperanto: Jes (Yes)','Finnish: Kyll?? (Yes)','French: Oui (Yes)','German: Ja (Yes)','Greek: ?????? (Yes)','Haitian Creole: Wi (Yes)','Hausa: Eh (Yes)','Hindi: ????????? (Yes)','Hungarian: Igen (Yes)','Icelandic: J?? (Yes)','Indonesian: Ya (Yes)','Italian: S?? (Yes)','Japanese: ?????? (Yes)','Korean: ??? (Yes)','Latvian: J??','Macedonian: ???? (Yes)','Malay: Ya (Yes)','Mongolian: ???????? (Yes)','Nepali: ??????/ (Yes)','Norwegian: Ja (Yes)','Polish: Tak (Yes)','Portuguese: Sim (Yes)','Punjabi: ????????? (Yes)','Quechua: Ari (Yes)','Romanian: Da (Yes)','Russian: ???? (Yes)','Serbian: Da (Yes)','Slovak: ??no','Spanish: S?? (Yes)','Swahili: Ndiyo (Yes)','Swedish: Ja (Yes)','Tamil: ????????? (Yes)','Telugu: ??????????????? (Yes)','Thai: ????????? (Yes)','Turkish: Evet (Yes)','Vietnamese: C?? (Yes)','Welsh: Ie (Yes)'];

        const randomDecimal = Math.random() * answer.length;
        const randomInteger = Math.floor(randomDecimal);
        result.textContent = answer[randomInteger];
        
    } else {
        tailsStat.textContent = (t + 1);
        coinHeads.style.opacity = "0";
        // ----
        //This array has all the no answers
        //if no function picks a no answer at random
        // ----
        const answer = ['No', 'Absolutely Not','No! No! No!','Afrikaans: Nee (No)','Albanian: Jo (No)','Arabic: ???? (No)','Armenian: ????: (No)','Bengali: ?????? (No)','Bosnian: Ne (No)','Chinese: ???????????? (Let me think it over but probably No)','Croatian: Ne (No)','Czech: Ne (No)','Danish: Nej (No)','Dutch: Nee (No)','Esperanto: Ne (No)','Finnish: Ei (No)','French: Non (No)','German: Nein (No)','Greek: ?????? (No)','Haitian Creole: Non (No)','Hausa: A???a (No)','Hindi: ???????????? (No)','Hungarian: Nem (No)','Icelandic: Nei (No)','Indonesian: Tidak (No)','Italian: No','Japanese: ????????? (No)','Korean: ????????? (No)','Latvian: N?? (No)','Macedonian: He (No)','Malay: Tidak (No)','Mongolian: ???????? (No)','Nepali: ???????????? (No)','Norwegian: Nei (No)','Polish: Nie (No)','Portuguese: N??o (No)','Punjabi: ????????? (No)','Quechua: Mana (No)','Romanian: Nu (No)','Russian: ?????? (No)','Serbian: Ne (No)','Slovak: Nie (No)','Spanish: No','Swahili: La (No)','Swedish: Nej (No)','Tamil: ??????????????? (No)','Telugu: ??? (No)','Thai: ?????????????????? (No)','Turkish: hay??r (No)','Vietnamese: Kh??ng (No)','Welsh: Na (No)'];
        const randomDecimal = Math.random() * answer.length;
        const randomInteger = Math.floor(randomDecimal);
        result.textContent = answer[randomInteger];
    } 
}

// ----
// event listeners
// ----
resetStats.addEventListener('click', function() {
    headsStat.textContent = 0;
    tailsStat.textContent = 0;
    resetResult();
    flipButton.textContent = "FLIP";
});