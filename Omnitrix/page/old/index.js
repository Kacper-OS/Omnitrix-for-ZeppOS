import { click, Gesture_detection, is_5YL, is_OS, is_OV, is_UAF, Key_detection } from "./components";
// import { SetUP } from "./user";
// import { InitialBruteForce } from "./user";

Page({
  build() {
    hmApp.setScreenKeep(true);
    hmUI.scrollToPage(0, false);
    hmFS.SysProSetChars('omnitrix_mode', 'activate');

    // if (hmFS.SysProGetChars("alien_pack_combination") == null || hmFS.SysProGetChars("alien_pack_combination") == "") {
    // InitialBruteForce();
    // }

    // try {
    hmUI.createWidget(hmUI.widget.CIRCLE, {
      center_x: 454 / 2,
      center_y: 454 / 2,
      radius: 454 / 2,
      color: 4521728,
      alpha: 255
    });

    core = hmUI.createWidget(hmUI.widget.CIRCLE)
    core.setProperty(hmUI.prop.MORE, {
      center_x: 454 / 2,
      center_y: 454 / 2,
      radius: 454 / 2,
      color: hmFS.SysProGetInt('core_color'),
      alpha: 255
    });

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

    // }
    circle = hmUI.createWidget(hmUI.widget.CIRCLE);
    faceplate = hmUI.createWidget(hmUI.widget.IMG);
    faceplate_anim = hmUI.createWidget(hmUI.widget.IMG_ANIM);

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
        src: "faceplates/os" + hmFS.SysProGetChars('prototype_faceplate_style') + ".png",
      });

      circle.setProperty(hmUI.prop.MORE, {
        center_x: 454 / 2,
        center_y: 454 / 2,
        radius: 150,
        color: 0xffffff,
        alpha: 0
      });
    }
    if (is_UAF) {
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
      circle.setProperty(hmUI.prop.MORE, {
        center_x: 454 / 2,
        center_y: 454 / 2,
        radius: 150,
        color: 0xffffff,
        alpha: 0
      });
    } if (is_OV) {
      faceplate.setProperty(hmUI.prop.MORE, {
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
      circle.setProperty(hmUI.prop.MORE, {
        center_x: 454 / 2,
        center_y: 454 / 2,
        radius: 150,
        color: 0xffffff,
        alpha: 0
      });
    }
    if (is_5YL) {
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
      circle.setProperty(hmUI.prop.MORE, {
        center_x: 454 / 2,
        center_y: 454 / 2,
        radius: 150,
        color: 0xffffff,
        alpha: 180
      });
    }

    main_button = hmUI.createWidget(hmUI.widget.BUTTON)

    function pressed() {
      if (hmFS.SysProGetChars('omnitrix_mode') == "activate") {
        if (is_OS) {
          hmUI.deleteWidget(faceplate)

          faceplate_anim.setProperty(hmUI.prop.MORE, {
            anim_path: 'faceplates/activation_os',
            anim_prefix: 'frame',
            anim_ext: 'png',
            anim_fps: 25,
            anim_size: 10,
            repeat_count: 1,
            anim_status: hmUI.anim_status.START,
            x: px(0),
            y: px(0),
            anim_complete_call: () => {
              click()
              hmApp.gotoPage({ url: 'page/choosing', param: '...' });
            }
          });
        }
        else if (is_UAF) {

          faceplate.setProperty(hmUI.prop.MORE, {
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

          faceplate_anim.setProperty(hmUI.prop.MORE, {
            anim_path: 'faceplates/activation_uaf',
            anim_prefix: 'frame',
            anim_ext: 'png',
            anim_fps: 45,
            anim_size: 9,
            repeat_count: 1,
            anim_status: hmUI.anim_status.START,
            x: px(0),
            y: px(0),
            anim_complete_call: () => {
              click()
              hmApp.gotoPage({ url: 'page/choosing', param: '...' });
            }
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

        }
        else {
          click()
          hmApp.gotoPage({ url: 'page/choosing', param: '...' });
        }



      }
      if (hmFS.SysProGetChars('omnitrix_mode') == "scanning") {
        hmFS.SysProSetChars('omnitrix_mode', 'scanning');
        click()
        if (is_OS) {
          core.setProperty(hmUI.prop.MORE, {
            center_x: 454 / 2,
            center_y: 454 / 2,
            radius: 454 / 2,
            color: 0xFFDE59,
            alpha: 255
          });
          hmUI.deleteWidget(faceplate)
          if (hmFS.SysProGetBool('infinite_scanning') == false) {
            faceplate_anim.setProperty(hmUI.prop.MORE, {
              anim_path: 'faceplates/scanning',
              anim_prefix: 'os_midle',
              anim_ext: 'png',
              anim_fps: 20,
              anim_size: 8,
              repeat_count: 1,
              anim_status: hmUI.anim_status.START,
              x: px(0),
              y: px(0),
              anim_complete_call: () => {
                hmApp.gotoPage({ url: 'page/choosing', param: '...' });
              }
            });
          }
          if (hmFS.SysProGetBool('infinite_scanning') == true) {
            faceplate_anim.setProperty(hmUI.prop.MORE, {
              anim_path: 'faceplates/scanning',
              anim_prefix: 'os_midle',
              anim_ext: 'png',
              anim_fps: 20,
              anim_size: 8,
              repeat_count: 0,
              anim_status: hmUI.anim_status.START,
              x: px(0),
              y: px(0),
              anim_complete_call: () => {
                // hmApp.gotoPage({ url: 'page/choosing', param: '...' });
              }
            });
          }
        }

      }


    }


    if (is_OS) {
      main_button.setProperty(hmUI.prop.MORE, {
        text: "",
        x: px(0),
        y: px(0),
        w: px(454),
        h: px(454),
        color: 0xffffff,
        normal_src: "nothing.png",
        press_src: "button/press_state_os.png",
        click_func: () => {
          pressed();
        },
      });
    };
    if (is_OV) {
      main_button.setProperty(hmUI.prop.MORE, {
        text: "",
        x: px(0),
        y: px(0),
        w: px(454),
        h: px(454),
        color: 0xffffff,
        normal_src: "nothing.png",
        press_src: "button/press_state_os.png",
        click_func: () => {
          pressed();
        },
      });
    };
    if (is_UAF || is_5YL) {
      main_button.setProperty(hmUI.prop.MORE, {
        text: "",
        x: px(0),
        y: px(0),
        w: px(454),
        h: px(454),
        color: 0xffffff,
        normal_src: "nothing.png",
        press_src: "button/press_state_uaf.png",
        click_func: () => {
          pressed();
        },
      });
    };

    Key_detection(
      () => { pressed(); },
      () => { hmApp.gotoPage({ url: 'page/settings', param: '...' }) },
      true,
      hmFS.SysProGetBool('use_main_button'),
      true,
    );

    Gesture_detection(
      () => {
        hmFS.SysProSetChars('omnitrix_mode', 'scanning');
        hmUI.showToast({
          text: 'Omnitrix:\nScanning mode...'
        })
      },
      () => {
        hmFS.SysProSetChars('omnitrix_mode', 'geneticrepair');
        hmUI.showToast({
          text: 'Omnitrix:\nGenetic repair...'
        })
      },
      () => {
        faceplate.setProperty(hmUI.prop.MORE, {
          x: px(0),
          y: px(0),
          w: px(454),
          h: px(454),
          pos_x: 0,
          pos_y: 0,
          center_x: 0,
          center_y: 0,
          src: "faceplates/wires_out.png",
        });
      },
      () => { },
      () => { },
      true,
    );
    // hmApp.registerGestureEvent(function (event) {
    //   let msg = 'none'
    //   switch (event) {
    //     case hmApp.gesture.UP:
    //       msg = 'up'

    //       break
    //     case hmApp.gesture.DOWN:
    //       msg = 'down'
    //       hmFS.SysProSetChars('omnitrix_mode', 'geneticrepair');
    //       hmUI.showToast({
    //         text: 'Omnitrix:\nGenetic repair...'
    //       })
    //       break
    //     case hmApp.gesture.LEFT:
    //       msg = 'left'
    //       break
    //     case hmApp.gesture.RIGHT:
    //       msg = 'right'
    //       break
    //     default:
    //       break

    //   }
    //   // console.log(`receive gesture event ${msg}`)
    //   return false
    // });

  },
  onDestroy() {
    // vibrate.stop()
    hmApp.unregisterGestureEvent();
    hmApp.unregisterKeyEvent();
    hmApp.unregisterSpinEvent();
  },
})
