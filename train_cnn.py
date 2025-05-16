# import tensorflow as tf
# from tensorflow.keras import layers, models, applications
# import numpy as np
# import os

# # Configuration
# DATA_PATH = "data/"  # Specified data path
# IMAGE_SIZE = (160, 160)
# BATCH_SIZE = 8
# EPOCHS = 15
# MODEL_FILE = "plant_model.h5"
# CLASS_FILE = "plant_classes.txt"

# print(f"Starting training using data from: {DATA_PATH}")

# # Create data augmentation layer
# data_augmentation = tf.keras.Sequential([
#     layers.RandomFlip("horizontal"),
#     layers.RandomRotation(0.2),
# ])

# # Get class names from folders
# if not os.path.exists(DATA_PATH):
#     print(f"Error: Data directory not found at {DATA_PATH}")
#     exit(1)

# class_names = sorted([item for item in os.listdir(DATA_PATH) 
#                      if os.path.isdir(os.path.join(DATA_PATH, item))])
# num_classes = len(class_names)
# print(f"Found {num_classes} classes: {class_names}")

# # Save class names
# with open(CLASS_FILE, 'w') as f:
#     for name in class_names:
#         f.write(f"{name}\n")
# print(f"Class names saved to {CLASS_FILE}")

# # Load dataset
# try:
#     print("Loading training data...")
#     train_ds = tf.keras.utils.image_dataset_from_directory(
#         DATA_PATH,
#         validation_split=0.2,
#         subset="training",
#         seed=123,
#         image_size=IMAGE_SIZE,
#         batch_size=BATCH_SIZE,
#     )
    
#     print("Loading validation data...")
#     val_ds = tf.keras.utils.image_dataset_from_directory(
#         DATA_PATH,
#         validation_split=0.2,
#         subset="validation",
#         seed=123,
#         image_size=IMAGE_SIZE,
#         batch_size=BATCH_SIZE,
#     )
# except Exception as e:
#     print(f"Error loading dataset: {e}")
#     exit(1)

# # Optimize dataset performance
# AUTOTUNE = tf.data.AUTOTUNE
# train_ds = train_ds.cache().shuffle(100).prefetch(buffer_size=AUTOTUNE)
# val_ds = val_ds.cache().prefetch(buffer_size=AUTOTUNE)

# # Build the model
# print("Building CNN model...")
# try:
#     # Base model (MobileNetV2)
#     base_model = applications.MobileNetV2(
#         input_shape=IMAGE_SIZE + (3,),
#         include_top=False,
#         weights="imagenet",
#         alpha=0.75  # Use smaller version to save memory
#     )
#     base_model.trainable = False
    
#     # Create model
#     inputs = layers.Input(shape=IMAGE_SIZE + (3,))
#     x = data_augmentation(inputs)
#     x = layers.Rescaling(1./255)(x)
#     x = base_model(x, training=False)
#     x = layers.GlobalAveragePooling2D()(x)
#     x = layers.Dropout(0.2)(x)
#     x = layers.Dense(128, activation='relu')(x)
#     x = layers.BatchNormalization()(x)
#     x = layers.Dropout(0.5)(x)
#     outputs = layers.Dense(num_classes, activation='softmax')(x)
    
#     model = models.Model(inputs, outputs)
#     model.compile(
#         optimizer=tf.keras.optimizers.Adam(0.001),
#         loss='sparse_categorical_crossentropy',
#         metrics=['accuracy']
#     )
# except Exception as e:
#     print(f"Error building model: {e}")
#     exit(1)

# # Print model summary
# model.summary()

# # Create callbacks
# callbacks = [
#     tf.keras.callbacks.ModelCheckpoint(
#         MODEL_FILE,
#         monitor='val_accuracy',
#         save_best_only=True,
#         mode='max'
#     ),
#     tf.keras.callbacks.EarlyStopping(
#         monitor='val_loss',
#         patience=3,
#         restore_best_weights=True
#     ),
#     tf.keras.callbacks.ReduceLROnPlateau(
#         monitor='val_loss',
#         factor=0.5,
#         patience=2,
#         min_lr=1e-6
#     )
# ]

# # Train model
# print(f"Starting training for {EPOCHS} epochs...")
# try:
#     history = model.fit(
#         train_ds,
#         validation_data=val_ds,
#         epochs=EPOCHS,
#         callbacks=callbacks
#     )
    
#     # Save final model
#     model.save(MODEL_FILE)
#     print(f"Training complete! Model saved to {MODEL_FILE}")
    
#     # Print final metrics
#     final_accuracy = history.history['accuracy'][-1] * 100
#     final_val_accuracy = history.history['val_accuracy'][-1] * 100
#     print(f"Final training accuracy: {final_accuracy:.2f}%")
#     print(f"Final validation accuracy: {final_val_accuracy:.2f}%")
    
# except Exception as e:
#     print(f"Error during training: {e}")
#     exit(1) 



#/////////////////////////------------------------------------------***************************************





# import tensorflow as tf
# from tensorflow.keras import layers, models, applications, regularizers
# import numpy as np
# import os

# # Configuration
# DATA_PATH = "data/"
# IMAGE_SIZE = (160, 160)
# BATCH_SIZE = 16
# EPOCHS = 15
# MODEL_FILE = "plant_model.h5"
# CLASS_FILE = "plant_classes.txt"

# print(f"Starting training using data from: {DATA_PATH}")

# # Data augmentation
# data_augmentation = tf.keras.Sequential([
#     layers.RandomFlip("horizontal_and_vertical"),
#     layers.RandomRotation(0.3),
#     layers.RandomZoom(0.2),
#     layers.RandomTranslation(0.1, 0.1),
# ])

# # Get class names from folders
# if not os.path.exists(DATA_PATH):
#     print(f"Error: Data directory not found at {DATA_PATH}")
#     exit(1)

# class_names = sorted([item for item in os.listdir(DATA_PATH)
#                       if os.path.isdir(os.path.join(DATA_PATH, item))])
# num_classes = len(class_names)
# print(f"Found {num_classes} classes: {class_names}")

# # Save class names
# with open(CLASS_FILE, 'w') as f:
#     for name in class_names:
#         f.write(f"{name}\n")
# print(f"Class names saved to {CLASS_FILE}")

# # Load dataset
# try:
#     print("Loading training data...")
#     train_ds = tf.keras.utils.image_dataset_from_directory(
#         DATA_PATH,
#         validation_split=0.2,
#         subset="training",
#         seed=123,
#         image_size=IMAGE_SIZE,
#         batch_size=BATCH_SIZE,
#     )

#     print("Loading validation data...")
#     val_ds = tf.keras.utils.image_dataset_from_directory(
#         DATA_PATH,
#         validation_split=0.2,
#         subset="validation",
#         seed=123,
#         image_size=IMAGE_SIZE,
#         batch_size=BATCH_SIZE,
#     )
# except Exception as e:
#     print(f"Error loading dataset: {e}")
#     exit(1)

# # Optimize performance
# AUTOTUNE = tf.data.AUTOTUNE
# train_ds = train_ds.cache().shuffle(100).prefetch(buffer_size=AUTOTUNE)
# val_ds = val_ds.cache().prefetch(buffer_size=AUTOTUNE)

# # Build model
# print("Building CNN model...")
# try:
#     base_model = applications.MobileNetV2(
#         input_shape=IMAGE_SIZE + (3,),
#         include_top=False,
#         weights="imagenet",
#         alpha=0.75
#     )
#     base_model.trainable = False  # Freeze initially

#     inputs = layers.Input(shape=IMAGE_SIZE + (3,))
#     x = data_augmentation(inputs)
#     x = layers.Rescaling(1./255)(x)
#     x = base_model(x, training=False)
#     x = layers.GlobalAveragePooling2D()(x)
#     x = layers.Dropout(0.3)(x)
#     x = layers.Dense(128, activation='relu', kernel_regularizer=regularizers.l2(0.001))(x)
#     x = layers.BatchNormalization()(x)
#     x = layers.Dropout(0.5)(x)
#     outputs = layers.Dense(num_classes, activation='softmax')(x)

#     model = models.Model(inputs, outputs)
#     model.compile(
#         optimizer=tf.keras.optimizers.Adam(learning_rate=0.0005),
#         loss='sparse_categorical_crossentropy',
#         metrics=['accuracy']
#     )
# except Exception as e:
#     print(f"Error building model: {e}")
#     exit(1)

# model.summary()

# # Callbacks
# callbacks = [
#     tf.keras.callbacks.ModelCheckpoint(
#         MODEL_FILE,
#         monitor='val_accuracy',
#         save_best_only=True,
#         mode='max'
#     ),
#     tf.keras.callbacks.EarlyStopping(
#         monitor='val_loss',
#         patience=3,
#         restore_best_weights=True
#     ),
#     tf.keras.callbacks.ReduceLROnPlateau(
#         monitor='val_loss',
#         factor=0.5,
#         patience=2,
#         min_lr=1e-6
#     )
# ]

# # Train model (initial)
# print(f"Starting training for {EPOCHS} epochs...")
# try:
#     history = model.fit(
#         train_ds,
#         validation_data=val_ds,
#         epochs=EPOCHS,
#         callbacks=callbacks
#     )

#     # Fine-tune top layers of the base model
#     print("Fine-tuning MobileNetV2...")
#     base_model.trainable = True
#     model.compile(
#         optimizer=tf.keras.optimizers.Adam(learning_rate=1e-5),
#         loss='sparse_categorical_crossentropy',
#         metrics=['accuracy']
#     )

#     fine_tune_epochs = 5
#     history_fine = model.fit(
#         train_ds,
#         validation_data=val_ds,
#         epochs=fine_tune_epochs,
#         callbacks=callbacks
#     )

#     # Save final model
#     model.save(MODEL_FILE)
#     print(f"Training complete! Model saved to {MODEL_FILE}")

#     # Print final metrics
#     final_acc = history_fine.history['accuracy'][-1] * 100
#     final_val_acc = history_fine.history['val_accuracy'][-1] * 100
#     print(f"Final training accuracy: {final_acc:.2f}%")
#     print(f"Final validation accuracy: {final_val_acc:.2f}%")

# except Exception as e:
#     print(f"Error during training: {e}")
#     exit(1)










import tensorflow as tf
from tensorflow.keras import layers, models, applications, regularizers
import numpy as np
import os

# ------------------- Configuration -------------------
DATA_PATH = "data/"
IMAGE_SIZE = (224, 224)  # Slightly larger for better feature capture
BATCH_SIZE = 8
EPOCHS = 15
FINE_TUNE_EPOCHS = 10
MODEL_FILE = "plant_model.h5"
CLASS_FILE = "plant_classes.txt"

# ------------------- Data Augmentation -------------------
data_augmentation = tf.keras.Sequential([
    layers.RandomFlip("horizontal_and_vertical"),
    layers.RandomRotation(0.3),
    layers.RandomZoom(0.2),
    layers.RandomTranslation(0.1, 0.1),
    layers.RandomContrast(0.2),
])

# ------------------- Load Class Names -------------------
if not os.path.exists(DATA_PATH):
    raise FileNotFoundError(f"Error: Data directory not found at {DATA_PATH}")

class_names = sorted([
    item for item in os.listdir(DATA_PATH)
    if os.path.isdir(os.path.join(DATA_PATH, item))
])
num_classes = len(class_names)
print(f"Found {num_classes} classes: {class_names}")

with open(CLASS_FILE, 'w') as f:
    for name in class_names:
        f.write(f"{name}\n")

# ------------------- Load Dataset -------------------
train_ds = tf.keras.utils.image_dataset_from_directory(
    DATA_PATH,
    validation_split=0.2,
    subset="training",
    seed=42,
    image_size=IMAGE_SIZE,
    batch_size=BATCH_SIZE
)

val_ds = tf.keras.utils.image_dataset_from_directory(
    DATA_PATH,
    validation_split=0.2,
    subset="validation",
    seed=42,
    image_size=IMAGE_SIZE,
    batch_size=BATCH_SIZE
)

# Prefetching for performance
AUTOTUNE = tf.data.AUTOTUNE
train_ds = train_ds.cache().shuffle(1000).prefetch(buffer_size=AUTOTUNE)
val_ds = val_ds.cache().prefetch(buffer_size=AUTOTUNE)

# ------------------- Build Model -------------------
base_model = applications.EfficientNetB0(
    input_shape=IMAGE_SIZE + (3,),
    include_top=False,
    weights="imagenet"
)
base_model.trainable = False

inputs = layers.Input(shape=IMAGE_SIZE + (3,))
x = data_augmentation(inputs)
x = layers.Rescaling(1./255)(x)
x = base_model(x, training=False)
x = layers.GlobalAveragePooling2D()(x)
x = layers.Dropout(0.4)(x)
x = layers.Dense(256, activation='relu', kernel_regularizer=regularizers.l2(0.001))(x)
x = layers.BatchNormalization()(x)
x = layers.Dropout(0.5)(x)
outputs = layers.Dense(num_classes, activation='softmax')(x)

model = models.Model(inputs, outputs)

# Compile
model.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=0.0005),
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

model.summary()

# ------------------- Callbacks -------------------
callbacks = [
    tf.keras.callbacks.ModelCheckpoint(
        MODEL_FILE, monitor='val_accuracy', save_best_only=True, mode='max'
    ),
    tf.keras.callbacks.EarlyStopping(
        monitor='val_loss', patience=4, restore_best_weights=True
    ),
    tf.keras.callbacks.ReduceLROnPlateau(
        monitor='val_loss', factor=0.5, patience=2, min_lr=1e-6
    )
]

# ------------------- Initial Training -------------------
print("Starting initial training...")
history = model.fit(
    train_ds,
    validation_data=val_ds,
    epochs=EPOCHS,
    callbacks=callbacks
)

# ------------------- Fine-tuning -------------------
print("Fine-tuning model...")
base_model.trainable = True

model.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=1e-5),
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

history_fine = model.fit(
    train_ds,
    validation_data=val_ds,
    epochs=FINE_TUNE_EPOCHS,
    callbacks=callbacks
)

# ------------------- Save Final Model -------------------
model.save(MODEL_FILE)
print(f"Training complete! Final model saved to {MODEL_FILE}")

# ------------------- Final Results -------------------
final_acc = history_fine.history['accuracy'][-1] * 100
final_val_acc = history_fine.history['val_accuracy'][-1] * 100
print(f"Final Training Accuracy: {final_acc:.2f}%")
print(f"Final Validation Accuracy: {final_val_acc:.2f}%")
