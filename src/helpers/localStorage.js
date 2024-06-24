export function changeLocale(newLocale, push, asPath) {
    localStorage.setItem('locale', newLocale);
    push?.(asPath, asPath, { locale: newLocale });
}

export function storeVolume(volume) {
    if (localStorage !== undefined) {
        return localStorage.setItem('backgroundMusicVolume', volume);
    }
    return false;
}

export function getStoredVolume() {
    if (localStorage !== undefined) {
        return localStorage.getItem('backgroundMusicVolume');
    }
    return 0;
}