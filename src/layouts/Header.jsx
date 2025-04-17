import React from 'react';
import AddCarForm from '../components/forms/AddCarForm';

function Header() {
  return (
    <div className="flex flex-col justify-center items-center p-8 gap-5 border-b border-b-baseBege">
      <div className="w-full text-black text-5xl font-bold text-center">
        Car Garage <span className=" text-danger text-5xl font-bold">Application</span>
      </div>
      <AddCarForm />
    </div>
  );
}

export default Header;
