export class LazyComponent {
    constructor(component) {
		this.el = component;
		this.init();
	}
	
    event() {
        this.el.addEventListener("click", () => {
        	console.log("Click detected!");
        })
    }

    init() {
        this.el.classList.add("active");
        this.el.innerHTML = "Component active. Click me and see the console.";
		this.event();
    }
}
