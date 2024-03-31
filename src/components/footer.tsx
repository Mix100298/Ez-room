export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();

    return <footer className=" flex bg-[#141414] p-auto h-[40px]">
        <p className="text-[#fafafa] text-xs my-auto text-left indent-4">Copyright &copy; {year} EASY-ROOM.com </p>
    </footer>
}