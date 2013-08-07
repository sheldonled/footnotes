/*---------------------------------------------------------------
 * Author - Sheldon Led - sheldonled.ms@gmail.com
 * Copyright (C) 2005 - 2013 Open Source Matters, Inc. All rights reserved.
 * License - GNU General Public License version 2 or later; see LICENSE
 * Websites: http://www.sheldonled.com
 -----------------------------------------------------------------*/

$(function() {
    // --- Foot notes based on Zeno Rocha code --- //
    $("a[rel=ftnote]").each(function() {
        var link = $(this);
        var token = link.attr('href').substr(1);
        var footnoteContent = $(document.getElementById(token)).html();

        // There is an issue with the line below that stops the clock-tap-scroll-to-top on iOS
        $('body').append('<div id="overlay-' + token + '" class="footnoteContent">' + footnoteContent + '</div>');

        link.click(function() {
            var $currentFootnote = $(document.getElementById('overlay-' + token));

            // If the footnote is already displayed, hide it instead
            if ($currentFootnote.is(':visible')) {
                $currentFootnote.slideUp('fast');

            } else {
                $('.footnoteContent').hide();
                $currentFootnote.slideDown('fast');
            }

            return false;
        });
    });

    $('.footnoteContent').prepend('<a href="#" class="closeFootnote">&times;</a>');
    $('.closeFootnote').click(function() {
        $(this).closest('.footnoteContent').slideUp('fast');
        return false;
    });
});