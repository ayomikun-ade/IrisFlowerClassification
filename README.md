# Iris Flower Classification

## Project Overview
The Iris Flower Classification project is a machine learning application that predicts the species of an iris flower (Setosa, Versicolor, or Virginica) based on its sepal and petal measurements. This project leverages a pre-trained classification model built using the famous Iris dataset.

## Features
- User-friendly web interface for inputting flower measurements.
- Real-time prediction using a backend API powered by FastAPI.
- Responsive design with Tailwind CSS for an intuitive user experience.

## Technologies Used
### Frontend:
- **React.js**: For building the web interface.
- **Axios**: For making HTTP requests to the backend.
- **Tailwind CSS**: For styling and responsive design.

### Backend:
- **FastAPI**: For serving the machine learning model and handling requests.
- **Python**: For backend logic and integration.
- **Pickle**: For loading the pre-trained machine learning model.
- **K-Nearest Neighbors (KNN)**: The algorithm used to train the model.
- Additional libraries such as NumPy and Scikit-learn for data manipulation and modeling.

### Deployment:
- **Render**: Hosting the backend API.

## Usage
1. Input the following measurements in the form:
   - Sepal Length (cm)
   - Sepal Width (cm)
   - Petal Length (cm)
   - Petal Width (cm)

2. Click the "Predict" button.
3. The predicted species of the iris flower will be displayed.

## Model Details
- The model is a pre-trained classifier trained on the Iris dataset using the K-Nearest Neighbors (KNN) algorithm.
- Features used for prediction:
  - Sepal Length
  - Sepal Width
  - Petal Length
  - Petal Width

## Example API Request
### Endpoint:
`POST /predict`

### Request Body:
```json
{
  "sepal_length": 5.1,
  "sepal_width": 3.5,
  "petal_length": 1.4,
  "petal_width": 0.2
}
```

### Response:
```json
{
  "prediction": "Iris-Setosa"
}
```

## Contributing
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push to your branch.
4. Create a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

For questions or support, please contact me [Ayomikun Adeousn](mailto:ayoadeosun10@gmail.com.com).

