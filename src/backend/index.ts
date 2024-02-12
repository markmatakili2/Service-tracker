import { Canister, query, update, text, Principal, Record, Opt } from 'azle';

// Define the type for the service details
const ServiceDetails = Record({
    serviceCode: text,
    carLicensePlate: text,
    serviceDate: text, // Change the type to text for manual entry
    servicedBy: text, // Use Principal type for the service provider
    // Add more fields as needed
});

// Global variable to store service details
let serviceRecords: typeof ServiceDetails[] = [];

export default Canister({
    // Update method to store service details and produce a unique service code
    storeServiceDetails: update([text, text], text, (carLicensePlate, servicedBy) => {
        const serviceCode = generateUniqueCode();
        const currentDate = getCurrentDate(); // Generate a unique service code
        const newServiceDetails: typeof ServiceDetails = {
            serviceCode,
            carLicensePlate,
            serviceDate: currentDate,
            servicedBy,
            // Add more fields as needed
        };
        serviceRecords.push(newServiceDetails); // Store the service details
        return serviceCode; // Return the unique service code
    }),

    // Query method to retrieve service details based on the service code
    getServiceDetails: query([text], (ServiceDetails), (serviceCode: text) => {
        const details = serviceRecords.find((record) => record.serviceCode === serviceCode);
        if (details) {
            return details as typeof ServiceDetails;
        } else {
            throw new Error("Service details not found for the provided code");
        }
    }),
});

// Function to generate a unique service code
function generateUniqueCode(): text {
    const uniqueCode = Math.floor(10000 + Math.random() * 90000).toString().substring(0, 5);
    return uniqueCode as text;
}
function getCurrentDate(): text {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}` as text;
}