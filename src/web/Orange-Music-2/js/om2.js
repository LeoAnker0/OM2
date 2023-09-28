/* is mobile */
export function is_mobile() {
    const mediaQuery = window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");
    if (mediaQuery.matches) {
        return true;
    } else {
        return false;
    }

}

export function is_dark() {
    const mediaQuery = window.matchMedia("prefers-color-scheme: dark");
    if (mediaQuery.matches) {
        return true;
    } else {
        return false;
    }
}

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive)
        const randomIndex = Math.floor(Math.random() * (i + 1));

        // Swap the elements at randomIndex and i
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
}