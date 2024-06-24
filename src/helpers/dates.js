export function formatDate(str) {
    if (!str) {
        return null;
    }
    try {
        const date = new Date(str);
        return new Intl.DateTimeFormat('de-DE').format(date);
    } catch (error) {
        return null;
    }
}

export function formatTime(str) {
    if (!str) {
        return null;
    }
    const options = {
        hour: 'numeric', minute: 'numeric',
        hour12: false
    };
    try {
        const date = new Date(str);
        return new Intl.DateTimeFormat('de-DE', options).format(date);
    } catch (error) {
        return null;
    }
}