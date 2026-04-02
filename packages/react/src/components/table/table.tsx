import * as styles from "@patrick-ui/core/table/table.css";

export function Table(props: React.ComponentProps<"table">) {
  return (
    <div data-slot="table-container" className={styles.tableContainer}>
      <table data-slot="table" className={styles.table} {...props} />
    </div>
  );
}

export function TableHeader(props: React.ComponentProps<"thead">) {
  return <thead data-slot="table-header" className={styles.thead} {...props} />;
}

export function TableBody(props: React.ComponentProps<"tbody">) {
  return <tbody data-slot="table-body" className={styles.tbody} {...props} />;
}

export function TableFooter(props: React.ComponentProps<"tfoot">) {
  return <tfoot data-slot="table-footer" className={styles.tfoot} {...props} />;
}

export function TableRow(props: React.ComponentProps<"tr">) {
  return <tr data-slot="table-row" className={styles.tr} {...props} />;
}

export function TableHead(props: React.ComponentProps<"th">) {
  return <th data-slot="table-head" className={styles.th} {...props} />;
}

export function TableCell(props: React.ComponentProps<"td">) {
  return <td data-slot="table-cell" className={styles.td} {...props} />;
}

export function TableCaption(props: React.ComponentProps<"caption">) {
  return (
    <caption data-slot="table-caption" className={styles.caption} {...props} />
  );
}
