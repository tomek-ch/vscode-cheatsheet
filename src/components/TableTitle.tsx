import { ReactNode } from "react";

type TableTitleProps = {
  children: ReactNode;
  className?: string;
};

export const TableTitle = ({ children, className = "" }: TableTitleProps) => {
  return <th className={`bg-slate-800 py-3 px-4 ${className}`}>{children}</th>;
};
