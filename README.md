
---

# 🧠 PCOS Detection Using Machine Learning

A full-stack machine learning project to detect **Polycystic Ovary Syndrome (PCOS)** using clinical data. The system features a trained ML model (90% accuracy), real-time backend API, and a user-friendly frontend interface.

> 🔗 **Live Frontend (In Progress)**: [https://pcos-eta.vercel.app/](https://pcos-eta.vercel.app/)
> ⚙️ **Backend API**: *Still building...*
> 🧠 **Model Training Notebook**: *Still building...*

---

## 🚧 Project Status

🚀 This project is actively under development.

* 🏗️ Frontend is **hosted** but being enhanced with more features and validations.
* ⚙️ Backend integration and API endpoints are **under construction**.
* 🧬 **Larger clinical datasets** are currently being collected and integrated to improve the model and reduce **underfitting**.
* 🔍 Improving prediction reliability and preparing for production-scale deployment.

---

## 📁 Project Structure

```
pcos-detection/
├── client/           # Frontend (React/Next.js) - hosted on Vercel
├── ml_model/         # Training scripts, notebooks, and exported model (h5)
├── server/           # Backend server (Flask/FastAPI)
├── requirements.txt  # Dependencies
└── README.md
```

---

## 📊 Dataset

* **Source**: [Kaggle PCOS Dataset](https://www.kaggle.com/datasets/anikannal/pcos-data)
* **Attributes**: Hormone levels, BMI, follicle count, cycle patterns, and more.
* **Current Limitation**: Dataset is relatively small — working on collecting a **larger and more diverse dataset** to:

  * Avoid **underfitting**
  * Improve model **generalization**
  * Enhance **clinical accuracy**

---

## 🧠 Machine Learning Overview

* **Framework**: TensorFlow / Keras
* **Accuracy**: \~90% on validation set
* **Export**: Saved in `.h5` format for backend use

Example architecture:

```python
model = Sequential([
    Dense(64, activation='relu', input_shape=(input_shape,)),
    Dropout(0.2),
    Dense(32, activation='relu'),
    Dense(1, activation='sigmoid')
])
```

---

## 🌐 Frontend

* **Live URL**: [https://pcos-eta.vercel.app/](https://pcos-eta.vercel.app/) (🛠️ Improving responsiveness and features)
* Built with **React** / **Next.js**
* User inputs clinical data → gets instant prediction via backend

---

## ⚙️ Backend (Coming Soon)

* Flask/FastAPI microservice
* Exposes `/predict` endpoint
* Accepts input features and returns JSON prediction

```json
{
  "pcos_detected": true,
  "confidence": 0.91
}
```

---

## ✅ Current Results

| Metric    | Value |
| --------- | ----- |
| Accuracy  | 90%   |
| Precision | 88%   |
| Recall    | 91%   |
| F1-Score  | 89%   |

> ⚠️ Results are based on limited training data. More robust metrics coming soon after dataset expansion.

---

## 🧠 Roadmap & TODO

* [x] Train initial model
* [x] Export model to `.h5`
* [x] Build frontend UI
* [ ] Complete backend API
* [ ] Integrate frontend ↔ backend
* [ ] Expand dataset (more diversity & volume)
* [ ] Optimize model to reduce underfitting
* [ ] Add explanations (XAI)
* [ ] Add validation and error handling in UI

---

## 📜 License

MIT License — free to use, modify, and share with proper attribution.

---

## 🤝 Acknowledgments

* [Kaggle PCOS Dataset]
* TensorFlow, Pandas, Flask
* Google Colab
* Vercel (for frontend hosting)

---
