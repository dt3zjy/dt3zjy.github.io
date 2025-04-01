# Welcome to my Website!

![Welcome to my Website!](public/social_img.png)

I used Astrofy, a free and open-source template, as a skeleton for this website. I used Astro and TailwindCSS to create and populate all of the pages on the website. I hosted the website on my own domain which I got through Google Domains. for your Personal Portfolio Website built with Astro and TailwindCSS. Create in minutes a website with a Blog, CV, Project Section, Store, and RSS Feed.

## Demo
I used Astrofy, a free and open-source template, as a skeleton for this website. I used Astro and TailwindCSS to create and populate all of the pages on the website. I hosted the website on my own domain which I got through Google Domains. 

## Tech Stack

- [Astro](https://astro.build)
- [tailwindcss](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

## Project Structure

```php
├── src/
│   ├── components/
│   │   ├── cv/
│   │   │   ├── TimeLine
│   │   ├── BaseHead.astro
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── HorizontalCard.astro
│   │   └── SideBar.astro
│   │   └── SideBarMenu.astro
│   │   └── SideBarFooter.astro
│   ├── content/
│   │   ├── aerospace-projects/
│   │   │   ├── post1.md
│   │   │   ├── post2.md
│   │   │   └── post3.md
│   │   ├── cs-projects/
│   │   │   ├── item1.md
│   │   │   ├── item2.md
│   ├── layouts/
│   │   └── AeroProjectLayout.astro
│   │   └── BaseLayout.astro
│   │   └── CSProjectLayout.astro
│   └── pages/
│   │   ├── aerospace-projects/
│   │   │   ├── [...page].astro
│   │   │   ├── [slug].astro
│   │   ├── cs-projects/
│   │   │   ├── [...page].astro
│   │   │   ├── [slug].astro
│   │   └── 404.astro
│   │   └── cv.astro
│   │   └── index.astro
│   │   └── projects.astro
│   │   └── rss.xml.js
│   └── styles/
│       └── global.css
├── public/
├── astro.config.mjs
├── tailwind.config.cjs
├── package.json
└── tsconfig.json
```

## License

Astrofy is licensed under the MIT license — see the [LICENSE](https://github.com/manuelernestog/astrofy/blob/main/LICENSE) file for details.