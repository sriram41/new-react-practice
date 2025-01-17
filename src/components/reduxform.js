import { useState } from "react";
import { useDispatch } from "react-redux";

const ReduxForm = () => {
  const [balanceCount, setBalanceCount] = useState('');
  const [names, setNames] = useState('');
  const [mobiles, setMObile] = useState('');

  const dispatch = useDispatch();

  return (
    <div>
      <form>
        <div>
          <input
            type="number"
            placeholder="balance"
            value={balanceCount}
            onChange={(e) => setBalanceCount(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              dispatch({ type: 'deposit', payload: balanceCount });
              setBalanceCount('');
            }}
          >
            Deposit
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch({ type: 'withdraw', payload: balanceCount });
              setBalanceCount('');
            }}
          >
            Withdraw
          </button>
        </div>

        <input
          type="text"
          placeholder="name"
          value={names}
          onChange={(e) => setNames(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            dispatch({ type: 'fullnameupdate', payload: names });
            setNames('');
          }}
        >
          Update Name
        </button>

        <input
          type="text"
          placeholder="mobile"
          value={mobiles}
          onChange={(e) => setMObile(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            dispatch({ type: 'mobileupdate', payload: mobiles });
            setMObile(''); // Clear mobile input after dispatch
          }}
        >
          Update Mobile
        </button>

        <button
          type="button"
          onClick={() => {
            dispatch({ type: 'reset' });
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default ReduxForm;
