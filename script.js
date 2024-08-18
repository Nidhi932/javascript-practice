// document
//   .getElementById("survey-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     const selectedOption = document.querySelector(
//       'input[name="problem"]:checked'
//     );
//     if (selectedOption) {
//       // Replace the content with the new image content
//       document.getElementById("content").innerHTML = `
//             <div class="post-submit-content">
//                 <!DOCTYPE html>
//                     <html lang="en">
//                     <head>
//                         <meta charset="UTF-8">
//                         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                         <title>CapX Header</title>
//                         <link rel="stylesheet" href="styles.css">
//                     </head>
//                     <body>
//                         <header class="header">
//                             <div class="logo">
//                                 <span class="logo-text">Cap</span><span class="logo-highlight">X</span>
//                             </div>
//                             <div class="menu">
//                                 <button class="waitlist-button">Join waitlist</button>
//                                 <div class="menu-icon">
//                                     <div class="bar"></div>
//                                     <div class="bar"></div>
//                                     <div class="bar"></div>
//                                 </div>
//                             </div>
//                         </header>
//                         <h2>An AI-powered trading platform that works as your personal assistant</h2>
//                         <p>Research to investing, all-in-one place</p>
//                     </body>
//                     </html>

//             </div>

//         `;
//     } else {
//       alert("Please select an option before submitting.");
//     }
//   });
// function nextQuestion(currentQuestion) {
//   // Hide the current question
//   document.getElementById(`question${currentQuestion}`).style.display = "none";

//   // Show the next question
//   let nextQuestionId = currentQuestion + 1;
//   let nextQuestionElement = document.getElementById(
//     `question${nextQuestionId}`
//   );
//   if (nextQuestionElement) {
//     nextQuestionElement.style.display = "block";
//   }
// }

// function finishSurvey() {
//   // Hide the last question
//   document.getElementById("question3").style.display = "none";

//   // Show the completion message
//   document.getElementById("completionMessage").style.display = "block";
// }
function nextQuestion(currentQuestion) {
  // Hide the current question
  document.getElementById(`question${currentQuestion}`).style.display = "none";

  // Show the next question
  let nextQuestionId = currentQuestion + 1;
  let nextQuestionElement = document.getElementById(
    `question${nextQuestionId}`
  );
  if (nextQuestionElement) {
    nextQuestionElement.style.display = "block";
  }
}

function finishSurvey() {
  // Hide the last question
  document.getElementById("question3").style.display = "none";

  // Replace the content with the new content
  document.getElementById("content").innerHTML = `
      <div class="post-submit-content">
          <header class="header">
              <div class="logo">
                  <span class="logo-text">Cap</span><span class="logo-highlight">X</span>
              </div>
              <div class="menu">
                  <button class="waitlist-button">Join waitlist</button>
                  <div class="menu-icon">
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                  </div>
              </div>
          </header>
          <h2>An AI-powered trading platform that works as your personal assistant</h2>
          <p>Research to investing, all-in-one place</p>
      </div>
    `;
}
