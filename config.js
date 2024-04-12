// AWS Cognito Configuration
const poolData = {
    UserPoolId: 'us-east-2_3UU1rk0IH', // Replace 'us-east-1_XXXXXXX' with your actual Cognito User Pool ID
    ClientId: '4gps9mrt82harj0pmkl4fjqcm2', // Replace 'XXXXXXXXXXXXXXXXXXXXXXXXXX' with your actual Cognito App Client ID
    region: 'us-east-2' // Replace 'us-east-1' with the AWS region your Cognito user pool is hosted in
};

// This exports the configuration data so it can be used in other JavaScript files
if (typeof module !== 'undefined' && module.exports) {
    module.exports.poolData = poolData;
} else {
    window.poolData = poolData; // Make it available in the browser window object
}

