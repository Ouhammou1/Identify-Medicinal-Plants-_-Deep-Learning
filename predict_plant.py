import tensorflow as tf
import numpy as np
import os
import sys

# Configuration
MODEL_FILE = "plant_model.h5"
CLASS_FILE = "plant_classes.txt"
IMAGE_SIZE = (160, 160)

def predict_plant(image_path):
    """Predict the plant type from an image"""
    # Check files exist
    if not os.path.exists(MODEL_FILE):
        print(f"Error: Model file not found at {MODEL_FILE}")
        return
    
    if not os.path.exists(CLASS_FILE):
        print(f"Error: Class names file not found at {CLASS_FILE}")
        return
    
    if not os.path.exists(image_path):
        print(f"Error: Image not found at {image_path}")
        return
    
    # Load model
    print(f"Loading model from {MODEL_FILE}...")
    model = tf.keras.models.load_model(MODEL_FILE)
    
    # Load class names
    with open(CLASS_FILE, 'r') as f:
        class_names = [line.strip() for line in f.readlines()]
    
    # Process the image
    print(f"Processing image: {image_path}")
    img = tf.keras.utils.load_img(image_path, target_size=IMAGE_SIZE)
    img_array = tf.keras.utils.img_to_array(img)
    img_array = tf.expand_dims(img_array, 0)  # Create batch
    
    # Make prediction
    print("Identifying plant...")
    predictions = model.predict(img_array, verbose=0)
    
    # Get top prediction
    prediction_index = np.argmax(predictions[0])
    confidence = predictions[0][prediction_index] * 100
    
    # Get plant name
    plant_name = class_names[prediction_index]
    
    # Print result
    print("\n===== PLANT IDENTIFICATION RESULT =====")
    print(f"Plant: {plant_name}")
    print(f"Confidence: {confidence:.2f}%")
    
    # Show top 3 predictions
    top_indices = np.argsort(predictions[0])[-3:][::-1]
    print("\nTop 3 predictions:")
    for i, idx in enumerate(top_indices):
        confidence = predictions[0][idx] * 100
        print(f"{i+1}. {class_names[idx]}: {confidence:.2f}%")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python predict_plant.py <image_path>")
        print("Example: python predict_plant.py cnn/l/pro/data/Tulsi/image.jpg")
        sys.exit(1)
    
    image_path = sys.argv[1]
    predict_plant(image_path) 