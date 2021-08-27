import { FC, MouseEvent, useCallback, useRef } from "react";
import { Events } from "../../core/Events";
import { useTextChange, useWheelBehavior } from "./Preview.hook";
import classes from "./Preview.module.css";

export const Preview: FC = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback((ev: MouseEvent<HTMLDivElement>) => {
        Events.ScrollChange$.next(ev.currentTarget.scrollTop);
    }, []);

    useTextChange(contentRef);
    useWheelBehavior(contentRef);

    return (
        <div className={classes.preview}>
            <h3 className={classes.header}>Preview</h3>
            <div
                ref={contentRef}
                onWheel={handleScroll}
                className={classes.content}
            ></div>
        </div>
    );
};
