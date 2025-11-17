import customerRepository from "../repositories/customer.repository.js";

class CustomerServices {
    async getCustomers() {
        const customers = await customerRepository.selectAll();
        
        if (customers.length === 0){
            return
        }
        
        return customers;
    }

    async getCustomerByCode(code) {
        const customer = await customerRepository.selectByCode(code);

        if (customer.length === 0){
            return
        }

        return customer;
    }
}

const customerServices = new CustomerServices()

export default customerServices;