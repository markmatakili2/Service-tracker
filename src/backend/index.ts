import { Canister, query, update, text, Principal, Record, Opt, StableBTreeMap, Result, Variant } from 'azle';

// Define the type for the service details
const ServiceDetails = Record({
    serviceCode: text,
    carLicensePlate: text,
    serviceDate: text, // Change the type to text for manual entry
    servicedBy: text
});
type ServiceDetails = typeof ServiceDetails.tsType;

const Errors = Variant({
    InvalidInput: text,
    InvalidRequest: text
});
type Errors = typeof Errors.tsType;

// Global variable to store service details
let serviceRecords = StableBTreeMap<text, ServiceDetails>(0);

export default Canister({
    // Update method to store service details and produce a unique service code
    storeServiceDetails: update([text, text], Result(text, Errors), (carLicensePlate, servicedBy) => {
        // Validate input
        if (!carLicensePlate || !servicedBy) {
            return Result.Err({InvalidInput: "Car license plate and service provider must be provided."});
        }

        const serviceCode = generateUniqueCode();
        const currentDate = getCurrentDate(); // Generate a unique service code
        const newServiceDetails: typeof ServiceDetails = {
            serviceCode,
            carLicensePlate,
            serviceDate: currentDate,
            servicedBy
        };
        serviceRecords.insert(serviceCode, newServiceDetails); // Store the service details
        return Result.Ok(serviceCode); // Return the unique service code
    }),

    // Query method to retrieve service details based on the service code
    getServiceDetails: query([text], Result(ServiceDetails, Errors), (serviceCode) => {
        const studentOpt = serviceRecords.get(serviceCode);
        if ("None" in studentOpt) {
            return Result.Err({InvalidRequest: `Service with code ${serviceCode} does not exist.`});
        }

        return Result.Ok(studentOpt.Some);
    }),
});

// Function to generate a unique service code
function generateUniqueCode(): text {
    const uniqueCode = uuidv4();
    return uniqueCode as text;
}
function getCurrentDate(): text {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}` as text;
}