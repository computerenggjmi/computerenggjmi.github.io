function Menu({ links }) {
  return (
    <div className=" flex flex-col flex-wrap">
      {links.map((link, index) => (
        <div className="font-semibold" key={index}>
          <a href={link.url}>{link.text}</a>
        </div>
      ))}
    </div>
  );
}

export default Menu;
