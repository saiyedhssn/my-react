import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Banner from './component/Banner/Banner';
import Services from './component/Services/Services';
import Test from './component/Test/Test';
import Home from './component/Home/Home';
import Home2 from './component/Home2/Home2';
import Product from './component/Product/Product';
import Background from './component/Background/Background';
import Footer from './component/Footer/Footer';
import About from './component/About/About';
import Commonpart from './component/Commonpart/Commonpart';
import Commontwo from './component/Commontwo/Commontwo';
import Blogshow from './component/Blogshow/Blogshow';
import { Route, Routes } from 'react-router-dom';
import Reg from './component/Reg/Reg';
import Signin from './component/Signin/Signin';
import RequireAuth from './component/RequireAuth/RequireAuth';



function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>

        <Route path="/blog" element={ 

          <RequireAuth>
            <Blogshow/>
          </RequireAuth>
          
        }></Route>

        <Route path="/reg" element={<Reg/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
      </Routes>
      {/* <Home/> */}
   
      
     
      {/* <Commonpart/> */}
      {/* <Commontwo/>  */}
      {/* <Banner/>  */}

       {/* <Services/> 
       <Blogshow/> */}

       <Footer/>
       
       
        
      
    </div>
  );
}

export default App;
