# Presentation slideshow

A small project to create dynamic presentations using Prismic as CMS.

---

## Table of content

-   [Available scripts](#available-scripts)
-   [Project structure](#project-structure)
-   [Set a Prismic repository](#set-a-prismic-repository)
-   [Deploy on Netlify](#deploy-on-netlify)
-   [Setup a webhook](#setup-a-webhook)

---

## Available scripts

There are more scripts that you can see in the `package.json` file, but this is a list of the most used ones.

<details style="margin-bottom: 15px">
<summary><code>npm run dev</code></summary>
<p style="font-size: 14px; padding: 5px 0 0 10px">
    Runs the app in development mode.<br>
    Open <a target="_blank" href="http://localhost:3000/">http://localhost:3000/</a> to view it in the browser.
</p>
</details>

<details style="margin-bottom: 15px">
<summary><code>npm run build</code></summary>
<p style="font-size: 14px; padding: 5px 0 0 10px">Builds the app in production mode.</p>
</details>

<details style="margin-bottom: 15px">
<summary><code>npm test</code></summary>
<p style="font-size: 14px; padding: 5px 0 0 10px">Launches the test runner in the interactive watch mode.</p>
</details>

<details style="margin-bottom: 15px">
<summary><code>npm run storybook</code></summary>
<p style="font-size: 14px; padding: 5px 0 0 10px">
    Runs Storybook.<br>
    Open <a target="_blank" href="http://localhost:6006/">http://localhost:6006/</a> to view it in the browser.
</p>
</details>

---

## Project structure

There are configuration files in the root of the project for Husky, Prettier, Babel, Next and Prettier.
Besides those files this is a detailes view of the main project structure.

    .
    ├── __test__                    # Tests folder
    │   ├── contexts                # Test files for the contexts
    │   ├── hooks                   # Test files for the hooks
    │   └── shared                  # Test files for the helper functions
    │   └── ...
    └── .next                       # Next configuration files
    └── .storybook                  # Storybook configuration files
    └── components                  # Components folder
    │   ├── LanguageSelector        # The language selector
    │   └── Navigation              # The slides navigation
    │   ├── Shared                  # Shared components
    │   │   └── BaseSlide           # The base slide component
    │   │   └── Breadcrumbs         # The top slide breadcrumbs
    │   │   └── EdgeBox             # A floating box that sits at any edge of the screen
    │   │   └── LogoAndTitle        # The company logo and a title
    │   └── Slides                  # Contains the basic slide configuration and each slide
    └── config                      # Prismic client configuration and schema
    └── contexts                    # Application contexts (Localization & Navigation)
    └── hooks                       # Application hooks
    └── pages                       # Application pages
    └── public                      # Public folder
    │   └── assets                  # Contains the project assets
    │   └── ...
    └── shared                      # Contains shared code along the application
    │   └── helpers                 # Helper functions for strings, colors, classnames and so on...
    │   └── ...
    └── stories                     # Contains the Storybook stories
    │   ├── hooks                   # Stories hooks
    │   └── slides                  # Slides component stories
    └── styles                      # Contains the global styles configuration
    │   ├── shared                  # Contains shared styles (animations, mixins and placeholders)
    │   ├── variables               # Contains variable styles (font weights, z-index and media queries)
    │   └── ...
    └── ...

---

## Set a Prismic repository

Instructions to setup a Prismic repository:

1. Create and account or login to the platform if you already own an account.
2. Create a new repository.
3. Create a new custom type.
4. In the JSON editor section paste the schema from the JSON file in the `config` folder.
5. Set the environment variables with your repository data.
6. You're all set to start editing your slides. 🚀

See the `env.template` in order to know which variable you need to set.

---

## Deploy on Netlify

Instructions to setup the Netlify deploy:

1. Create and account or login to the platform if you already own an account.
2. Click on the button `New site from Git`.
3. Login into the account where you uploaded the project and give the neccessary permissions.
4. Set the environment variables on the corresponding section.
5. Optionally a [webhook](#setup-a-webhook) can be configured in order to trigger a deploy once a document is edited on Prismic.
6. And that's it. Enjoy! 🚀

---

## Setup a webhook

Instructions to setup a Prismic webhook:

1. Go to the `Build & deploy` section on your site settings.
2. Go to the `Build hooks` card and add a new one.
3. Once it's done copy the link that was generated.
4. Go to the `Webhooks` section on the Prismic dashboard settings.
5. Setup the name and the triggers you need.
6. In the URL section paste the link you've copied before and click on Add.
7. You can trigger it in order to see if it works properly.
8. And once again you are ready to go. 🚀
