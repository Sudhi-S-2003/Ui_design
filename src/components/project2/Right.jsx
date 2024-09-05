import img1 from "../../assest/assets/img2.jpg";
import img2 from "../../assest/assets/img3.jpg";
import img3 from "../../assest/assets/img1.jpg";
import { useEffect, useState } from "react";
function Right() {
  const features = [
    { id: 1, img: img1, heading: "Lower interst Rates" },
    { id: 2, img: img2, heading: "Interest free Payments" },
    { id: 3, img: img3, heading: "Discount on Materials" },
  ];
  const [carouselfeatures, Setcarouselfeatures] = useState(features);
  const [numVisible, SetNumVisible] = useState(3);
  const handlecarousel = (val) => {
    if (val === -1) {
      const copyfeature = [...carouselfeatures];
      const val2 = copyfeature.splice(0, 1);
      copyfeature.splice(copyfeature.length, 0, ...val2);
      Setcarouselfeatures([...copyfeature]);
    } else if (val === 1) {
      const copyfeature = [...carouselfeatures];
      const val2 = copyfeature.splice(copyfeature.length - 1, 1);
      copyfeature.splice(0, 0, ...val2);
      Setcarouselfeatures(copyfeature);
    }
  };

  const updateVisibleItems = () => {
    if (window.innerWidth >= 1024) {
      SetNumVisible(3);
    } else if (window.innerWidth >= 768) {
      SetNumVisible(2);
    } else {
      SetNumVisible(1);
    }
  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);
  return (
    <div className="md:w-[50%]">
      <h1 className="text-center md:text-left text-3xl text-blue-800">
        Unlock Premium Features Now
      </h1>
      <div className="flex items-center gap-3">
        <button className="btn btn-circle" onClick={() => handlecarousel(-1)}>
          ❮
        </button>
        <div className="flex gap-8 mt-8">
          {carouselfeatures.slice(0, numVisible).map((feature) => {
            return (
              <div className=" border-blue-500 border-2 rounded-lg text-center flex-1">
                <img src={feature.img} alt="" className="w-auto" />
                <h1 className="text-lg text-blue-500">{feature.heading}</h1>
              </div>
            );
          })}
        </div>

        <button className="btn btn-circle" onClick={() => handlecarousel(1)}>
          ❯
        </button>
      </div>

      <div className="flex flex-col items-center mt-3 gap-5 p-2">
        <button className="bg-blue-950 text-white w-[90%] max-w-[300px] rounded-xl">
          Unlock Now
        </button>
        <button className="bg-blue-950 text-white w-[90%] max-w-[300px] rounded-xl">
          Details
        </button>
      </div>
    </div>
  );
}

export default Right;
