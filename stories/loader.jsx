import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { host } from 'storybook-host';
import { withKnobs, text, number } from '@kadira/storybook-addon-knobs';

import defaultHostOptions from './defaultHostOptions';
import KnobsAlert from './knobsAlert';

import {
    DefaultTheme,
    Loader,
} from '../index';


storiesOf('Loader', module)
    .addDecorator(withKnobs)
    .addDecorator(host({
        ...defaultHostOptions,
        title: 'Loader',
    }))
    .addWithInfo('Default state', () => (
        <DefaultTheme>
            <Loader />
        </DefaultTheme>
    ))
    .addWithInfo('Size', () => (
        <DefaultTheme>
            <Loader spinnerSize="20" />
            <Loader spinnerSize="40" />
            <Loader spinnerSize="60" />
        </DefaultTheme>
    ))
    .addWithInfo('Label', () => (
        <DefaultTheme>
            <Loader label="Custom label" />
        </DefaultTheme>
    ))
    .addWithInfo('Playground', () => {
        const spinnerSize = number('Spinner size', 40);
        const label = text('Label', 'Custom label');

        return (
            <DefaultTheme>
                <KnobsAlert />
                <Loader
                    label={label}
                    spinnerSize={spinnerSize}
                />
            </DefaultTheme>
        );
    });