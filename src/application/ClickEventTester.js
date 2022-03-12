class ClickEventTester extends HTMLElement{
    values = ["Value1", "Value2", "Value3"];

    constructor(){
        super();
    }

    connectedCallback(){
        this.render();

        const listitems = this.querySelectorAll('#ListItem');
        for(let item of listitems){
            item.onclick = (event) => {
                console.log(event.target.innerText);
            };
        }
    }

    disconnectedCallback(){
        
    }

    render() {
        let tempHTML = `<div><ul>`;

        for(let v in this.values){
            tempHTML += `
            <li>
                <div id="ListItem" class="list-item">
                    ${this.values[v]}
                <div>
            </li>`;
        }

        tempHTML += `</ul></div>`;

        this.innerHTML = tempHTML;
    }
}

customElements.define('click-event-tester', ClickEventTester);