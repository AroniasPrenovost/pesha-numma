// Popup Age Verification

$(function() {

  //Check it the user has been accpeted the agreement
  if (!localStorage.getItem('accepted')) {
    $("#popup").show();
  }

  $('[data-popup-close]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    //Set a cookie to remember the state
    localStorage.setItem('accepted', true);

    e.preventDefault();
  });
});

// // Popup Age Verification

$(function() {

  $('[data-popup-close]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    e.preventDefault();
  });
});
