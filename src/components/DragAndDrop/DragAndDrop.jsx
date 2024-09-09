import { useState } from "react";

function DragAndDrop() {
  const initialList = [
    { name: "item1" },
    { name: "item2" },
    { name: "item3" },
    { name: "item4" },
    { name: "item5" },
    { name: "item6" },
    { name: "item7" },
    { name: "item8" },
    { name: "item9" },
    { name: "item10" },
  ];

  const [lists, setLists] = useState(initialList);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setHoveredIndex(index);
  };

  const handleDrop = (index) => {
    if (draggedItemIndex === null) return;

    const copyList = [...lists];
    const draggedItem = copyList[draggedItemIndex];
    copyList.splice(draggedItemIndex, 1);
    const newIndex = index > draggedItemIndex ? index - 1 : index;
    copyList.splice(newIndex, 0, draggedItem);

    setLists(copyList); 
    setDraggedItemIndex(null);
    setHoveredIndex(null);
  };

  return (
    <div>
      <div className="w-[300px] mt-5 m-auto bg-slate-500 p-2 mb-9">
        {lists.map((item, index) => (
          <div key={index}>
            {hoveredIndex === index && draggedItemIndex !== null && (
              <div className="w-full bg-blue-300 h-[10px] my-3"></div>
            )}

            <div
              className={`w-[100%] bg-slate-300 h-[100px] mb-2 text-center pt-9 ${
                draggedItemIndex === index ? "opacity-50" : ""
              }`}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={() => handleDrop(index)}
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DragAndDrop;
