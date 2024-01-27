import "./homecss.css"

const Home = () =>{
  return(
    <div className="header"> 
      <header>
        <h1>DoctorSched</h1>
        <h3>Sistema planificador para consultorio medico</h3>
        <b>Empresa X.Y.Z</b>
      </header>
      
      <div className="App-body">
        <div className="App-header"></div>
        <div className="App-buttons"></div>
      </div>
      

      <footer>
        DoctorSched -- marca registrada 2023-2024
      </footer>
    </div>
  ) 
}
export default Home;