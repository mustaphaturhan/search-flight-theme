$(document).ready(function() {
    $('#popup-opener').on('click', function() {
        $('.row-passengers').toggle();
    });
    $('.btn-tek-yon').on('click', function() {
        $('#donus-tarihi').attr('disabled', 'disabled');
    });
    $('.btn-cift').on('click', function() {
        $('#donus-tarihi').removeAttr('disabled')
    });
    $('.btn-for-details').click(function() {
        $(this).closest('div').find('#get-details').toggle('slideDown');
        $(this).closest('.flight-list-item').addClass('open-gradient opened');
        console.log("clicked")
    })
    $('.click-and-close').on('click', function() {
        $('.filter-row').toggle(function() {
            $('.close-icon').removeClass('fa-times').addClass('fa-filter');
            $('.list-col').removeClass('col-lg-9').addClass('col-lg-12');
        }, function() {
            $('.close-icon').removeClass('fa-filter').addClass('fa-times');
            $('.list-col').removeClass('col-lg-12').addClass('col-lg-9');
        });
    })
});

$(document).on('click', '.panel-heading', function(e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.find('.glyphicon').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.find('.glyphicon').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
    }
})
