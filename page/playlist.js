import { UI_Button, UI_Text, Key_detection } from "./components";

Page({
    build() {
        hmApp.setScreenKeep(true);
        hmUI.scrollToPage(0, false)

        const aliens = [
            "Heatblast",
            "Wildmutt",
            "Diamondhead",
            "XLR8",
            "Greymatter",
            "Fourarms",
            "Stinkfly",
            "Ripjaws",
            "Upgrade",
            "Ghostfreak",
            "Cannonbolt",
            "Wildvine",
            "Blitzwolfer",
            "Snare-oh",
            "Frankenstrike",
            "Upchuck",
            "Ditto",
            "Eyeguy",
            "Arctiguana",
            "Buzzshock",
            "Spitter",
            "Waybig",
            "Feedback",
            "Swampfire",
            "Bigchill",
            "Chromastone",
            "Echo Echo",
            "Brainstorm",
            "Goop",
            "Jetray",
            "Spidermonkey",
            "Humungousaur",
            "Alien X",
            "Lodestar",
            "Nanomech",
            "Rath",
            "Waterhazard",
            "Ampfibian",
            "Armodrillo",
            "Terraspin",
            "NRG",
            "Chamalien",
            "Fasttrack",
            "JuryRigg",
            "Clockwork",
            "Shocksquatch",
            "Eatle",
            "Astrodactyl",
            "Atomix",
            "Ball Weevil",
            "Bloxx",
            "Bullfrag",
            "Crashhopper",
            "Gravattack",
            "Gutrot",
            "Kickin Hawk",
            "Mole-stache",
            "Pesky Dust",
            "The Worst",
            "Toepick",
            "Walkatrout",
            "Whampire",
            "Among US",
        ]

        UI_Text("Playlist prefab's", 0);
        UI_Button("OS playlist", 0.50, () => hmFS.SysProSetChars('omnitrix_playlist', 'OS'));
        UI_Button("Full OS playlist", 0.75, () => hmFS.SysProSetChars('omnitrix_playlist', 'OS FULL'));
        UI_Button("AF playlist", 1.00, () => hmFS.SysProSetChars('omnitrix_playlist', 'AF'));
        UI_Button("Full AF playlist", 1.25, () => hmFS.SysProSetChars('omnitrix_playlist', 'AF FULL'));
        UI_Button("UA playlist", 1.50, () => hmFS.SysProSetChars('omnitrix_playlist', 'UA'));
        UI_Button("OV playlist", 1.75, () => hmFS.SysProSetChars('omnitrix_playlist', 'OV'));
        UI_Button("??? playlist", 2.00, () => hmFS.SysProSetChars('omnitrix_playlist', 'OV NONCANNON'));

        // let i = 0;
        // aliens.forEach(function (entry) {
        //     console.log(entry);
        //     // hmUI.createWidget(hmUI.widget.TEXT, {
        //     //     x: px(454 / 2 + 50),
        //     //     y: px(454 / 2 * i),
        //     //     w: 100,
        //     //     h: 52,
        //     //     color: 0xffffff,
        //     //     text_size: 20,
        //     //     align_h: hmUI.align.CENTER_H,
        //     //     align_v: hmUI.align.CENTER_V,
        //     //     text_style: hmUI.text_style.NONE,
        //     //     text: entry
        //     // })
        //     // checkbox_group.createWidget(hmUI.widget.STATE_BUTTON, {
        //     //     x: px(454 / 2),
        //     //     y: px(454 / 2 * i),
        //     //     w: 52,
        //     //     h: 52
        //     // })

        //     i += 0.5;
        // });

        Key_detection(
            () => { hmApp.gotoPage({ url: "page/index", param: "..." }) },
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
