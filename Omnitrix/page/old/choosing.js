import { click, is_5YL, is_OS, is_OV, is_UAF, Key_detection, Spin_detection } from "./components";

Page({
    build() {

        const os_aliens = [
            "heatblast",
            "wildmutt",
            "diamondhead",
            "xlr8",
            "greymatter",
            "fourarms",
            "stinkfly",
            "ripjaws",
            "upgrade",
            "ghostfreak",
            // "ghostfreak-true",
        ];
        const os_additions = [
            "cannonbolt",
            "wildvine",
            "blitzwolfer",
            "snareoh",
            "frankenstrike",
            "upchuck",
            "ditto",
            "eyeguy",
            "arctiguana",
            "buzzshock",
            "spitter",
            "waybig",
            "feedback",
        ]
        const af_aliens = [
            "swampfire",
            "bigchill",
            "chromastone",
            "echoecho",
            "brainstorm",
            "goop",
            "jetray",
            "spidermonkey",
            "humungousaur",
            "alienx",
        ]
        const af_additions = [
            "lodestar",
            "nanomech",
            "rath",
        ];
        const ua_aliens = [
            "waterhazard",
            "ampfibian",
            "armodrillo",
            "terraspin",
            "nrg",
            "chamalien",
            "fasttrack",
            "juryrigg",
            "clockwork",
            "shocksquatch",
            "eatle",
        ]

        const ov_aliens = [
            "astrodactyl",
            "atomix",
            "ballweevil",
            "bloxx",
            "bullfrag",
            "crashhopper",
            "gravattack",
            "gutrot",
            "kickinhawk",
            "molestache",
            "peskydust",
            "theworst",
            "toepick",
            "walkatrout",
            "whampire",
        ]

        let aliens = [];
        let number = hmFS.SysProGetInt('alien_number');

        if (hmFS.SysProGetChars('omnitrix_playlist') == "OS") {
            aliens = os_aliens;
        };
        if (hmFS.SysProGetChars('omnitrix_playlist') == "OS FULL") {
            aliens = os_aliens.concat(os_additions);
        };
        if (hmFS.SysProGetChars('omnitrix_playlist') == "AF") {
            aliens = af_aliens;
        };
        if (hmFS.SysProGetChars('omnitrix_playlist') == "AF FULL") {
            aliens = af_aliens.concat(af_additions, ["diamondhead", "cannonbolt", "upchuck", "waybig",])
        };
        if (hmFS.SysProGetChars('omnitrix_playlist') == "UA") {
            aliens = af_aliens.concat(af_additions, os_aliens, os_additions, ua_aliens)
        };
        if (hmFS.SysProGetChars('omnitrix_playlist') == "OV") {
            aliens = af_aliens.concat(af_additions, os_aliens, os_additions, ua_aliens, ov_aliens)
        };
        if (hmFS.SysProGetChars('omnitrix_playlist') == "OV NONCANNON") {
            aliens = af_aliens.concat(af_additions, os_aliens, os_additions, ua_aliens, ov_aliens, ["amongus"])
        };
        if (hmFS.SysProGetChars('omnitrix_playlist') == "ALL") {
            aliens = os_aliens.concat(os_additions, af_aliens, af_additions, ua_aliens, ov_aliens);
        };


        if (hmFS.SysProGetBool('ghostfreak_true_form') == true) {
            aliens[aliens.indexOf("ghostfreak")] = "ghostfreak-true"
        }



        hmUI.scrollToPage(0, false)
        // hmApp.setScreenKeep(true);

        Key_detection(
            () => { },
            () => { hmApp.gotoPage({ url: 'page/index', param: '...' }) },
            true,
            hmFS.SysProGetBool('use_main_button'),
            true,
        );

        // hmApp.registerKeyEvent(function (key, action) {
        //     console.log('receive key code:' + key + ' action:' + action)
        //     let ret = true
        //     switch (key) {
        //         case hmApp.key.BACK:
        //             break
        //         case hmApp.key.SELECT:
        //             break
        //         case hmApp.key.HOME:
        //             if (hmFS.SysProGetBool('use_main_button') == false) {
        //                 ret = false
        //             }
        //             // timer.stopTimer(timer1)
        //             // hmApp.gotoPage({ url: 'page/index', param: '...' })
        //             break
        //         case hmApp.key.UP:
        //             break
        //         case hmApp.key.DOWN:
        //             break
        //         case hmApp.key.SHORTCUT:
        //             ret = true
        //             // timer.stopTimer(timer1)
        //             // vibrate.stop()
        //             hmApp.gotoPage({ url: 'page/index', param: '...' })
        //             break
        //         default:
        //             break
        //     }
        //     switch (action) {
        //         case hmApp.action.CLICK:
        //             break
        //         case hmApp.action.LONG_PRESS:
        //             break
        //         case hmApp.action.DOUBLE_CLICK:
        //             break
        //         case hmApp.action.RELEASE:
        //             break
        //         case hmApp.action.PRESS:
        //             break
        //         default:
        //             break
        //     }
        //     return ret
        // });

        // core
        if (hmFS.SysProGetChars('omnitrix_mode') == "scanning") {
            if (is_OS) {
                hmUI.createWidget(hmUI.widget.FILL_RECT, {
                    x: 0,
                    y: 0,
                    w: 454,
                    h: 454,
                    radius: 20,
                    color: 0xFFDE59,
                });
            }
        }
        if (hmFS.SysProGetChars('omnitrix_mode') == "activate") {
            hmUI.createWidget(hmUI.widget.FILL_RECT, {
                x: 0,
                y: 0,
                w: 454,
                h: 454,
                radius: 20,
                color: hmFS.SysProGetInt('core_color'),
            });
        }


        if (hmFS.SysProGetBool('omnitrix_sdm') == true) {
            hmUI.createWidget(hmUI.widget.ARC, {
                x: 0,
                y: 0,
                w: 454,
                h: 454,
                start_angle: 0,
                end_angle: 360,
                color: 0xFE9900,
                line_width: hmFS.SysProGetInt('omnitrix_sdm_stage')
            })
        }

        // faceplate
        if (is_OV) {
            hmUI.createWidget(hmUI.widget.IMG, {
                x: px(0),
                y: px(0),
                w: px(454),
                h: px(454),
                pos_x: 0,
                pos_y: 0,
                center_x: 0,
                center_y: 0,
                src: "faceplates/ov.png",
            });
            hmUI.createWidget(hmUI.widget.IMG, {
                x: px(0),
                y: px(0),
                w: px(454),
                h: px(454),
                pos_x: 0,
                pos_y: 0,
                center_x: 0,
                center_y: 0,
                src: "faceplates/ov_selector_base.png",
            });
            hmUI.createWidget(hmUI.widget.IMG, {
                x: px(0),
                y: px(0),
                w: px(454),
                h: px(454),
                pos_x: 0,
                pos_y: 0,
                center_x: 0,
                center_y: 0,
                src: "faceplates/ov_selector_frame.png",
            });
            hmUI.createWidget(hmUI.widget.CIRCLE, {
                center_x: 454 / 2,
                center_y: 454 / 2,
                radius: 454 / 2,
                color: hmFS.SysProGetInt('core_color'),
                alpha: 255 / 2,
            })





        }
        if (is_5YL) {
            hmUI.createWidget(hmUI.widget.CIRCLE, {
                center_x: 454 / 2,
                center_y: 454 / 2,
                radius: 150,
                color: 0xffffff,
                alpha: 180
            });
            hmUI.createWidget(hmUI.widget.IMG, {
                x: px(0),
                y: px(0),
                w: px(454),
                h: px(454),
                pos_x: 0,
                pos_y: 0,
                center_x: 0,
                center_y: 0,
                src: "faceplates/uaf.png",
            });
            hmUI.createWidget(hmUI.widget.IMG, {
                x: px(0),
                y: px(0),
                w: px(454),
                h: px(454),
                pos_x: 0,
                pos_y: 0,
                center_x: 0,
                center_y: 0,
                src: "button/press_state_uaf.png",
            });
            hmUI.createWidget(hmUI.widget.CIRCLE, {
                center_x: 454 / 2,
                center_y: 454 / 2,
                radius: 454 / 2,
                color: hmFS.SysProGetInt('core_color'),
                alpha: 255 / 2,
            })
        }

        let alien_icon;
        let connect;

        if (hmFS.SysProGetBool('connected_to_primus') == false) {
            connect = hmUI.createWidget(hmUI.widget.IMG, {
                x: px(0),
                y: px(0),
                w: px(454),
                h: px(454),
                pos_x: 0,
                pos_y: 0,
                center_x: 0,
                center_y: 0,
                angle: 0,
                src: "faceplates/connection.png",
            });
        }
        else {
            alien_icon = hmUI.createWidget(hmUI.widget.IMG)
        }

        if (hmFS.SysProGetBool('lock_transformations') == true) {

            hmUI.createWidget(hmUI.widget.IMG, {
                x: px(0),
                y: px(0),
                w: px(454),
                h: px(454),
                pos_x: 0,
                pos_y: 0,
                center_x: 0,
                center_y: 0,
                src: "faceplates/lock.png",
            });

        }

        function redraw_aliens_icon() {
            try {
                if (hmFS.SysProGetBool('connected_to_primus') == true) {

                    if (hmFS.SysProGetChars('omnitrix_alien_icons') == "OS") {
                        alien_icon.setProperty(hmUI.prop.MORE, {
                            x: px(0),
                            y: px(0),
                            w: px(454),
                            h: px(454),
                            pos_x: 0,
                            pos_y: 0,
                            center_x: 0,
                            center_y: 0,
                            // src: "aliens/os_style/" + aliens[number] + ".png",
                            src: "../../00101FF9/assets/aliens/os_style/" + aliens[number] + ".png",
                        });
                    };
                    if (hmFS.SysProGetChars('omnitrix_alien_icons') == "UAF") {
                        alien_icon.setProperty(hmUI.prop.MORE, {
                            x: px(0),
                            y: px(0),
                            w: px(454),
                            h: px(454),
                            pos_x: 0,
                            pos_y: 0,
                            center_x: 0,
                            center_y: 0,
                            // src: "aliens/uaf_style/" + aliens[number] + ".png",
                            src: "../../00101FF9/assets/aliens/uaf_style/" + aliens[number] + ".png",
                        });
                    };
                    if (hmFS.SysProGetChars('omnitrix_alien_icons') == "OV") {
                        alien_icon.setProperty(hmUI.prop.MORE, {
                            x: px(0),
                            y: px(0),
                            w: px(454),
                            h: px(454),
                            pos_x: 0,
                            pos_y: 0,
                            center_x: 0,
                            center_y: 0,
                            // src: "aliens/uaf_style/" + aliens[number] + ".png",
                            src: "../../00102032/assets/aliens/ov_style/" + aliens[number] + ".png",
                        });
                    };
                    if (hmFS.SysProGetChars('omnitrix_alien_icons') == "OV_HEADS") {
                        alien_icon.setProperty(hmUI.prop.MORE, {
                            x: px(0),
                            y: px(0),
                            w: px(454),
                            h: px(454),
                            pos_x: 0,
                            pos_y: 0,
                            center_x: 0,
                            center_y: 0,
                            // src: "aliens/uaf_style/" + aliens[number] + ".png",
                            src: "../../00102032/assets/aliens/ov_heads_style/" + aliens[number] + ".png",
                        });
                    };
                }
            } catch {
                console.log("error from redraw alien")
            }
        }

        redraw_aliens_icon();

        function transform() {

            if (hmFS.SysProGetBool('lock_transformations') == true || hmFS.SysProGetBool('connected_to_primus') == false) {
                console.log("nie");
            }
            else {
                if (hmFS.SysProGetBool('transformation_flash') == true) {
                    hmUI.createWidget(hmUI.widget.FILL_RECT, {
                        x: 0,
                        y: 0,
                        w: 454,
                        h: 454,
                        radius: 20,
                        color: hmFS.SysProGetInt('core_color'),
                    });
                }
                click()
                hmFS.SysProSetInt('alien_number', number)
                // vibrate.stop()
                hmApp.gotoPage({ url: "page/transform", param: '...' });
                // vibrate.stop()

            }
        }


        if (is_OS) {
            hmUI.createWidget(hmUI.widget.BUTTON, {
                text: "",
                x: px(0),
                y: px(0),
                w: px(454),
                h: px(454),
                color: 0xffffff,
                normal_src: "faceplates/os_choosing" + hmFS.SysProGetChars('prototype_faceplate_style') + ".png",
                press_src: "faceplates/os_choosing" + hmFS.SysProGetChars('prototype_faceplate_style') + ".png",
                click_func: () => {
                    transform();
                },
            });
        }
        if (is_UAF) {
            hmUI.createWidget(hmUI.widget.IMG, {
                x: px(0),
                y: px(0),
                w: px(454),
                h: px(454),
                pos_x: 0,
                pos_y: 0,
                center_x: 0,
                center_y: 0,
                src: "faceplates/uaf_choosing.png",
            });
            hmUI.createWidget(hmUI.widget.BUTTON, {
                text: "",
                x: px(0),
                y: px(0),
                w: px(454),
                h: px(454),
                color: 0xffffff,
                normal_src: "button/press_state_uaf.png",
                press_src: "button/press_state_uaf.png",
                click_func: () => {
                    transform();
                },
            });
        }
        if (is_OV) {
            hmUI.createWidget(hmUI.widget.CIRCLE, {
                center_x: 454 / 2,
                center_y: 454 / 2,
                radius: 454 / 2,
                color: hmFS.SysProGetInt('core_color'),
                alpha: 255 / 2,
            })
            hmUI.createWidget(hmUI.widget.BUTTON, {
                text: "",
                x: px(0),
                y: px(0),
                w: px(454),
                h: px(454),
                color: 0xffffff,
                normal_src: "nothing.png",
                press_src: "nothing.png",
                click_func: () => {
                    transform();
                    console.log("dodać odchylenie klapki");
                },
            });
        }
        if (is_5YL) {
            hmUI.createWidget(hmUI.widget.BUTTON, {
                text: "",
                x: px(0),
                y: px(0),
                w: px(454),
                h: px(454),
                color: 0xffffff,
                normal_src: "nothing.png",
                press_src: "nothing.png",
                click_func: () => {
                    transform();
                },
            });
        }


        console.log("obcy: " + aliens.length)

        function alienstoleft() {
            if (number <= 0) {
                number = (aliens.length - 1)
            }
            else {
                number--;
            }
            console.log(number)
            click()
        }

        function alienstoright() {
            if (number >= (aliens.length - 1)) {
                number = 0
            }
            else {
                number++;
            }
            click()
            console.log(number)
        }

        // Spin_detection(
        //     (degree) => {
        //         console.log('degree:' + degree)

        //         // ^ są na minusach w prawo
        //         // \/ są na plusach w lewo 
        //         if (degree <= -35) {
        //             if (degree >= -45) {
        //                 // w prawo
        //                 // console.log(" - 1");
        //                 alienstoright()
        //             }
        //         }
        //         if (degree >= 35) {
        //             if (degree <= 45) {
        //                 // w lewo
        //                 // console.log(" + 1");
        //                 alienstoleft()
        //             }
        //         }

        //         redraw_aliens_icon();
        //         // console.log("number: " + number)
        //     },
        // );
        hmApp.registerSpinEvent(function (key, degree) {
            console.log('degree:' + degree)

            // ^ są na minusach w prawo
            // \/ są na plusach w lewo 
            if (degree <= -35) {
                if (degree >= -45) {
                    // w prawo
                    // console.log(" - 1");
                    alienstoright()
                }
            }
            if (degree >= 35) {
                if (degree <= 45) {
                    // w lewo
                    // console.log(" + 1");
                    alienstoleft()
                }
            }

            redraw_aliens_icon();
            // console.log("number: " + number)
        })

        // Gesture_detection(
        //     () => { alienstoleft(); },
        //     () => { alienstoright(); },
        //     () => { alienstoright(); },
        //     () => { alienstoleft(); },
        //     () => { redraw_aliens_icon(); },
        //     true,
        // );
        hmApp.registerGestureEvent(function (event) {
            let msg = 'none'
            switch (event) {
                case hmApp.gesture.UP:
                    msg = 'up'
                    alienstoleft()
                    break
                case hmApp.gesture.DOWN:
                    msg = 'down'
                    alienstoright()
                    break
                case hmApp.gesture.LEFT:
                    msg = 'left'
                    // if (number <= -1) {
                    //     number = (aliens.length - 1)
                    // }
                    // else {
                    alienstoright()
                    // }
                    break
                case hmApp.gesture.RIGHT:
                    msg = 'right'
                    // if (number > (aliens.length)) {
                    //     number = 1
                    // }
                    // else {
                    alienstoleft()
                    // }
                    break
                default:
                    break

            }
            redraw_aliens_icon();
            // console.log(`receive gesture event ${msg}`)

            //Not skipping default behavior
            return true
        })

    },

    onDestroy() {
        // timer.stopTimer(timer1)
        // vibrate.stop()
        hmApp.unregisterGestureEvent();
        hmApp.unregisterKeyEvent();
        hmApp.unregisterSpinEvent();
    },
})
