import type { ReactNode } from "react";
import styles from "./styles.module.css";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
    return <div className={`${styles.container} ${className}`.trim()}>{children}</div>;
}
