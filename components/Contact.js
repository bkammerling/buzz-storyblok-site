import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Contact = ({ blok }) => {
  return (
    <section id="contact" className="contact bg-primary d-flex align-items-center" {...storyblokEditable(blok)}>
      <div className="px-4 py-5 text-center d-flex flex-column h-100 flex-fill">
        <h2 className="display-5 fw-bold">{ blok.title }</h2>
        <p className="mb-4">{ blok.subtitle }</p>
        <div className="row">
          <div className="mt-3 mb-5 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input required type="email" className="form-control" id="email" placeholder="name@example.com" />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input required type="text" className="form-control" id="name" placeholder="Example Smith" />
                <label htmlFor="name">Your name</label>
              </div>
              <div className="form-floating">
                <textarea required class="form-control" id="form-message" rows="3" placeholder="Can you help me install some fire alarms..." style={{ height: '130px'}}></textarea>
                <label htmlFor="form-message" class="form-label">Your message</label>
              </div>

              <div className="alert alert-success mt-4" role="alert">
                <h4 className="alert-heading">Thank you!</h4>
                <p>Your message has been successfully sent. I'll try and get back to you within the week.</p>
              </div>

              <div className="d-grid col-12 mx-auto">
                <button type="submit" className="btn btn-dark btn-lg mt-4">Send</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  alert('sent');
  myForm.classList.add("sent")
  
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => myForm.classList.add("sent"))
    .catch((error) => alert(error));
    
};

export default Contact;
