
  // Form focus styling
  //$('input,textarea').val('');
  $('.form-group input, .form-group textarea, .form-group select').focusout(function () {
    const text_val = $(this).val();
    if (text_val === '') {
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }
  });

  $(document).ready(function() {
    let counter = 1;
    $('#addmore').click(function() {
      const newFieldset = `
      <div class="row ptmd-1 testmonilas_form_custom reference-group" id="ref_${counter}">
        <div class="form_colum_custom">
           <div class="row">
              <div class="col-12">
              <h3 class="mb-0">Reference Details</h3>
            </div>
            <div class="col-md-6 form_colum_custom">
              <div class="form-group mt-md-2">
                <label class="custom_lable_cls">Full Name*</label>
                <input name="yourname[]" class="form-control" placeholder="Enter Your Full Name"> </div>
            </div>
            <div class="col-md-6 form_colum_custom">
              <div class="form-group mt-md-2">
                <label class="custom_lable_cls">Mobile Number*</label>
                <input name="mobile[]" class="form-control" placeholder="Enter Your Mobile No"> </div>
            </div>
            <div class="col-md-6 form_colum_custom">
              <div class="form-group">
                <label class="custom_lable_cls">Email ID</label>
                <input name="email[]" class="form-control" placeholder="Enter Your Email ID"> </div>
            </div>
            <div class="col-md-6 form_colum_custom">
              <div class="form-group">
                <label class="custom_lable_cls">Location</label>
                <input name="location[]" class="form-control" placeholder="Enter Your Location"> </div>
            </div>
           
          
        <div class="col-md-12 mt-2 mb-3">
          <button type="button" class="btn btn-danger inputSubmit">Submit</button>
          <button type="button" class="btn btn-danger inputRemove" data-id="ref_${counter}">Remove</button>
        </div>

        </div>
          </div>
      </div>`;
      $('#req_input').append(newFieldset);
      counter++;
    });
    $('body').on('click', '.inputRemove', function() {
      const refId = $(this).data('id');
      $('#' + refId).remove();
    });
    $('#consultForm').submit(function(e) {
      e.preventDefault();
      alert('Form submitted successfully!');
    });
  });