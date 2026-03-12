document.addEventListener("DOMContentLoaded", async function() {
    fetch('/api/init-emoji')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));

    document.getElementById("nameForm").addEventListener("submit", async function(e) {
        e.preventDefault(); // <-- stops page reload
        
        const userName = document.getElementById("userName").value;
        
        try {
            const response = await fetch("/api/get-name", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName })
            });
        
            if (!response.ok) throw new Error("Name not found");
        
            const data = await response.json();
        
            document.getElementById("result").textContent = `${data.name} ${data.emoji}`;
        
        } catch (err) {
            console.error(err);
            document.getElementById("result").textContent = "Error fetching API message.";
        }
    });
});