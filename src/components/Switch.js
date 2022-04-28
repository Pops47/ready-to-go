const Switch = ({ switchValue, setSwitch }) => {
  return (
    <div className="switch">
      <button
        className={switchValue === true ? "isActive" : "isInactive"}
        onClick={() => {
          setSwitch(true);
        }}
      >
        ON
      </button>
      <button
        className={switchValue === false ? "isActive" : "isInactive"}
        onClick={() => {
          setSwitch(false);
        }}
      >
        OFF
      </button>
    </div>
  );
};

export default Switch;
