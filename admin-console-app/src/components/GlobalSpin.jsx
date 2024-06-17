import React, { createContext, useContext, useState } from 'react';
import { Spin } from 'antd';

// 创建一个上下文
export const SpinContext = createContext({ spinning: false });

// 创建一个提供者组件
export const GlobalSpinProvider = ({ children }) => {
    const [spinning, setSpinning] = useState(false);

    return (
        <SpinContext.Provider value={{ spinning, setSpinning }}>
            {children}
        </SpinContext.Provider>
    );
};

// 创建一个自定义的 Spin 组件
export const GlobalSpin = () => {
    const { spinning } = useContext(SpinContext);
    return <Spin spinning={spinning} fullscreen />;
};