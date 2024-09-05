import img1 from "../../assest/assets/img2.jpg";
import img2 from "../../assest/assets/img3.jpg";
import img3 from "../../assest/assets/img1.jpg";
import { useState } from "react";
function Right() {
  const features = [
    { id: 1, img: img1, heading: "Lower interst Rates" },
    { id: 2, img: img2, heading: "Interest free Payments" },
    { id: 3, img: img3, heading: "Discount on Materials" },
  ];
  const [carouselfeatures,Setcarouselfeatures]=useState(features);
  const handlecarousel=(val)=>{
    if(val===-1){
      const copyfeature=[...carouselfeatures];
      const val2=copyfeature.splice(0,1);
      copyfeature.splice(copyfeature.length,0,...val2)
      Setcarouselfeatures([...copyfeature])
    }
    else if(val===1){
      const copyfeature=[...carouselfeatures];
      const val2=copyfeature.splice(copyfeature.length-1,1);
      copyfeature.splice(0,0,...val2);
      Setcarouselfeatures(copyfeature);

    }
  }
  return (
    <div className="w-[50%]">
      <h1 className="text-3xl text-blue-800">Unlock Premium Features Now</h1>
      <div className="flex items-center gap-3">
        <a href="#slide1" className="btn btn-circle" onClick={()=>handlecarousel(-1)}>
          ❮
        </a>
        <div className="flex gap-8 mt-8">
          {carouselfeatures.map((feature, index) => {
            return (
              <div className=" border-blue-500 border-2 rounded-lg text-center w-[75px]">
                <img src={feature.img} alt=""  className="h-[90px]"/>
                <h1 className="text-lg text-blue-500">{feature.heading}</h1>
              </div>
            );
          })}
        </div>

        <a href="#slide3" className="btn btn-circle" onClick={()=>handlecarousel(1)}>
          ❯
        </a>
      </div>

      <div className="flex flex-col items-center mt-3 gap-5">
        <button className="bg-blue-950 text-white w-[300px] rounded-xl">
          Unlock Now
        </button>
        <button className="bg-blue-950 text-white w-[300px] rounded-xl">
          Details
        </button>
      </div>
    </div>
  );
}

export default Right;
