function Container4() {
  const list = ["Akhil", "Kashyap", "Mukul", "Rohan"];

  return (
    <div>
      {list.map((name) => {
        return <div>{name}</div>;
      })}
    </div>
  );
}

export default Container4;
