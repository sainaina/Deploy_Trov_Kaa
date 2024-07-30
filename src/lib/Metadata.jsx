// Metadata.jsx
import React from "react";
import { Helmet } from 'react-helmet-async';
export const Metadata = ({
  title,
  description,
  author,
  keywords,
  thumbnail,
}) => {
  return (
    <Helmet>
      <title>{`${title || "Your Project's name"}`}</title>
      <meta name="title" content={title || "Your Project's name"} />
      <meta
        name="description"
        content={description || "Add default description here"}
      />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords || "Add default keywords here"} />
      <meta
        name="thumbnail"
        content={thumbnail || "Add default thumbnail here"}
      />
      <meta property="og:url" content={""} />
      <meta
        property="og:type"
        content={"Place it with type of your project, EX: E-learning"}
      />
      <meta property="og:title" content={title || "Your Project's name"} />
      <meta
        property="og:description"
        content={description || "Add default description here"}
      />
      <meta
        property="og:image"
        content={thumbnail || ""}
      />
    </Helmet>
  );
};
