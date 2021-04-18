import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@alfalab/core-components/button';
import { Tooltip } from '@alfalab/core-components/tooltip';

import { XpPractice } from '../../../types/xp-practice';

import './styles.css';

export const SchemeElement = React.memo<XpPractice>(({
    name,
    description,
    path,
    position,
}) => {
    const history = useHistory();

    return (
        <Tooltip
            key={ name }
            content={ description }
            position="top"
            targetClassName={ `scheme-element ${position}` }
        >
            <Button
                view="secondary"
                className="scheme-element__button"
                onClick={ () => path && history.push(path) }
            >
                { name }
            </Button>
        </Tooltip>
    );
});
