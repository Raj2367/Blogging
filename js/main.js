
// Change button text from "continue reading" to "show less"
function toggleReadingContinue (t) {
    if (t.innerHTML == "Continue Reading...") {
        t.innerHTML = "Show Less!";
    } else {
        t.innerHTML = "Continue Reading...";
    }
}

// function for posting blog
var imageNumber=3;  // image number initialisation 
function postBlog() {

    // Getting user name, blog title, blog content
    var user = document.getElementById('user').value;    
    var blogName = document.getElementById('blogName').value;
    var blog =document.getElementById('blog').value;

    // if user name, blog title, blog content is empty then generate alert
    if (user==='' ||blogName==='' ||blog==='') {
        alert("Please enter valid input");
        return;
    }

    // Adding innerHTML for posting blog
    document.getElementById("articles").innerHTML = 
        `<div class="card">
            <!-- Image for every article card and increament iamge number everytime --> 
            <img class="card-img-top" src="./images/${++imageNumber}.jpg" style="max-height: 500px;" alt="Card image cap">
            <div class="card-body">
                <!-- Title of blog -->
                <h5 class="card-title">${blogName}</h5>
                <p class="card-text">
                <div class="collapse" id="collapseExample${imageNumber}">
                    ${blog}
                </div>
                </p>
                <!-- Toggle Button for Continue Reading and show less option -->
                <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample${imageNumber}" role="button"
                    aria-expanded="false" aria-controls="collapseExample"
                    onclick="toggleReadingContinue(this)">Continue Reading...</a>
                <!-- Comments Icon with number of comments -->
                <div class="icon"><i class="fa fa-comments-o"> 0</i></div>
            </div>
            <!-- Card footer -->
            <div class="card-footer text-muted">
                Just Now
            </div>
        </div>`+document.getElementById("articles").innerHTML;

    // Reseting user name, blog name, blog content area to '' every time after posting
    document.getElementById('user').value="";        
    document.getElementById('blogName').value="";
    document.getElementById('blog').value="";
}