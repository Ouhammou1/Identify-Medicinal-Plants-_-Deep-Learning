# Medicinal Plant CNN Classifier

A CNN-based model to identify medicinal plants from images.

## Setup

1. Install requirements:
```
pip install -r requirements.txt
```

## Usage

### Training

To train the model using the data at "cnn/l/pro/data":
```
python train_cnn.py
```

This will:
- Create a CNN model using MobileNetV2 architecture
- Train the model on your dataset
- Save the trained model as "plant_model.h5"
- Save the class names as "plant_classes.txt"

### Prediction

To identify a plant from an image:
```
python predict_plant.py path/to/your/plant/image.jpg
```

For example:
```
python predict_plant.py cnn/l/pro/data/Tulsi/image.jpg
```

The script will show:
- The identified plant name
- The confidence level
- Top 3 most likely plant types 