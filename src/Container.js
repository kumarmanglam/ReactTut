import "./ContainerStyle.css";

function Container({ data, id }) {
  console.log(data); // "Kumar"
  console.log(id);
  return (
    <div className="container">
      {data} has a id of {id}
    </div>
  );
}

export default Container;
