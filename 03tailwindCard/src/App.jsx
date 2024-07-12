
import './App.css'
import Card from './components/Card'

function App() {


 let person = 'shahbaz';

  return (
    <>
    <h1 className='bg-green-500 rounded-xl p-4 mt-2'>Tailwind Css</h1>
   <Card  userName= "shahbaz" btnValue = "Login"/>
   <Card  userName= "Alam" btnValue = "Sign Up" value = {person}/>
    </>
  )
}

export default App
