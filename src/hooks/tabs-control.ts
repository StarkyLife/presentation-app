import { useCallback, useState } from 'react';
import { SelectedId } from '@alfalab/core-components/tabs';

export function useTabsControl() {
    const [selectedTab, setTabId] = useState<SelectedId>('');

    const handleTabChange = useCallback((
        _e: MouseEvent,
        { selectedId }: { selectedId: SelectedId },
    ) => {
        setTabId(selectedId);
    }, [setTabId]);

    return {
        selectedTab,
        handleTabChange,
    };
}
