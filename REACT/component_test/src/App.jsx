import imageSrc from './assets/equilibrium.jpg';
function App() {
  return (    
  <div className="card">
  <div className="imageDiv">
    <img className="equilibrium" src={imageSrc} alt="equilibrium" />
      </div>
  <div className="mainContent">
        <h1>Equilibrium #3249</h1>
        <p>Our Equilibrium collection promotes balance and calm</p>
  </div>
  <div className="miscInfo">
    <h4>0.041 ETH</h4>
    <h4>3 days left</h4>

  </div>
  <div className="authorText">
    <h5>Creation of Jules Wyvern</h5>
  </div>

</div>
  )
}

export default App