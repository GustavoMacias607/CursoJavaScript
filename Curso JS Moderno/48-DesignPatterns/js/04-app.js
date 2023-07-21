// Factory

class InputHTML {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }

    crearInput() {
        return `<input type="${this.type}" name="${this.name} id="${this.name}`
    }
}

class HTMLFactory {
    crearElemento(tipo, nombre) {
        switch (tipo) {
            case "text":
                return new InputHTML('text', nombre)

            default:
                return;
        }
    }
}

const elemento = new HTMLFactory()
const inputText = elemento.crearElemento('text', 'nombre-cliente')
console.log(inputText.crearInput())