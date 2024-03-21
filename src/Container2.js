function Container2(obj) {
  console.log(obj);
  let { data, id } = obj;
  console.log(data); // Kumar
  console.log(id); // 23
  return <div></div>;
}

export default Container2;
