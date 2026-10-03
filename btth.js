console.log("Bắt đầu điều phối trạm sạc");

let chargingQueue = ['30A-111', '29B-222', '51C-333'];
console.log("1. Hàng đợi ban đầu: ", chargingQueue);

const newCar = "43D-444";
chargingQueue.push(newCar);
console.log(`2. Đã thêm xe mới (${newCar}) vào cuối hàng: `, chargingQueue);

const priorityCar = '14-999';
// splice(vị trí bắt đầu, số phần tử xóa, phần tử cần thêm)
chargingQueue.splice(1, 0, priorityCar);
console.log(`3. Đã chèn xe ưu tiên (${priorityCar}) vào vị trí 1:`, chargingQueue);

const chargingCar = chargingQueue.shift();
console.log(`4. Xe ${chargingCar} đã vào cổng sạc thành công`);
console.log("hàng đợi sau khi xe vào chạm sạc: ", chargingQueue);

const checkPlate = "29B-222";
const isInQueue = chargingQueue.includes(checkPlate);
const carIndex = chargingQueue.indexOf(checkPlate);
console.log(`Kiểm tra trạng thái xe ${checkPlate}`);
console.log(`Xe có trong hàng đợi không: ${isInQueue}`);
console.log(`Vị trí hiện tại trong hàng (index): ${carIndex}`);

console.log("Bảo cáo doanh thu ca trực ");
const energyUsages = [30,45,25] // đơn vị: kWh
const unitPrice = 4500;

let totalKwh = 0;
for (let i =0; i < energyUsages.length; i++){
    totalKwh += energyUsages[i]
}

const totalRevenue = totalKwh * unitPrice;
console.log("Mảng điện năng các lượt sạc (kWh):", energyUsages);
console.log(`Tổng điện năng lượng đã sạc: ${totalKwh} Kwh`);
console.log(`Đơn giá sạc: ${unitPrice} VND`);
console.log(`Tổng doanh thu ca trực: ${totalRevenue} VND`);