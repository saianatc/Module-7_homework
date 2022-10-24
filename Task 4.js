function ElectronicDevice (name, guarantee) {
    this.name = name
    this.guarantee = '1 year';
}
ElectronicDevices.prototype.getStatus = function(name, status){
    console.log(`${name} status: ${status}`)
}
function BeautyDevice (name, size, power){
    this.name = name;
    this.size = size;
    this.power = power
}
function KitchenDevice (name,size,power){
    this.name = name;
    this.size = size;
    this.power = power
}
BeautyDevice.prototype = new ElectronicDevice()
KitchenDevice.prototype = new ElectronicDevice()

const facialsteamer = new BeautyDevice('facialsteamer', '9x5x1', '230VA');
const hairdryer = new BeautyDevice('hairdryer', '3x9x10', '1500VA');
const coffeemaker = new KitchenDevice('coffeemaker','10x12x10',  '1200VA');
const toaster = new KitchenDevice('toaster', '10x12x14', "200VA" );

facialsteamer.getStatus('facialsteamer', 'on');
hairdryer.getStatus('hairdryer', 'off');
coffeemaker.getStatus('coffeemaker', 'on');
toaster.getStatus('toaster', 'off');

console.log(facialsteamer);
console.log(hairdryer);
console.log(coffeemaker);
console.log(toaster);