import { storyblokEditable } from "@storyblok/react";
import { render } from 'storyblok-rich-text-react-renderer';

const Feature = ({ blok }) => {
  return (
    <div className={`feature container ${blok.boxed ? 'col-lg-10 col-xxl-8' : 'col-xl-10'} px-4`} {...storyblokEditable(blok)}>
      <div className={`row align-items-center g-3 py-5 ${blok.boxed ? 'bg-light rounded-3 px-5 flex-md-row-reverse' : ''} `}>
        <div className={`col-10 col-md-6 col-lg-6`}>
          { blok.image.filename && 
          <img
            className={'d-block mx-lg-auto img-fluid'}
            src={`${blok.image.filename}/m/1400x0`}
            alt={blok.image.alt}
            width={700}
            height={500}
          />
          } 
        </div>
        <div className="col-md-6 col-lg-5 offset-lg-1">
          <h2 className="display-6 fw-bold lh-1 mb-3">{ blok.title }</h2>
          <p>{ render(blok.text) } </p>
        </div>
      </div>
    </div>
  );
};
  
export default Feature;
  
