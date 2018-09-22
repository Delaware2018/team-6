$(function() {

  $("#loginForm input").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      //var fs = require('fs');
      //event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      //var name = $("input#first").val();
      //var email = $("input#last").val();
      //var phone = $("input#email").val();
      //var message = $("input#password").val();

      //$this = $("#sendMessageButton");

      //$this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      /*
      var content;
      fs.readFile('C:\cfg2018\team-6\startbootstrap-clean-blog-gh-pages\db', function read(err, data)){
        if(err){
          throw err;
        }
        content = data;
      }
*/
      //$this.prop("disabled", false); // Re-enable submit button when AJAX call is complete

    }
  })
})
