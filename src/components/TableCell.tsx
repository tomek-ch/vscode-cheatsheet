import { ReactNode } from "react";

type TableCellProps = {
  children: ReactNode;
};

export const TableCell = ({ children }: TableCellProps) => {
  return <td className="py-3 px-4">{children}</td>;
};
