
interface Props {
  title: string;
  subTitle: string;
}

export const TabContent = ({ title, subTitle }: Props) => {
  return (
    <div className="animate-fade-in-up">
      <h3 className="text-xl font-semibold mb-2">
        { title }
      </h3>
      <p>{ subTitle }</p>
    </div>
  );
};
