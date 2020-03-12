import request from '@/components/modules/request'

export default {
      country: [],
      networks: [],
      industry: [],
      category: [],
      funds: [],
      current: null,
      
      get($fields) {
          var that = this;
          request.get("/db/get/", {
              fields: $fields
          }, function(r) {
              if(r.networks) {
                  that.networks = r.networks;
              }
              if(r.country) {
                  that.country = r.country;
              }
              if(r.industry) {
                  that.industry = r.industry;
              }
              if(r.category) {
                  that.category = r.category;
              }
              if(r.funds) {
                  that.funds = r.funds;
              }
          });
          
      }
      
        
    }