import React from 'react';

const UserAction = (props) => {
  const { actions } = props;

  return (
    <div>
      <div className="instruction">Inserisci i grammi di farina</div>
      <div>
        <div className="flex-v-center">
          <div className="quantity-container">
            <input
              type="number"
              id="flour"
              onChange={(e) => {
                actions(e.target.value);
              }}
            />
            <div className="quantity">g</div>
          </div>
        </div>
      </div>
      {/* <div className="action">{}</div> */}
    </div>
  );
};

export default UserAction;
