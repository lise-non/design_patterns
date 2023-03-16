interface Carrier {
    send(message: string): void;
}

class Mail implements Carrier {
    public send(message: string) {
        console.log("Envoi par mail", message);
    }
}

class Twitter implements Carrier {
    public send(message: string) {
        console.log("Envoi par Twitter", message);
    }
}

class Facebook implements Carrier {
    public send(message: string) {
        console.log("Envoi par Facebook", message);
    }
}

class Message {
    protected sender: Carrier;
    protected message: string;

    constructor(sender: Carrier, message: string) {
        this.sender = sender;
        this.message = message;
    }

    public send() {
        this.sender.send(this.message);
    }
}

const message = new Message(new Twitter(), "Salut !");
message.send();