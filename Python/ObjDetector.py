from imageai.Detection import ObjectDetection
import os

execution_path = os.getcwd()

detector = ObjectDetection()
detector.setModelTypeAsRetinaNet()
detector.setModelPath(os.path.join(execution_path, "resnet50_coco_bext_v2.1.0.h5"))
detector.loadModel()

detection = detector.detectObjectsFromImage(
    input_image = os.path.join(execution_path, "image.jpg"),
    output_image = os.path.join(execution_path, "output_image.jpg")
)

for eachObject in detection:
    print(eachObject["name"], " : ",eachObject["percentage_probability"])