import cv2
import imutils
import os
import matplotlib.pyplot as plt

# Imgage path
image_path = r'C:\Users\UTILISATEUR\Pictures\logoPython.png'
# Image directory
directory = r'C:\Users\UTILISATEUR\Pictures'
img = cv2.imread(image_path) # lire une image
# change the current directory to specified directory
os.chdir(directory)
print("Before saving image")
print(os.listdir(directory))
resizeImg = imutils.resize(img,width=100) # redimensionner une image
cv2.imwrite("resizedImg.jpg",resizeImg) # sauvegarder l'image

img = cv2.imread("logoPython.jpg") # lire une image
grayImg = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
thresImg = cv2.threshold(grayImg,180,255,cv2.THRESH_BINARY)[1]
plt.imshow(thresImg,cmap='gray') # afficher l'image
cv2.imwrite("imgThresholdGraylogoPython.jpg",thresImg)

# List files in directory C:\Users\caspary5\Documents\hello_world\images
print("After processing images")
print(os.listdir(directory))
print("Successfully saved")
