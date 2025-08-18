interface Props {
  title: string;
  description?: string;
}

export const CustomJumbotron = ({ title, description }: Props) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl p-4 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent lg:text-5xl">
        {title}
      </h1>
      {description && <p className="text-gray-600 text-lg whitespace-pre-line">{description}</p>}
    </div>
  );
};
