import pickle
import numpy as np

from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

with open('iris_model.pkl', 'rb') as file:
    model = pickle.load(file)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["https://irisflower-2a8m.onrender.com"],
    allow_credentials = True,
    allow_methods = ["GET", "POST", "OPTIONS"],
    allow_headers = ["x"],
)

class Features(BaseModel):
    sepal_length: float
    sepal_width: float
    petal_length: float
    petal_width: float

@app.get("/")
def read_root():
    return {"hello": "world"}

@app.post("/predict")
async def predict_flower(features:Features):
    try:
        feature_array = np.array(
            [
                [
                    features.sepal_length,
                    features.sepal_width,
                    features.petal_length,
                    features.petal_width,
                ]
            ]
        )
        prediction = model.predict(feature_array)
        return {"prediction": prediction[0]}
    except Exception as e:
        return {"error": str(e)} 
