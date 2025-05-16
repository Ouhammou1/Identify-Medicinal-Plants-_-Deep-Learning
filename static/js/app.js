// Plant Database
const plantDatabase = [
    {
        name: "Aloe Vera",
        scientificName: "Aloe barbadensis miller",
        uses: ["Skin healing", "Burns treatment", "Anti-inflammatory"],
        confidence: 0.92
    },
    {
        name: "Turmeric",
        scientificName: "Curcuma longa",
        uses: ["Anti-inflammatory", "Antioxidant", "Digestive health"],
        confidence: 0.88
    },
    {
        name: "Lavender",
        scientificName: "Lavandula",
        uses: ["Stress relief", "Sleep aid", "Aromatherapy"],
        confidence: 0.85
    }
];

// DOM Elements
const elements = {
    fileInput: document.getElementById('file-input'),
    uploadBtn: document.getElementById('upload-btn'),
    cameraBtn: document.getElementById('camera-btn'),
    imagePreview: document.getElementById('image-preview'),
    loading: document.getElementById('loading'),
    results: document.getElementById('results'),
    resultsGrid: document.querySelector('.results-grid'),
    searchInput: document.getElementById('search-input'),
    searchBtn: document.getElementById('search-btn'),
    plantsGrid: document.querySelector('.plants-grid')
};

// Event Listeners
elements.uploadBtn.addEventListener('click', () => elements.fileInput.click());

elements.fileInput.addEventListener('change', handleImageUpload);
elements.cameraBtn.addEventListener('click', initCamera);
elements.searchBtn.addEventListener('click', handleSearch);
elements.searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') handleSearch();
});

// Handle Image Upload
function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        elements.imagePreview.innerHTML = `
            <img src="${event.target.result}" alt="Plant preview">
            <div class="upload-options">
                <button id="upload-btn" class="btn primary">Upload New Image</button>
                <button id="camera-btn" class="btn secondary">Use Camera</button>
            </div>
        `;
        
        // Show loading and simulate processing
        showLoading();
        setTimeout(identifyPlant, 2000);
    };
    reader.readAsDataURL(file);
}

// Camera Initialization
async function initCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.createElement('video');
        video.srcObject = stream;
        video.autoplay = true;
        
        elements.imagePreview.innerHTML = '';
        elements.imagePreview.appendChild(video);
        
        // Add capture button
        const captureBtn = document.createElement('button');
        captureBtn.className = 'btn primary';
        captureBtn.textContent = 'Capture';
        captureBtn.onclick = () => captureImage(video, stream);
        elements.imagePreview.appendChild(captureBtn);
    } catch (error) {
        console.error('Camera access error:', error);
        alert('Unable to access camera. Please check your permissions.');
    }
}

// Capture Image from Camera
function captureImage(video, stream) {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    
    // Stop camera stream
    stream.getTracks().forEach(track => track.stop());
    
    // Display captured image
    elements.imagePreview.innerHTML = `
        <img src="${canvas.toDataURL('image/jpeg')}" alt="Captured plant">
        <div class="upload-options">
            <button id="upload-btn" class="btn primary">Upload New Image</button>
            <button id="camera-btn" class="btn secondary">Use Camera</button>
        </div>
    `;
    
    // Process the image
    showLoading();
    setTimeout(identifyPlant, 2000);
}

// Show Loading State
function showLoading() {
    elements.loading.classList.remove('hidden');
    elements.results.classList.add('hidden');
}

// Plant Identification (Mock)
function identifyPlant() {
    elements.loading.classList.add('hidden');
    elements.results.classList.remove('hidden');
    
    // Mock results using the first plant in database
    const result = plantDatabase[0];
    elements.resultsGrid.innerHTML = `
        <div class="result-card">
            <h3>${result.name}</h3>
            <p class="scientific-name">${result.scientificName}</p>
            <div class="confidence">
                <p>Confidence: ${(result.confidence * 100).toFixed(1)}%</p>
            </div>
            <div class="uses">
                <h4>Common Uses:</h4>
                <ul>
                    ${result.uses.map(use => `<li>${use}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

// Search Functionality
function handleSearch() {
    const query = elements.searchInput.value.toLowerCase();
    const filteredPlants = plantDatabase.filter(plant => 
        plant.name.toLowerCase().includes(query) ||
        plant.scientificName.toLowerCase().includes(query) ||
        plant.uses.some(use => use.toLowerCase().includes(query))
    );
    
    renderPlants(filteredPlants);
}

// Render Plants Grid
function renderPlants(plants) {
    elements.plantsGrid.innerHTML = plants.map(plant => `
        <div class="result-card">
            <h3>${plant.name}</h3>
            <p class="scientific-name">${plant.scientificName}</p>
            <div class="uses">
                <h4>Common Uses:</h4>
                <ul>
                    ${plant.uses.map(use => `<li>${use}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Initialize plant grid on load
renderPlants(plantDatabase);