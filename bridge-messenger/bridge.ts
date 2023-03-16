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

    constructor(sender: Carrier) {
        this.sender = sender;
    }

    public send(message: string) {
        this.sender.send(message);
    }
}

const message = new Message(new Twitter());
message.send("Salut !");