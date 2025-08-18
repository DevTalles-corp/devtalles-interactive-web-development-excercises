

interface Props {
  id: string;
  tabId: string;
  children: React.ReactNode;
}

export const TabPanel = ( { id, tabId, children }: Props ) => {
  return (
    <div
      id={id}
      role="tabpanel"
      aria-labelledby={tabId}
      className="p-6 bg-gray-700 text-gray-200 rounded-b-lg"
    >
      {children}
    </div>
  );
};