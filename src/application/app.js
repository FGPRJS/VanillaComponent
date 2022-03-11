class App extends HTMLElement{
    $title = "Hello World!";
    connectedCallback(){
        console.log("Connected");
        this.innerHTML = `
        <h1>{$title}</h1>
        `
    }

    disconnectedCallback(){
        console.log("Disconnected");
    }
}