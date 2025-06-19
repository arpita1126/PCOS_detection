from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import random

app = Flask(__name__)
CORS(app) 

UPLOAD_FOLDER = 'static/uploads'
UPLOAD_FOLDER = os.path.abspath(UPLOAD_FOLDER)
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def index():
    return '✅ PCOS Detection Flask Backend is Running'

@app.route('/predict', methods=['POST'])
def predict():
    print("Received request headers:", request.headers) 
    print("Received form data:", request.form)       
    print("Received files:", request.files)      

    name = request.form.get('name')
    age = request.form.get('age')
    file = request.files['image']



    if not file:
        print("Error: 'file' not found in request.files")
        return jsonify({'error': 'No file part in the request (expected key: file)'}), 400

    if file.filename == '':
        print("Error: No file selected") 
        return jsonify({'error': 'No selected file'}), 400

    try:
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        print(f"Attempting to save file to: {filepath}")
        file.save(filepath)
        print(f"File saved successfully: {filepath}") 

       
        prediction_result = random.choice(['PCOS Positive', 'PCOS Negative'])
        confidence_score = random.uniform(0.6, 0.99) 

        print(f"Prediction: {prediction_result}, Confidence: {confidence_score}") 

        return jsonify({
            'prediction': prediction_result,
            'confidence': confidence_score
        })

    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({'error': f'An internal server error occurred: {str(e)}'}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
