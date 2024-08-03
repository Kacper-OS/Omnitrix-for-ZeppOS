import { UI_Button, UI_ColorButton, UI_Switch, UI_Text, Key_detection } from "./components";

Page({
    build() {
        hmUI.scrollToPage(0, false)
        hmApp.setScreenKeep(true);
        Key_detection(
            () => { hmApp.gotoPage({ url: "page/index", param: "..." }) },
            () => { hmApp.gotoPage({ url: "page/index", param: "..." }) },
            true,
            false,
            true,
        );

        UI_Text("Core colors", 0.00);
        UI_ColorButton("Blue", 0.50, 0x00ffff, 16777215, "core_color");
        UI_ColorButton("Red", 0.75, 0xff0000, 16777215, "core_color");
        UI_ColorButton("Green", 1.00, 0x00ff00, 16777215, "core_color");
        UI_ColorButton("Yellow", 1.25, 0xeeff00, 0, "core_color");
        UI_ColorButton("White", 1.50, 0xe8e8e8, 0, "core_color");
        UI_ColorButton("Gray", 1.75, 0x333333, 16777215, "core_color");
        UI_ColorButton("Dark Blue", 2.00, 0x0e00a8, 16777215, "core_color");
        UI_ColorButton("Orange", 2.25, 0xfc7e00, 16777215, "core_color");
        UI_ColorButton("Light Green", 2.50, 0x9ffc9b, 16777215, "core_color");

        UI_Text("Versions", 3.00);
        UI_Button("OS Omnitrix", 3.50, () => hmFS.SysProSetChars("omnitrix_version", "OS"));
        UI_Button("UAF Omnitrix", 3.75, () => hmFS.SysProSetChars("omnitrix_version", "UAF"));
        UI_Button("OV Omnitrix", 4.00, () => hmFS.SysProSetChars("omnitrix_version", "OV"));
        UI_Button("Biomnitrix", 4.25, () => hmFS.SysProSetChars("omnitrix_version", "BIO"));
        UI_Button("5YL Omnitrix", 4.50, () => hmFS.SysProSetChars("omnitrix_version", "5YL"));

        UI_Text("Aliens icon style", 5.00);
        UI_Button("OS Style", 5.50, () => hmFS.SysProSetChars("omnitrix_alien_icons", "OS"));
        UI_Button("UAF Style", 5.75, () => hmFS.SysProSetChars("omnitrix_alien_icons", "UAF"));
        UI_Button("OV Style", 6.00, () => hmFS.SysProSetChars("omnitrix_alien_icons", "OV"));
        UI_Button("OV (Heads) Style", 6.25, () => hmFS.SysProSetChars("omnitrix_alien_icons", "OV_HEADS"));

        UI_Text("White prototype symbol", 7.50);
        UI_Switch("prototype_white_symbol", 8.00);

        UI_Text("Transformation flash", 8.50);
        UI_Switch("transformation_flash", 9.00);

        UI_Text("Ghostfreak's true form", 9.50);
        UI_Switch("ghostfreak_true_form", 10.00);

        UI_Text("Prototype's square selector", 10.50);
        UI_Switch("omnitrix_square_selector", 11.00);

        UI_Text("prototype faceplate style", 11.50);
        UI_Button("Classic", 12.00, () => hmFS.SysProSetChars("prototype_faceplate_style", ""));
        UI_Button("Curvy", 12.25, () => hmFS.SysProSetChars("prototype_faceplate_style", "_curvy"));
        UI_Button("R.A.T.", 12.50, () => hmFS.SysProSetChars("prototype_faceplate_style", "_rat"));

        UI_Text("prototype faceplate style", 13.50);
        UI_Button("Normal", 14.00, () => hmFS.SysProSetInt("choosing_animation", 1));
        UI_Button("Block", 14.25, () => hmFS.SysProSetInt("choosing_animation", 2));
        UI_Button("Slide", 14.50, () => hmFS.SysProSetInt("choosing_animation", 3));

        UI_Text("Timeout sequence", 15.00);
        UI_Switch("timeout_sequence", 15.50);

        UI_Text("Animations", 16.00);
        UI_Switch("animations", 16.50);

    },
    onDestroy() {
        hmApp.unregisterGestureEvent();
        hmApp.unregisterKeyEvent();
        hmApp.unregisterSpinEvent();
    },
})
