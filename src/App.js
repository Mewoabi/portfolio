 import React from "react";
 import navbar from "./components/navbar/navbar";
 import about from "./components/about/about";
 import services from "./components/services/services";
 import navbar from "./components/navbar/navbar";
 import Footer from "./components/footer/Footer";
 import experience from "./components/experience/experience";
 import portfolio from "./components/portfolio/portfolio";
 import contact from "./components/contact/contact";
 import testimonial from "./components/testimonial/testimonial";
 import Header from "./components/header/Header";

 export const App  = () => {
  return ( 
    <>
      <Header/>
      <navbar/>
      <about/>
      <experience/>
      <services/>
      <portfolio/>
      <testimonial/>
      <contact/>
      <footer/>
    </>
   );
 }
  
export default App; //Always export the  component as default
