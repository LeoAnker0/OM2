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

export function is_odd(num) {
    return (num % 2) == 1;
}

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
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

export function formatTimeDaysDelta(milliSeconds) {
    const now = Date.now();
    const differenceDays = (now - milliSeconds) / (1000 * 60 * 60 * 24);
    let checkedIndicator;

    if (differenceDays < 0.01) { // Less than 0.01 days (approximately 14 minutes)
        checkedIndicator = "Now";
        return checkedIndicator;
    } else if (differenceDays < 1) {
        checkedIndicator = "Now"; // Convert to hours
        return checkedIndicator;
    } else if (differenceDays < 8) {
        checkedIndicator = Math.floor(differenceDays) + "d";
        return checkedIndicator;
    } else if (differenceDays < 29) {
        const noWeeks = Math.floor(differenceDays / 7);
        checkedIndicator = noWeeks + "w";
        return checkedIndicator;
    } else if (differenceDays < 365) {
        const noMonths = Math.floor(differenceDays / 28);
        checkedIndicator = noMonths + "m";
        return checkedIndicator;
    } else {
        const noYears = Math.floor(differenceDays / 365);
        checkedIndicator = noYears + "y";
        return checkedIndicator;
    }
}

export function formatTimeDaysToHuman(milliSeconds) {
    const now = Date.now();
    const differenceSeconds = (now - milliSeconds) / 1000;

    if (differenceSeconds < 60) {
        return `Now`;
    } else if (differenceSeconds < 3600) {
        const minutes = Math.floor(differenceSeconds / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (differenceSeconds < 86400) {
        const hours = Math.floor(differenceSeconds / 3600);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (differenceSeconds < 172800) {
        return 'Yesterday';
    } else if (differenceSeconds < 31536000) {
        const days = Math.floor(differenceSeconds / 86400);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
        const date = new Date(milliSeconds);
        const year = date.getFullYear();
        return `${year}`;
    }
}

// Format file size
export function formatFileSizeBytes(size) {
    if (size < 1024) {
        return `${size} b`;
    } else if (size < 1024 * 1024) {
        return `${(size / 1024).toFixed(2)} kb`;
    } else {
        return `${(size / 1024 / 1024).toFixed(2)} mb`;
    }
}

export function getPositionInParentElement(el) {
    if (!el) return -1;
    var i = 0;
    do {
        i++;
    } while (el = el.previousElementSibling);
    return i;
}