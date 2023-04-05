import logo from './logo.svg';
import './App.css';
import Cardcomponents from "./components/card";
import Headernav from './components/header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>

      <div className='heather'>
        <Headernav navtittle={"Galeria de imagenes con React"} />
      </div>

      <div className='gallery'>
        <Cardcomponents descripcion="Hermosa aver con un gran instinto de caza" titulo="Halcon" url="https://cdn.pixabay.com/photo/2023/03/14/11/10/bird-7852081_1280.jpg" />
        <Cardcomponents descripcion="Hermoso gato color cafe" titulo="Gatito" url="https://cdn.pixabay.com/photo/2023/03/27/14/18/british-shorthair-7880879_1280.jpg" />
        <Cardcomponents descripcion="Este pequeño felino se destaca por tener dos colores muy combinables" titulo="Gato blanco" url="https://cdn.pixabay.com/photo/2023/03/28/09/28/cat-7882701_1280.jpg" />
        <Cardcomponents descripcion="Pequeñas aves muy ruidosas y rapidas" titulo="Gorriones" url="https://cdn.pixabay.com/photo/2023/03/29/03/00/birds-7884473_1280.jpg" />
        <Cardcomponents descripcion="Pequeño insecto inofencivo y muy bonito" titulo="Mariquita" url="https://cdn.pixabay.com/photo/2023/03/31/12/57/ladybug-7889937_1280.jpg" />
        <Cardcomponents descripcion="Insecto volador con colores muy llamativos" titulo="Mariposa" url="https://cdn.pixabay.com/photo/2023/03/19/16/15/butterfly-7862893_1280.jpg" />
      </div>

      <div className='footer'>
        <Footer className='footer text-center' footerText="Animales geniales!" />
      </div>

    </div>


  );
}

export default App;
