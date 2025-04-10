function ChildComp({ getColor }) {
  function callBack(e) {
    const value = e.target.value;
    getColor(value);
  }

  return <input type="text" onChange={callBack}></input>;
}

export default ChildComp;
