import community from '../../assest/assets/membership.jpg'
function Left() {
  return (
    <div className='w-[50%]'>
        <h1 className="text-3xl">New Arrival</h1>
        <h1 className="text-sm">join today</h1>
        <img src={community} alt="community" className='h-[300px] m-auto mb-10'/>
        <button className='bg-slate-400 rounded-full w-[200px] text-2xl text-blue-700 border-4 p-1 m-auto block'>join now</button>
    </div>
  )
}

export default Left