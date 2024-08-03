import { UI_Button, UI_ColorButton, UI_Switch, UI_Text, Key_detection } from "./components";

Page({
    build() {
        hmApp.setScreenKeep(true);
        hmUI.scrollToPage(0, false)

        UI_Text("Omnitrix prefabs", 0.00);
        UI_Button("Omnitrix prototype ", 0.50, () => hmFS.SysProSetInt('omnitrix_sdm_stage', 40));
        UI_Button("Recalibrated omnitrix prototype", 0.75, () => hmFS.SysProSetInt('omnitrix_sdm_stage', 80));
        UI_Button("Ultimatrix", 1.00, () => hmFS.SysProSetInt('omnitrix_sdm_stage', 120));
        UI_Button("Complete omnitrix", 1.25, () => hmFS.SysProSetInt('omnitrix_sdm_stage', 160));
        UI_Button("Biomnitrix", 1.50, () => hmFS.SysProSetInt('omnitrix_sdm_stage', 240));
        UI_Button("5YL omnitrix", 1.75, () => hmFS.SysProSetInt('omnitrix_sdm_stage', 240));

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
