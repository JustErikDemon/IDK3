// Function to create and insert the JusteRIKDemon button
function createJusteRIKDemonButton() {
    // Create a new list item for the button
    const buttonLI = document.createElement('li');
    buttonLI.style.display = 'block';

    // Create the button HTML
    const buttonHTML = `
        <a class="justerikdemon-button dynamic-overflow-container text-nav" id="justeRIKDemonButton">
            <div>
                <span class="new-menu-icon icon-nav-charactercustomizer" style="transform:scale(0.85);"></span>
            </div>
            <span class="font-header-2 dynamic-ellipsis-item">JusteRIKDemon</span>
        </a>
    `;
    buttonLI.innerHTML = buttonHTML;

    // Wait for the sidebar to load
    const sidebarList = document.querySelector('.left-col-list');
    if (sidebarList) {
        sidebarList.appendChild(buttonLI);
        console.log('JusteRIKDemon Button added to the sidebar.');

        // Add event listener to the button
        document.getElementById('justeRIKDemonButton').addEventListener('click', () => {
            alert('JusteRIKDemon button clicked!');
            // You can add further functionality here
        });
    } else {
        console.error('Sidebar not found. Retrying...');
        // Retry after a short delay if sidebar not found
        setTimeout(createJusteRIKDemonButton, 1000);
    }
}

// Run the function to create the button
createJusteRIKDemonButton();




