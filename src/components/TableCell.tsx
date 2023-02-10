import { ReactNode } from "react";

type TableCellProps = {
  children: ReactNode;
  className?: string;
};

export const TableCell = ({ children, className = "" }: TableCellProps) => {
  return (
    <td className="py-3">
      <div className={`border-b border-slate-800 pb-6 ${className}`}>
        {children}
      </div>
    </td>
  );
};
