//Este seria el JSON a leer con los datos

let JsonBot = '{"email": "r8write@tech.com","password": "P@ssw0rd123#R8","confirmation_password": "P@ssw0rd123#R8","first_name": "John","last_name": "Doe","company": "R8write","phone_number": "+1234567890","security_question": "Pablito"}';

let objectJson = JSON.parse(JsonBot);

export const email = objectJson.email;
export const password = objectJson.password;
export const confirmation_password = objectJson.confirmation_password;
export const first_name = objectJson.first_name;
export const last_name = objectJson.last_name;
export const company = objectJson.company;
export const phone_number = objectJson.phone_number;
export const security_question = objectJson.security_question;