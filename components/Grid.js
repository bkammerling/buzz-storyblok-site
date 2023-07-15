import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Grid = ({ blok }) => {
  return (
    <section className="section grid">
      <div className="container py-5">
        { blok.title && <h2 class={`pb-2 border-bottom`}>{ blok.title }</h2> }

        <div className="row g-4 py-5 row-cols-1 row-cols-sm-3" {...storyblokEditable(blok)}>
          {blok.columns && blok.columns.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
        
      </div>
    </section>
  );
};


export default Grid;
