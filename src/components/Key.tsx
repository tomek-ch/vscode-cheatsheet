import { ReactNode } from "react";

type KeyProps = {
  children: ReactNode;
};

export const Key = ({ children }: KeyProps) => {
  return (
    <kbd className="rounded-md bg-slate-800 py-2 px-3 font-sans text-white">
      {children}
    </kbd>
  );
};
