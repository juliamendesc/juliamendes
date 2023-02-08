# Welcome to my personal website code!

Made with 💜 by me 🤗

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result, but you can also see the finished result [here](juliamendes.vercel.app) 😉.

This project was done in between jobs. It started as an idea to put up a quick portfolio online, then shifted to a slower-paced project developed so I could have a chance to explore tools and features still unknown or little used before.

## Fun decisions!

I decided to experiment with [Less](https://lesscss.org/) as a preprocessor. Thanks to [Joseph Chow's explanation](https://www.josephc.how/using-less-with-react/), I have managed to make the necessary adjustments for this to run in such a small project.

I also was inspired by the excellent DX I had in my previous jobs and decided to explore a bit of what really made a difference in my coding experience. Namely, I added [Husky](https://typicode.github.io/husky/#/) to config rules for my pre-commits, especially those related to typescript and linting. Therefore, whenever there would be an error, this puppy would not let me commit until this was solved, adding an extra layer of safety that my code would only pass if it's really good to go.

In the same area, I really enjoyed having the possibility of exploring Github Actions and creating some scripts to crosscheck my PRs after I pushed the code to the cloud. The main script checks linting, prettier, and build errors related to the current main branch before allowing me to merge to it. It is pretty handy, and if you want to check, go to the .github folder to see the sources I have used. There's also a script to upgrade my npm packages and for the dependabot alerts.

I wanted to further explore Next.js, so I used its embedded API to host a simple script to submit the contact emails from my website. I used [nodemailer](https://nodemailer.com/about/) for this, but needed further resources, so here's a list:

* [Elyssa Winch - Coding a Contact Form with Next.js and Nodemailer](https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645)
* [NodeJS - Send free emails using Nodemailer and Gmail - It won't fully work, but it's a good start](https://www.youtube.com/watch?v=JJ44WA_eV8E)
* [Google oauth 2.0 API password change Username and Password not accepted - you will need this for the above video](https://stackoverflow.com/questions/42174317/google-oauth-2-0-api-password-change-username-and-password-not-accepted/42292944#42292944)


