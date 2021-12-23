import { KeyboardEvent, PropsWithChildren, useState } from "react";
import useEventListener from "@app/hooks/useEventListener";
import { className } from "@app/shared/helpers/classname";
import { icons } from "@app/shared/icons";
import styles from "./EdgeBox.module.scss";

interface EdgeBoxProps {
    boxPosition: "top" | "bottom" | "left" | "right";
    startHidden?: boolean;
    keyShortcut?: (e: KeyboardEvent) => boolean;
}

const positionsMap = Object.freeze({
    top: { className: styles.toTop, icon: icons.chevronUp },
    bottom: { className: styles.toBottom, icon: icons.chevronDown },
    left: { className: styles.toLeft, icon: icons.chevronLeft },
    right: { className: styles.toRight, icon: icons.chevronRight }
});

/**
 * A hideable box component
 */
export default function EdgeBox(props: PropsWithChildren<EdgeBoxProps>): JSX.Element {
    const [hidden, setHidden] = useState<boolean>(props.startHidden ?? true);

    /**
     * Toggle navigation by keyboard
     * @param e - The keyboard event
     */
    function toggleVisibility(e: KeyboardEvent): void {
        if (props.keyShortcut && props.keyShortcut(e)) {
            e.preventDefault();
            setHidden(prevState => !prevState);
        }
    }

    useEventListener("keydown", toggleVisibility);

    return (
        <div
            {...className(styles.edgeBox, positionsMap[props.boxPosition].className, {
                [styles.hidden]: hidden
            })}
        >
            <button className={styles.toggler} onClick={() => setHidden(!hidden)}>
                {positionsMap[props.boxPosition].icon}
            </button>

            {props.children}
        </div>
    );
}
