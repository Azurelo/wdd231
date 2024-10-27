// Global variable to store park data
let parksData = [];

// Fetching skatepark data from the API
async function fetchParkData() {
    try {
        const response = await fetch('https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/16/query?where=1%3D1&outFields=*&outSR=4326&f=json');
        const data = await response.json();
        parksData = data.features.slice(0, 15); // Store the first 15 parks globally
        displayParks(parksData);
    } catch (error) {
        console.error('Error fetching park data:', error);
    }
}

// Display the fetched park data
function displayParks(parks) {
    const parkContainer = document.getElementById('park-container');
    parkContainer.innerHTML = '';

    parks.forEach((park, index) => {
        const attributes = park.attributes;
        const card = document.createElement('div');
        card.className = 'card park-card';
        card.innerHTML = `
            <div class="card-content">
                <h3>${attributes.NAME}</h3>
                <p>${attributes.ADDRESS}</p>
                <button onclick="openModal(${index})">More Info</button>
            </div>
        `;
        parkContainer.appendChild(card);
    });
}

// Function to open a modal with park details
function openModal(index) {
    const park = parksData[index];
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    // Check if the modal and modalContent exist
    if (!modal || !modalContent) {
        console.error('Modal or modal-content element not found');
        return;
    }

    modalContent.innerHTML = `
        <h2>${park.attributes.NAME}</h2>
        <p>${park.attributes.DESCRIPTION || 'No description available.'}</p>
        <p>Address: ${park.attributes.ADDRESS}</p>
    `;

    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Handle form submission for submitting new park info
const parkForm = document.getElementById('park-form');
const modalContent = document.getElementById('modal-content');
const modal = document.getElementById('modal');

// Handle form submission
parkForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const parkName = document.getElementById('parkName').value;
    const parkLocation = document.getElementById('parkLocation').value;
    const parkDescription = document.getElementById('parkDescription').value;

    // Populate modal content with submitted data
    modalContent.innerHTML = `
        <h2>Park Submitted Successfully!</h2>
        <p><strong>Park Name:</strong> ${parkName}</p>
        <p><strong>Location:</strong> ${parkLocation}</p>
        <p><strong>Description:</strong> ${parkDescription}</p>
    `;

    // Open the modal to show submission details
    modal.style.display = 'block';

    // Clear form fields
    parkForm.reset();
});

// Initial fetch of park data
fetchParkData();
