interface DarkDivProps {
    children: React.ReactNode;
    className?: string; // className is now optional
  }
export const DarkDiv = ({ children, className }: DarkDivProps) => {
    return (
      <div className={'text-zinc-100 shadow-2xl w-full transition-all ease-in bg-opacity-20 bg-black relative hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-black/[0.1] h-auto rounded-xl p-6 border ' + className}>
        {children}
      </div>
    )
  }