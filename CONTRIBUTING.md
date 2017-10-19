
## Introduction

Thanks for your interest in contributing to **ED Tightbeam**!

We're excited to have you help out.

Every bug report, pull request, question, and suggestion is important to us.

Below you will find some information for bug reporting as well as some quick guidelines
and steps for contributing.

Be sure to check out the [Code of Conduct](https://github.com/DVDAGames/ed-tightbeam/blob/master/CODE_OF_CONDUCT.md).


## Bug Reporting

Thanks for taking the time to let us know about errors you encounter. This
is a very important part of making this software better.

We really appreciate your time.

When creating an [Issue](https://github.com/DVDAGames/ed-tightbeam/issues),
please try to follow the template we've provided and provide as much detail as possible
about what was going on when the error occurred.


## Contributing Guidelines

- This project follows the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
and as long as you `npm install` you should get the necessary `eslint` dependencies for checking
your code; it's recommended to install the [eslint plugin](https://eslint.org/docs/user-guide/integrations)
for your editor
- This project makes use of [EditorConfig](http://editorconfig.org/) for consistent file conventions;
ensure you have your editor configured to work with EditorConfig
- This project follows the [semver](http://semver.org/) guidelines for versioning
- This project uses [Electron](https://electron.atom.io/), [React](https://reactjs.org/),
and [elite-dangerous-journal-server](https://github.com/DVDAGames/elite-dangerous-journal-server)


## Development Process

**NOTE**: If this process seems like a lot, we plan to add some mock Journal data
and better ways to test the code in the future. If you get lost at any point, just
[open an issue](https://github.com/DVDAGames/ed-tightbeam/issues/new)
and we'll help walk you through it.

1. `git clone`
2. `npm install`
3. You'll need two Terminal Windows:
  1. `npm run watch`
  2. `npm start`
4. Make your changes
5. Follow the **Packaging** instructions below:
  1. Run `npm run build`
  2. Run `npm run generate`
  3. Run `cd app`
  4. Run `npm install`
  5. Run `npm run package`
6. Test the application:
  - Built application files can be found in `ed-tightbeam/dist/[current version number]/`
7. Submit a [Pull Request](https://github.com/DVDAGames/elite-dangerous-journal-server/pulls)
and follow our PR Template
8. Accept an Internet High Five from us for helping out

![](https://media.giphy.com/media/wrzf9P70YWLJK/giphy.gif)
