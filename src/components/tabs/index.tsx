import React from "react";
import styles from "./index.module.css";
import classNames from "classnames";
import { nanoid } from "nanoid";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

interface TabsProps {
  changeTab: (e: React.MouseEvent) => void;
  changeTabBySelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  tabs: any[];
  activeTab: string;
}

const Tabs: React.FC<TabsProps> = ({
  changeTab,
  tabs,
  activeTab,
  changeTabBySelect,
}) => {
  const isMobile = useCheckMobileScreen();

  return isMobile ? (
    <div className={styles.selectContainer}>
      <select onChange={changeTabBySelect} className={styles.select}>
        {tabs.map((tab) => {
          const selected = activeTab === tab;
          if (selected) {
            return (
              <option key={nanoid()} value={tab} selected>
                {tab}
              </option>
            );
          } else
            return (
              <option key={nanoid()} value={tab}>
                {tab}
              </option>
            );
        })}
      </select>
    </div>
  ) : (
    <div className={styles.container}>
      {tabs.map((tab) => {
        return (
          <div
            key={nanoid()}
            className={classNames(
              styles.tab,
              activeTab === tab && styles.active
            )}
            datatype={tab}
            onClick={changeTab}
          >
            {tab}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
