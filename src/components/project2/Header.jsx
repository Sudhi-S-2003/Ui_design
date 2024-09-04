import logo from '../../assest/assets/real-estate-house.png'
function Header() {
  return (
    <div className="flex justify-evenly items-center h-[70px] bg-slate-300">
        <img src={logo} alt="logo" className='h-[150px]'/>
        <h1 className="text-2xl font-bold">XYZ SYSTEM LLP.</h1>
    </div>
  )
}

export default Header