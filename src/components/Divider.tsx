type DividerPrpos = {
  props: string;
  className?: string; 
};

const Divider = ({ props ,className } : DividerPrpos) => {
  return (
    <div className={`flex gap-x-[6px] ${className}  px-4`}>
      <span className={`w-2.5 h-4  -skew-x-[30deg] ${props}`}></span>
      <span className={`w-2.5 h-4  -skew-x-[30deg] ${props}`}></span>
      <span className={`w-2.5 h-4  -skew-x-[30deg] ${props}`}></span>
      <span className={`w-2.5 h-4  -skew-x-[30deg] ${props}`}></span>
      <span className={`w-2.5 h-4  -skew-x-[30deg] ${props}`}></span>
      <span className={`w-2.5 h-4  -skew-x-[30deg] ${props}`}></span>
      <span className={`w-2.5 h-4  -skew-x-[30deg] ${props}`}></span>
      <span className={`w-2.5 h-4  -skew-x-[30deg] ${props}`}></span>
      <span className={`w-2.5 h-4  -skew-x-[30deg] ${props}`}></span>
    </div>
  );
};

export default Divider;
