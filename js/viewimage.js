// filepath: /C:/Users/Geone/OneDrive/Робочий стіл/wallpapers/js/viewimage.js
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const imageSrc = urlParams.get('src');
    const downloadSrc = urlParams.get('download');
    const categoriesList = urlParams.get('categories') ? urlParams.get('categories').split(',') : [];
    const largeImage = document.getElementById('largeImage');
    const downloadBtn = document.getElementById('downloadBtn');
    const categoriesContainer = document.getElementById('categories');

    if (imageSrc) {
        largeImage.src = imageSrc;
        downloadBtn.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = downloadSrc;
            link.download = downloadSrc.split('/').pop();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });

        categoriesList.forEach(category => {
            const span = document.createElement('span');
            span.className = 'category';
            span.textContent = `#${category}`;
            categoriesContainer.appendChild(span);
        });
    } else {
        largeImage.alt = 'Image not found';
    }
});