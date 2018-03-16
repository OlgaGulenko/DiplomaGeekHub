$(document).ready(function () {

    var controller;

    appInit();

    function appInit() {
        controller = new ScrollMagic.Controller();
        controller.scrollTo(function (newScrollPos) {
            $("html, body").animate({scrollTop: newScrollPos});
        });

        var isDesktopMedia = window.matchMedia("(min-width: 64em)").matches;

        /* device screen */
        (function () {
            var deviceBlockEl = document.getElementsByClassName('device-block');
            var offset = deviceBlockEl.clientHeight / 2;
            var duration = Math.max.apply(this, $('[data-device-screen]').toArray().map(function (el) {
                el = $(el);
                return (parseInt(el.data('duration')) || 0) + (parseInt(el.data('offset')) || 0);
            }));

            duration += offset;

            var anchor = document.getElementsByClassName('device-screen-anchor');
            var screens = $('[data-device-screen]');

            new ScrollMagic.Scene({
                triggerElement: deviceBlockEl,
                triggerHook: 'onCenter',
                offset: offset,
                duration: duration,
            })
                .setPin(deviceBlockEl)
                .addTo(controller);

            new ScrollMagic.Scene({
                triggerElement: deviceBlockEl,
                triggerHook: 'onCenter',
                offset: offset,
            })
                .setClassToggle(deviceBlockEl, '-fixed')
                .addTo(controller);


            screens.each(function (i, el) {
                new ScrollMagic.Scene({
                    triggerElement: anchor,
                    triggerHook: 'onCenter',
                    duration: parseInt($(el).data('duration')) || 0,
                    offset: offset + parseInt($(el).data('offset')) || 0
                })
                    .setClassToggle(el, '-shown')
                    .on('start', function (e) {
                        var clickEl = $(el).find('.double-click');
                        if (clickEl.length) {
                            clickEl.html(getNewSVG())
                        }
                    })
                    .addTo(controller);
            });
        })();

        /* red screen */
        (function () {
            var thumbnailAnimationOffset = 100;
            var offset = document.getElementsByClassName('red-screen').clientHeight / 2;
            var thumbnails = $('#red-screen .thumbnail');

            if (isDesktopMedia) {
                new ScrollMagic.Scene({
                    triggerElement: "#pause-trigger",
                    triggerHook: 'onCenter',
                    duration: (thumbnails.length - 1) * thumbnailAnimationOffset,
                    offset: offset
                })
                    .setPin("#pause-root")
                    .addTo(controller);

                thumbnails.each(function (i, el) {
                    new ScrollMagic.Scene({
                        triggerElement: "#pause-trigger",
                        triggerHook: 'onCenter',
                        offset: offset + i * thumbnailAnimationOffset
                    })
                        .setClassToggle(el, '-shown')
                        .addTo(controller);
                });
            } else {
                thumbnails.each(function (i, el) {
                    new ScrollMagic.Scene({
                        triggerElement: el,
                        triggerHook: 'onCenter',
                    })
                        .setClassToggle(el, '-shown')
                        .addTo(controller);
                });
            }
        })();


        /* all screens */
        /* must be initialized after others to calculate height correctly */
        $("[data-screen]").each(function (i, el) {
            new ScrollMagic.Scene({
                triggerElement: el.nextElementSibling,
                triggerHook: 'onEnter'
            })
                .setPin(el)
                .addTo(controller);
        });
    }


    $(window).on('resize', function () {
        controller.destroy(true);
        appInit();
    })

    /* animate scroll to anchor */
    $('[data-smooth-scroll]').click(function (e) {
        e.preventDefault();
        controller.scrollTo($(this).attr('href'))
    });

})