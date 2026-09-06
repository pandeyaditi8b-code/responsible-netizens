// Fake News
function fakeNews() {
    document.getElementById("fakeAnswer").innerHTML =
        "Do not click the link. Check the sender and verify the information from a reliable source.";
}


// Quiz
function quizAnswer(answer) {

    if (answer === "no") {
        document.getElementById("quizAnswer").innerHTML =
            "Correct! OTP should never be shared with anyone.";
    } else {
        document.getElementById("quizAnswer").innerHTML =
            "Wrong! Never share your OTP with anyone.";
    }

}


// Feedback Form
document.getElementById("feedbackForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("feedbackName").value;

    document.getElementById("feedbackMessage").innerHTML =
        "Thank you, " + name + "! Your feedback has been submitted.";

    document.getElementById("feedbackForm").reset();

});
