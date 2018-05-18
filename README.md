# lazy-load-webpack

Here I will test different code-splitting techniques using Webpack. To see it in action in your local environment just clone the repo and run "yarn build" or "npm build".

##### First technique: code-splitting based in components. 

The component is completely static (just HTML and CSS) on page load. When the user clicks the button, the JS module needed is requested and the component class is initiated.


Stack:
- Webpack 3.8.1
- JS ES6

