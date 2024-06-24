export const handleLoadingComplete = () => {
    if (typeof window !== 'undefined') {
        const loader = document.getElementById('globalLoader');
        const logo = document.getElementById('logo');
        if (loader) {
            // loader.style.display = 'none';
            loader.classList.add('hidden');
        }
        if (logo) {
            logo.classList.add('loaded-content');
            logo.classList.add('fullscreen');
        }
    }
}