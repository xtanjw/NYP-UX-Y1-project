// Converts the feedback form data into Base64, adds a random 10-character
// string, and then hashes the result using SHA-256.
// Mostly for fun lol.
async function formSubmit() {
    const email = document.getElementById("Email").value;
    const option = document.getElementById("Issue").value;
    const feedback = document.getElementById("TextArea").value;

    // Generate a random 10-character string.
    // Only lowercase letters and numbers are used since this is just a random ID.
    const randomId = Math.random()
        .toString(36)
        .substring(2, 12);

    // Store the form data as JSON.
    const data = JSON.stringify({
        email,
        option,
        feedback,
        randomId
    });


    // make emojis and Chinese characters are handled correctly.
    const bytes = new TextEncoder().encode(data);

    // Convert the UTF-8 bytes to Base64.
    const base64 = btoa(String.fromCodePoint(...bytes));

    // Hash the Base64 string using SHA-256.
    const hashBuffer = await crypto.subtle.digest(
        "SHA-256",
        new TextEncoder().encode(base64)
    );

    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hash = hashArray
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");

    postSubmit(hash, email, option, feedback);
}


function postSubmit(hash, email, option, feedback) {
    const formArea = document.getElementById("form-area");

    formArea.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Form Submitted!</h5>

                <h6 class="card-subtitle mb-2 text-muted">
                    Your feedback ID: ${hash}
                </h6>

                <p class="card-text">
                    Your Email is ${email}
                </p>

                <p class="card-text">
                    Your option is ${option}
                </p>

                <p class="card-text">
                    Feedback given: ${feedback}
                </p>
            </div>
        </div>
    `;
}