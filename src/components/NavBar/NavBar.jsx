const NavBar = () => {
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile/:userId", name: "Profile" }
      ];
    return (
        <nav className="bg-blue-500 text-white">
            {
                routes.map(route => (
                    <ul key={route.id}>
                        <li><a href={route.path}>{ route.name}</a></li>
                    </ul>
                ))
            }
        </nav>
    );
};

export default NavBar;