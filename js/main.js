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

    $('#adult-passenger, #student-passenger, #child-passenger, #baby-passenger, #old-passenger, #flight-class').change(function() {
        var ap = parseInt($('#adult-passenger').val());
        var sp = parseInt($('#student-passenger').val());
        var cp = parseInt($('#child-passenger').val());
        var bp = parseInt($('#baby-passenger').val());
        var op = parseInt($('#old-passenger').val());
        var fc = $('#flight-class option:selected').text();
        var totalCount = ap + sp + cp + bp + op;
        $('#kisi-sayisi').val(totalCount + ' - ' + fc);
    });
});
