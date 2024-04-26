export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className=" flex bg-[#141414] p-auto h-[40px] z-50 min-w-min">
      <div className="flex antialiased  max-w-[980px] min-w-[850px] ">
        <p className="text-[#fafafa] text-xs my-auto text-left indent-4">
          Copyright &copy; {year} EASY-ROOM.com{" "}
        </p>
      </div>
    </footer>
  );
}
