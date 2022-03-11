class app extends HTMLElement{
    constructor(){
        super();
        console.log("constructor activated");
    }

    connectedCallback(){
        console.log("Connected");
        this.render();
    }

    disconnectedCallback(){
        console.log("Disconnected");
    }

    static get observedAttributes() {
        return ['message'];
    }
      
    attributeChangedCallback(name, oldValue, newValue) {
        console.log("Attribute Changed");
        this.render();
    }

    render() {
        const message = this.attributes.message.value || '[Empty]';
        this.innerHTML = `<h1>${message}</h1>`;
        console.log("message changed");
    }
}

customElements.define('main-app', app);