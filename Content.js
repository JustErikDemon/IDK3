document.getElementById("saveButton").addEventListener("click", function() {
  const placeId = document.getElementById("placeId").value;
  
  // Save the placeId using Chrome's storage API
  chrome.storage.local.set({ placeId: placeId }, function() {
    console.log("Place ID saved:", placeId);
    document.getElementById("currentPlaceId").textContent = placeId;
  });
});

// Load the saved placeId when the popup opens
chrome.storage.local.get("placeId", function(data) {
  if (data.placeId) {
    document.getElementById("currentPlaceId").textContent = data.placeId;
  }
});
