document.addEventListener("DOMContentLoaded", function() {
  // Find the sidebar list element where we want to add the button
  const sidebarList = document.querySelector(".left-col-list");

  if (sidebarList) {
    // Create a new list item for the rewards button
    const rewardsButton = document.createElement("li");
    rewardsButton.style.display = "block";
    
    // Set up the inner HTML for the button
    rewardsButton.innerHTML = `
      <a class="dynamic-overflow-container text-nav" id="nav-justerikdemon-rewards" style="cursor: pointer;">
        <div><span class="icon-nav-rewards"></span></div>
        <span class="font-header-2 dynamic-ellipsis-item" title="JustErikDemon Rewards">JustErikDemon Rewards</span>
      </a>
    `;
    
    // Append the new button to the sidebar list
    sidebarList.appendChild(rewardsButton);

    // Add click event to open the modal with iframe
    rewardsButton.addEventListener("click", function() {
      openRewardsModal();
    });
  }
});

// Function to create and open the modal
function openRewardsModal() {
  // Check if modal already exists to avoid duplicates
  if (document.getElementById("rewardsModal")) return;

  // Create modal background overlay
  const modalBackground = document.createElement("div");
  modalBackground.id = "rewardsModal";
  modalBackground.style.position = "fixed";
  modalBackground.style.top = "0";
  modalBackground.style.left = "0";
  modalBackground.style.width = "100vw";
  modalBackground.style.height = "100vh";
  modalBackground.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  modalBackground.style.display = "flex";
  modalBackground.style.alignItems = "center";
  modalBackground.style.justifyContent = "center";
  modalBackground.style.zIndex = "10000";

  // Create container for iframe and close button
  const iframeContainer = document.createElement("div");
  iframeContainer.style.width = "80%";
  iframeContainer.style.height = "80%";
  iframeContainer.style.backgroundColor = "white";
  iframeContainer.style.borderRadius = "8px";
  iframeContainer.style.overflow = "hidden";
  iframeContainer.style.position = "relative";

  // Create close button
  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.background = "transparent";
  closeButton.style.border = "none";
  closeButton.style.fontSize = "18px";
  closeButton.style.cursor = "pointer";

  // Append the close button to the iframe container
  iframeContainer.appendChild(closeButton);

  // Create the iframe
  const iframe = document.createElement("iframe");
  iframe.src = "https://yourwebsite.com"; // Replace with the desired URL
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";

  // Append the iframe to the iframe container
  iframeContainer.appendChild(iframe);

  // Append iframe container to modal background
  modalBackground.appendChild(iframeContainer);

  // Append modal background to the document body
  document.body.appendChild(modalBackground);

  // Event listener for closing the modal
  closeButton.addEventListener("click", function() {
    document.body.removeChild(modalBackground);
  });
}


