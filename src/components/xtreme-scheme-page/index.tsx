/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';

import { usefulLinks } from '../../talk-data/useful-links';
import {
    businessPractices,
    engineeringPractices,
    teamPractices,
} from '../../talk-data/xp-practices';
import { LinksBlock } from '../ui/links-block';

import { SchemeElement } from './scheme-element';

import './styles.css';

export const XtremeSchemePage: React.FC = () => (
    <section className="scheme-page">
        <div className="scheme">
            <div className="circle-container business">
                { businessPractices.map((p) => (
                    <SchemeElement key={ p.name } { ...p } />
                )) }
                <div className="circle-container team">
                    { teamPractices.map((p) => (
                        <SchemeElement key={ p.name } { ...p } />
                    )) }
                    <div className="circle-container engineering">
                        { engineeringPractices.map((p) => (
                            <SchemeElement key={ p.name } { ...p } />
                        )) }
                    </div>
                </div>
            </div>
        </div>
        <LinksBlock links={ usefulLinks } />
    </section>
);
