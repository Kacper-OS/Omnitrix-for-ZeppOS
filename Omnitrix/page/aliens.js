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
const os_additions_1 = [
    "cannonbolt",
    "wildvine",
    "blitzwolfer",
    "snareoh",
    "frankenstrike",
]
const os_additions_2 = [
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


export let aliens = [];

os_folder = "../../00101FF9/assets/aliens/os_style/"
uaf_folder = "../../00101FF9/assets/aliens/uaf_style/"
ov_folder = "../../00102032/assets/aliens/ov_style/"
ov_head_folder = "../../00102032/assets/aliens/ov_heads_style/"

// let number = hmFS.SysProGetInt('alien_number');

export function refresh_aliens() {
    if (hmFS.SysProGetChars('omnitrix_playlist') == "OS") {
        aliens = os_aliens;
    };
    if (hmFS.SysProGetChars('omnitrix_playlist') == "OS FULL") {
        aliens = os_aliens.concat(os_additions_1, ["upchuck_perk"], os_additions_2);
    };
    if (hmFS.SysProGetChars('omnitrix_playlist') == "AF") {
        aliens = af_aliens;
    };
    if (hmFS.SysProGetChars('omnitrix_playlist') == "AF FULL") {
        aliens = af_aliens.concat(af_additions, ["diamondhead", "cannonbolt", "upchuck_murk", "waybig",])
    };
    if (hmFS.SysProGetChars('omnitrix_playlist') == "UA") {
        aliens = os_aliens.concat(os_additions_1, ["upchuck_murk"], os_additions_2, af_aliens, af_additions, ua_aliens)
    };
    if (hmFS.SysProGetChars('omnitrix_playlist') == "OV") {
        aliens = os_aliens.concat(os_additions_1, ["upchuck_perk", "upchuck_murk"], os_additions_2, af_aliens, af_additions, ua_aliens, ov_aliens)
    };
    if (hmFS.SysProGetChars('omnitrix_playlist') == "OV NONCANNON") {
        aliens = os_aliens.concat(os_additions_1, ["upchuck_perk", "upchuck_murk"], os_additions_2, af_aliens, af_additions, ua_aliens, ov_aliens, ["amongus"])
    };
    if (hmFS.SysProGetChars('omnitrix_playlist') == "ALL") {
        aliens = os_aliens.concat(os_additions_1, ["upchuck_perk", "upchuck_murk"], os_additions_2, af_aliens, af_additions, ua_aliens, ov_aliens)
    };

    if (hmFS.SysProGetBool('ghostfreak_true_form') == true) {
        aliens[aliens.indexOf("ghostfreak")] = "ghostfreak-true"
    }
}