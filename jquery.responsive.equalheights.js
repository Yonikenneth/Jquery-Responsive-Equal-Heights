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
