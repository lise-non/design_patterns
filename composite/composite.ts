abstract class Sncf {
    protected parent!: Sncf | null;

    public setParent(parent: Sncf | null) {
        this.parent = parent;
    }

    public getParent(): Sncf | null {
        return this.parent;
    }

    public add(Sncf: Sncf): void { }

    public remove(Sncf: Sncf): void { }

    public isComposite(): boolean {
        return false;
    }

    public abstract operation(): number;
}

class Passager extends Sncf {
    public operation(): number {
        return 1;
    }
}

class Train extends Sncf {
    protected children: Sncf[] = [];

    public add(Sncf: Sncf): void {
        this.children.push(Sncf);
        Sncf.setParent(this);
    }

    public remove(Sncf: Sncf): void {
        const SncfIndex = this.children.indexOf(Sncf);
        this.children.splice(SncfIndex, 1);

        Sncf.setParent(null);
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

class Locomotive extends Sncf {
    protected children: Sncf[] = [];

    public add(Sncf: Sncf): void {
        this.children.push(Sncf);
        Sncf.setParent(this);
    }

    public remove(Sncf: Sncf): void {
        const SncfIndex = this.children.indexOf(Sncf);
        this.children.splice(SncfIndex, 1);

        Sncf.setParent(null);
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

class Wagon extends Sncf {
    protected children: Sncf[] = [];

    public add(Sncf: Sncf): void {
        this.children.push(Sncf);
        Sncf.setParent(this);
    }

    public remove(Sncf: Sncf): void {
        const SncfIndex = this.children.indexOf(Sncf);
        this.children.splice(SncfIndex, 1);

        Sncf.setParent(null);
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

function clientCode1(Sncf: Sncf) {
    console.log(`Nombre de passagers: ${Sncf.operation()}`);
}

const train = new Train();

const wagon = new Wagon();
wagon.add(new Passager());
wagon.add(new Passager());

const wagon2 = new Wagon();
wagon2.add(new Passager());
wagon2.add(new Passager());
wagon2.add(new Passager());

const locomotive = new Locomotive();
locomotive.add(new Passager());

train.add(locomotive);
train.add(wagon);
train.add(wagon2);

clientCode1(train);
