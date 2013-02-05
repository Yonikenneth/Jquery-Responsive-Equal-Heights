Jquery-Responsive-Equal-Heights
===============================

This script is used for equalizing columns in a responsive layout.

Useage:

Change "#your id" to the ID of the columns you want to have the same heights.

That's it!

<script>
  $.fn.equalHeight = function() {
      var maxHeight = 0;
      return this.each(function(index, box) {
          var boxHeight = $(box).height();
          maxHeight = Math.max(maxHeight, boxHeight);
      }).height(maxHeight);
  };

  $(document).ready(function() {
      $('#your id').equalHeight();
  });

  $(window).resize(function(){
      $('#your id').css('height','auto');
      $('#your id').equalHeight();
  });
</script>
