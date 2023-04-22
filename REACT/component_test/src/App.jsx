import {Image} from "../components/logo.jsx";
function App() {
  return (    
  <div className="card">
          <div className="imageDiv">  
              {Image}
        </div>
    <div className="mainContent">
          <p className='userName'>Equilibrium #3249</p>
          <p className='textContent'>Our Equilibrium collection promotes balance and calm</p>
    </div>
    <div className="miscInfo">
      <p  className='versionNr'> 0.041 ETH</p>
      <p  className='subLength'>3 days left</p>

    </div>
    <div className="lineDiv"></div>
    <div className="authorText">
      <p >Creation of Jules Wyvern</p>
    </div>

</div>
  )
}

export default App