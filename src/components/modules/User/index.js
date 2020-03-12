// import request from '@/components/modules/request'

// import auth from "./auth";
// import accounts from "./accounts";
// import withdraw from "./withdraw";
// import followers from "./followers";

import cache from "@/components/modules/request/cache"

var User = {
    
    authenticated: false,
    is_access_blocked: false,
    is_need_verification: false,
    is_locked: localStorage.getItem("is_locked") ? localStorage.getItem("is_locked")  : false,
    language: localStorage.getItem("language") ? localStorage.getItem("language") : 'ru',
    auth_token: null,
    // followers,
    // auth,
    // accounts,
    // withdraw,
    // info: cache.get("im") ? cache.get("im") : {},
    // view: {
    //     personal: {
    //         "image_versions" : {}
    //     }
    // },
    // update() {
    //     var that = this;
    //     request.post("/user/set/", this.info, function(r) {
    //         that.get();
    //     });
        
    // },
    // discover: {
    //    nearby: [],
    //    get() {
    //        var that = this;
    //        request.get("/user/search/discover/",{}, function(r) {
    //            that.nearby = r.nearby;
    //        });
    //    }  
    // },
    // search: {
       
    //    q: "",
    //    nextMaxId: null,
    //    items: [],
    //    count: 0,
    //    execute(q) {
           
    //         if(typeof(q) !== "undefined") {
    //             this.q = q;
    //         }
           
    //         this.nextMaxId = null;
    //         var self = this;
    //         request.get("/user/search/", { q: this.q }, function(r) {
    //             self.items = r.items;
    //             self.nextMaxId = r.nextMaxId;
    //             self.count = r.total_count;
    //         });
           
    //    },
       
    //    next() {
           
    //        if(this.nextMaxId === null) {
    //            return;
    //        }
           
    //        var self = this;
           
    //        request.get("/user/search/", { nextMaxId : this.nextMaxId} , function(r) {
              
    //            self.nextMaxId = r.nextMaxId;
               
    //            r.items.forEach(function(item) {
    //                self.items.push(item);
    //            });
               
    //        });
           
    //    }
        
    // },
    
    
    
    // set(data) {
    //    request.post("/user/set/", data, function(r) {
           
    //    });
    // },
    // get(id, callback, error) {
        
    //    var that = this;
       
    //    if(typeof(id) === "undefined" || id === null) {
           
    //        if(!User.checkAuthentication()) {
    //            return;
    //        };
          
 
    //        request.get("/user/get/self/", {}, function(r) {
        
    //            var CryptoJS = require("crypto-js");
    //            var privateKey = CryptoJS.SHA256(parseInt(r.id)).toString();  
                 
    //            that.info = r;
   
    //            if(typeof(callback) !== "undefined") {
    //                callback(r);
    //            } 
               
               
    //        }, function(error) {
    //             if(typeof(callback) !== "undefined") {
    //                callback(error);
    //            } 
    //        });
    //    }  else {


    //        request.get("/user/get/", { id: id }, function(r) {
    //            that.view = r;
    //            if(callback) {
    //                callback(r);
    //            }
    //        }, function(e) {
    //            if(error) {
    //                error(e);
    //            }
    //        });
    //    }
        
    // },
    // lock() {
    //   localStorage.setItem("is_locked", true);
    //   this.is_locked = true;
    // },
    // uploadPhoto(e) {
        
    //     var files = e.target.files || e.dataTransfer.files;
    //     if (!files.length) return;
    //     var file = files[0];

    //     let formData = new FormData();
    //     formData.append("media" , file); 
    //     formData.append("mediaType" , "photo");

    //     request.upload("https://md.licerio.org/upload/media/photo/", formData, function(response) {
    //         User.account.data.image = response.image_url;
    //     });
        
    // },
    checkAuthentication() {
      let token = localStorage.getItem("access_token");

      if (token) { 
        this.authenticated = true;
      } else this.authenticated = false
      
      return this.authenticated;
     },
    // access_token() {
    //     if(this.auth_token) {
    //         return this.auth_token;
    //     } else {
    //         return request.getCookie("access_token")
    //     }
    // },
    // logout() {
        
    //     return new Promise((resolve, reject) => {

    //         request.post("/user/sessions/revoke.current/", {}, resolve, reject);
            

    //     });
    // }
}



export default User;

