import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Places from './components/Places';
import Travel from './components/Travel';
import Location from './components/Location';
import Slider from './components/Slider';
import Footer from './components/Footer';
 

const App= ()=>{
    return(<>
   <Navbar/>
   <Body/>
   <Places/>
   <Travel/>
   <Location/>
   <Slider/>
   <Footer/>
     </>
    );
};

export default App;