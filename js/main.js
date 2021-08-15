// Change button text from "continue reading" to "show less"
function toggleReadingContinue (t) {
    console.log(t.innerHTML);
    if (t.innerHTML == "Continue Reading...") {
        t.innerHTML = "Show Less!";
    } else {
        t.innerHTML = "Continue Reading...";
    }
}