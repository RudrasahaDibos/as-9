
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Reviews from './Component/Reviews/Reviews';
import Dashborad from './Component/Dashborad/Dashborad';
import Blogs from './Component/Blogs/Blogs';
import About from './Component/About/About';
import NotFound from './Component/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
        <Route path="/"element={<Home></Home>}></Route> 
         <Route path="/home"element={<Home></Home>}></Route> 
         <Route path="/review" element={<Reviews></Reviews>}></Route>
         <Route path="/dashborad" element={<Dashborad></Dashborad>}></Route>
         <Route path="/blogs" element={<Blogs></Blogs>}></Route>
         <Route path="/about" element={<About></About>}></Route>
         <Route path="*" element={<NotFound></NotFound>}></Route>
       </Routes>   
         <div className='bg-indigo-900 grid-cols-4 grid grid-4 '>
           <div className='ml-20'>
               <h1 className='text-3xl'>About</h1>
               <p className='hover:text-gray-200'>Facebook was one of the first large-scale social networks. In The Facebook Effect, David Kirkpatrick stated that Facebook's structure makes it difficult to replace, because of its "network effects".[neutrality is disputed] As of 2016, it is estimated that 44 percent of the US population gets news through Facebook.[569]</p>

          </div>  
          <div className='mt-9 hover:text-gray-200 ml-20'>
                  
                 <p>Mohammodpur,Dhaka</p>
                 <p className='text-xl' >+8801705155583</p>
                 <p>dibossaha860cse@gamil.com</p>
          </div> 

          <div className='mt-2 ml-20'>
                <h1 className='text-3xl mb-10'>Map</h1>
                <p className='mt-2 w-40 ml-20 '>
                <img  src="https://www.researchgate.net/profile/Md-Hossain-167/publication/329427493/figure/fig1/AS:700539323052035@1544032998607/Road-map-of-Dhaka-city-with-the-5-study-blocks.png" alt="" />
                </p>
          </div>
          
         </div>
      
    </div>
  );
}

export default App;
