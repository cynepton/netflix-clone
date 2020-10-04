# Netflix
    A clone of the Netflix website using React.

This application uses React, React router, Styled-Components to build the Netflix Frontend Web application.

## Working With this Project

### To Run the Project in Development Mode
1. **Clone the Repository to your local machine:** 
Run this in the terminalin the location you would like to save the repository locally:
```sh
git clone https://github.com/cynepton/netflix-clone.git
```
Or fork the repository and work on your own version.

2. **Install Dependencies:**
Enter the repository folder and install the dependencies. You need to have [Node](https://nodejs.org/en/download/) and [NPM](https://www.npmjs.com/) installed to run this step.
```sh
cd netflix-clone
npm install
```
This will install the dependencies based on the information in the [`package.json`](package.json) file.

3. **Run the Application**
```sh
npm start
```

## React Components

### [Jumbotron](src/components/jumbotron)
> See [KarlHadwen](https://github.com/karlhadwen)'s [Youtube Video on Compound Components](https://www.youtube.com/watch?v=nHMAMS38x-E) and [Github Repo](https://github.com/karlhadwen/compound-components).

It's a Compound Component responsible for rendering the sections of the body of the webpage. Currently, It renders each of the Jumbotron marketing items in the [Jumbo Data JSON file](./src/fixtures/jumbo.json). It also has the following sub-components:

1. `Jumbotron.Container` defined in the Jumbotron [`Index.js` file](./src/components/jumbotron/index.js).
    Renders the Overall container for all the Jumbotron components that gets passed directly to the App Component.
2. `Jumbotron.Pane` defined in the Jumbotron [`Index.js` file](./src/components/jumbotron/index.js).
    The Jumbotron Pane renders it's contents which could be either text or an image. The Pane is half the width of the Jumbotron Div container within which it is placed.
3. `Jumbotron.Title` defined in the Jumbotron [`Index.js` file](./src/components/jumbotron/index.js).
    This renders the Jumbotron Title H1 header within the Jumbotron Pane.
4. `Jumbotron.SubTitle` defined in the Jumbotron [`Index.js` file](./src/components/jumbotron/index.js).
    This renders the Jumbotron SubTitle H2 header within the Jumbotron Pane.
5. `Jumbotron.Image` defined in the Jumbotron [`Index.js` file](./src/components/jumbotron/index.js).
    This renders the Jumbotron Image within the Jumbotron Pane.