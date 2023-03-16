interface Oiseau {
    cri(): string;
}

class Coq implements Oiseau {
    cri(): string {
        return "cocorico";
    }
}

class Poule implements Oiseau {
    cri(): string {
        return "cot cot cot";
    }
}

class Poussin implements Oiseau {
    cri(): string {
        return "chip chip";
    }
}

class Gallinace {
    constructor(private oiseau: Oiseau) {}

    cri(): string {
        return this.oiseau.cri();
    }
}

const poule = new Gallinace(new Poule());
console.log(poule.cri());