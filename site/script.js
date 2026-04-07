function showTip() {
    const tips = [
        "Use 'git init' to start a repository.",
        "Use 'git status' to check changes.",
        "Commit often with 'git commit -m \"message\"'.",
        "Use branches to experiment safely.",
        "Pull before pushing to avoid conflicts."
    ];

    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("tip").textContent = randomTip;
}