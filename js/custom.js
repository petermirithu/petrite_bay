// Wrap every letter in a heading 1
var textWrapper = document.querySelector('.heading1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.heading1 .letter',
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.heading1 .letter',
    translateY: [0, -100],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  });

// Wrap every letter in a heading 2
var textWrapper2 = document.querySelector('.heading2');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.heading2 .letter',
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.heading2 .letter',
    translateY: [0, -100],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  });

// Wrap every letter in a heading 3
var textWrapper3 = document.querySelector('.heading3');
textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.heading3 .letter',
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.heading3 .letter',
    translateY: [0, -100],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  });


// mail 
function validateForm() {
  
  var name = document.getElementById('name').value;
  if (name == "") {
    document.querySelector('.message').innerHTML = "Name cannot be empty";
    document.getElementById("send").click();
    return false;
  }
  var email = document.getElementById('email').value;
  if (email == "") {
    document.querySelector('.message').innerHTML = "Email cannot be empty";
    document.getElementById("send").click();
    return false;
  } else {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      document.querySelector('.message').innerHTML = "Email format invalid";
      document.getElementById("send").click();
      return false;
    }
  }
  var subject = document.getElementById('subject').value;
  if (subject == "") {
    document.querySelector('.message').innerHTML = "Subject cannot be empty";
    document.getElementById("send").click();
    return false;
  }
  var message = document.getElementById('message').value;
  if (message == "") {
    document.querySelector('.message').innerHTML = "Message cannot be empty";
    document.getElementById("send").click();
    return false;
  }
  
  document.querySelector('.message').innerHTML = "Sending message... We shall contact you soon";    
  document.getElementById("contact-form").reset();
  document.getElementById("send").click();
}