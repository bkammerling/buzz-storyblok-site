import { storyblokEditable } from "@storyblok/react";
import { render } from 'storyblok-rich-text-react-renderer';

const Feature = ({ blok }) => (
  <div className="feature col" {...storyblokEditable(blok)}>
    <div className="feature-image">
      <img src={`${blok.image.filename}/m/400x0`} alt={ blok.image.alt } className="mb-3 img-fluid" />
    </div>
    <h2>{ blok.title }</h2>
    { render(blok.text) }
  </div>
);

export default Feature;
