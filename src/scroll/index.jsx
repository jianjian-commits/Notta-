import React, { useEffect } from 'react';
import BScroll from "@better-scroll/core";

import "./style.scss";

const Index = (props) => {
    const scrollViewDom = React.createRef();
    useEffect(() => {
        console.log(scrollViewDom);
        const scroll = new BScroll(scrollViewDom.current, {
            tap: true,
            click: true,
            probeType: 3,
            scrollx: true,
            bounce: true,
            scrollbars: true,
        });
        scroll.on("beforeScrollStart", () => {
            console.log(11111);
            scroll.refresh();
        })
    }, [])
    return (
        <div className="scroll-view" ref={scrollViewDom}>
            <div className="scroll-wrap">
                {props.children}
            </div>
        </div>
    );
}

export default Index;
