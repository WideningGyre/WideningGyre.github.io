function keyHandler() {
    const key = event.key
    const GhostContainer = document.getElementById('GhostContainer')

    if (key == ' ') {
        GhostContainer.innerHTML = 'OoOo'.repeat(100)
    }
}

document.addEventListener('keydown', keyHandler)
