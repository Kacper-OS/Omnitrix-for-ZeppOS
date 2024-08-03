import { UI_Button, UI_Text, Key_detection } from "./components";

Page({
    build() {
        hmApp.setScreenKeep(true);
        hmUI.scrollToPage(0, false);

        UI_Text("Settings", 0.00);

        UI_Button("Functions", 0.50, () => { hmApp.gotoPage({ url: 'page/functions', param: '...' }) });
        UI_Button("Playlist", 0.75, () => { hmApp.gotoPage({ url: 'page/playlist', param: '...' }) });
        UI_Button("Prefabs", 1.00, () => { hmApp.gotoPage({ url: 'page/prefabs', param: '...' }) });
        UI_Button("Customization", 1.25, () => { hmApp.gotoPage({ url: 'page/customization', param: '...' }) });

        Key_detection(
            () => { },
            () => { hmApp.gotoPage({ url: "page/index", param: "..." }) },
            true,
            false,
            true,
        );
    },
    onDestroy() {
        hmApp.unregisterGestureEvent();
        hmApp.unregisterKeyEvent();
        hmApp.unregisterSpinEvent();
    },
})
