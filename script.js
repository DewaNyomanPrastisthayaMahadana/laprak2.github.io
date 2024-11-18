document.addEventListener("DOMContentLoaded", () => {
    // Toggle content visibility
    document.querySelectorAll("h3").forEach((header) => {
        header.addEventListener("click", () => {
            if (confirm("Apakah Anda ingin menyembunyikan konten ini?")) {
                const content = header.nextElementSibling;
                if (content) {
                    content.style.display = content.style.display === "none" ? "block" : "none";
                }
            }
        });
    });

    // Toggle page mode
    const toggleModeButton = document.getElementById("toggleMode");
    toggleModeButton.addEventListener("click", () => {
        document.body.classList.toggle("messy");
    });
});
