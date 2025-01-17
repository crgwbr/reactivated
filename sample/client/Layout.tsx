import React from "react";
import {HelmetProvider} from "react-helmet-async";
import {css} from "@linaria/core";

interface Props {
    title: string;
    children?: React.ReactNode;
}

export const Layout = (props: Props) => {
    return (
        <>
            <HelmetProvider>
                <meta charSet="utf-8" />
                <title>{props.title}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link rel="stylesheet" type="text/css" href="/static/dist/index.css" />
                <script crossOrigin="anonymous" defer src="/static/dist/index.js" />
            </HelmetProvider>
            <div
                className={css`
                    margin: 0 auto;
                    max-width: 1000px;
                `}
            >
                {props.children}
            </div>
        </>
    );
};
