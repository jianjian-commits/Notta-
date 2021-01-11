import React, { useState } from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const Index = () => {
    const [size, setSize] = useState('small');
    return (
        <div>
            <Tabs defaultActiveKey="1" size={size} style={{ marginBottom: 32 }}>
                <TabPane tab="Tab 1" key="1">
                    Content of tab 1
                </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of tab 2
                </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of tab 3
                </TabPane>
            </Tabs>
        </div>
    );
}

export default Index;
