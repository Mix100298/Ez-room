
interface LayoutProps {
  table: React.ReactNode;
  product: React.ReactNode;
  children: React.ReactNode;
}


export default function Layout({ children }: LayoutProps) {
  return (
   
    <div className="flex-row gap-10 ">
     {children}
    </div>
    
  );
}
