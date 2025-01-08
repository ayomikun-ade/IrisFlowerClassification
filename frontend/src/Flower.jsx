import axios from "axios";
import { useState } from "react";

const Flower = () => {
  const [features, setFeatures] = useState({
    s_length: "",
    s_width: "",
    p_length: "",
    p_width: "",
  });

  const [prediction, setPrediction] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFeatures((prevFeatures) => ({
      ...prevFeatures,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(features);

    const data = {
      sepal_length: parseFloat(features.s_length),
      sepal_width: parseFloat(features.s_width),
      petal_length: parseFloat(features.p_length),
      petal_width: parseFloat(features.p_width),
    };

    try {
      const response = await axios.post(
        "https://irisflowerclassification-yqhg.onrender.com/predict",
        data
      );
      setPrediction(response.data.prediction);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-lg px-8 py-6 mt-4 font-[Poppins] m:w-96">
      <span className="text-xs text-left">
        *Form to collect iris flower data for prediction
      </span>
      <form action="" className="mt-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="s_length">Sepal Length:</label>
          <input
            type="number"
            id="s_length"
            value={features.s_length}
            onChange={handleChange}
            placeholder="Enter a value in cm"
            className="px-2.5 py-1.5 text-sm outline-none rounded-md border-2 focus:border-blue-300"
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="s_width">Sepal Width:</label>
          <input
            type="number"
            id="s_width"
            value={features.s_width}
            onChange={handleChange}
            placeholder="Enter a value in cm"
            className="px-2.5 py-1.5 text-sm outline-none rounded-md border-2 focus:border-blue-300"
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="p_length">Petal Length:</label>
          <input
            type="number"
            id="p_length"
            value={features.p_length}
            onChange={handleChange}
            placeholder="Enter a value in cm"
            className="px-2.5 py-1.5 text-sm outline-none rounded-md border-2 focus:border-blue-300"
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="p_width">Petal Width:</label>
          <input
            type="number"
            id="p_width"
            value={features.p_width}
            onChange={handleChange}
            placeholder="Enter a value in cm"
            className="px-2.5 py-1.5 text-sm outline-none rounded-md border-2 focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 rounded-lg px-3 py-1 text-white mt-4 text-center w-full"
        >
          Predict
        </button>
      </form>

      {prediction && (
        <div className="mt-4">
          <h2 className="text-center">
            Prediction: <span className="font-semibold">{prediction}</span>
          </h2>
        </div>
      )}
    </div>
  );
};

export default Flower;
