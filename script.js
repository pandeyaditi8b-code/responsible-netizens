// Fake news question 

function fakeNews() {
    document.getElementById("fakeAnswer").innerHTML =
    "Do not click the link. First Check the sender and verify the information from a reliable source.";
}

// Quiz

function quizAnswer(answer) {
    if(answer === "no"){
        document.getElementById("quizAnswer").innerHTML =
        "Correct! OTP should never be shared with anyone.";
    }else{
        document.getElementById("quizAnswer").innerHTML =
        "Wrong! Never share your OTP with anyone.";
    }
}

//Survey
document.getElementById("surveyForm").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").ariaValueMax;

    document.getElementById("message").innerHTML =
    "Thank you, " + name + "! Your response has been recorded.";

    document.getElementById("surveyForm").requestFullscreen();
});