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