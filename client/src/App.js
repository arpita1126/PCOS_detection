import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState(null);
  const [diagnosis, setDiagnosis] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("image", image); // ✅ Use 'image' as the key

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setDiagnosis(result.diagnosis);          // ✅ Set diagnosis
        setImageUrl(result.image_url);           // ✅ Optional: set image URL
        setPrediction(null);                     // ✅ Clear prediction/confidence if applicable
        setConfidence(null);
      } else {
        alert(result.error || "An error occurred while processing the image.");
      }
      setName(null);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while uploading the image.");
    }
  };

  return (
    <div className="container">
      <header>
        <nav>
          <div className="logo">
            <h1>
              Ova<span>health</span>
            </h1>
          </div>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">How it works?</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">FAQ's</a></li>
            <li><a href="#">Log out</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="form-container">
          <h2>
            Ova<span>health</span>
          </h2>
          <p>
            Simplifying PCOS diagnosis through advanced AI, supporting
            women's health decisions.
          </p>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <label>
              Upload image:
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
              />
            </label>
            <button type="submit">Run Diagnostic</button>
          </form>

          {diagnosis && (
            <div className="result">
              <h3>Diagnosis: {diagnosis}</h3>
              {imageUrl && (
                <img
                  src={`http://127.0.0.1:5000${imageUrl}`}
                  alt="Uploaded scan"
                  width="100"
                />
              )}
            </div>
          )}

          {prediction && (
            <div className="result">
              <h3>Prediction: {prediction}</h3>
              <p>Confidence: {confidence.toFixed(2)}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
