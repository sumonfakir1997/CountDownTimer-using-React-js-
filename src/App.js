import Timer from "./Compoment/Timer";

const  App = () => {
  return (
    <div className="App text-center font-bold bg-blue-300">
        
        <Timer duration = { 7* 24 * 60 * 60 * 1000}/>
    </div>
  );
}

export default App;
