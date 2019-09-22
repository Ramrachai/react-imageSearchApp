//from the tutorial
//===================
import React from "react";
import "../css/imageList.css";

const ImageList = props => {
  const images = props.src.map(i => {
    return <img key={i.id} src={i.urls.thumb} alt={i.alt_description} />;
  });

  return <div>{images}</div>;
};

export default ImageList;

//from the tutorial finish
//===================

// import React from "react";

// const Imagelist = props => {
//   const img = props.src.map(i => {
//     return {
//       src: i.urls.thumb,
//       alt: i.alt_description,
//       id: i.id,
//       download: i.links.download
//     };

//     //   src: i.urls.thumb,
//     //   alt: i.alt_description,
//     //   id: i.id,
//     //   download: i.links.download
//   });
//   console.log("hi");
//   console.log(img);

//   return (
//     <div key={img.id}>
//       <a href={img.download}>
//         <img src={img.src} alt={img.alt} />
//       </a>
//     </div>
//   );
// };

// export default Imagelist;
