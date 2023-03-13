import React from "react";
import Gallery from "react-photo-gallery";

import england from "../../../Assets/PhotoGalleryPics/ph1.jpg";
import england2 from "../../../Assets/PhotoGalleryPics/ph2.jpg";
import stonehedge from "../../../Assets/PhotoGalleryPics/ph3.jpg";
import france from "../../../Assets/PhotoGalleryPics/ph4.jpg";
import nycliberty from "../../../Assets/PhotoGalleryPics/ph5.JPG";
import nyc from "../../../Assets/PhotoGalleryPics/ph6.JPG";
import nyc2 from "../../../Assets/PhotoGalleryPics/ph7.JPG";
import nyc3 from "../../../Assets/PhotoGalleryPics/ph8.JPG";
import museum from "../../../Assets/PhotoGalleryPics/ph9.JPG";
import dumbo from "../../../Assets/PhotoGalleryPics/ph10.JPG"
import centralpark from "../../../Assets/PhotoGalleryPics/ph11.JPG"
import cancun from "../../../Assets/PhotoGalleryPics/ph12.JPG"
import cancun2 from "../../../Assets/PhotoGalleryPics/ph13.JPG"
import oofarms from  "../../../Assets/PhotoGalleryPics/ph14.JPG"
import oofarms2 from  "../../../Assets/PhotoGalleryPics/ph15.JPG"
import oofarms3 from  "../../../Assets/PhotoGalleryPics/ph16.JPG"
import oofarms4 from  "../../../Assets/PhotoGalleryPics/ph17.JPG"
import botgarden from  "../../../Assets/PhotoGalleryPics/ph18.JPG"
import muaibeach from  "../../../Assets/PhotoGalleryPics/ph19.JPG"
import muaibeach2 from  "../../../Assets/PhotoGalleryPics/ph20.JPG"
import turtle from "../../../Assets/PhotoGalleryPics/ph21.JPG"
import turtle2 from "../../../Assets/PhotoGalleryPics/ph22.JPG"
import moorea from "../../../Assets/PhotoGalleryPics/ph23.JPG"
import japan from "../../../Assets/PhotoGalleryPics/ph24.JPG"
import japan2 from "../../../Assets/PhotoGalleryPics/ph25.JPG"
import japan3 from "../../../Assets/PhotoGalleryPics/ph26.JPG"
import japan4 from "../../../Assets/PhotoGalleryPics/ph27.JPG"











const photos = [
  {
    src: england,
    width: 4,
    height: 3,
  },
  {
    src: england2,
    width: 1,
    height: 1,
  },
  {
    src: stonehedge,
    width: 4,
    height: 1,
  },
  {
    src: france,
    width: 3,
    height: 3,
  },
  {
    src: nycliberty,
    width: 4,
    height: 6,
  },
  {
    src: nyc,
    width: 4,
    height: 3,
  },
  {
    src: nyc2,
    width: 2,
    height: 3,
  },
  {
    src: nyc3,
    width: 3,
    height: 3,
  },
  {
    src: museum,
    width: 4,
    height: 3,
  },
  {
    src: dumbo,
    width: 1,
    height: 1,
  },
  {
    src: centralpark,
    width: 4,
    height: 2,
  },
  {
    src: cancun,
    width: 3,
    height: 3,
  },
  {
    src: cancun2,
    width: 4,
    height: 3,
  },
  {
    src: oofarms,
    width: 4,
    height: 3,
  },
  {
    src: oofarms2,
    width: 4,
    height: 3,
  },
  {
    src: oofarms3,
    width: 3,
    height: 3,
  },
  {
    src: oofarms4,
    width: 2,
    height: 3,
  },
  {
    src: botgarden,
    width: 1,
    height: 1,
  },
  {
    src: muaibeach,
    width: 4,
    height: 1,
  },
  {
    src: muaibeach2,
    width: 3,
    height: 3,
  },
  {
    src: turtle,
    width: 4,
    height: 3,
  },
  {
    src: turtle2,
    width: 4,
    height: 3,
  },
  {
    src: moorea,
    width: 2,
    height: 3,
  },
  {
    src: japan,
    width: 3,
    height: 3,
  },
  {
    src: japan2,
    width: 4,
    height: 3,
  },
  {
    src: japan3,
    width: 4,
    height: 3,
  },
  {
    src: japan4,
    width: 3,
    height: 3,
  },
];
function PhotoGallery() {
  return <Gallery photos={photos} />;
}

export default PhotoGallery;
