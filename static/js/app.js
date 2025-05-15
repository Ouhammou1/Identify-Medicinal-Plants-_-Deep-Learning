document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const fileInput = document.getElementById('file-input');
    const submitBtn = document.getElementById('submit-btn');
    const imagePreview = document.getElementById('image-preview');
    const uploadForm = document.getElementById('upload-form');
    const loadingSection = document.getElementById('loading');
    const resultsSection = document.getElementById('results');
    const errorDisplay = document.getElementById('error-display');
    const errorMessage = document.getElementById('error-message');

    // Results elements
    const plantName = document.getElementById('plant-name');
    const confidenceBar = document.getElementById('confidence-bar');
    const confidenceText = document.getElementById('confidence-text');
    const predictionsList = document.getElementById('predictions-list');

    // Event listeners
    fileInput.addEventListener('change', handleFileSelect);
    uploadForm.addEventListener('submit', handleFormSubmit);

    // Handle file selection
    function handleFileSelect(event) {
        const file = event.target.files[0];

        if (file) {
            // Enable submit button
            submitBtn.disabled = false;

            // Create file reader
            const reader = new FileReader();

            reader.onload = function (e) {
                // Clear previous content
                imagePreview.innerHTML = '';

                // Create image element
                const img = document.createElement('img');
                img.src = e.target.result;

                // Add image to preview
                imagePreview.appendChild(img);
            };

            // Read file as data URL
            reader.readAsDataURL(file);
        } else {
            // Reset preview and disable submit button
            imagePreview.innerHTML = '<p>Image preview will appear here</p>';
            submitBtn.disabled = true;
        }
    }

    // Handle form submission
    function handleFormSubmit(event) {
        event.preventDefault();

        // Hide previous results/errors
        resultsSection.classList.add('hidden');
        errorDisplay.classList.add('hidden');

        // Show loading spinner
        loadingSection.classList.remove('hidden');

        // Create form data
        const formData = new FormData();
        formData.append('file', fileInput.files[0]);

        // Send request to server
        fetch('/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                // Hide loading spinner
                loadingSection.classList.add('hidden');

                if (data.error) {
                    // Show error
                    errorMessage.textContent = data.error;
                    errorDisplay.classList.remove('hidden');
                } else {
                    // Process results
                    displayResults(data);
                }
            })
            .catch(error => {
                // Hide loading spinner
                loadingSection.classList.add('hidden');

                // Show error
                errorMessage.textContent = 'Network error occurred. Please try again.';
                errorDisplay.classList.remove('hidden');
                console.error('Error:', error);
            });
    }

    // Display results
    function displayResults(data) {
        // Set plant name
        plantName.textContent = data.top_prediction.plant;

        // Set confidence bar
        const confidence = data.top_prediction.confidence;
        confidenceBar.style.width = `${confidence}%`;
        confidenceText.textContent = `${confidence.toFixed(1)}%`;

        // Clear previous predictions
        predictionsList.innerHTML = '';

        // Add predictions to list
        data.predictions.forEach(prediction => {
            const listItem = document.createElement('li');

            // Create plant name element
            const plantNameElement = document.createElement('span');
            plantNameElement.textContent = `${prediction.rank}. ${prediction.plant}`;

            // Create confidence element
            const confidenceElement = document.createElement('span');
            confidenceElement.textContent = `${prediction.confidence.toFixed(1)}%`;

            // Add elements to list item
            listItem.appendChild(plantNameElement);
            listItem.appendChild(confidenceElement);

            // Add list item to predictions list
            predictionsList.appendChild(listItem);
        });

        // Show results section
        resultsSection.classList.remove('hidden');
    }
}); 