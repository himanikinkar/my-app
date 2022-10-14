import './App.css';
import Data from './records.json';

function App(){
  return (
    <div className="App">
      <br />
      <div className="Header">User Information</div>
      <div className="upper-box">
      {Data && Data.map(data => {
          return (
             <div className="box" key={data.id}>
              <div className="Image">
               <img src={data.image} alt="" width="150px" height="150px"/>
              </div>
              {data.name}<br />
              {data.number}<br />

              {data.tech.map( skill => {
                return(
                  <div key={data.id}>
                  {skill.name}
                  </div>
                )
              }

              )}
             </div>

          )
        })
      }
    </div>
    </div>
  )
}

export default App;