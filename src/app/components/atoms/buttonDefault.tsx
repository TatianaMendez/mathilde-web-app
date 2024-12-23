import React from 'react';

const buttonDefault = ({txtBtn }: { txtBtn:string }) => {
  return (
      <div>
            <button className="mth-btn-default">{txtBtn}</button>
      </div>
  );
};

export default buttonDefault;
