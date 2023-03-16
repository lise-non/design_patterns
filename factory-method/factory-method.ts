abstract class Logistics {
    public abstract createTransport(): Transport;

    public planDeliver(): string {
        const transport = this.createTransport();
        return `Deliver by ${transport.deliver()}`;
    }
}

class RoadLogistics extends Logistics {
    public createTransport(): Transport {
        return new Truck();
    }
}

class SeaLogistics extends Logistics {
    public createTransport(): Transport {
        return new Ship();
    }
}

interface Transport {
    deliver(): string;
}

class Truck implements Transport {
    public deliver(): string {
        return 'land in a box.';
    }
}

class Ship implements Transport {
    public deliver(): string {
        return 'sea in a container';
    }
}

const truck = new RoadLogistics();
const ship = new SeaLogistics();

console.log(truck.planDeliver());
console.log(ship.planDeliver());