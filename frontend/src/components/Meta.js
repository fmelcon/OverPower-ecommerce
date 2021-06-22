import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Bievenido a Over Power",
  description: "El mejor Precio y calidad",
  keywords:
    "PC, gabinete, teclado, mouse, Nvidia, AMD, computadoras, pad, auriculares",
};

export default Meta;
