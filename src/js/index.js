function loadComponent() {

    document.querySelector(".app-button").onclick = e => import(/* webpackChunkName: "lazy-component" */ './lazy-component.js').then(module => {
        let component = document.querySelector(".lazy-component");
        new  module.LazyComponent(component);

    }); 

}
  

  
document.addEventListener("DOMContentLoaded", () => {
    // document.getElementById("button-hook").appendChild(loadComponent());
    loadComponent()
});