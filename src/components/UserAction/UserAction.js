import React from 'react';

const UserAction = (value) => {
  return (
    <div>
      <div className="instruction">Inserisci i grammi di farina</div>
      <div>
        <div className="flex-v-center">
          <div className="quantity-container">
            <input 
            type="number"
            id="flour"
            onChange={() => {
              value('111');
            }}
            />
            <div className="quantity">g</div>
          </div>
        </div>
      </div>
      {/* <div className="action">
      {this.actions(this.state.quantity)}
      </div> */}
    </div>
  );
}

export default UserAction;