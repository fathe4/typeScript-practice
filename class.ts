class Car {
    model: string
    price: number
    private milage: number
    constructor(model: string, price: number) {
        this.model = model,
            this.price = price
        this.milage = 10000
    }
    getActualMilage(): number {
        return this.milage + 50000
    }
    getTotalPrice(tax: number): number {
        const totalTax: number = tax / 100
        const totalPrice: number = this.price + totalTax
        return totalPrice
    }

}


const toyota = new Car('toyota', 150000)
const totalPrice: number = toyota.getTotalPrice(25)