function Navbar() {
    return (
        <>
            <header>
                <nav className="flex bg-red-600 justify-between">
                    <a href="#">Gr<span className="text-orange-600">O</span>cify</a>

                    <ul className="flex">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Process</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )

}
export default Navbar