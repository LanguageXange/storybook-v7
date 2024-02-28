import { DownloadIcon } from "./Icon";

type ButtonType = {
  label: string;
  variant: Variant;
};

type Variant = "primary" | "secondary" | "icon";

export const Button = ({ label, variant="primary"}: ButtonType) => {
  const styling = {
    primary: "bg-teal-400 text-zinc-900 hover:bg-teal-300",
    secondary: "bg-blue-800 text-white hover:bg-blue-700",
    icon: "bg-blue-400 text-white flex gap-2 hover:bg-blue-500",
  };
  const isIcon = variant === 'icon'

  return (
    <button
      className={`w-fit px-4 py-2 m-4 rounded-full ${styling[variant]}`}
    >
      {isIcon && <DownloadIcon />} {label}
    </button>
  );
};
