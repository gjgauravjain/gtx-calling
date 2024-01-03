import { FC } from "react";
import { TabOptions } from "./type";
import { Tab, TabList, Tabs, TabsProps } from "@mui/joy";

type TabProps = {
    tabOptions: TabOptions[];
    onTabChange: (tab: string) => void;
    selectedTab: string;
} & TabsProps;
const TabComponent: FC<TabProps> = ({ tabOptions, onTabChange, selectedTab, ...rest }) => {
    return (
        <Tabs
            onChange={(_, value) => {
                onTabChange(value as string);
            }}
            value={selectedTab}
            {...rest}
        >
            <TabList tabFlex={1}>
                {tabOptions.map((item) => (
                    <Tab key={item.id} value={item.id} variant="plain" color="primary">
                        {item.label}
                    </Tab>
                ))}
            </TabList>
        </Tabs>
    );
};

export default TabComponent;
