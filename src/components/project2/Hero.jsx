import Left from "./Left"
import Right from "./Right";

function Hero() {
  return (
    <div className=" md:flex justify-center items-center p-6">
        <Left/>
        <Right/>
    </div>
  )
}

export default Hero