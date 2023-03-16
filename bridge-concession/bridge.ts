// Interface pour l'abstraction Vehicle
interface Vehicle {
  getModel(): string;
  getBrand(): string;
  getYear(): number;
}

// Implémentation concrète de l'abstraction pour les véhicules en achat comptant
class CashVehicle implements Vehicle {
  private totalPrice: number;
  
  constructor(totalPrice: number) {
    this.totalPrice = totalPrice;
  }
  
  getModel(): string {
    return "Cash Vehicle Model";
  }
  
  getBrand(): string {
    return "Cash Vehicle Brand";
  }
  
  getYear(): number {
    return 2022;
  }
  
  getTotalPrice(): number {
    return this.totalPrice;
  }
}

// Implémentation concrète de l'abstraction pour les véhicules en LOA
class LoanVehicle implements Vehicle {
  private depositAmount: number;
  
  constructor(depositAmount: number) {
    this.depositAmount = depositAmount;
  }
  
  getModel(): string {
    return "Loan Vehicle Model";
  }
  
  getBrand(): string {
    return "Loan Vehicle Brand";
  }
  
  getYear(): number {
    return 2022;
  }
  
  getDepositAmount(): number {
    return this.depositAmount;
  }
}

// Interface pour l'implémentation du canal de vente
interface SalesChannel {
  sellVehicle(vehicle: Vehicle): void;
}

// Implémentation concrète du canal de vente pour les véhicules en achat comptant
class CashSalesChannel implements SalesChannel {
  sellVehicle(vehicle: Vehicle): void {
    console.log(`Selling cash vehicle: ${vehicle.getBrand()} ${vehicle.getModel()} (${vehicle.getYear()}) for a total price of ${(<CashVehicle>vehicle).getTotalPrice()} euros.`);
  }
}

// Implémentation concrète du canal de vente pour les véhicules en LOA
class LoanSalesChannel implements SalesChannel {
  sellVehicle(vehicle: Vehicle): void {
    console.log(`Selling loan vehicle: ${vehicle.getBrand()} ${vehicle.getModel()} (${vehicle.getYear()}) with a deposit of ${(<LoanVehicle>vehicle).getDepositAmount()} euros.`);
  }
}

// Exemple d'utilisation
const cashVehicle = new CashVehicle(20000);
const loanVehicle = new LoanVehicle(1000);

const cashSalesChannel = new CashSalesChannel();
const loanSalesChannel = new LoanSalesChannel();

cashSalesChannel.sellVehicle(cashVehicle);
loanSalesChannel.sellVehicle(loanVehicle);
