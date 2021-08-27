// eslint-disable-next-line import/no-webpack-loader-syntax,import/no-unresolved
import exampleValue from "!!raw-loader!./Example.md";
import {
    ChangeEvent,
    FC,
    MouseEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { Events } from "../../core/Events";
import classes from "./Editor.module.css";

export const Editor: FC = () => {
    const [value, setValue] = useState(exampleValue);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    const handleInputChange = useCallback(
        (ev: ChangeEvent<HTMLTextAreaElement>) => {
            setValue(ev.target.value);
        },
        []
    );

    const handleScroll = useCallback((ev: MouseEvent<HTMLTextAreaElement>) => {
        Events.ScrollChange$.next(ev.currentTarget.scrollTop);
    }, []);

    useEffect(() => {
        Events.TextChange$.next(value);
    }, [value]);

    useEffect(() => {
        const sub = Events.ScrollChange$.subscribe((scrollTop) => {
            if (inputRef.current) {
                inputRef.current.scrollTop = scrollTop;
            }
        });
        return () => sub.unsubscribe();
    }, []);

    return (
        <div className={classes.editor}>
            <h3 className={classes.header}>Editor</h3>
            <textarea
                ref={inputRef}
                onScroll={handleScroll}
                className={classes.input}
                onInput={handleInputChange}
                value={value}
            ></textarea>
        </div>
    );
};
