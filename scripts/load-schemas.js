// Function to load JSON-LD schemas dynamically
function loadSchema(filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      const schemaElement = document.createElement("script");
      schemaElement.type = "application/ld+json";
      schemaElement.innerHTML = data.trim(); // Insert fetched schema content
      document.head.appendChild(schemaElement); // Append to head
    })
    .catch((error) => console.error("Error loading schema:", error));
}

// Wait until the DOM is fully loaded before running the loadSchema functions
document.addEventListener("DOMContentLoaded", function () {
  loadSchema("/schemas/person-schema.html");
  loadSchema("/schemas/profile-page-schema.html");
});
