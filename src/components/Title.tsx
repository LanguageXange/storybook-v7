type TitleType = {
  label: string;
  bg?: Colors;
};

type Colors = "orange" | "purple" | "blue"


export const MyTitle = ({ label = "Untitled", bg = "orange" }: TitleType) => {
  const variants = {
    orange: "bg-orange-200",
    purple: "bg-purple-200",
    blue: "bg-blue-300",
  };
  return (
    <h1
      className={`w-fit text-4xl border-3 border-white rounded-md p-4 text-white ${variants[bg]}`}
    >
      {label}
    </h1>
  );
};
