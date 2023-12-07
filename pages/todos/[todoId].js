import React, { useState } from "react";

function TodoDetails({ todo }) {
  const [data, setData] = useState(todo);

  const updateHandler = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await res.json();
    setData(data)
  };
  return (
    <div>
      <h1>{data.title}</h1>
      <h1>{`${data.completed}`}</h1>
      <button onClick={() => updateHandler(data.id)}>UpDate</button>
    </div>
  );
}

export default TodoDetails;

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
  );
  const data = await res.json();
  return {
    props: { todo: data },
  };
}
