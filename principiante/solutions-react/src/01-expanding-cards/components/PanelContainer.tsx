import { useState } from 'react';
import { Panel } from './Panel';
import { panelsMockData } from '../data/images-data.mock';

export const PanelContainer = () => {
  
  const [activePanelId, setActivePanelId] = useState<number>(0);

  return (
    <div className="flex w-full items-center justify-center p-4">
      <div className="flex w-full max-w-[80vw] gap-4">
        {panelsMockData.map((panel) => (
          <Panel
            key={panel.id}
            id={panel.id}
            title={panel.title}
            imageUrl={panel.imageUrl}
            isActive={activePanelId === panel.id}
            onPanelClick={setActivePanelId}
          />
        ))}
      </div>
    </div>
  );
};