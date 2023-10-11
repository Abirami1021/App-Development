import React from 'react';
import '../assets/css/Gallery.css';
const Gallery = () => {
  return (
    <div className="gallery">
      <figure className="gallery-figure">
        <img
          className="gallery-image"
          src="https://assets.codepen.io/652/the-lucky-neko-CM7a-XBD4AU-unsplash.jpg"
          alt="a white kitten with brown and black spots sitting with its paws slightly outstretched."
          title="Photo by The Lucky Neko for Unsplash"
        />
        <figcaption className="gallery-caption">Ollie</figcaption>
        <p className="gallery-spec">Kitten (12 Weeks)</p>
      </figure>

      <figure className="gallery-figure">
        <img
          className="gallery-image"
          src="https://assets.codepen.io/652/karsten-winegeart-NE0XGVKTmcA-unsplash.jpg"
          alt="a brown French bulldog puppy laying down and looking up with a hopeful look in its eyes."
          title="Photo by Karsten Winegeart for Unsplash"
        />
        <figcaption className="gallery-caption">Barney</figcaption>
        <p className="gallery-spec">Puppy (9 Weeks)</p>
      </figure>

      <figure className="gallery-figure">
        <img
          className="gallery-image"
          src="https://assets.codepen.io/652/kabo-NjWZ07sPEJE-unsplash.jpg"
          alt="A large long-haired orange cat with a white belly."
          title="Photo by Kabo for Unsplash"
        />
        <figcaption className="gallery-caption">Walter</figcaption>
        <p className="gallery-spec">Cat (5 Years)</p>
      </figure>

      <figure className="gallery-figure">
        <img
          className="gallery-image"
          src="https://assets.codepen.io/652/giacomo-lucarini-7M0SG3ZKdlE-unsplash.jpg"
          alt="A light brown, long-haired chihuahua sitting next to three rubber duckies."
          title="Photo by Giacomo Lucarini for Unsplash"
        />
        <figcaption className="gallery-caption">Miss Sunshine</figcaption>
        <p className="gallery-spec">Dog (2 Years)</p>
      </figure>
    </div>
  );
};
export default Gallery;