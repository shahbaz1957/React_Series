import { useLoaderData } from "react-router-dom"




function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
   <div className='text-center mt-4 bg-gray-600 text-white p-4 text-3xl'>
 <div >Github followers: {data.followers}
     
    <img  className=' w-16 flex flex-wrap rounded-full ml-96 mt-3'  src={data.avatar_url} alt="Git picture" width={300} />

    </div>

   </div>
  )
}

export default Github


