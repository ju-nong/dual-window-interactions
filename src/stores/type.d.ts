type WindowStoreState = {
    open: boolean;
    $interval: null | Timeout;
    x: number;
    y: number;
    width: number;
    height: number;
};

type WindowStoreActions = {
    setOpen: (open: boolean) => void;
    handleWindowMove: (window: Window) => void;
};

export type { WindowStoreState, WindowStoreActions };
