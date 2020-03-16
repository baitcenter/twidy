// import jsonToFormData from '@ajoelp/json-to-formdata';
// let jsonToFormData = require('json-to-formdata')

// let requestPlugin = {
//         host: "http://d3v.twidy.ru/api/methods/",
//         request: require('axios'),
        
//         customHeaders: {},
        
//         headers() {
//             let headers = {};
            
//             if(localStorage.getItem("access_token")) {
//                 headers['Authorization'] = localStorage.getItem("access_token");
//             }
            
//             let keys = Object.keys(this.customHeaders);
            
//             keys.forEach((key) => {
//                 if(Object.prototype.hasOwnProperty.call(this.customHeaders, key)) {
//                     headers[key] = this.customHeaders[key];
//                 } 
//             });
            
//             return headers;
            
//         }, 
        
//         build(method, endpoint, data) {
            
//         let params = {
//             url: this.host + endpoint,
//             method: method,
//             headers: this.headers()
//         };
        
//         switch(method) {
//             case 'get' : params['params'] = data; break;
//             case 'post' : params['data'] = jsonToFormData(data); break;
//         }
        
//         return params;
            
//         },
        
//         get(endpoint = '', query = {}) {
//             return new Promise((resolve, reject) => {
//                 this.request(this.build('get', endpoint, query)).then((response) => {
//                     this.responseHandler(response, resolve, reject);
//                 }).catch((err) => {
//                     reject(err);
//                 });
//             });
//         },
        
//         post(endpoint = '', formData = {}) {
//             return new Promise((resolve, reject) => {
//                 this.request(this.build('post', endpoint, formData)).then((response) => {
//                     this.responseHandler(response, resolve, reject);
//                 }).catch((err) => {
//                     reject(err);
//                 });
//             });
//         },
        
//         responseHandler(response, resolve, reject) {
//             if(response.status === 200) {
//                 if(response.data.status === 'fail') {
//                     this.errorHandler(response.data.code);
//                     reject(response.data);
//                 } else {
//                     resolve(response.data);
//                 }
//             } else {
//                 reject(response.data);
//             }
        
//         },
        
//         errorHandler(errorCode) {
//             switch(errorCode) {
//                 case 4: this.permissionError(); break;
//                 case 7: this.accessError(); break;
//                 case 8: this.verifyError(); break;
//                 case 9: this.objectError(); break;
//                 case 1000: this.sessionExpired(); break;
//                 default: this.unknowError();
//             }
            
//         },
        
//         permissionError: () => {},
//         accessError: () => {},
//         verifyError: () => {},
//         objectError: () => {},
//         sessionExpired: () => {},
//         unknowError: () => {}
        
// }

// export default {
//     install() {
//         Vue.prototype.$request = requestPlugin;
//     }
// }