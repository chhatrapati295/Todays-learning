import React, { useState } from "react";

const Try = () => {
    const[text,setText] = useState(null)
    const AccountStatus = [
      // {value : 'Active',label : 'Active'},
      // {value : 'In active',label : 'In active'},
      // {value : 'Declined',label : 'Declined'},
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
      { value: "Other", label: "Other" },
    ];

  return (
    <div className="m-3 flex flex-col gap-3 text-sm">
      <div>
        <label htmlFor="Fruits">Choose one : </label>
        <select name="" id="Fruits" className="border border-black  p-1 w-28 rounded outline-none">
          <option value="Mango" className="bg-gray-300 rounded-none ">
            Male
          </option>
          <option value="Mango" className="bg-gray-300">
            Female
          </option>
          <option value="Mango" className="bg-gray-300">
            Other
          </option>
        </select>
      </div>
      <div>
        <label htmlFor="Fruits">Choose one : </label>
        <select name="" id="Fruits" className="border border-black  p-1 w-28 rounded outline-none">
          {AccountStatus.map((item,index)=>{
            return (
              <option value={item.value} key={index} className="bg-gray-300" onChange={(e)=>{setText(e.target.value)
                console.log(text)
              }}>
                {item.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Try;
