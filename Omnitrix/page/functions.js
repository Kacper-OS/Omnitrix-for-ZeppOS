import { UI_Button, UI_ColorButton, UI_Switch, UI_Text, Key_detection } from "./components";

Page({
    build() {
        hmApp.setScreenKeep(true);
        hmUI.scrollToPage(0, false)

        UI_Text("Primus connection", 0.00);
        UI_Switch("connected_to_primus", 0.50);

        UI_Text("Lock all transformations", 1.00);
        UI_Switch("lock_transformations", 1.50);

        UI_Text("Master Control", 2.00);
        UI_Switch("master_control", 2.50);

        UI_Text("SDM", 3.00);
        UI_Switch("omnitrix_sdm", 3.50);
        UI_Button("Stage 1", 4.00, () => hmFS.SysProSetInt('omnitrix_sdm_stage', 40));
        UI_Button("Stage 2", 4.25, () => hmFS.SysProSetInt('omnitrix_sdm_stage', 80));
        UI_Button("Stage 3", 4.50, () => hmFS.SysProSetInt('omnitrix_sdm_stage', 120));
        UI_Button("Stage 4", 4.75, () => hmFS.SysProSetInt('omnitrix_sdm_stage', 160));
        UI_Button("Stage 5", 5.00, () => hmFS.SysProSetInt('omnitrix_sdm_stage', 240));

        UI_Text("Ultimate function", 6.50);
        UI_Switch("ultimate_function", 7.00);

        UI_Text("Infinite scanning", 7.50);
        UI_Switch("infinite_scanning", 8.00);

        UI_Text("Virtual rotating bezel", 8.50);
        UI_Switch("virtual_bezel", 9.00);


        Key_detection(
            () => { },
            () => { hmApp.gotoPage({ url: "page/index", param: "..." }) },
            true,
            false,
            true,
        );
    },
    onDestroy() {
        vibrate.stop()
        hmApp.unregisterGestureEvent();
        hmApp.unregisterKeyEvent();
        hmApp.unregisterSpinEvent();
    },
})
