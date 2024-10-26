// Function to create and add the JustErikDemon Rewards button
function addJustErikDemonButton() {
    const sidebar = document.querySelector(".left-col-list"); // Select the sidebar
    if (!sidebar) return; // If sidebar is not found, exit

    // Create a new list item
    const li = document.createElement("li");
    li.style.display = "block"; // Make sure the list item is displayed

    // Create a link for the button
    const a = document.createElement("a");
    a.className = "dynamic-overflow-container text-nav justErikDemon-btn";
    a.href = "https://www.youtube.com"; // Link to YouTube
    a.target = "_blank"; // Open in new tab

    // Create the content of the link
    const div = document.createElement("div");
    const spanIcon = document.createElement("span");
    spanIcon.className = "icon-nav-giftcards"; // You can choose an appropriate icon class or leave it empty

    const spanText = document.createElement("span");
    spanText.className = "font-header-2 dynamic-ellipsis-item";
    spanText.title = "JustErikDemon Rewards";
    spanText.textContent = "JustErikDemon Rewards"; // Button text

    // Append elements
    div.appendChild(spanIcon);
    a.appendChild(div);
    a.appendChild(spanText);
    li.appendChild(a);

    // Insert the new button after the Home button
    const homeButton = document.getElementById("nav-home");
    if (homeButton) {
        sidebar.insertBefore(li, homeButton.nextSibling);
    }
}

// Run the function when the page loads
window.addEventListener('load', addJustErikDemonButton);



