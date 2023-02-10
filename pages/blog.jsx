import React from "react";
import Head from "next/head";
import { attributes, react as ReseñasContent } from "../content/reseñas.md";

const Blog = () => {
  const { titulo, reseñas } = attributes;
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <main>
        <h1>{titulo}</h1>
        <div>
          {reseñas.map((reseña) => (
            <div>
              <h4>{reseña.autor}</h4>
              <p> {reseña.descripcion} </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Blog;
