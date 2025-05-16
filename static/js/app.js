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

// Detailed plant information database
const plantInfoDatabase = {
    "Arive-Dantu": {
        scientificName: "Amaranthus spp.",
        benefits: [
            "Rich in vitamins A and C, iron, and calcium.",
            "Traditionally used to treat respiratory disorders, gynecological diseases, and bleeding disorders."
        ],
        harms: [
            "May cause constipation due to its dry nature",
            "Excessive consumption might increase vata and kapha doshas."
        ]
    },
    "Basale": {
        scientificName: "Malabar Spinach",
        benefits: [
            "High in calcium and iron, supports bone health, reduces the risk of osteoporosis, and helps with anemia."
        ],
        harms: [
            "Generally safe",
            "However, excessive consumption might lead to digestive issues."
        ]
    },
    "Betel": {
        scientificName: "Piper betle",
        benefits: [
            "Possesses anti-diabetic, anti-inflammatory, anti-ulcer, and anti-cancer properties.",
            "Good for oral hygiene and cardiovascular health."
        ],
        harms: [
            "Chewing betel leaves with tobacco is carcinogenic",
            "Excessive use can lead to oral submucous fibrosis."
        ]
    },
    "Crape Jasmine": {
        scientificName: "Tabernaemontana divaricata",
        benefits: [
            "Supports liver function, has anti-aging benefits due to antioxidants, and may have neuroprotective effects."
        ],
        harms: [
            "Limited information on toxicity",
            "Caution is advised during pregnancy and lactation."
        ]
    },
    "Curry Leaves": {
        scientificName: "Murraya koenigii",
        benefits: [
            "Helps manage blood sugar levels, supports heart health, and has anti-inflammatory properties."
        ],
        harms: [
            "Generally safe",
            "Overconsumption might lead to digestive discomfort."
        ]
    },
    "Drumstick": {
        scientificName: "Moringa oleifera",
        benefits: [
            "Boosts immunity, strengthens bones, and is rich in essential vitamins and minerals."
        ],
        harms: [
            "Excessive intake may cause digestive issues",
            "Pregnant women should avoid consuming bark and root extracts."
        ]
    },
    "Fenugreek": {
        scientificName: "Trigonella foenum-graecum",
        benefits: [
            "Aids in weight loss, controls blood sugar, enhances lactation, and boosts immunity."
        ],
        harms: [
            "May cause digestive issues",
            "Not recommended for individuals allergic to peanuts, chickpeas, or soybeans."
        ]
    },
    "Guava": {
        scientificName: "Psidium guajava",
        benefits: [
            "Lowers blood sugar levels, rich in fiber, vitamins, and antioxidants."
        ],
        harms: [
            "Generally safe",
            "Excessive consumption might lead to digestive discomfort."
        ]
    },
    "Hibiscus": {
        scientificName: "Hibiscus sabdariffa",
        benefits: [
            "Improves blood pressure control, has diuretic effects, and aids in managing high blood sugar."
        ],
        harms: [
            "May cause mild side effects like upset stomach",
            "Caution is advised for those on medication."
        ]
    },
    "Indian Beech": {
        scientificName: "Pongamia pinnata",
        benefits: [
            "Supports digestion, boosts immunity, and has anti-inflammatory properties."
        ],
        harms: [
            "Limited information on toxicity",
            "Use under professional guidance."
        ]
    },
    "Indian Mustard": {
        scientificName: "Brassica juncea",
        benefits: [
            "Aids digestion, supports cardiovascular health, and has antioxidant properties."
        ],
        harms: [
            "Excessive consumption may cause skin irritation or allergic reactions."
        ]
    },
    "Jackfruit": {
        scientificName: "Artocarpus heterophyllus",
        benefits: [
            "Rich in vitamins and antioxidants, supports heart health, and may help regulate blood sugar."
        ],
        harms: [
            "High carbohydrate content can affect blood sugar levels",
            "May cause allergic reactions in sensitive individuals."
        ]
    },
    "Jamaica Cherry": {
        scientificName: "Muntingia calabura",
        benefits: [
            "Rich in antioxidants, used to treat headaches, reduce inflammation, and manage diabetes."
        ],
        harms: [
            "Generally considered safe",
            "Excessive consumption may cause mild stomach discomfort."
        ]
    },
    "Jamun": {
        scientificName: "Syzygium cumini",
        benefits: [
            "Helps control blood sugar, improves digestion, and boosts immunity."
        ],
        harms: [
            "Overconsumption may lead to constipation",
            "May interact with diabetes medications."
        ]
    },
    "Jasmine": {
        scientificName: "Jasminum spp.",
        benefits: [
            "Reduces stress, improves sleep, and has antibacterial properties."
        ],
        harms: [
            "In concentrated oil form, may cause skin irritation or allergic reactions."
        ]
    },
    "Karanda": {
        scientificName: "Carissa carandas",
        benefits: [
            "Rich in vitamin C, boosts immunity, and has digestive benefits."
        ],
        harms: [
            "Unripe fruit can be mildly toxic",
            "Excessive intake may cause stomach upset."
        ]
    },
    "Lemon": {
        scientificName: "Citrus limon",
        benefits: [
            "Aids digestion, boosts immunity, and has detoxifying properties."
        ],
        harms: [
            "Excessive intake can erode tooth enamel and cause heartburn."
        ]
    },
    "Mango": {
        scientificName: "Mangifera indica",
        benefits: [
            "Rich in vitamins A and C, promotes eye health, and supports immunity."
        ],
        harms: [
            "Overconsumption may lead to weight gain or increased blood sugar levels."
        ]
    },
    "Mexican Mint": {
        scientificName: "Plectranthus amboinicus",
        benefits: [
            "Treats cough, asthma, and skin infections",
            "Anti-inflammatory."
        ],
        harms: [
            "Can cause allergic reactions in sensitive individuals."
        ]
    },
    "Mint": {
        scientificName: "Mentha spp.",
        benefits: [
            "Improves digestion, relieves headaches, and freshens breath."
        ],
        harms: [
            "May cause allergic reactions or heartburn in some people."
        ]
    },
    "Neem": {
        scientificName: "Azadirachta indica",
        benefits: [
            "Antibacterial, antifungal, and detoxifying",
            "Used for skin and oral health."
        ],
        harms: [
            "Neem oil is toxic in large doses, especially to children."
        ]
    },
    "Oleander": {
        scientificName: "Nerium oleander",
        benefits: [
            "Used in traditional medicine for heart conditions and skin issues."
        ],
        harms: [
            "Highly toxic",
            "All parts of the plant can cause serious illness or death if ingested."
        ]
    },
    "Parijata": {
        scientificName: "Nyctanthes arbor-tristis",
        benefits: [
            "Used to treat fever, cough, and arthritis",
            "Has anti-inflammatory properties."
        ],
        harms: [
            "Generally safe",
            "Excessive use may cause stomach upset."
        ]
    },
    "Peepal": {
        scientificName: "Ficus religiosa",
        benefits: [
            "Supports respiratory health, treats skin diseases, and aids digestion."
        ],
        harms: [
            "Latex may cause allergies or skin irritation."
        ]
    },
    "Pomegranate": {
        scientificName: "Punica granatum",
        benefits: [
            "Rich in antioxidants, supports heart health, and helps in cancer prevention."
        ],
        harms: [
            "May interfere with certain medications",
            "Excess juice intake can cause digestive issues."
        ]
    },
    "Rasna": {
        scientificName: "Pluchea lanceolata",
        benefits: [
            "Used to treat joint pain, inflammation, and respiratory issues."
        ],
        harms: [
            "Generally safe in moderate amounts",
            "Avoid during pregnancy."
        ]
    },
    "Rose Apple": {
        scientificName: "Syzygium jambos",
        benefits: [
            "Rich in vitamin C, aids digestion, and has antimicrobial properties."
        ],
        harms: [
            "Seeds are potentially toxic if consumed in large quantities."
        ]
    },
    "Roxburgh Fig": {
        scientificName: "Ficus auriculata",
        benefits: [
            "Aids in digestion, has anti-diabetic properties, and promotes wound healing."
        ],
        harms: [
            "Sap may cause skin irritation in sensitive individuals."
        ]
    },
    "Sandalwood": {
        scientificName: "Santalum album",
        benefits: [
            "Anti-inflammatory, cooling, and used in skincare."
        ],
        harms: [
            "Essential oil may cause allergic reactions or irritation when overused."
        ]
    },
    "Tulsi": {
        scientificName: "Ocimum sanctum",
        benefits: [
            "Boosts immunity, reduces stress, and has antibacterial properties."
        ],
        harms: [
            "May cause low blood sugar or interact with blood-thinning medications."
        ]
    }
};

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

    console.log("File selected:", file.name, file.type, file.size);

    const reader = new FileReader();
    reader.onload = (event) => {
        elements.imagePreview.innerHTML = `
            <div class="uploaded-image-container">
                <img src="${event.target.result}" alt="Plant preview" class="uploaded-image">
                <div class="image-overlay">
                    <span class="image-name">${file.name}</span>
                </div>
            </div>
            <div class="upload-options">
                <button id="upload-btn" class="btn primary">Upload New Image</button>
                <button id="camera-btn" class="btn secondary">Use Camera</button>
            </div>
        `;

        // Add style for uploaded image container
        const style = document.createElement('style');
        style.textContent = `
            .uploaded-image-container {
                position: relative;
                margin-bottom: 20px;
                border-radius: var(--radius-md);
                overflow: hidden;
                box-shadow: 0 6px 12px rgba(0,0,0,0.15);
                transform: scale(0.95);
                animation: imageAppear 0.5s forwards;
            }
            @keyframes imageAppear {
                to { transform: scale(1); }
            }
            .uploaded-image {
                display: block;
                max-width: 100%;
                max-height: 350px;
                border-radius: var(--radius-md);
                transition: all 0.3s ease;
            }
            .image-overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(transparent, rgba(0,0,0,0.7));
                padding: 15px;
                color: white;
                font-size: 0.9rem;
                transform: translateY(100%);
                transition: transform 0.3s ease;
            }
            .uploaded-image-container:hover .image-overlay {
                transform: translateY(0);
            }
            .image-name {
                display: block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 100%;
            }
        `;
        document.head.appendChild(style);

        // Reattach event listeners to the new buttons
        document.getElementById('upload-btn').addEventListener('click', () => elements.fileInput.click());
        document.getElementById('camera-btn').addEventListener('click', initCamera);

        // Show loading
        showLoading();

        // Create form data and send to server
        const formData = new FormData();
        formData.append('file', file);

        console.log("Sending file to server...");

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                console.log("Server response status:", response.status);
                return response.json();
            })
            .then(data => {
                console.log("Server response data:", data);
                if (data.error) {
                    console.error('Error:', data.error);
                    alert('Error uploading image: ' + data.error);
                    elements.loading.classList.add('hidden');
                } else {
                    displayResults(data);
                }
            })
            .catch(error => {
                console.error('Upload error:', error);
                alert('Error uploading image. Please try again.');
                elements.loading.classList.add('hidden');
            });
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
        video.className = 'camera-video';

        elements.imagePreview.innerHTML = '';
        elements.imagePreview.appendChild(video);

        // Add capture button
        const captureBtn = document.createElement('button');
        captureBtn.className = 'btn primary capture-btn';
        captureBtn.innerHTML = '<span>Capture</span>';
        captureBtn.onclick = () => captureImage(video, stream);

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'camera-controls';
        buttonContainer.appendChild(captureBtn);

        // Add cancel button
        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'btn secondary cancel-btn';
        cancelBtn.innerHTML = '<span>Cancel</span>';
        cancelBtn.onclick = () => {
            stream.getTracks().forEach(track => track.stop());
            elements.imagePreview.innerHTML = `
                <p>Upload or capture a plant image</p>
                <div class="upload-options">
                    <button id="upload-btn" class="btn primary">Upload Image</button>
                    <button id="camera-btn" class="btn secondary">Use Camera</button>
                </div>
            `;
            document.getElementById('upload-btn').addEventListener('click', () => elements.fileInput.click());
            document.getElementById('camera-btn').addEventListener('click', initCamera);
        };
        buttonContainer.appendChild(cancelBtn);

        elements.imagePreview.appendChild(buttonContainer);

        // Add custom styles
        if (!document.querySelector('style[data-for="camera"]')) {
            const style = document.createElement('style');
            style.setAttribute('data-for', 'camera');
            style.textContent = `
                .camera-video {
                    width: 100%;
                    max-width: 500px;
                    max-height: 350px;
                    border-radius: var(--radius-md);
                    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
                    margin-bottom: 15px;
                    border: 3px solid var(--white);
                    animation: fadeIn 0.5s ease;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .camera-controls {
                    display: flex;
                    gap: 15px;
                    margin-top: 15px;
                    justify-content: center;
                }
                .capture-btn, .cancel-btn {
                    position: relative;
                    overflow: hidden;
                    animation: fadeIn 0.5s ease forwards;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .capture-btn:before, .cancel-btn:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: all 0.5s ease;
                }
                .capture-btn:hover:before, .cancel-btn:hover:before {
                    left: 100%;
                }
                .capture-btn span, .cancel-btn span {
                    position: relative;
                    z-index: 2;
                }
                .capture-btn {
                    background: var(--primary-color);
                }
                .capture-btn:hover {
                    background: var(--primary-dark);
                    transform: translateY(-3px);
                    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                }
            `;
            document.head.appendChild(style);
        }
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

    // Get image data
    const imageData = canvas.toDataURL('image/jpeg');
    console.log("Image captured from camera");

    // Display captured image
    elements.imagePreview.innerHTML = `
        <div class="uploaded-image-container">
            <img src="${imageData}" alt="Captured plant" class="uploaded-image">
            <div class="image-overlay">
                <span class="image-name">Camera Capture</span>
            </div>
        </div>
        <div class="upload-options">
            <button id="upload-btn" class="btn primary">Upload New Image</button>
            <button id="camera-btn" class="btn secondary">Use Camera</button>
        </div>
    `;

    // Add style for uploaded image container if it doesn't exist
    if (!document.querySelector('style[data-for="image-container"]')) {
        const style = document.createElement('style');
        style.setAttribute('data-for', 'image-container');
        style.textContent = `
            .uploaded-image-container {
                position: relative;
                margin-bottom: 20px;
                border-radius: var(--radius-md);
                overflow: hidden;
                box-shadow: 0 6px 12px rgba(0,0,0,0.15);
                transform: scale(0.95);
                animation: imageAppear 0.5s forwards;
            }
            @keyframes imageAppear {
                to { transform: scale(1); }
            }
            .uploaded-image {
                display: block;
                max-width: 100%;
                max-height: 350px;
                border-radius: var(--radius-md);
                transition: all 0.3s ease;
            }
            .image-overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(transparent, rgba(0,0,0,0.7));
                padding: 15px;
                color: white;
                font-size: 0.9rem;
                transform: translateY(100%);
                transition: transform 0.3s ease;
            }
            .uploaded-image-container:hover .image-overlay {
                transform: translateY(0);
            }
            .image-name {
                display: block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 100%;
            }
        `;
        document.head.appendChild(style);
    }

    // Reattach event listeners to the new buttons
    document.getElementById('upload-btn').addEventListener('click', () => elements.fileInput.click());
    document.getElementById('camera-btn').addEventListener('click', initCamera);

    // Process the image
    showLoading();

    // Convert base64 to blob
    const blobBin = atob(imageData.split(',')[1]);
    const array = [];
    for (let i = 0; i < blobBin.length; i++) {
        array.push(blobBin.charCodeAt(i));
    }
    const file = new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    console.log("Converted camera image to blob:", file.size, "bytes");

    // Send to server
    const formData = new FormData();
    formData.append('file', file, 'camera_capture.jpg');

    console.log("Sending camera image to server...");
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            console.log("Server response status:", response.status);
            return response.json();
        })
        .then(data => {
            console.log("Server response data:", data);
            if (data.error) {
                console.error('Error:', data.error);
                alert('Error processing image: ' + data.error);
                elements.loading.classList.add('hidden');
            } else {
                displayResults(data);
            }
        })
        .catch(error => {
            console.error('Upload error:', error);
            alert('Error processing image. Please try again.');
            elements.loading.classList.add('hidden');
        });
}

// Show Loading State
function showLoading() {
    elements.loading.classList.remove('hidden');
    elements.results.classList.add('hidden');
}

// Display API Results
function displayResults(data) {
    elements.loading.classList.add('hidden');
    elements.results.classList.remove('hidden');

    console.log("Received data:", data); // Debug the received data
    if (data.success && data.predictions) {
        // Real API results
        const predictions = data.predictions;
        console.log("Processing predictions:", predictions); // Debug the predictions

        // Function to get confidence color - updated for green color scheme
        const getConfidenceColor = (confidence) => {
            if (confidence >= 80) return '#2E8B57'; // Primary sea green for high confidence
            if (confidence >= 50) return '#FF7F50'; // Coral accent for medium
            return '#E63946'; // Red for low confidence
        };

        let resultsHTML = '';

        // Display all predictions in a unified grid
        resultsHTML += `<div class="all-results">`;

        predictions.forEach((prediction, index) => {
            const confidenceColor = getConfidenceColor(prediction.confidence);
            const animationDelay = index * 0.1;

            // Try to find the plant in our detailed database
            const plantInfo = plantInfoDatabase[prediction.plant] || null;

            const isTopResult = index === 0;
            const cardClass = isTopResult ? 'result-card main-result' : 'result-card';

            // Format benefits and harms as bullet points
            let benefitsHTML = '';
            let harmsHTML = '';

            if (plantInfo) {
                benefitsHTML = `
                <ul class="benefits-list">
                    ${plantInfo.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>`;

                harmsHTML = `
                <ul class="harms-list">
                    ${plantInfo.harms.map(harm => `<li>${harm}</li>`).join('')}
                </ul>`;
            }

            resultsHTML += `
                <div class="${cardClass}" style="animation-delay: ${animationDelay}s; border-left-color: ${confidenceColor};">
                    <h3>${prediction.plant}</h3>
                    ${plantInfo ? `<p class="scientific-name">${plantInfo.scientificName}</p>` : ''}
                    <div class="confidence" style="background-color: ${confidenceColor}20;">
                        <p style="color: ${confidenceColor};">Confidence: ${prediction.confidence.toFixed(1)}%</p>
                    </div>
                    ${!isTopResult ? `
                    <div class="rank">
                        <p>Rank: ${prediction.rank}</p>
                    </div>
                    ` : ''}
                    
                    <button class="view-details-btn" onclick="toggleDetails(this, '${prediction.plant}')">${isTopResult ? 'View Details' : 'View Details'}</button>
                    
                    <div class="plant-details ${isTopResult ? '' : 'hidden'}">
                        ${plantInfo ? `
                        <div class="benefits">
                            <h4>Health Benefits:</h4>
                            ${benefitsHTML}
                        </div>
                        <div class="harms">
                            <h4>Potential Harms:</h4>
                            ${harmsHTML}
                        </div>
                        ` : '<p>No detailed information available for this plant.</p>'}
                    </div>
                </div>
            `;
        });

        resultsHTML += `</div>`;
        elements.resultsGrid.innerHTML = resultsHTML;

        // Add the toggle details function
        window.toggleDetails = function (button, plantName) {
            const detailsSection = button.nextElementSibling;
            if (detailsSection.classList.contains('hidden')) {
                detailsSection.classList.remove('hidden');
                button.textContent = 'Hide Details';
            } else {
                detailsSection.classList.add('hidden');
                button.textContent = 'View Details';
            }
        };
    } else if (data.error) {
        // Show error message
        console.error("API error:", data.error);
        elements.resultsGrid.innerHTML = `
            <div class="error-card">
                <h3>Error</h3>
                <p>${data.error}</p>
            </div>
        `;
    } else {
        // Fallback to mock results
        console.log("Using fallback results");
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

    // Add a nice reveal animation to the results section
    elements.results.style.opacity = "0";
    elements.results.style.transform = "translateY(20px)";

    setTimeout(() => {
        elements.results.style.opacity = "1";
        elements.results.style.transform = "translateY(0)";
    }, 50);
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