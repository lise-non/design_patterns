interface Carrier {
    send(): void;
}

class Mail implements Carrier {
    public send() {
        console.log("Envoi par mail");
    }
}

class Twitter implements Carrier {
    public send() {
        console.log("Envoi par Twitter");
    }
}

class Facebook implements Carrier {
    public send() {
        console.log("Envoi par Facebook");
    }
}

class Message {
    // protected message: string;
    protected sender: Carrier;

    constructor(sender: Carrier) {
        this.sender = sender;
    }

    public send() {
        this.sender.send();
    }
}

const message = new Message(new Twitter());
message.send();