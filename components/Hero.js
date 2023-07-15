import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Hero = ({ blok }) => {
  return (
    <section className="hero d-flex align-items-center mb-3" {...storyblokEditable(blok)}>
     <div className="px-4 py-5 text-center text-white d-flex flex-column h-100 flex-fill">
      <h1 className="display-4 fw-bold">{ blok.title }</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">{ blok.subtitle }</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <a type="button" className="btn btn-primary btn-lg px-4 me-sm-3" href="#contact">Get in touch</a>
        </div>
      </div>
    </div>

    </section>
  );
};

export default Hero;
