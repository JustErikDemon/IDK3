// Function to create and add the JustErikDemon Rewards button
function addJustErikDemonButton() {
    const sidebarList = document.querySelector(".simplebar-content .left-col-list"); // Select the <ul> within the sidebar
    if (!sidebarList) return; // If the list is not found, exit

    // Create a new list item
    const li = document.createElement("li");
    li.style.display = "block"; // Ensure the list item is displayed

    // Create a link for the button
    const a = document.createElement("a");
    a.className = "dynamic-overflow-container text-nav justErikDemon-btn";
    a.href = "https://www.youtube.com"; // Link to YouTube
    a.target = "_blank"; // Open in new tab

    // Create the content of the link
    const div = document.createElement("div");
    const spanIcon = document.createElement("span");
    spanIcon.className = "icon-nav-giftcards"; // Placeholder for the icon (if needed)

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
    const homeButton = sidebarList.querySelector("#nav-home");
    if (homeButton) {
        sidebarList.insertBefore(li, homeButton.nextSibling); // Insert the new button after the Home button
    } else {
        sidebarList.appendChild(li); // If Home button is not found, append to the end
    }
}

// Run the function when the page loads
window.addEventListener('load', addJustErikDemonButton);




