interface LayoutProps {
  table: React.ReactNode;
  product: React.ReactNode;
  children: React.ReactNode;
}

export default function Layout({ table,product }: LayoutProps) {
  return (
    <div className="flex-row gap-10 ">
      <div className="grid gap-10 min-w-[500px]">
        {table}
        {product}
      </div>
    </div>
  );
}
