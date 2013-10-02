/*---------------------------------------------------------------
 * Author - Sheldon Led - sheldonled.ms@gmail.com
 * Copyright (C) 2005 - 2013 Open Source Matters, Inc. All rights reserved.
 * License - GNU General Public License version 2 or later; see LICENSE
 * Websites: http://www.sheldonled.com
 * This is the animated Foot notes based on Zeno Rocha code, in his
 * personal website see it in: http://zenorocha.com
 -----------------------------------------------------------------*/

$(function() {
    /*Get all links for foot notes*/
    $("a[rel=ftnote]").each(function() {
        var link = $(this);
        var token = link.attr('href').substr(1);
        var footnoteContent = $(document.getElementById(token)).html();

        /*I've heard that we need this line below to get it working on iphone*/
        $('body').append('<div id="overlay-' + token + '" class="footnoteContent">' + footnoteContent + '</div>');

        /*Controlling the click function*/
        link.click(function(e) {
            e.preventDefault();
            var $currentFootnote = $(document.getElementById('overlay-' + token));

            /*If the footnote is already opened, so we close it*/
            if ($currentFootnote.is(':visible')) {
                $currentFootnote.slideUp('fast');

            } else {
                $('.footnoteContent').hide();
                $currentFootnote.slideDown('fast');

                /*This highlight the element clicked*/
                $(this).addClass('noted');

                /*turn of the light of the rest of the site*/
                var maskHeight = $(document).height();
                var maskWidth = $(window).width();
            
                $('#mask').css({'width':maskWidth,'height':maskHeight});
                $('#mask').fadeTo("slow",0.6);  
            }

            return false;
        });
    });

    $('.footnoteContent').prepend('<a href="#" class="closeFootnote">&times;</a>');

    /*Closing footnote by clicking in the X*/
    $('.closeFootnote').click(function() {
        $(this).closest('.footnoteContent').slideUp('fast');
        $('#mask').hide();  
        $('.noted').removeClass('noted');
        return false;
    });

    /*Closing the footnote by pressing escape*/
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            $('.footnoteContent').slideUp('fast');
            $('#mask').hide();  
        $('.noted').removeClass('noted');
        }
    });

    /*Closing the footnote by clicking outside the element clicked*/
    $('#mask').click(function () {
        $('.footnoteContent').slideUp('fast');
        $(this).hide();
        $('.noted').removeClass('noted');
    });
});