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

export function formatTimeSeconds(val) {
    let h = 0,
        m = 0,
        s;
    val = parseInt(val, 10);
    if (val > 60 * 60) {
        h = parseInt(val / (60 * 60), 10);
        val -= h * 60 * 60;
    };
    if (val > 60) {
        m = parseInt(val / 60, 10);
        val -= m * 60;
    };
    s = val;
    val = (h > 0) ? h + ':' : '';
    val += (m > 0) ? ((m < 10 && h > 0) ? '0' : '') + m + ':' : '0:';
    val += ((s < 10) ? '0' : '') + s;

    return val;
};