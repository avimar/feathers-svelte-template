import feathers from '@feathersjs/feathers';
const app = feathers();

//Auth
import auth from '@feathersjs/authentication-client';
app.configure(auth());

import rest from '@feathersjs/rest-client';
const restClient = rest() //configure with connection URL base
app.configure(restClient.fetch(window.fetch));


export default app;