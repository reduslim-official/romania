$(function() {
    country = $.url(location.href).param('country');

    if (country == 'RO') {
        ro_selected = 'selected="selected"';
    } else {
        ro_selected = '';
    }


    selects = $("select[name='country']");
    selects.append('<option value="RO" ' + ro_selected + '>România</option>');

    var change = 0,
        updatePrices = function(item) {
            change = 1;

            $(item.children).each(function() {
                if (this.selected) sel = $(this).val();
            });

            if (typeof sel === 'undefined') {
                sel = 'RO';
            }

            if (sel == 'RO') {
                $('.old_price_val').html('318');
                $('.old_price_cur').html('RON');
                $('.old_price_sig').html('RON');
                $('.new_price_val').html('159');
                $('.new_price_cur').html('RON');
                $('.new_price_sig').html('RON');
                $('select').val('RO').trigger('change');
                initializeMask({ mask: "(+40)999999999[9]", removeMaskOnSubmit: false })
            }

            change = 0;
        };
    $("select").change(function() {
        if (change == 0) updatePrices(this);
    }).change();

    function initializeMask(mask) {
        $('[name=phone]').inputmask(mask);
    }
});

$(document).ready(function() {

    $('form button').click(function() {
        if ($(this).parent().parent().find($('input[name=phone]')).inputmask('unmaskedvalue').length < 9) {
            alert('Заполните поле Телефон');
            return false;
        }
    });
});