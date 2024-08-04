import numpy as np
import cv2
import matplotlib.pyplot as plt

def rgb_to_gradient_value(r, g, b):
    """
    Convert RGB values to a gradient value between 0 and 1.
    
    :param r: Red channel value (0 to 255)
    :param g: Green channel value (0 to 255)
    :param b: Blue channel value (0 to 255)
    :return: Gradient value between 0 and 1
    """
    # Define gradient dimensions
    width, height = 256, 1  # Single row gradient for simplicity

    # Initialize the gradient image
    gradient = np.zeros((height, width, 3), dtype=np.uint8)

    # Create the gradient from red (1) to blue (0)
    for x in range(width):
        r_val = 255 - x
        g_val = 0
        b_val = x
        gradient[:, x] = [r_val, g_val, b_val]

    # Convert the gradient to grayscale (for simplicity in comparison)
    gradient_gray = cv2.cvtColor(gradient, cv2.COLOR_BGR2GRAY)
    gradient_gray = gradient_gray / 255.0  # Normalize to [0, 1]

    # Find the gradient value corresponding to the input RGB values
    r_norm = r / 255.0
    b_norm = b / 255.0
    gradient_value = r_norm - b_norm

    # Ensure the value is within [0, 1]
    gradient_value = np.clip(gradient_value, 0, 1)

    return gradient_value

def get_rgb(x,y):

    # Load the image
    image_path = '../../src/images/GRACE-FO_GWS_90D_20240701.png'  # Replace with your image path
    image = cv2.imread(image_path)

    # Check if the image loaded successfully
    if image is None:
        raise ValueError("Image not found or unable to load")

    # Convert the image to RGB (OpenCV loads images in BGR by default)
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    # Retrieve the pixel value
    # For a color image, the pixel value will be a tuple (B, G, R)
    pixel_value = image[y, x]
    pixel_value = pixel_value[::-1] #Convert to rgb
    gradient_value = rgb_to_gradient_value(pixel_value[0], pixel_value[1], pixel_value[2])

    print(gradient_value)
    return gradient_value









