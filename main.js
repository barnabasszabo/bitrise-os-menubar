const path = require(`path`);
const { menubar } = require('menubar');

const mb = menubar({
	index: `https://bitrise.io`,
    browserWindow: { height: 800, width: 700 }
});

mb.app.dock.hide();

mb.on('ready', () => {
    mb.tray.setImage( path.join(__dirname, 'bitrise-tray-icon-20.png') );
});
