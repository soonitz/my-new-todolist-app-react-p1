import { useState, useEffect } from "react";
import Item from "./Item";

export default function Items({ endpoint = "" }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/items${endpoint}`)
      .then((res) => {
        return res.json();
      })
      .then((json_response) => {
        setData(json_response);
      });
  });

  return (
    <table>
      <td></td>
      <td>할 일</td>
      <td>능력치</td>
      <td></td>
      {data.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </table>
  );
}
