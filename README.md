# Service tracker

The Service Tracker is a canister-based application that allows users to store and retrieve service details for vehicles or any machine that requires regular servising. It provides the functionality to store service records, generate unique service codes, and retrieve service details based on the service code.

## Features
1. **Store Service Details:** Users can store service details including the car license plate, service date, and service provider's information.
2. **Generate Unique Service Code:** The application automatically generates a unique service code for each service record.
3. **Retrieve Service Details:** Users can retrieve service details based on the unique service code.
   
## Getting started
To set up the Service Tracker project, follow these steps:

1. Install the DFINITY Canister SDK and the Internet Computer command-line interface (DFX) from the official site https://internetcomputer.org/docs/current/developer-docs/getting-started/install/
2. Clone the Service Tracker project repository from GitHub.
   git clone https://github.com/markmatakili2/Service-tracker.git
   cd Service-tracker
3. Start the local canister execution environment using DFX.
   dfx start --background --clean
4. Open a new command line and deploy the canister.
    dfx deploy
5. Access the Candid UI to interact with the service tracker canister.

## Usage

### Storing Service Details

To store service details, follow these steps:

1. Navigate to the Candid UI using the provided URL.
2. Enter the car license plate and service provider details in the input fields.
3. Click the "Call" button to store the service details.

### Retrieving Service Details

To retrieve service details, follow these steps:

1. Navigate to the Candid UI using the provided URL.
2. Enter the unique service code in the input field.
3. Click the "Query" button to retrieve the service details based on the unique service code.

## Canister Details

- **storeServiceDetails**: Update method to store service details and produce a unique service code.
- **getServiceDetails**: Query method to retrieve service details based on the service code.

## Contributors

- Mark Matakili (@markmatakili2)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
