function Container3() {
  function handleClick() {
    console.log("Button Clicked");
  }
  function outerFunction() {
    handleClick();
  }
  const outerFuction2 = () => handleClick();
  return (
    <div>
      <button onClick={() => handleClick()}>Click me 1</button>
      <button onClick={handleClick}>Click me 2</button>
      <button onClick={outerFunction}>Click me 3</button>
      <button onClick={outerFuction2}>Click me 4</button>
    </div> // fragments
  );
}

export default Container3;
