interface Botao {
  text: string;
  onClickAction: () => void;
  color?: string;
  width?: number;
  icon?: React.ReactNode;
  
};

export default function Button ({
    text, 
    onClickAction, 
    color="#50E678", 
    width=208, 
    icon
  }: Botao) {

  return (
    <button type="button"
      onClick={onClickAction}
      style={{backgroundColor: color, width}}
      className="h-12 rounded-full text-white font-semibold flex items-center justify-center gap-[10px] shadow-md px-9 active:opacity-50 transition"
    >
      {icon}{text}
    </button>
  )
}
