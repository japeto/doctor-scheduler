import "./style.css"
import 'bootstrap/dist/css/bootstrap.css';

const Home = () =>{
  return(
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="jumbotron">
             <h1>DoctorSched</h1>
             <p>Sistema planificador para consultorio medico</p>
             <div>
                <a className="btn btn-info" href="/login">Acceder</a>
             </div>
          </div>
        </div>
      </div>
      <div className="row" >
        <div className="col-6 py-3">
          <h3>Nuestros servicios</h3>
        </div>
        <div className="col-6 py-3">
          <h3>Característica</h3>
        </div>
      </div>
      
      <div className="row">

      </div>

      <footer>
        DoctorSched -- marca registrada 2023-2024
      </footer>
    </div>

    // <div className="header"> 
    //   <header>
    //     <h1>DoctorSched</h1>
    //     <h3>Sistema planificador para consultorio medico</h3>
    //     <b>Empresa X.Y.Z</b>
    //   </header>
      
    //   <div className="App-body">
    //     <div className="App-header"></div>
    //     <div className="App-buttons"></div>
    //   </div>
      

    //   <footer>
    //     DoctorSched -- marca registrada 2023-2024
    //   </footer>
    // </div>
  ) 
}
export default Home;