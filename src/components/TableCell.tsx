import { ReactNode } from "react";

type TableCellProps = {
  children: ReactNode;
};

export const TableCell = ({ children }: TableCellProps) => {
  return (
    <td className="py-3">
      <div className="border-b border-slate-800 pb-6">{children}</div>
    </td>
  );
};
