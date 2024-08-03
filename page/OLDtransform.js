import { is_5YL, is_OS, is_OV, is_UAF, Key_detection } from "./components";

Page({
    build() {
        // core.setProperty(hmUI.prop.MORE, {
        //     center_x: 454 / 2,
        //     center_y: 454 / 2,
        //     radius: 454 / 2,
        //     color: 4521728,
        //     alpha: 255
        // });

        if (hmFS.SysProGetBool('omnitrix_sdm') == true) {

            hmFS.SysProSetInt('omnitrix_sdm_stage', (hmFS.SysProGetInt('omnitrix_sdm_stage',) + 10))
        }

        hmApp.setScreenKeep(true);
        hmUI.scrollToPage(0, false)
        Key_detection(
            () => {
                click();
                hmApp.gotoPage({ url: 'page/index', param: '...' })
            },
            () => {
                click();
                hmApp.gotoPage({ url: 'page/choosing', param: '...' })
            },
            true,
            hmFS.SysProGetBool('use_main_button'),
            true,
        );
        // hmApp.registerKeyEvent(function (key, action) {
        //     // console.log('receive key code:' + key + ' action:' + action)
        //     let ret = true
        //     switch (key) {
        //         case hmApp.key.BACK:
        //             break
        //         case hmApp.key.SELECT:
        //             break
        //         case hmApp.key.HOME:
        //             // ret = true
        //             if (hmFS.SysProGetBool('use_main_button') == false) {
        //                 ret = false
        //             }
        //             if (hmFS.SysProGetBool('use_main_button') == true) {
        //                 // ret = false
        //                 click();
        //                 hmApp.gotoPage({ url: 'page/index', param: '...' })
        //             }
        //             break
        //         case hmApp.key.UP:
        //             break
        //         case hmApp.key.DOWN:
        //             break
        //         case hmApp.key.SHORTCUT:
        //             // ret = true
        //             click();
        //             hmApp.gotoPage({ url: 'page/choosing', param: '...' })
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

        core = hmUI.createWidget(hmUI.widget.CIRCLE)


        if (is_OS) {
            if (hmFS.SysProGetBool('prototype_white_symbol') == true) {
                core.setProperty(hmUI.prop.MORE, {
                    center_x: 454 / 2,
                    center_y: 454 / 2,
                    radius: 454 / 2,
                    color: 0xffffff,
                    alpha: 255
                });
            }
            if (hmFS.SysProGetBool('prototype_white_symbol') == false) {
                core.setProperty(hmUI.prop.MORE, {
                    center_x: 454 / 2,
                    center_y: 454 / 2,
                    radius: 454 / 2,
                    color: hmFS.SysProGetInt('core_color'),
                    alpha: 255
                });
            }
        }
        if (is_UAF || is_OV || is_5YL) {
            core.setProperty(hmUI.prop.MORE, {
                center_x: 454 / 2,
                center_y: 454 / 2,
                radius: 454 / 2,
                color: hmFS.SysProGetInt('core_color'),
                alpha: 255
            });
        }


        // function detransform() {
        //     console.log('Button pressed');
        //     core.setProperty(hmUI.prop.MORE, {
        //         center_x: 454 / 2,
        //         center_y: 454 / 2,
        //         radius: 454 / 2,
        //         color: 0xff0000,
        //         alpha: 255
        //     });
        //     hmUI.deleteWidget(main_button)
        //     hmApp.gotoPage({ url: 'page/index', param: '...' });
        // }

        faceplate = hmUI.createWidget(hmUI.widget.IMG)
        arc = hmUI.createWidget(hmUI.widget.ARC)
        arms = hmUI.createWidget(hmUI.widget.IMG)
        main_button = hmUI.createWidget(hmUI.widget.BUTTON)
        // let is_ultimate = false

        function detransform() {
            click();
            if (hmFS.SysProGetBool('ultimate_function') == false) {
                if (is_OS) {
                    core.setProperty(hmUI.prop.MORE, {
                        center_x: 454 / 2,
                        center_y: 454 / 2,
                        radius: 454 / 2,
                        color: 0xff0000,
                        alpha: 255
                    });
                }
                if (is_UAF || is_OV || is_5YL) {
                    core.setProperty(hmUI.prop.MORE, {
                        center_x: 454 / 2,
                        center_y: 454 / 2,
                        radius: 454 / 2,
                        color: 0xffffff,
                        alpha: 255
                    });
                }
                hmApp.gotoPage({ url: 'page/index', param: '...' });
            };
            if (hmFS.SysProGetBool('ultimate_function') == true) {
                // if (is_ultimate == false) {

                arc.setProperty(hmUI.prop.MORE, {
                    x: 0,
                    y: 0,
                    w: 454,
                    h: 454,
                    start_angle: 0,
                    end_angle: 360,
                    color: 0x000000,
                    line_width: 70
                });

                arms.setProperty(hmUI.prop.MORE, {
                    x: px(0),
                    y: px(0),
                    w: px(454),
                    h: px(454),
                    pos_x: 0,
                    pos_y: 0,
                    center_x: 0,
                    center_y: 0,
                    src: "faceplates/ultimate.png",
                });

                if (is_OS) {
                    faceplate.setProperty(hmUI.prop.MORE, {
                        x: px(0),
                        y: px(0),
                        w: px(454),
                        h: px(454),
                        pos_x: 0,
                        pos_y: 0,
                        center_x: 0,
                        center_y: 0,
                        src: "faceplates/os.png",
                    });

                    main_button.setProperty(hmUI.prop.MORE, {
                        text: "",
                        x: px(0),
                        y: px(0),
                        w: px(454),
                        h: px(454),
                        color: 0xffffff,
                        normal_src: "button/press_state_os_2_small.png",
                        press_src: "button/press_state_os_2_small.png",
                        click_func: () => {
                            // detransform();
                            // console.log('Button pressed');
                            core.setProperty(hmUI.prop.MORE, {
                                center_x: 454 / 2,
                                center_y: 454 / 2,
                                radius: 454 / 2,
                                color: 0xff0000,
                                alpha: 255
                            });
                            click();
                            hmApp.gotoPage({ url: 'page/index', param: '...' });
                        },
                    });

                }
                if (is_UAF || is_OV || is_5YL) {
                    faceplate.setProperty(hmUI.prop.MORE, {
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
                    if (is_UAF) {
                        main_button.setProperty(hmUI.prop.MORE, {
                            text: "",
                            x: px(0),
                            y: px(0),
                            w: px(454),
                            h: px(454),
                            color: 0xffffff,
                            normal_src: "button/press_state_uaf_small.png",
                            press_src: "button/press_state_uaf_small.png",
                            click_func: () => {
                                // detransform();
                                // console.log('Button pressed');
                                core.setProperty(hmUI.prop.MORE, {
                                    center_x: 454 / 2,
                                    center_y: 454 / 2,
                                    radius: 454 / 2,
                                    color: 0xffffff,
                                    alpha: 255
                                });
                                click();
                                hmApp.gotoPage({ url: 'page/index', param: '...' });
                            },
                        });
                    }
                    if (is_OV || is_5YL) {
                        main_button.setProperty(hmUI.prop.MORE, {
                            text: "",
                            x: px(0),
                            y: px(0),
                            w: px(454),
                            h: px(454),
                            color: 0xffffff,
                            normal_src: "button/press_state_os_small.png",
                            press_src: "button/press_state_os_small.png",
                            click_func: () => {
                                // detransform();
                                // console.log('Button pressed');
                                core.setProperty(hmUI.prop.MORE, {
                                    center_x: 454 / 2,
                                    center_y: 454 / 2,
                                    radius: 454 / 2,
                                    color: 0xffffff,
                                    alpha: 255
                                });
                                click();
                                hmApp.gotoPage({ url: 'page/index', param: '...' });
                            },
                        });
                    }


                }
                // is_ultimate = true



                // }
                // if (is_ultimate == true) {
                //     hmApp.gotoPage({ url: 'page/index', param: '...' });
                // }
            }
        }




        if (is_OS) {
            arc.setProperty(hmUI.prop.MORE, {
                x: 0,
                y: 0,
                w: 454,
                h: 454,
                start_angle: 0,
                end_angle: 360,
                color: 0x000000,
                line_width: 0
            })
            faceplate.setProperty(hmUI.prop.MORE, {
                x: px(0),
                y: px(0),
                w: px(454),
                h: px(454),
                pos_x: 0,
                pos_y: 0,
                center_x: 0,
                center_y: 0,
                src: "faceplates/os" + hmFS.SysProGetChars('prototype_faceplate_style') + ".png",
            });
            main_button.setProperty(hmUI.prop.MORE, {
                text: "",
                x: px(0),
                y: px(0),
                w: px(454),
                h: px(454),
                color: 0xffffff,
                normal_src: "button/press_state_os_2.png",
                press_src: "button/press_state_os_2.png",
                click_func: () => {
                    detransform();
                    // console.log('Button pressed');
                    // core.setProperty(hmUI.prop.MORE, {
                    //     center_x: 454 / 2,
                    //     center_y: 454 / 2,
                    //     radius: 454 / 2,
                    //     color: 0xff0000,
                    //     alpha: 255
                    // });
                    // click();
                    // hmApp.gotoPage({ url: 'page/index', param: '...' });
                },
            });

        }
        if (is_UAF) {
            arc.setProperty(hmUI.prop.MORE, {
                x: 0,
                y: 0,
                w: 454,
                h: 454,
                start_angle: 0,
                end_angle: 360,
                color: 0x000000,
                line_width: 30
            })
            main_button.setProperty(hmUI.prop.MORE, {
                text: "",
                x: px(0),
                y: px(0),
                w: px(454),
                h: px(454),
                color: 0xffffff,
                normal_src: "faceplates/uaf.png",
                press_src: "faceplates/uaf.png",
                click_func: () => {
                    detransform();
                    // console.log('Button pressed');
                    // core.setProperty(hmUI.prop.MORE, {
                    //     center_x: 454 / 2,
                    //     center_y: 454 / 2,
                    //     radius: 454 / 2,
                    //     color: 0xffffff,
                    //     alpha: 255
                    // });
                    // click();
                    // hmApp.gotoPage({ url: 'page/index', param: '...' });
                },
            });
        }
        if (is_OV || is_5YL) {
            arc.setProperty(hmUI.prop.MORE, {
                x: 0,
                y: 0,
                w: 454,
                h: 454,
                start_angle: 0,
                end_angle: 360,
                color: 0x000000,
                line_width: 0
            })
            faceplate.setProperty(hmUI.prop.MORE, {
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
            main_button.setProperty(hmUI.prop.MORE, {
                text: "",
                x: px(0),
                y: px(0),
                w: px(454),
                h: px(454),
                color: 0xffffff,
                normal_src: "button/press_state_os.png",
                press_src: "button/press_state_os.png",
                click_func: () => {
                    detransform();
                    // console.log('Button pressed');
                    //     core.setProperty(hmUI.prop.MORE, {
                    //         center_x: 454 / 2,
                    //         center_y: 454 / 2,
                    //         radius: 454 / 2,
                    //         color: 0xffffff,
                    //         alpha: 255
                    //     });
                    //     click();
                    //     hmApp.gotoPage({ url: 'page/index', param: '...' });
                },
            });
        }


    },
    onDestroy() {
        // vibrate.stop()
        hmApp.unregisterGestureEvent();
        hmApp.unregisterKeyEvent();
        hmApp.unregisterSpinEvent();
    },
})
