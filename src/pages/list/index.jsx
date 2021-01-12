import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../loading/laoding"; //laoding组件
import AppScroll from "../../scroll"; //scroll滚动组件

import "./list.scss";
import { listRequestData } from "./reducer";
import { timedat } from "../utils";

const List = () => {

    //获取dispatch
    const dispatch = useDispatch();

    //获取store中的数据
    const { listData, loading } = useSelector((state) => {
        console.log(state);
        return state.list
    })

    //发送请求
    useEffect(() => {
        dispatch(listRequestData());
    }, [])
    
    return (
        <AppScroll>
            <div className="list">
                {
                    loading && <Loading></Loading>  //loading组件
                }
                {
                    listData && listData.map((item) => {
                        return(
                            <section key={item.id} className="list-card">
                                <header>
                                    <span className="list-time">{
                                        timedat(item.create_time)
                                    }</span>
                                    <em></em>
                                    <span className="list-desc">{item.quote}</span>
                                </header>
                                <main>
                                    <div className="list-header">
                                        <img src={item.avatar} alt=""/>
                                    </div>
                                    <div className="list-info">
                                        <h2 className="list-name">{item.nickname}</h2>
                                        <p className="list-send-time">{item.duration} mins ago</p>
                                    </div>
                                </main>
                                <footer className="list-content">
                                    <article>
                                        {item.content}
                                    </article>
                                </footer>
                            </section>
                        )
                    })
                }
            </div>
        </AppScroll>
    );
}

export default List;
