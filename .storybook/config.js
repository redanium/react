import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

setOptions({
    name: 'OSM UI - REACT',
    url: 'https://github.com/osm-ui/react',
    goFullScreen: false,
    showSearchBox: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    addonPanelInRight: true,
    sortStoriesByKind: false,
});


function loadStories() {
    /* eslint-disable */
    require('../stories/introduction');
    require('../stories/Button');
    require('../stories/Alert');
    require('../stories/List');
    require('../stories/Form');
    require('../stories/Loader');
    require('../stories/Sidebar');
    require('../stories/Toolbar');
    require('../stories/Titlebar');
    require('../stories/Map');
    require('../stories/Modal');
    require('../stories/Notification');
    require('../stories/Osmose');
    require('../stories/Osm');
    /* eslint-enable */
}


configure(loadStories, module);
