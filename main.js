const { menubar } = require('menubar');

const mb = menubar({
	index: `https://bitrise.io`,
    browserWindow: { height: 800, width: 700 },
    webPreferences: {
        contextIsolation: true
    },
});

mb.on('ready', () => {
    mb.tray.setImage('bitrise-tray-icon-20.png');
});
