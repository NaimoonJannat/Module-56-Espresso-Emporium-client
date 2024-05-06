
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
const loadedCoffees = useLoaderData();
const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      <Header></Header>
      <div className='w-11/12 mx-auto my-10 text-center'>
     <h1 className="text-6xl font-semibold text-purple-500">Espresso Emporium : {coffees.length}</h1>
     <Link to="/addcoffee" className='btn my-4'>Add Coffee</Link>
     <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
      {
        coffees.map(coffee => <CoffeeCard 
          key={coffee._id} 
          coffee={coffee}
          coffees = {coffees}
          setCoffees = {setCoffees}
          ></CoffeeCard>)
      }
     </div>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default App
