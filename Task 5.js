class  ElectronicDevice {
    constructor(name, guarantee){
        this.name = name;
        this.guarantee = '1 year'
    }
    getStatus(name, guarantee, status){
        console.log(`${name} status:${status}`)
    }
}

class BeautyDevice extends ElectronicDevice {
    constructor(name, size, power) {
        super(name, power);
        this.size = size;
        this.power = power;
    }
    getStatus(name, status, size, power) {
        console.log(`${name} status: ${status}`)
    }
    }
class KitchenDevice extends ElectronicDevice {
    constructor(name, size, power) {
        super(name, power);
        this.size = size;
        this.power = power;
    }
    getStatus(name, status, size, power){
        console.log(`${name} status: ${status}`)
    }
}
