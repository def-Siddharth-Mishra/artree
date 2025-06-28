import React from "react";

export interface TableColumn<T> {
  key: keyof T;
  label: string;
  render?: (row: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  actions?: (row: T) => React.ReactNode;
}

export function Table<T extends { id: string }>({ columns, data, actions }: TableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md bg-white dark:bg-gray-900">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                {col.label}
              </th>
            ))}
            {actions && <th className="px-6 py-3">Actions</th>}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td key={String(col.key)} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  {col.render ? col.render(row) : (row[col.key] as React.ReactNode)}
                </td>
              ))}
              {actions && <td className="px-6 py-4">{actions(row)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
