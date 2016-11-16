
// build device object
var device = {
    height: OS_IOS ? Ti.Platform.displayCaps.getPlatformHeight() : (Ti.Platform.displayCaps.getPlatformHeight() / (Ti.Platform.displayCaps.dpi / 160)),
    width: OS_IOS ? Ti.Platform.displayCaps.getPlatformWidth() : (Ti.Platform.displayCaps.getPlatformWidth() / (Ti.Platform.displayCaps.dpi / 160))
};
exports.device = device;
