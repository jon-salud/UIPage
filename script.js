async function includeHeaderFooter() {
    try {
        const headerResponse = await fetch('./header.html');
        if (!headerResponse.ok) {
            throw new Error(`HTTP error! status: ${headerResponse.status}`);
        }
        const headerContent = await headerResponse.text();
        document.getElementById('header').innerHTML = headerContent;
    } catch (error) {
        console.log('Error fetching header:', error);
    }

    try {
        const footerResponse = await fetch('./footer.html');
        if (!footerResponse.ok) {
            throw new Error(`HTTP error! status: ${footerResponse.status}`);
        }
        const footerContent = await footerResponse.text();
        document.getElementById('footer').innerHTML = footerContent;
    } catch (error) {
        console.log('Error fetching footer:', error);
    }
}
