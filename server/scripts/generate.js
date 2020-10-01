const fs = require(`fs`);
const path = require(`path`);

fs.writeFileSync(
  path.join(
    process.cwd(),
    process.env.DEVELOPMENT ? 'temp-service-key.json' : 'service-key.json'
  ),
  JSON.stringify({
    type: `service_account`,
    project_id: process.env.FIREBASE_PROJECT_NAME,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    client_email: `firebase-adminsdk-uujfg@${process.env.FIREBASE_PROJECT_NAME}.iam.gserviceaccount.com`,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: `https://accounts.google.com/o/oauth2/auth`,
    token_uri: `https://oauth2.googleapis.com/token`,
    auth_provider_x509_cert_url: `https://www.googleapis.com/oauth2/v1/certs`,
    client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-uujfg%40${process.env.FIREBASE_PROJECT_NAME}.iam.gserviceaccount.com`,
  })
);
