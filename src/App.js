import React from 'react';
import SelectPlan from "./components/SelectPlan"
import Navbar from './layout/Navbar';
import Footer from './layout/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <SelectPlan />
      <Footer />
    </div>
  );
}

export default App;
