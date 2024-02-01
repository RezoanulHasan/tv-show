import React from 'react';
import { Bars } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div>
            <div className="flex justify-center items-center    h-[calc(100vh-68px)]  ">
            
            <Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperclassName=""
  visible={true}
/>
        </div>
        </div>
    );
};

export default Spinner;