$(function() {

  $("#appForm input").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var city = $("input#city").val();
      var occupation = $("input#occupation").val();
      var interests = $("input#interests").val();
      var alma_mater = $("input#alma_mater").val();
      var involvement = $("input#involvement").val();
      var additional = $("input#additional").val();

      console.log(event);

      var data = {};
      data.name = name;
      data.email = email;
      data.phone = phone;
      data.city = city;
      data.occupation = occupation;
      data.interests = interests;
      data.alma_mater = alma_mater;
      data.involvement = involvement;
      data.additional = additional;

      $this = $("#applyButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "http://localhost:3001/apply",
        type: "POST",
        data: JSON.stringify(data),
        contentType: 'application/json',
        cache: false,
        success: function() {
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-success')
            .append("<strong>Your application has been submitted! </strong>");
          $('#success > .alert-success')
            .append('</div>');
          //clear all fields
          $('#appForm').trigger("reset");
        },
        error: function() {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that the server is not responding. Please try again later!"));
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#appForm').trigger("reset");
        },
        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      })
    }
  })
});
