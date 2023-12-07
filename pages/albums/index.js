import  Link  from "next/link";
import React from "react";
const Albums = ({ albums }) => {
  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link href={`/albums/${album.id}`}>
              <h1>{album.title}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log(query);
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await response.json();

  return {
    props: { albums: data },
  };
}
