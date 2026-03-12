document.addEventListener("DOMContentLoaded", async function() {
    const message = document.getElementById("apiContent");

    if (message) {
        try {
            const response = await fetch("/api/message");
            if (!response.ok) throw new Error("Failed to fetch API message");

            const data = await response.json();
            message.textContent = data.content;
        } catch (err) {
            console.error(err);
            message.textContent = "Error fetching API message.";
        }
    }
});