const Header = (): JSX.Element => {
	return (
		<nav className="container mx-auto px-2 flex justify-between items-center h-16">
			<div>Icon</div>
			<ul className="flex gap-2">
				<li>home</li>
				<li>portfolio</li>
				<li>about</li>
				<li>contact</li>
			</ul>
		</nav>
	);
};

export default Header;
