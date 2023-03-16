abstract class Webmail {
    protected parent!: Webmail | null;

    public setParent(parent: Webmail | null) {
        this.parent = parent;
    }

    public getParent(): Webmail | null {
        return this.parent;
    }

    public add(Webmail: Webmail): void { }

    public remove(Webmail: Webmail): void { }

    public isComposite(): boolean {
        return false;
    }

    public abstract operation(): number;
}

class Message extends Webmail {
    public operation(): number {
        return 1;
    }
}

class Mail extends Webmail {
    protected children: Webmail[] = [];

    public add(Webmail: Webmail): void {
        this.children.push(Webmail);
        Webmail.setParent(this);
    }

    public remove(Webmail: Webmail): void {
        const WebmailIndex = this.children.indexOf(Webmail);
        this.children.splice(WebmailIndex, 1);

        Webmail.setParent(null);
    }

    public isComposite(): boolean {
        return true;
    }

    public operation(): number {
        let results: number = 0;
        for (const child of this.children) {
            results += child.operation();
        }

        return results;
    }
}


function sendMail(Webmail: Webmail) {
    console.log(`Nombre de mails: ${Webmail.operation()}`);
}

const app = new Mail();

const client1 = new Mail();
client1.add(new Message());
client1.add(new Message());

const clent2 = new Mail();
clent2.add(new Message());
clent2.add(new Message());
clent2.remove(new Message());
clent2.remove(new Message());

app.add(client1);
app.add(clent2);

sendMail(app);
