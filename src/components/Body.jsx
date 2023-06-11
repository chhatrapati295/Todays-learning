import React from "react";
import Buttons from "./Buttons";
import BasicTable from "./Table";

const Body = () => {
  
  return (
    <div className=" border w-full border-blue-400 min-h-screen p-2 flex flex-col gap-2 text-[12px]">
      <span className="text-3xl font-semibold">
        Withdrawals Processing Report
      </span>
      <span className="block  font-semibold text-center ">
        This report is used to process withdrawals placed by users.
      </span>
      <div className="flex gap-6 my-4">
        <div className="flex flex-col gap-2">
          <InpField name="User ID : " typ="number" />
          <InpField name="Username : " typ="number" />
          <InpField name="Withdrawal ID : " typ="number" />
          <InpField name="CashFree Transfer ID : " typ="number" />
          <InpField name="Razorpay Transfer ID : " typ="number" />
        </div>
        <div className="flex flex-col gap-2">
          <InpField name="Withdrawal amount To : " typ="number" />
          <InpField name="Withdrawal amount From : " typ="number" />
          <SelectField name="Withdrawal type : " />
          <SelectField name="Withdrawal status : " />
          <SelectField name="VIP category : " />
        </div>
        <div className="flex flex-col gap-2">
          <InpField name="Date from : " typ="date" />
          <InpField name="Date till : " typ="date" />
          <SelectField name="State : " />
          <InpField name="Flag count : " typ="number" />
          <SelectField name="Mobile verified : " />
        </div>
        <div className="flex flex-col gap-2">
          <SelectField name="Email verified : " />
          <SelectField name="Pan status : " />
          <SelectField name="Address proof type : " />
          <SelectField name="Address proof status : " />
        </div>
        <div className="flex flex-col gap-2 border border-gray-400 p-2 rounded">
          <div className="flex gap-8">
            <label htmlFor="gender" className="w-36 whitespace-nowrap">
              Total withdrawals :{" "}
            </label>
            <span className="">Count : 12</span>
            <span className="">Amount : 19648.00</span>
          </div>
          <div className="flex gap-8">
            <label htmlFor="gender" className="w-36 whitespace-nowrap">
              Full-filled withdrawals :{" "}
            </label>
          </div>
          <div className="flex gap-8">
            <label htmlFor="gender" className="w-36 whitespace-nowrap">
              Pending withdrawals :{" "}
            </label>
            <span className="">Count : 12</span>
            <span className="">Amount : 19648.00</span>
          </div>
          <div className="flex gap-8">
            <label htmlFor="gender" className="w-36 whitespace-nowrap">
              Under-verification withdrawals :{" "}
            </label>
          </div>
          <div className="flex gap-8">
            <label htmlFor="gender" className="w-36 whitespace-nowrap">
              Cancelled withdrawals :{" "}
            </label>
          </div>
          <div className="flex gap-8">
            <label htmlFor="gender" className="w-36 whitespace-nowrap">
              Denied withdrawals :{" "}
            </label>
          </div>
        </div>
      </div>
      <Buttons />
      <BasicTable />
    </div>
    // <Try />
  );
};

const InpField = ({ name, typ }) => {
  return (
    <div className=" flex ">
      <label htmlFor="userID" className="w-36 whitespace-nowrap">
        {name}
      </label>
      <input
        type={typ}
        id="userID"
        className="p-1  border-gray-400 border rounded w-28"
      />
    </div>
  );
};

const SelectField = ({ name }) => {
  const statements = [
    // { value: "Any", label: "Any" },
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  const AccountStatus = [
    { value: "Active", label: "Active" },
    { value: "In active", label: "In active" },
    { value: "Declined", label: "Declined" },
  ];
  return (
    <div className="flex ">
      <label htmlFor="gender" className="w-36 whitespace-nowrap">
        {name}
      </label>
      <select
        id="gender"
        className="w-28 border rounded border-gray-400  outline-none p-1"
        placeholder="Any"
      >
        {statements.map((item) => {
          return <option value={item.value}>{item.label}</option>;
        })}
      </select>

      <div></div>
    </div>
  );
};

export default Body;
