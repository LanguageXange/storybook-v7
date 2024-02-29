type SwitchProps = {
    isOpen:boolean;
    onToggle:()=>void;
}


function handleClick(){
    document.documentElement.classList.toggle('dark')
}

export const Switch = ({ isOpen, onToggle }: SwitchProps) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={isOpen}
          onChange={onToggle}
          onClick={handleClick}
        />
        <div
          className={`w-20 h-10 rounded-full shadow-inner ${
            isOpen ? "bg-green-300" : "bg-gray-500"
          }`}
        ></div>
        <div
          className={`transition-all duration-300 absolute border-2 top-0 w-10 h-10 bg-white rounded-full shadow ${
            isOpen ? "left-11" : "-left-2"
          }`}
        ></div>
      </div>
    </label>
  );
};
