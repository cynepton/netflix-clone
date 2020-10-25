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

3. **Environment Variables**
Create a `.env` file in the folder
```sh
touch .env
```
Copy the contents of the [public env](public-env) file, and paste in the `.env` file.

4. **Run the Application**
```sh
npm start
```

## React Components

### [Jumbotron](src/components/jumbotron)
> See [KarlHadwen](https://github.com/karlhadwen)'s [Youtube Video on Compound Components](https://www.youtube.com/watch?v=nHMAMS38x-E) and [Github Repo](https://github.com/karlhadwen/compound-components).

It's a Compound Component responsible for rendering the sections of the body of the webpage that contain the marketing boards. Currently, It renders each of the Jumbotron marketing items in the [Jumbo Data JSON file](./src/fixtures/jumbo.json). It also has the following sub-components:

1. `Jumbotron.Container` defined in the Jumbotron [`Index.js` file](./src/components/jumbotron/index.js).
    Renders the Overall container for all the Jumbotron components that gets passed to the Jumbotron container JSX element that is in the [jumbotron container file](./src/containers/jumbotron.js).
2. `Jumbotron.Pane` defined in the Jumbotron [`Index.js` file](./src/components/jumbotron/index.js).
    The Jumbotron Pane renders it's contents which could be either text or an image. The Pane is half the width of the Jumbotron Div container within which it is placed.
3. `Jumbotron.Title` defined in the Jumbotron [`Index.js` file](./src/components/jumbotron/index.js).
    This renders the Jumbotron Title H1 header within the Jumbotron Pane.
4. `Jumbotron.SubTitle` defined in the Jumbotron [`Index.js` file](./src/components/jumbotron/index.js).
    This renders the Jumbotron SubTitle H2 header within the Jumbotron Pane.
5. `Jumbotron.Image` defined in the Jumbotron [`Index.js` file](./src/components/jumbotron/index.js).
    This renders the Jumbotron Image within the Jumbotron Pane.

The CSS styles for the Jumbotron are located in the [`Jumbotron.js`](./src/components/jumbotron/styles/jumbotron.js) file. The Styled-Components library is used for the styling.

### [Footer](src/components/footer)
It's a Compound Component responsible for rendering the footer of the webpage. It also has the following sub-components:

1. `Footer.Container` defined in the Footer [`Index.js` file](./src/components/footer/index.js).
    Renders the Overall container for all the Footer components.
2. `Footer.Column` defined in the Footer [`Index.js` file](./src/components/footer/index.js).
Renders each similar set of links within the footer. Refer to the [Footer Container file](./src/containers/footer.js) to see how it is used.
3. `Footer.Row` defined in the Footer [`Index.js` file](./src/components/footer/index.js).
This contains all the columns to be rendered 
4. `Footer.Title` defined in the Footer [`Index.js` file](./src/components/footer/index.js).
This renders the larger footer text.
5. `Footer.Link` defined in the Footer [`Index.js` file](./src/components/footer/index.js).
This renders each footer text that should have a link.
6. `Footer.Text` defined in the Footer [`Index.js` file](./src/components/footer/index.js).
This renders static footer text.
7. `Footer.Break` defined in the Footer [`Index.js` file](./src/components/footer/index.js).
This renders a break to create spacing within the footer.

The CSS styles for the Footer are located in the [`Footer.js`](./src/components/footer/styles/footer.js) file. The Styled-Components library is used for the styling.

### [Accordion](src/components/accordion)