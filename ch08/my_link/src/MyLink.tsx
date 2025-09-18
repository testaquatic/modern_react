import type { ReactNode } from "react";
import { Link, useMatch, useResolvedPath, type To } from "react-router-dom";

export function MyLink({
    to,
    children,
    ...props
}: {
    to: To;
    children: ReactNode;
    props?: unknown;
}) {
    const resolvedPath = useResolvedPath(to);
    const isMatch = !!useMatch({
        path: resolvedPath.pathname,
        end: true,
    });

    return isMatch ? (
        <span className="active">{children}</span>
    ) : (
        <Link to={to} {...props}>
            {children}
        </Link>
    );
}
