interface Payment {
    pay(amount: number): void;
}

class Paypal implements Payment {
    pay(amount: number): void {
        console.log(`Paypal: ${amount}`);
    }
}

class CreditCard implements Payment {
    pay(amount: number): void {
        console.log(`CreditCard: ${amount}`);
    }
}

class Client {
    private payment: Payment;

    constructor(payment: Payment) {
        this.payment = payment;
    }

    setPayment(payment: Payment): void {
        this.payment = payment;
    }

    pay(amount: number): void {
        this.payment.pay(amount);
    }
}

const client = new Client(new Paypal());
client.pay(100);

client.setPayment(new CreditCard());
client.pay(200);