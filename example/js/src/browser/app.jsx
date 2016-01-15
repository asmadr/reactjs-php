import React from 'react';
import { render } from 'react-dom';

import MainComponent from './mainComponent';

render(
	<MainComponent title='React'/>,
	document.getElementById('app')
);