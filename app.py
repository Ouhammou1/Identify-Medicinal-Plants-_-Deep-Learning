from flask import Flask, render_template, request, jsonify
import tensorflow as tf
import numpy as np
import os
from werkzeug.utils import secure_filename
import time
from tensorflow.keras.utils import load_img


app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max upload

# Create uploads folder if it doesn't exist
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Configuration
MODEL_FILE = "plant_model.h5"
CLASS_FILE = "plant_classes.txt"
IMAGE_SIZE = (160, 160)

# Load model and classes on startup
print("Loading model and class names...")
model = None
class_names = []

def allowed_file(filename):
    """Check if the file extension is allowed"""
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

def load_model_and_classes():
    """Load the model and class names if available"""
    global model, class_names
    
    if os.path.exists(MODEL_FILE):
        try:
            model = tf.keras.models.load_model(MODEL_FILE)
            print("Model loaded successfully!")
        except Exception as e:
            print(f"Error loading model: {e}")
            return False
    else:
        print(f"Model file not found: {MODEL_FILE}")
        return False
    
    if os.path.exists(CLASS_FILE):
        try:
            with open(CLASS_FILE, 'r') as f:
                class_names = [line.strip() for line in f.readlines()]
            print(f"Loaded {len(class_names)} class names")
        except Exception as e:
            print(f"Error loading class names: {e}")
            return False
    else:
        print(f"Class names file not found: {CLASS_FILE}")
        return False
    
    return True

def predict_image(image_path):
    """Make prediction on an image"""
    if model is None or not class_names:
        print("Error: Model or class names not loaded")
        return {"error": "Model or class names not loaded"}
    
    try:
        print(f"Loading image from {image_path}")
        # Load and preprocess image
        img = tf.keras.utils.load_img(image_path, target_size=IMAGE_SIZE)
        img_array = tf.keras.utils.img_to_array(img)
        img_array = tf.expand_dims(img_array, 0)  # Create batch
        
        print("Making prediction...")
        # Make prediction
        predictions = model.predict(img_array, verbose=0)
        
        # Get top 3 predictions
        top_indices = np.argsort(predictions[0])[-3:][::-1]
        results = []
        
        print(f"Top prediction index: {np.argmax(predictions[0])}")
        print(f"Prediction confidence: {np.max(predictions[0]) * 100:.2f}%")
        
        for i, idx in enumerate(top_indices):
            plant_name = class_names[idx] if idx < len(class_names) else f"Unknown-{idx}"
            confidence = float(predictions[0][idx] * 100)
            print(f"Rank {i+1}: {plant_name} - {confidence:.2f}%")
            
            results.append({
                "rank": i+1,
                "plant": plant_name,
                "confidence": confidence
            })
        
        result = {
            "success": True,
            "top_prediction": {
                "plant": class_names[np.argmax(predictions[0])],
                "confidence": float(np.max(predictions[0]) * 100)
            },
            "predictions": results
        }
        print(f"Returning result: {result}")
        return result
    except Exception as e:
        print(f"Error in predict_image: {str(e)}")
        import traceback
        traceback.print_exc()
        return {"error": str(e)}

@app.route('/')
def index():
    """Render the main page"""
    model_loaded = model is not None and len(class_names) > 0
    return render_template('index.html', model_loaded=model_loaded)

@app.route('/upload', methods=['POST'])
def upload_file():
    """Handle image upload and prediction"""
    print("Upload request received")
    
    if 'file' not in request.files:
        print("No file part in request")
        return jsonify({"error": "No file part"})
    
    file = request.files['file']
    
    if file.filename == '':
        print("No selected file")
        return jsonify({"error": "No selected file"})
    
    if file and allowed_file(file.filename):
        try:
            print(f"Processing file: {file.filename}")
            filename = secure_filename(f"{int(time.time())}_{file.filename}")
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            print(f"Saving to: {filepath}")
            file.save(filepath)
            
            # Make prediction
            result = predict_image(filepath)
            return jsonify(result)
        except Exception as e:
            print(f"Error in upload_file: {str(e)}")
            import traceback
            traceback.print_exc()
            return jsonify({"error": str(e)})
    else:
        print(f"File type not allowed: {file.filename}")
        return jsonify({"error": "File type not allowed"})

if __name__ == '__main__':
    model_loaded = load_model_and_classes()
    app.run(debug=True, host='0.0.0.0', port=5000) 