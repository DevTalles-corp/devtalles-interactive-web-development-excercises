import { useState, useMemo } from 'react';
import { tabsData } from '../data/data';
import { TabButton } from './TabButton';
import { TabPanel } from './TabPanel';
import { TabContent } from './TabContent';


export const TabsContainer = () => {
  const [activeTabId, setActiveTabId] = useState<string>(tabsData[0].id);

  const activeTab = useMemo(() => tabsData.find(tab => tab.id === activeTabId), [activeTabId]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div role="tablist" aria-label="Pestañas de ejemplo" className="flex border-b border-gray-600">
        {tabsData.map((tab) => (
          <TabButton
            key={tab.id}
            id={`${tab.id}-tab`}
            panelId={`${tab.id}-panel`}
            isActive={tab.id === activeTabId}
            onClick={() => setActiveTabId(tab.id)}
          >
            {tab.title}
          </TabButton>
        ))}
      </div>

      {activeTab && (
        <TabPanel
          key={activeTab.id}
          id={`${activeTab.id}-panel`}
          tabId={`${activeTab.id}-tab`}
        >
          <TabContent
            title={activeTab.content.title}
            subTitle={activeTab.content.subTitle}
          />
        </TabPanel>
      )}
    </div>
  );
};