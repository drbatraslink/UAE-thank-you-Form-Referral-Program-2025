
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
               <select class="form-control selectpicker citylist" id="location_0" name="location_0" data-live-search="true">
                    <option value="">Select Location</option></select>              
              </div>
            </div> 
              <div class="col-md-6 form_colum_custom mb-3">
              <div class="form-group">
               <label class="custom_lable_cls">Relation Type*</label>
                <select class="relation form-control" id="relation_0">
                <option value="">Select Relation</option>
                <option value="3">Wife</option>
                <option value="4">Husband</option>
                <option value="8">Father</option>
                <option value="9">Mother</option>
                <option value="13">Daughter</option>
                <option value="11">Son</option>
                <option value="1">Friends</option>
                <option value="24">Other</option>              
              </select>             
              </div>
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