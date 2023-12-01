import { defineStore } from "pinia";

import type { WindowStoreState, WindowStoreActions } from "./type";

export default defineStore<"end", WindowStoreState, any, WindowStoreActions>(
    "end",
    {
        state: () => ({
            open: false,
            $interval: null,
            x: 0,
            y: 0,
        }),
        getters: {},
        actions: {
            setOpen(open) {
                if (this.open && open) {
                    return;
                }

                this.open = open;

                if (!open) {
                    clearInterval(this.$interval);
                }
            },
            handleWindowMove(window) {
                this.$interval = setInterval(() => {
                    const { screenX, screenY } = window;

                    this.x = screenX;
                    this.y = screenY;
                }, 300);
            },
            setPosition(x, y) {
                this.x = x;
                this.y = y;
            },
        },
    },
);
