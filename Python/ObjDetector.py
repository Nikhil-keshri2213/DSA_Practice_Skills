from imageai.Detection import ObjectDetection
import os
import sys
import argparse

try:
    from imageai.Detection import ObjectDetection
except Exception as e:
    raise ImportError(
        "ImageAI not available. Install with: pip install imageai tensorflow keras"
    ) from e

execution_path = os.getcwd()
DEFAULT_MODEL = os.path.join(execution_path, "resnet50_coco_best_v2.1.0.h5")

def detect_objects(input_image: str,
                   output_image: str = None,
                   model_path: str = None,
                   min_probability: float = 30.0):
    """
    Detect objects in input_image and save annotated image to output_image.
    Returns list of detections (dicts with 'name' and 'percentage_probability').
    """
    model_path = model_path or DEFAULT_MODEL
    output_image = output_image or os.path.splitext(input_image)[0] + "_detected.jpg"

    if not os.path.isfile(model_path):
        raise FileNotFoundError(
            f"Model file not found: {model_path}\n"
            "Download from: https://github.com/OlafenwaMoses/ImageAI/releases/download/1.0/resnet50_coco_best_v2.1.0.h5"
        )
    if not os.path.isfile(input_image):
        raise FileNotFoundError(f"Input image not found: {input_image}")

    detector = ObjectDetection()
    detector.setModelTypeAsRetinaNet()
    detector.setModelPath(model_path)
    detector.loadModel()

    detections = detector.detectObjectsFromImage(
        input_image=input_image,
        output_image_path=output_image,
        minimum_percentage_probability=float(min_probability)
    )

    return detections, output_image

def _print_detections(detections):
    if not detections:
        print("No objects detected.")
        return
    for obj in detections:
        name = obj.get("name", "unknown")
        prob = obj.get("percentage_probability", 0.0)
        print(f"{name} : {prob:.2f}%")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Simple ImageAI object detection helper")
    parser.add_argument("image", nargs="?", default=os.path.join(execution_path, "image.jpg"),
                        help="Path to input image (default: ./image.jpg)")
    parser.add_argument("--output", "-o", help="Path to save output image (default: <image>_detected.jpg)")
    parser.add_argument("--model", "-m", help=f"Path to model (default: {DEFAULT_MODEL})")
    parser.add_argument("--min", "-p", type=float, default=30.0, help="Minimum probability percent to report")
    args = parser.parse_args()

    try:
        detections, out_path = detect_objects(args.image, args.output, args.model, args.min)
    except Exception as e:
        print("Error:", e)
        sys.exit(1)

    print(f"Annotated image saved to: {out_path}")
    _print_detections(detections)