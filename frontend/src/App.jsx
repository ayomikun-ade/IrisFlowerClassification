import Flower from "./Flower";

const App = () => {
  return (
    <div className="bg-blue-300 min-h-screen">
      <h1 className="font-[Poppins] text-2xl text-center pt-10 font-semibold">
        Iris Flower Classification
      </h1>
      <div className="flex justify-center">
        <Flower />
      </div>
    </div>
  );
};

export default App;
