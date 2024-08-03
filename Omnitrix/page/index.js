// import { gettext } from "i18n"
import { core_color, darker_core_color, Gesture_detection, is_5YL, is_OS, is_OV, is_UAF, Key_detection, MasterControl, set_omnitrix_mode, get_omnitrix_mode, is_BIO, recharge_color } from "./components";
import { aliens, refresh_aliens } from "./aliens"

// ------------------------------------------------------------ functions ( outside ) ---------------------------------------------------------------------------- 
number = hmFS.SysProGetInt("alien_number");

const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE)

function vibrate_function() {
  vibrate.stop()
  vibrate.scene = 25
  vibrate.start()
}

function heavy_vibrate_function() {
  vibrate.stop()
  vibrate.scene = 28
  vibrate.start()
}

Page({
  build() {
    // ------------------------------------------------------------ set-up ----------------------------------------------------------------------------

    // console.log(gettext("example"))
    // hmUI.setScrollView(true, 454, 0, false)

    hmApp.setScreenKeep(true);
    hmUI.scrollToPage(0, false);
    refresh_aliens();

    // ------------------------------------------------------------ layout set-up ----------------------------------------------------------------------------

    core = hmUI.createWidget(hmUI.widget.FILL_RECT,
      {
        x: 0,
        y: 0,
        w: 454,
        h: 454,
        color: core_color
      }
    );

    os_sdm_arc = hmUI.createWidget(hmUI.widget.ARC, {
      x: 0,
      y: 0,
      w: 454,
      h: 454,
      start_angle: 0,
      end_angle: 360,
      color: 0xFE9900,
      line_width: hmFS.SysProGetInt("omnitrix_sdm_stage")
    });

    core_light = hmUI.createWidget(hmUI.widget.CIRCLE, {
      center_x: 454 / 2,
      center_y: 454 / 2,
      radius: 150,
      color: 0xffffff,
      alpha: 180
    });

    core_gradient = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 454,
      h: 454,
      pos_x: 0,
      pos_y: 0,
      center_x: 0,
      center_y: 0,
      src: "faceplates/core_gradient.png",
    });

    fake_faceplate = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 454,
      h: 454,
      pos_x: 0,
      pos_y: 0,
      center_x: 0,
      center_y: 0,
      src: "faceplates/uaf.png",
    });

    faceplate_anim = hmUI.createWidget(hmUI.widget.IMG_ANIM);

    faceplate = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 454,
      h: 454,
      pos_x: 0,
      pos_y: 0,
      center_x: 0,
      center_y: 0,
    });

    arc = hmUI.createWidget(hmUI.widget.ARC, {
      x: 0,
      y: 0,
      w: 454,
      h: 454,
      start_angle: 0,
      end_angle: 360,
      color: 0x000000,
      line_width: 30
    });

    ultimate_arms = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 454,
      h: 454,
      pos_x: 0,
      pos_y: 0,
      center_x: 0,
      center_y: 0,
      src: "faceplates/ultimate_arms.png",
    });


    ov_selector_base = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 454,
      h: 454,
      pos_x: 0,
      pos_y: 0,
      center_x: 0,
      center_y: 0,
      src: "faceplates/ov_selector_base.png",
    });

    ov_selector_frame = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 454,
      h: 454,
      pos_x: 0,
      pos_y: 0,
      center_x: 0,
      center_y: 0,
      src: "faceplates/ov_selector_frame.png",
    });

    alien_icon = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 454,
      h: 454,
      pos_x: 0,
      pos_y: 0,
      center_x: 0,
      center_y: 0,
    });
    alien_lock = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 454,
      h: 454,
      pos_x: 0,
      pos_y: 0,
      center_x: 0,
      center_y: 0,
      src: "faceplates/lock.png",
    });

    color_filter = hmUI.createWidget(hmUI.widget.CIRCLE, {
      center_x: 454 / 2,
      center_y: 454 / 2,
      radius: 454 / 2,
      color: core_color,
      alpha: 255 / 2,
    });


    main_button = hmUI.createWidget(hmUI.widget.BUTTON)

    virutal_bezel = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 454,
      h: 454,
      pos_x: 0,
      pos_y: 0,
      center_x: 0,
      center_y: 0,
      src: "nothing.png",
    });

    transformation_flash = hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 0,
      y: 0,
      w: 454,
      h: 454,
      color: darker_core_color,
    });
    // ------------------------------------------------------------ logic ----------------------------------------------------------------------------

    // ------------------------------------------------------------ functions ( inside ) ---------------------------------------------------------------------------- 
    function hide_layout() {
      os_sdm_arc.setProperty(hmUI.prop.VISIBLE, false)
      core_light.setProperty(hmUI.prop.VISIBLE, false)
      core_gradient.setProperty(hmUI.prop.VISIBLE, false)
      arc.setProperty(hmUI.prop.VISIBLE, false);
      // ultimate_arc.setProperty(hmUI.prop.VISIBLE, false);
      ultimate_arms.setProperty(hmUI.prop.VISIBLE, false);
      fake_faceplate.setProperty(hmUI.prop.VISIBLE, false);
      faceplate_anim.setProperty(hmUI.prop.VISIBLE, false)
      ov_selector_base.setProperty(hmUI.prop.VISIBLE, false)
      ov_selector_frame.setProperty(hmUI.prop.VISIBLE, false)
      alien_icon.setProperty(hmUI.prop.VISIBLE, false)
      alien_lock.setProperty(hmUI.prop.VISIBLE, false)
      color_filter.setProperty(hmUI.prop.VISIBLE, false)
      virutal_bezel.setProperty(hmUI.prop.VISIBLE, false)
      transformation_flash.setProperty(hmUI.prop.VISIBLE, false)
    }


    // ------------------------------------------------------------ main_button_press ----------------------------------------------------------------------------
    function main_button_press() {
      vibrate_function();
      if (get_omnitrix_mode() == "active") {

        if (is_OS) {
          faceplate.setProperty(hmUI.prop.VISIBLE, false);
          faceplate_anim.setProperty(hmUI.prop.VISIBLE, true);

          faceplate_anim.setProperty(hmUI.prop.MORE, {
            anim_path: "faceplates/activation_os",
            anim_prefix: "frame",
            anim_ext: "png",
            anim_fps: 25,
            anim_size: (11 + (hmFS.SysProGetBool("omnitrix_square_selector") * 2)),
            repeat_count: 1,
            anim_status: hmUI.anim_status.START,
            x: px(0),
            y: px(0),
            anim_complete_call: () => {
              selector_mode();
            }
          });
        }
        else if (is_UAF) {
          faceplate.setProperty(hmUI.prop.src, {
            src: "button/uaf.png",
          });
          core_gradient.setProperty(hmUI.prop.VISIBLE, true)
          faceplate.setProperty(hmUI.prop.VISIBLE, true);
          faceplate_anim.setProperty(hmUI.prop.VISIBLE, true);

          faceplate_anim.setProperty(hmUI.prop.MORE, {
            anim_path: "faceplates/activation_uaf",
            anim_prefix: "frame",
            anim_ext: "png",
            anim_fps: 25,
            anim_size: 11,
            repeat_count: 1,
            anim_status: hmUI.anim_status.START,
            x: px(0),
            y: px(0),
            anim_complete_call: () => {
              selector_mode();
            }
          });
        }
        else if (is_OV || is_5YL || is_BIO) {
          selector_mode();
        }
      }
      else if (get_omnitrix_mode() == "scanning") {
        if (is_OS) {

          core.setProperty(hmUI.prop.COLOR, {
            color: 0xFFDE59
          });

          faceplate.setProperty(hmUI.prop.VISIBLE, false);
          faceplate_anim.setProperty(hmUI.prop.VISIBLE, true);

          faceplate_anim.setProperty(hmUI.prop.MORE, {
            anim_path: "faceplates/activation_os",
            anim_prefix: "frame",
            anim_ext: "png",
            anim_fps: 25,
            anim_size: 5,
            repeat_count: 1,
            anim_status: hmUI.anim_status.START,
            x: px(0),
            y: px(0),
            anim_complete_call: () => {
              faceplate_anim.setProperty(hmUI.prop.MORE, {
                anim_path: "faceplates/scanning_os",
                anim_prefix: "frame",
                anim_ext: "png",
                anim_fps: 20,
                anim_size: 8,
                repeat_count: !hmFS.SysProGetBool("infinite_scanning"),
                anim_status: hmUI.anim_status.START,
                x: px(0),
                y: px(0),
                anim_complete_call: () => {
                  selector_mode();
                }
              });
            }
          });

        }


      }

    }

    // ------------------------------------------------------------ active_mode ----------------------------------------------------------------------------
    function active_mode() {
      vibrate_function();

      core.setProperty(hmUI.prop.COLOR, {
        color: core_color
      });

      hide_layout();

      if (is_OS) {
        os_sdm_arc.setProperty(hmUI.prop.VISIBLE, hmFS.SysProGetBool("omnitrix_sdm"))

        faceplate.setProperty(hmUI.prop.src, {
          src: "faceplates/os" + hmFS.SysProGetChars("prototype_faceplate_style") + ".png",
        });

        main_button.setProperty(hmUI.prop.MORE, {
          x: 0,
          y: 0,
          text: "",
          w: 454,
          h: 454,
          normal_src: "nothing.png",
          press_src: "button/os.png",
          click_func: () => {
            main_button_press();
          }
        });

      }

      else if (is_UAF) {
        faceplate.setProperty(hmUI.prop.src, {
          src: "faceplates/uaf.png",
        });

        main_button.setProperty(hmUI.prop.MORE, {
          x: 0,
          y: 0,
          text: "",
          w: 454,
          h: 454,
          normal_src: "nothing.png",
          press_src: "button/uaf.png",
          click_func: () => {
            main_button_press();
          }
        });
      }
      else if (is_OV) {
        faceplate.setProperty(hmUI.prop.src, {
          src: "faceplates/ov.png",
        });

        main_button.setProperty(hmUI.prop.MORE, {
          x: 0,
          y: 0,
          text: "",
          w: 454,
          h: 454,
          normal_src: "nothing.png",
          press_src: "nothing.png",
          click_func: () => {
            main_button_press();
          }
        });
      }
      else if (is_5YL) {
        core_light.setProperty(hmUI.prop.VISIBLE, true)
        faceplate.setProperty(hmUI.prop.src, {
          src: "faceplates/uaf.png",
        });

        main_button.setProperty(hmUI.prop.MORE, {
          x: 0,
          y: 0,
          text: "",
          w: 454,
          h: 454,
          normal_src: "nothing.png",
          press_src: "button/uaf.png",
          click_func: () => {
            main_button_press();
          }
        });
      }
      else if (is_BIO) {
        faceplate.setProperty(hmUI.prop.src, {
          src: "faceplates/bio.png",
        });

        main_button.setProperty(hmUI.prop.MORE, {
          x: 0,
          y: 0,
          text: "",
          w: 454,
          h: 454,
          normal_src: "nothing.png",
          press_src: "nothing.png",
          click_func: () => {
            main_button_press();
          }
        });
      }

      set_omnitrix_mode("active");
    }

    active_mode();

    // ------------------------------------------------------------ recharge_mode ----------------------------------------------------------------------------

    function recharge_mode() {
      vibrate_function();

      core.setProperty(hmUI.prop.COLOR, {
        color: recharge_color
      });

      hide_layout();

      if (is_OS) {
        os_sdm_arc.setProperty(hmUI.prop.VISIBLE, hmFS.SysProGetBool("omnitrix_sdm"))

        faceplate.setProperty(hmUI.prop.src, {
          src: "faceplates/os" + hmFS.SysProGetChars("prototype_faceplate_style") + ".png",
        });
      }

      main_button.setProperty(hmUI.prop.MORE, {
        x: 0,
        y: 0,
        text: "",
        w: 454,
        h: 454,
        normal_src: "nothing.png",
        press_src: "nothing.png",
        click_func: () => {
          clearTimeout(recharging)
          active_mode();
        }
      });

      set_omnitrix_mode("recharge");

      const recharging = setTimeout(() => {
        active_mode();
      }, 30000);

    }

    // ------------------------------------------------------------ selector ----------------------------------------------------------------------------
    function redraw_aliens_icon() {
      if (hmFS.SysProGetInt("choosing_animation") == 2 && is_OS) {
        alien_icon.setProperty(hmUI.prop.src, {
          src: "faceplates/block.png",
        });
      }
      try {
        if (hmFS.SysProGetBool("connected_to_primus")) {

          if (hmFS.SysProGetChars("omnitrix_alien_icons") == "OS") {
            alien_icon.setProperty(hmUI.prop.src, {
              src: "../../00101FF9/assets/aliens/os_style/" + aliens[number] + ".png",
            });
          }
          if (hmFS.SysProGetChars("omnitrix_alien_icons") == "UAF") {
            alien_icon.setProperty(hmUI.prop.src, {
              src: "../../00101FF9/assets/aliens/uaf_style/" + aliens[number] + ".png",
            });
          };
          if (hmFS.SysProGetChars("omnitrix_alien_icons") == "OV") {
            alien_icon.setProperty(hmUI.prop.src, {
              src: "../../00102032/assets/aliens/ov_style/" + aliens[number] + ".png",
            });
          }
          if (hmFS.SysProGetChars("omnitrix_alien_icons") == "OV_HEADS") {
            alien_icon.setProperty(hmUI.prop.src, {
              src: "../../00102032/assets/aliens/ov_heads_style/" + aliens[number] + ".png",
            });
          };
        }
        else {
          alien_icon.setProperty(hmUI.prop.src, {
            src: "faceplates/connection.png",
          });
        }
      } catch {
        console.log("error from redraw alien")
      }
    }

    function alienstoleft() {
      if (number <= 0) {
        number = (aliens.length - 1)
      }
      else {
        number--;
      }
      vibrate_function();
      redraw_aliens_icon();
    }

    function alienstoright() {
      if (number >= (aliens.length - 1)) {
        number = 0
      }
      else {
        number++;
      }
      vibrate_function();
      redraw_aliens_icon();
    }

    // ------------------------------------------------------------ selector_mode ----------------------------------------------------------------------------
    function selector_mode() {

      redraw_aliens_icon();
      hide_layout();

      alien_icon.setProperty(hmUI.prop.VISIBLE, true)
      faceplate.setProperty(hmUI.prop.VISIBLE, true);
      faceplate_anim.setProperty(hmUI.prop.VISIBLE, false);
      alien_lock.setProperty(hmUI.prop.VISIBLE, hmFS.SysProGetBool("lock_transformations"));

      transformation_flash.setProperty(hmUI.prop.COLOR, {
        color: darker_core_color,
      });

      if (is_OS) {

        if (hmFS.SysProGetBool("omnitrix_square_selector") && hmFS.SysProGetChars("prototype_faceplate_style") == "") {
          faceplate.setProperty(hmUI.prop.src, {
            src: "faceplates/activation_os/frame_11.png",
          });
        }
        else {
          faceplate.setProperty(hmUI.prop.src, {
            src: "faceplates/os_selector" + hmFS.SysProGetChars("prototype_faceplate_style") + ".png",
          });
        }
      }
      else if (is_UAF) {
        core_gradient.setProperty(hmUI.prop.VISIBLE, true)
        // color_filter.setProperty(hmUI.prop.VISIBLE, true)

        faceplate.setProperty(hmUI.prop.src, {
          src: "button/uaf.png",
        });
      }
      else if (is_OV) {
        ov_selector_base.setProperty(hmUI.prop.VISIBLE, true)
        ov_selector_frame.setProperty(hmUI.prop.VISIBLE, true)
        color_filter.setProperty(hmUI.prop.VISIBLE, true)

        faceplate.setProperty(hmUI.prop.src, {
          src: "faceplates/ov.png",
        });
      }
      else if (is_BIO) {
        // ov_selector_base.setProperty(hmUI.prop.VISIBLE, true)
        ov_selector_frame.setProperty(hmUI.prop.VISIBLE, true)
        color_filter.setProperty(hmUI.prop.VISIBLE, true)

        faceplate.setProperty(hmUI.prop.src, {
          src: "faceplates/bio.png",
        });
      }
      else if (is_5YL) {
        core_light.setProperty(hmUI.prop.VISIBLE, true)
        fake_faceplate.setProperty(hmUI.prop.VISIBLE, true);
        ov_selector_frame.setProperty(hmUI.prop.VISIBLE, true)
        color_filter.setProperty(hmUI.prop.VISIBLE, true)

        faceplate.setProperty(hmUI.prop.src, {
          src: "button/uaf.png",
        });
      }


      set_omnitrix_mode("selector");

      if (hmFS.SysProGetBool("virtual_bezel")) {
        // ------------------------------------------------------------ virtual bezel ----------------------------------------------------------------------------
        virutal_bezel.setProperty(hmUI.prop.VISIBLE, true)

        let last = 1
        let current = 1

        function hitbox(number, x, y, mouse_x, mouse_y, size) {
          if (x <= mouse_x && mouse_x <= x + size) {
            if (y <= mouse_y && mouse_y <= y + size) {
              last = current
              current = number
            }
          }
        }

        function OnVirtualBezelRotation(mouse_x, mouse_y, screen_size, hitbox_size, right, left) {
          hitbox(1, ((screen_size / 2) - (hitbox_size / 2)), 0, mouse_x, mouse_y, hitbox_size)
          hitbox(2, ((screen_size / 2) + (screen_size / 4)), hitbox_size, mouse_x, mouse_y, hitbox_size)
          hitbox(3, (screen_size - hitbox_size), ((screen_size / 2) - (hitbox_size / 2)), mouse_x, mouse_y, hitbox_size)
          hitbox(4, ((screen_size / 2) + (screen_size / 4)), (screen_size - (hitbox_size * 2)), mouse_x, mouse_y, hitbox_size)
          hitbox(5, ((screen_size / 2) - (hitbox_size / 2)), ((screen_size) - hitbox_size), mouse_x, mouse_y, hitbox_size)
          hitbox(6, ((screen_size / 2) - (screen_size / 3) - (hitbox_size / 2)), (screen_size - (hitbox_size * 2)), mouse_x, mouse_y, hitbox_size)
          hitbox(7, 0, ((screen_size / 2) - (hitbox_size / 2)), mouse_x, mouse_y, hitbox_size)
          hitbox(8, ((screen_size / 2) - (screen_size / 3) - (hitbox_size / 2)), hitbox_size, mouse_x, mouse_y, hitbox_size)

          if (last < current) {
            if (last == 1 && current == 8) {
              left();
            }
            else {
              right();
            }
          }
          if (last > current) {
            if (last == 8 && current == 1) {
              right();
            }
            else {
              left();
            }
          }
          if (last == current) { }
        }

        virutal_bezel.addEventListener(hmUI.event.MOVE, function (info) {
          const dx = info.x - 227;
          const dy = info.y - 227;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {

          } else {
            OnVirtualBezelRotation(info.x, info.y, 454, 75, () => {
              alienstoright();
            }, () => {
              alienstoleft();
            })

          }
        })
        virutal_bezel.addEventListener(hmUI.event.CLICK_DOWN, function (info) {
          const dx = info.x - 227;
          const dy = info.y - 227;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            if (hmFS.SysProGetBool("lock_transformations") == true || hmFS.SysProGetBool("connected_to_primus") == false) {

            }
            else {
              if (hmFS.SysProGetBool("transformation_flash") == true) {
                heavy_vibrate_function();
                transformation_flash.setProperty(hmUI.prop.VISIBLE, true);
                const flash = setTimeout(() => {
                  transform_mode();
                }, 350);
              }
              else {
                transform_mode();
              }
              hmFS.SysProSetInt("alien_number", number)
            }
          } else {

          }

        })
      }

      else {
        // ------------------------------------------------------------ main_button ----------------------------------------------------------------------------
        main_button.setProperty(hmUI.prop.MORE, {
          x: 454 / 4,
          y: 454 / 4,
          text: "",
          w: 454 / 2,
          h: 454 / 2,
          normal_src: "nothing.png",
          press_src: "nothing.png",
          click_func: () => {
            if (hmFS.SysProGetBool("lock_transformations") == true || hmFS.SysProGetBool("connected_to_primus") == false) {

            }
            else {
              if (hmFS.SysProGetBool("transformation_flash") == true) {
                heavy_vibrate_function();
                transformation_flash.setProperty(hmUI.prop.VISIBLE, true);
                const flash = setTimeout(() => {
                  transform_mode();
                }, 350);
              }
              else {
                transform_mode();
              }
              hmFS.SysProSetInt("alien_number", number)
            }
          }
        });
      }
    }
    // ------------------------------------------------------------ show_transformation_flash ----------------------------------------------------------------------------

    function show_transformation_flash(color, fun) {

      transformation_flash.setProperty(hmUI.prop.COLOR, {
        color: color
      });

      const flash = setTimeout(() => {
        if (hmFS.SysProGetBool("transformation_flash")) {
          heavy_vibrate_function();
          transformation_flash.setProperty(hmUI.prop.VISIBLE, true);
          const flash = setTimeout(() => {
            fun();
          }, 350);
        }
        else {
          fun();
        }
      }, 150);
    }


    // ------------------------------------------------------------ timeout_sequence ----------------------------------------------------------------------------
    function timeout_sequence(color, flash_color, interv, times, fun) {
      let counter = 0;

      const intervalId = setInterval(() => {
        if (counter % 2 === 0) {
          core.setProperty(hmUI.prop.COLOR, {
            color: color
          });
        } else {
          if (hmFS.SysProGetBool("prototype_white_symbol") && is_OS) {
            core.setProperty(hmUI.prop.COLOR, {
              color: 0xffffff
            });
          }
          else {
            core.setProperty(hmUI.prop.COLOR, {
              color: core_color
            });
          }
        }
        vibrate_function();
        counter++;

        if (counter >= times) {
          clearInterval(intervalId);
          show_transformation_flash(flash_color, () => { fun(); })
        }
      }, interv);
    }

    // ------------------------------------------------------------ transform_mode ----------------------------------------------------------------------------
    function transform_mode() {

      if (hmFS.SysProGetBool("omnitrix_sdm")) {
        hmFS.SysProSetInt("omnitrix_sdm_stage", (hmFS.SysProGetInt("omnitrix_sdm_stage",) + 10))
      }

      vibrate_function();
      hide_layout();

      if (hmFS.SysProGetBool("prototype_white_symbol") && is_OS) {
        core.setProperty(hmUI.prop.COLOR, {
          color: 0xffffff
        });
      }
      else {
        core.setProperty(hmUI.prop.COLOR, {
          color: core_color
        });
      }


      if (is_OS) {

        faceplate.setProperty(hmUI.prop.src, {
          src: "faceplates/os" + hmFS.SysProGetChars("prototype_faceplate_style") + ".png",
        });

        main_button.setProperty(hmUI.prop.MORE, {
          x: 0,
          y: 0,
          text: "",
          w: 454,
          h: 454,
          normal_src: "button/os_2.png",
          press_src: "button/os_2.png",
          click_func: () => {
            if (hmFS.SysProGetBool("ultimate_function")) {
              show_transformation_flash(darker_core_color, () => { ultimate_form(); })
            }
            else {
              if (MasterControl) {
                core.setProperty(hmUI.prop.COLOR, {
                  color: core_color
                });
                show_transformation_flash(darker_core_color, () => { active_mode(); })
              } else if (!hmFS.SysProGetBool("timeout_sequence")) {
                show_transformation_flash(darker_core_color, () => { recharge_mode(); })
              } else {
                main_button.setProperty(hmUI.prop.MORE, {
                  x: 0,
                  y: 0,
                  w: 454,
                  h: 454,
                  click_func: () => { }
                });
                timeout_sequence(recharge_color, recharge_color, 500, 6, () => { recharge_mode(); });
              }
            }
          }
        });


      }
      else if (is_UAF) {
        arc.setProperty(hmUI.prop.LINE_WIDTH, {
          line_width: 30,
        });

        arc.setProperty(hmUI.prop.VISIBLE, true);

        faceplate.setProperty(hmUI.prop.src, {
          src: "faceplates/uaf.png",
        });

        main_button.setProperty(hmUI.prop.MORE, {
          x: 0,
          y: 0,
          text: "",
          w: 454,
          h: 454,
          normal_src: "nothing.png",
          press_src: "nothing.png",
          click_func: () => {
            core.setProperty(hmUI.prop.COLOR, {
              color: 0xffffff
            });
            show_transformation_flash(darker_core_color, () => {
              if (hmFS.SysProGetBool("ultimate_function")) {
                ultimate_form();
              }
              else {
                active_mode();
              }
            })
          }
        });

      }
      else if (is_OV || is_5YL || is_BIO) {

        faceplate.setProperty(hmUI.prop.src, {
          src: "faceplates/uaf.png",
        });


        main_button.setProperty(hmUI.prop.MORE, {
          x: 0,
          y: 0,
          text: "",
          w: 454,
          h: 454,
          normal_src: "button/ov.png",
          press_src: "button/ov.png",
          click_func: () => {
            if (hmFS.SysProGetBool("ultimate_function")) {
              show_transformation_flash(darker_core_color, () => { ultimate_form(); })
            }
            else {
              if (MasterControl || !hmFS.SysProGetBool("timeout_sequence")) {
                core.setProperty(hmUI.prop.COLOR, {
                  color: core_color
                });
                show_transformation_flash(darker_core_color, () => { active_mode(); })
              } else {
                main_button.setProperty(hmUI.prop.MORE, {
                  x: 0,
                  y: 0,
                  w: 454,
                  h: 454,
                  click_func: () => { }
                })
                timeout_sequence(0xffffff, darker_core_color, 400, 5, () => { active_mode(); });
              }
            }
          }
        });

      }

      set_omnitrix_mode("transform");
    }

    // ------------------------------------------------------------ ultimate_form ----------------------------------------------------------------------------
    function ultimate_form() {
      vibrate_function();
      hide_layout();

      arc.setProperty(hmUI.prop.LINE_WIDTH, {
        line_width: 70,
      });
      arc.setProperty(hmUI.prop.VISIBLE, true);
      // ultimate_arc.setProperty(hmUI.prop.VISIBLE, true);
      ultimate_arms.setProperty(hmUI.prop.VISIBLE, true);

      if (hmFS.SysProGetBool("prototype_white_symbol") && is_OS) {
        core.setProperty(hmUI.prop.COLOR, {
          color: 0xffffff
        });
      }
      else {
        core.setProperty(hmUI.prop.COLOR, {
          color: core_color
        });
      }

      if (is_OS) {

        faceplate.setProperty(hmUI.prop.src, {
          src: "faceplates/os" + hmFS.SysProGetChars("prototype_faceplate_style") + ".png",
        });

        main_button.setProperty(hmUI.prop.MORE, {
          x: 0,
          y: 0,
          text: "",
          w: 454,
          h: 454,
          normal_src: "button/os_small_2.png",
          press_src: "button/os_small_2.png",
          click_func: () => {
            if (MasterControl || !hmFS.SysProGetBool("timeout_sequence")) {
              core.setProperty(hmUI.prop.COLOR, {
                color: core_color
              });
              show_transformation_flash(darker_core_color, () => { active_mode(); })
            } else {
              main_button.setProperty(hmUI.prop.MORE, {
                x: 0,
                y: 0,
                w: 454,
                h: 454,
                click_func: () => { }
              });
              timeout_sequence(recharge_color, recharge_color, 500, 6, () => { recharge_mode(); });
            }
          }
        });

      }
      else if (is_UAF) {

        faceplate.setProperty(hmUI.prop.src, {
          src: "faceplates/uaf.png",
        });

        main_button.setProperty(hmUI.prop.MORE, {
          x: 0,
          y: 0,
          text: "",
          w: 454,
          h: 454,
          normal_src: "button/uaf_small_2.png",
          press_src: "button/uaf_small_2.png",
          click_func: () => {
            core.setProperty(hmUI.prop.COLOR, {
              color: 0xffffff
            });
            show_transformation_flash(darker_core_color, () => { active_mode(); })
          }
        });

      }
      else if (is_OV || is_5YL || is_BIO) {

        faceplate.setProperty(hmUI.prop.src, {
          src: "faceplates/uaf.png",
        });

        main_button.setProperty(hmUI.prop.MORE, {
          x: 0,
          y: 0,
          text: "",
          w: 454,
          h: 454,
          normal_src: "button/ov_small.png",
          press_src: "button/ov_small.png",
          click_func: () => {
            if (MasterControl || !hmFS.SysProGetBool("timeout_sequence")) {
              core.setProperty(hmUI.prop.COLOR, {
                color: core_color
              });
              show_transformation_flash(darker_core_color, () => { active_mode(); })
            } else {
              main_button.setProperty(hmUI.prop.MORE, {
                x: 0,
                y: 0,
                w: 454,
                h: 454,
                click_func: () => { }
              })
              timeout_sequence(0xffffff, darker_core_color, 400, 5, () => { active_mode(); });
            }
          }
        });

      }



    }


    // ------------------------------------------------------------ Gesture Event ----------------------------------------------------------------------------
    hmApp.registerGestureEvent(function (event) {
      switch (event) {
        case hmApp.gesture.UP:
          if (get_omnitrix_mode() == "active") {

            set_omnitrix_mode("scanning");
            hmUI.showToast({ text: "Omnitrix:\nScanning mode..." })

          }
          else if (get_omnitrix_mode() == "selector") {

            alienstoleft();

          }
          break
        case hmApp.gesture.DOWN:
          if (get_omnitrix_mode() == "active") {

            set_omnitrix_mode("geneticrepair");
            hmUI.showToast({ text: "Omnitrix:\nGenetic repair..." })

          }
          else if (get_omnitrix_mode() == "selector") {

            alienstoright();

          }
          break
        case hmApp.gesture.LEFT:
          if (get_omnitrix_mode() == "active") {

          }
          else if (get_omnitrix_mode() == "selector") {

            alienstoright();

          }
          break
        case hmApp.gesture.RIGHT:
          if (get_omnitrix_mode() == "active") {

          }
          else if (get_omnitrix_mode() == "selector") {

            alienstoleft();

          }
          break
        default:
          break
      }
      return true
    })


    // ------------------------------------------------------------ Key Event ----------------------------------------------------------------------------
    hmApp.registerKeyEvent(function (key, action) {
      switch (key) {
        case hmApp.key.HOME:
          if (get_omnitrix_mode() == "active" || get_omnitrix_mode() == "scanning") {

            main_button_press();

          }
          else if (get_omnitrix_mode() == "selector") {

          }
          break
        case hmApp.key.SHORTCUT:
          if (get_omnitrix_mode() == "selector") {

            active_mode();

          }
          else if (get_omnitrix_mode() == "active" || get_omnitrix_mode() == "scanning") {
            hmApp.gotoPage({ url: "page/settings", param: "..." })
          }

          break

        default:

          break
      }

      return true
    })

    // ------------------------------------------------------------ Spin Event ----------------------------------------------------------------------------
    hmApp.registerSpinEvent(function (key, degree) {
      console.log("degree:" + degree)

      // ^ są na minusach w prawo
      // \/ są na plusach w lewo 
      if (get_omnitrix_mode() == "selector") {
        if (degree <= -35) {
          if (degree >= -45) {
            alienstoright()
          }
        }
        if (degree >= 35) {
          if (degree <= 45) {
            alienstoleft()
          }
        }
      }
      else {

      }
    })



  },
  onDestroy() {
    vibrate && vibrate.stop()
    hmApp.unregisterGestureEvent();
    hmApp.unregisterKeyEvent();
    hmApp.unregisterSpinEvent();
  },
});