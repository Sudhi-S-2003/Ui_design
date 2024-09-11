import React, { useEffect, useState } from "react";
// import Password from './components/Password/Password'
// import Typing from "./components/Typing/Typing";
import LocationSearch from "./components/ReactGoogleMap/LocationSearch";
// import DragAndDrop from './components/DragAndDrop/DragAndDrop.jsx'
// import Header from './components/project2/Header'
// import Navbar from './components/project2/Navbar'
// import Hero from './components/project2/Hero'
// import Navbar from './components/project1/Navbar'
// import Form from './components/project1/Form'
// import Project2 from './components/project2/Project2'
function App() {
  // const MongoDBtext =
  //   "MongoDB: A NoSQL database that uses a flexible JSON-like structure to store data, making it perfect for handling unstructured data.";
  // const Expresstext =
  //   "Express: A web application framework for Node.js, designed for building APIs and web applications quickly and efficiently.";
  // const Reacttext =
  //   "React: A JavaScript library for building fast, interactive user interfaces, mainly used for single-page applications.";
  // const Angulartext =
  //   "Angular: A TypeScript-based web application framework developed by Google, popular for building dynamic and robust web apps.";
  // const Nodejstext =
  //   "Node.js: A JavaScript runtime built on Chrome's V8 engine, used for building scalable and high-performance backend applications.";
  // const TailwindCSStext =
  //   "TailwindCSS: A utility-first CSS framework for rapidly building custom designs directly in your HTML.";

  // const descriptions = [
  //   MongoDBtext,
  //   Expresstext,
  //   Reacttext,
  //   Angulartext,
  //   Nodejstext,
  //   TailwindCSStext,
  // ];

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [isTypingComplete, setIsTypingComplete] = useState(false);

  // useEffect(() => {
  //   if (isTypingComplete) {
  //     const timer = setTimeout(() => {
  //       setIsTypingComplete(false);
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
  //     }, 0);
  //     return () => clearTimeout(timer);
  //   }
  // }, [isTypingComplete]);
  return (
    <div>
      {/* <Navbar/>
      <Form/> */}
      {/* <Header/>
      <Navbar/>
      <Hero/> */}
      {/* <Project2/> */}
      {/* <DragAndDrop/> */}
      {/* <Password/> */}
      {/* <Typing
        text={descriptions[currentIndex]}
        speed={10}
        onComplete={() => setIsTypingComplete(true)}
      /> */}
      <LocationSearch/>
    </div>
  );
}

export default App;
