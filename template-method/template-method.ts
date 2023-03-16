abstract class Documents {
    public templateMethod(): void {
        this.ecriture();
        this.relecture();
    }

    protected ecriture(): void {
        console.log('Écriture du document');
    }

    protected abstract relecture(): void;
    protected abstract relecture(): void;
}

class Book extends Documents {
    protected relecture(): void {
        console.log('Relecture par un comité de relecture');
    }
}

class Software extends Documents {
    protected relecture(): void {
        console.log('Revue par un pair');
    }
}

function clientCode(abstractClass: Documents) {
    abstractClass.templateMethod();
}

clientCode(new Book());

console.log('');

clientCode(new Software());