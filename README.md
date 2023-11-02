# apollo-server-graphql-example
In order to abstract out the basic functionalities of GraphQL in Nodejs, this is a super simple example you might play arround with


## Install:
``
npm i
``


## Start:
``
npx nodemon index.js
``
then open your browser at http://localhost:4000/


## Example Query for the Inspector

``
query ExampleQuery {
  games {
    platform
    title
  }
  authors {
    name
  }
  reviews {
    content
    rating
  }
}
``