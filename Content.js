// Wait until the sidebar is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Check if the sidebar exists
  const sidebar = document.querySelector(".left-col");

  if (sidebar) {
    // Create the new button
    const rewardsButton = document.createElement("div");
    rewardsButton.className = "sidebar-item"; // Apply a class similar to other sidebar items
    rewardsButton.innerHTML = `
      <a id="justErikDemonRewards" style="cursor: pointer;">
        <span class="icon-nav-money"></span>
        <span class="text-overflow">JustErikDemon Rewards</span>
      </a>
    `;
    
    // Append the button to the sidebar
    sidebar.appendChild(rewardsButton);

    // Set up click event listener to open the modal
    rewardsButton.addEventListener("click", function() {
      openRewardsModal();
    });
  }
});

// Function to open a modal with an iframe
function openRewardsModal() {
  // Check if modal already exists
  if (document.getElementById("rewardsModal")) return;

  // Create the modal background
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

  // Create the iframe container
  const iframeContainer = document.createElement("div");
  iframeContainer.style.width = "80%";
  iframeContainer.style.height = "80%";
  iframeContainer.style.backgroundColor = "white";
  iframeContainer.style.borderRadius = "8px";
  iframeContainer.style.overflow = "hidden";
  iframeContainer.style.position = "relative";

  // Create the close button
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
  iframe.src = "https://yourwebsite.com"; // Replace with your desired URL
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";

  // Append the iframe to the iframe container
  iframeContainer.appendChild(iframe);

  // Append the iframe container to the modal background
  modalBackground.appendChild(iframeContainer);

  // Append the modal background to the body
  document.body.appendChild(modalBackground);

  // Close modal on button click
  closeButton.addEventListener("click", function() {
    document.body.removeChild(modalBackground);
  });
}

