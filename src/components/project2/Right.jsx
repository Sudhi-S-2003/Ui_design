import img1 from "../../assest/assets/img2.jpg";
import img2 from "../../assest/assets/img3.jpg";
import img3 from "../../assest/assets/img1.jpg"
function Right() {
    const features=[
        {id:1,img:img1,heading:"Lower interst Rates"},
        {id:2,img:img2,heading:"Interest free Payments"},
        {id:3,img:img3,heading:"Discount on Materials"}
    ]
  return (
    <div className="w-[50%]">
        <h1 className="text-3xl text-blue-800">Unlock Premium Features Now</h1>
      <div className="flex gap-8 mt-8">
        {
            features.map((feature, index) => {
                return (
<div className=" border-blue-500 border-2 rounded-lg text-center">
            <img src={feature.img} alt="" />
            <h1 className="text-xl text-blue-500">{feature.heading}</h1>
        </div>)
        })
        }

      </div>
      <div className="flex flex-col items-center mt-3 gap-5">
        <button className="bg-blue-950 text-white w-[300px] rounded-xl">Unlock Now</button>
        <button className="bg-blue-950 text-white w-[300px] rounded-xl">Details</button>
      </div>
       
    </div>
  )
}

export default Right