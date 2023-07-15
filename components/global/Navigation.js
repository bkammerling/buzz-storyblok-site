import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Navigation = ({ blok }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/images/logo-buzz-fire.jpeg" className="d-inline-block align-middle me-2" alt="" />
          Buzz Fire & Security
        </a>
        <a type="button" className="btn btn-secondary" href="#contact">Contact me</a>
      </div>
    </nav>

  );
};

export default Navigation;
