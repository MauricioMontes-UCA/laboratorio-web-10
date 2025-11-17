import customerRepository from "../repositories/customer.repository.js";
import salesRepository from "../repositories/sales.repository.js";

class SalesServices {
    async getSales() {
        const sales = await salesRepository.selectAll();
        
        if (sales.length === 0){
            return
        }
        
        return sales;
    }

    async getReports() {
        const reports = await salesRepository.selectAllReports();
        
        if (reports.length === 0){
            return
        }
        
        return reports;
    }

    async newSale(amount, customerID) {
        const customer = await customerRepository.selectById(customerID);

        if (customer.length === 0) {
            return
        }

        const sale = await salesRepository.insert(amount, customerID);

        return sale;
    }
}

const salesServices = new SalesServices();

export default salesServices;