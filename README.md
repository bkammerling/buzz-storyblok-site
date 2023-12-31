# Buzz Fire and Security Website - Storyblok + NextJS + Bootstrap 5

This was built using a foundation for web projects using some of the best tools in web development:
- Storyblok Headless CMS
- NextJS React Site Generator
- Bootstrap 5 Styling and JS

Taken from the [Storyblok + NextJS starter](https://www.storyblok.com/tp/add-a-headless-cms-to-next-js-in-5-minutes) and built up to include Bootstrap Sass and JS, and pre-built with several Bootstrap components from their [examples page](https://getbootstrap.com/docs/5.3/examples/).

![Screenshot of the Storyblok UI showing the result of this setup](/public/example-screen.png)

### 3. Adding the access token and blocks
Create a new empty Storyblok Space and add the preview token (Settings -> Access Tokens) into in your own ```.env.local``` file under the variable name ```STORYBLOK_API_TOKEN```. NextJS is built with the capability to read from here already.


### 4. Final Storyblok setup
You'll have to set the preview domain in <strong>Storyblok</strong>. The V2 visual editor can only use https URLs, but luckily Storyblok has a good tutorial about [Setting up Dev Servers with HTTPS Proxy On macOS](https://www.storyblok.com/faq/setup-dev-server-https-proxy) which should only take 1-2 mins. Once you've set this up update your preview domain to `https://localhost:3010/`.

### 5. Run the project

```sh
# to run in developer mode
$ npm run dev # or yarn dev
```

```sh
# to build your project
$ npm run build # or yarn build
```

## Resources

- [Next.js docs](https://nextjs.org/docs/#setup)
- [Storyblok Next.js Ultimate Tutorial](https://www.storyblok.com/tp/nextjs-headless-cms-ultimate-tutorial)
- [Setting up Dev Servers with HTTPS Proxy On macOS](https://www.storyblok.com/faq/setup-dev-server-https-proxy)
- [Storyblok Image Service](https://www.storyblok.com/docs/image-service)
  