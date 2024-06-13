export type ColumnProps = {
  label: string;
  key: string;
};

export type TableProps = {
  columns: Array<ColumnProps>;
  rows?: Array<object>;
};

export const Table = ({ columns, rows }: TableProps) => (
  <table className="w-full bg-white pt-8 pb-10 px-6 md:px-10 shadow-md rounded-lg text-black">
    <thead>
      <tr className="border-b">
        {columns?.map((column) => (
          <th className="p-2 text-center" key={column.key}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
    {rows && !!rows.length && (
      <tbody>
        {rows?.map((row, index) => (
          <tr key={index}>
            {columns?.map((column) => (
              <td className="p-2 text-center" key={column.key}>
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    )}
  </table>
);
