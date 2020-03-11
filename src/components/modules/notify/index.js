
   
    export default {

      // audio: new Audio("static/audio/notify.mp3"),
      // alert() {
      //   this.audio.play();  
      // },
      
      onErrorMessage: (message) => {},
      onSuccessMessage: (message) => {},
      
      success(message) {
        this.onSuccessMessage(message);
      },
      error(message) {
        this.onErrorMessage(message);
      },
      messageAlert(  User, message ) {
         this.notify.show({
             title: User.name ,
             message: message,
             theme: 'dark', // dark
             image: User.image,
             layout: 1,
             balloon: false,
             close: true,
             maxWidth: "350px",
             position: 'bottomLeft', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
             timeout: 10000,
             rtl: false,
             animateInside: true,
             drag: true,
             overlay: false,
             overlayClose: false,
             overlayColor: 'rgba(0, 0, 0, 0.6)',
             transitionIn: 'fadeInUp',
             transitionOut: 'fadeOut',
             transitionInMobile: 'fadeInUp',
             transitionOutMobile: 'fadeOutDown'
         });
      },
      friendAlert(title, text, User) {
          
         this.notify.show({
             title: title,
             message: text,
             theme: 'dark', // dark
             image: User.photo,
             layout: 1,
             balloon: false,
             close: true,
             maxWidth: "350px",
             position: 'bottomLeft', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
             timeout: 10000,
             rtl: false,
             animateInside: true,
             drag: true,
             overlay: false,
             overlayClose: false,
             overlayColor: 'rgba(0, 0, 0, 0.6)',
             transitionIn: 'fadeInUp',
             transitionOut: 'fadeOut',
             transitionInMobile: 'fadeInUp',
             transitionOutMobile: 'fadeOutDown'
         });
         
      },
    
      progressShow(message) {
          
          this.notify.show({
            message: message,
            theme: 'dark', // dark
            layout: 1,
            balloon: false,
            close: false,
            timeout: 0,
            position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
            animateInside: true,
            drag: true,
            overlay: true,
            overlayClose: false,
            overlayColor: 'rgba(0, 0, 0, 0.6)',
            transitionIn: 'fadeInUp',
            transitionOut: 'fadeOut',
            transitionInMobile: 'fadeInUp',
            transitionOutMobile: 'fadeOutDown',
            buttons: {},
        });
          
      },
      progressHide() {
           var toast = document.querySelector('.iziToast'); // Selector of your toast
           if(toast) {
             this.notify.hide({}, toast);
           }
      }
         
 }