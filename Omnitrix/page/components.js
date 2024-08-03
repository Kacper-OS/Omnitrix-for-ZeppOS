export function UI_Switch(syspro, y) {
    hmUI.createWidget(hmUI.widget.SLIDE_SWITCH, {
        x: px(454 / 2 - (96 / 2)),
        y: px(454 / 2 * y),
        w: 96,
        h: 56,
        select_bg: "ui/switch/on.png",
        un_select_bg: "ui/switch/off.png",
        slide_src: "ui/switch/slide.png",
        slide_select_x: 50,
        slide_un_select_x: 8,
        checked: hmFS.SysProGetBool(syspro),
        checked_change_func: (slideSwitch, checked) => {
            console.log("checked", checked)
            if (checked == true) {
                hmFS.SysProSetBool(syspro, true)
            }
            if (checked == false) {
                hmFS.SysProSetBool(syspro, false)
            }
        }
    })
};

export function UI_Button(text, y, fun) {
    hmUI.createWidget(hmUI.widget.BUTTON, {
        text: text,
        x: px(454 / 2 - 100),
        y: px(454 / 2 * y),
        w: 200,
        h: 50,
        radius: 20,
        // color: 16777215,
        color: 0xa0cafd,
        // normal_color: 6052956, 191c20
        normal_color: 0x191c20,
        // press_color: 16777215,
        press_color: 0x242a31,
        click_func: () => {
            fun();
        }
    });
};

export function UI_ColorButton(text, y, color, font_color, syspro) {
    hmUI.createWidget(hmUI.widget.BUTTON, {
        text: text,
        x: px(454 / 2 - 50),
        y: px(454 / 2 * y),
        w: 100,
        h: 50,
        color: font_color,
        radius: 20,
        normal_color: color,
        press_color: 16777215,
        click_func: () => {
            hmFS.SysProSetInt(syspro, color)
        }
    });
};

export function UI_Text(text, y) {
    hmUI.createWidget(hmUI.widget.TEXT, {
        x: px(454 / 2 - 200),
        y: px(454 / 2 * y),
        w: 400,
        h: 100,
        color: 0xffffff,
        text_size: 35,
        align_h: hmUI.align.CENTER_H,
        align_v: hmUI.align.CENTER_V,
        text_style: hmUI.text_style.NONE,
        text: text
    })
};

export function Key_detection(home, shortcut, main_ret, home_ret, shortcut_ret) {
    hmApp.registerKeyEvent(function (key, action) {
        // console.log("receive key code:" + key + " action:" + action)
        let ret = main_ret
        switch (key) {
            case hmApp.key.BACK:
                break
            case hmApp.key.SELECT:
                break
            case hmApp.key.HOME:
                ret = home_ret
                home();
                break
            case hmApp.key.UP:
                break
            case hmApp.key.DOWN:
                break
            case hmApp.key.SHORTCUT:
                ret = shortcut_ret
                shortcut();
                break
            default:
                break
        }
        switch (action) {
            case hmApp.action.CLICK:
                break
            case hmApp.action.LONG_PRESS:
                break
            case hmApp.action.DOUBLE_CLICK:
                break
            case hmApp.action.RELEASE:
                break
            case hmApp.action.PRESS:
                break
            default:
                break
        }
        return ret
    });
};

export function Gesture_detection(UP, DOWN, LEFT, RIGHT, bef_fun, fun) {
    hmApp.registerGestureEvent(function (event) {
        switch (event) {
            case hmApp.gesture.UP:
                UP();
                break
            case hmApp.gesture.DOWN:
                DOWN();
                break
            case hmApp.gesture.LEFT:
                LEFT();
                break
            case hmApp.gesture.RIGHT:
                RIGHT();
                break
            default:
                break
        }
        bef_fun();
        return fun
    });
};

export function Spin_detection(fun) {
    hmApp.registerSpinEvent(function (key, degree) {
        fun(degree);
    })
};

export function center_image(src) {
    hmUI.createWidget(hmUI.widget.IMG, {
        x: px(0),
        y: px(0),
        w: px(454),
        h: px(454),
        pos_x: 0,
        pos_y: 0,
        center_x: 0,
        center_y: 0,
        src: src,
    });
};

export function color_change(HEX_color, percent) {
    const r = (HEX_color >> 16) & 0xFF;
    const g = (HEX_color >> 8) & 0xFF;
    const b = HEX_color & 0xFF;

    const new_R = Math.round(r * (1 - percent / 100));
    const new_G = Math.round(g * (1 - percent / 100));
    const new_B = Math.round(b * (1 - percent / 100));

    const new_HEX_color = (new_R << 16) | (new_G << 8) | new_B;

    return `0x${new_HEX_color.toString(16).padStart(6, '0')}`;
}

export function set_omnitrix_mode(mode) {
    hmFS.SysProSetChars("omnitrix_mode", mode);
}

export function get_omnitrix_mode() {
    return hmFS.SysProGetChars("omnitrix_mode");
}

export let is_OS = (hmFS.SysProGetChars("omnitrix_version") == "OS");
export let is_UAF = (hmFS.SysProGetChars("omnitrix_version") == "UAF");
export let is_OV = (hmFS.SysProGetChars("omnitrix_version") == "OV");
export let is_5YL = (hmFS.SysProGetChars("omnitrix_version") == "5YL");
export let is_BIO = (hmFS.SysProGetChars("omnitrix_version") == "BIO");
export let MasterControl = hmFS.SysProGetBool("master_control");
export let core_color = hmFS.SysProGetInt("core_color");
export let darker_core_color = color_change(hmFS.SysProGetInt("core_color"), 20);
export let recharge_color = hmFS.SysProGetInt("recharge_color");