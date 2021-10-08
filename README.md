# MyAnime

TypeScript (Next.js) project fetching resources from [AniAPI](https://aniapi.com/docs/) REST API.

Live demo available at: https://myanime-six.vercel.app/

## Installation

1. To get this project files locally on your machine, you can clone this repository by running the following command on your terminal or command line:

```bash
git clone https://github.com/cvrlnolan/myanime
```

2. Install all the dependency packages found in the `package.json` file by running `yarn install` or `npm install` from the project root directory.

3. To start the development server of the application, run `npm run dev` or `yarn dev`. This should log some start-up application information & display the development server url: `http://localhost:3000`. Visit http://localhost:3000 to view your application.

## Usage

### General

This application was built reflecting the MVC architecture and the main dependencies(all found in the `package.json`) of the application are organised as so:

- Front-end User Interface(UI): [Tailwind CSS](https://tailwindcss.com/)
- Backend Integration: [NextJS API](https://nextjs.org/docs/api-routes/introduction) (basically [NodeJS](https://nodejs.org/))
- REST API Data Endpoint: [AniAPI](https://aniapi.com/docs/)

Other important services & dependency libraries of the application include:

- [axios](https://www.npmjs.com/package/axios): An http client to fetch urls and make api calls or requests within the application.
- [swr](https://swr.vercel.app/): To fetch and revalidate data on the client-side of the application while keeping the UI reactive.
- [next-themes](https://www.npmjs.com/package/next-themes): An abstraction for themes in your Next.js app.

### Directives

The application is organized from the root(`.`) as follows:

- `./page/` folder(integrated by NextJS) contains the UI Views for the application with the exception of the `./page/api/*` sub-folder.
- `./page/api` sub-folder(integrated by NextJS) contains serverless and NodeJS backend code for the application. All of the request to the Marvel Comic API endpoint are found in this subfolder.
- `./components/` folder contains coded UI layouts to be used through out the application.
- `./styles/` folder(integrated by NextJS) contains the global style of the application accessible by all components.
- `./public/` folder(integrated by NextJS) contains global files to be shared through the application. You can store static images here.

Absolute imports to any of these folders through the application are configured in the `jsconfig.json` file in the root.

The application's code source contains inline comments which will provide further help and guidance on how an important piece of module or component works. The code quality was tested with [JSLint](https://www.jslint.com/).

### Deployment

You may eventually want to deploy a live customized version of your app in a future instance. [Vercel](https://vercel.com/) platform is suitably built fo the deployment of NextJS application and more as they have an integrated environment to deploy directly from your own [Github Repository](https://github.com/new).

## Support

If any worries, bugs or problem arises in the future, you can create an issue, contribute or contact me via:

- carlnolan@lootyclub.com

## Roadmap

No planned schedule for this project. But might do some alternative functionality updates with time.

## License

![GitHub](https://img.shields.io/github/license/cvrlnolan/myanime) ![GitHub last commit](https://img.shields.io/github/last-commit/cvrlnolan/myanime) ![GitHub contributors](https://img.shields.io/github/contributors/cvrlnolan/myanime) ![GitHub issues](https://img.shields.io/github/issues/cvrlnolan/myanime) ![GitHub repo size](https://img.shields.io/github/repo-size/cvrlnolan/myanime)

![GitHub followers](https://img.shields.io/github/followers/cvrlnolan?style=social) ![Twitter Follow](https://img.shields.io/twitter/follow/realcarlnolan?style=social)
