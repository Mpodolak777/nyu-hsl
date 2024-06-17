import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("Error!");
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setText(data.hello);
      });
    fetch("/drupal/api/main-menu-items")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);

  return (
    <>
      <header className="w-full bg-[#580F8B] text-white min-h-20 content-center px-4 font-default">
        <a href="/">{text}</a>
      </header>
      <nav className="w-full min-h-20 content-center flex flex-row font-default">
        {menu.map((elem, id) => {
          return (
            <div className="p-4" key={id}>
              <a href={elem.link}>{elem.title}</a>
              {elem.children && (
                <div className="flex flex-col">
                  {elem.children.map((item, index) => {
                    return (
                      <a href={item.link} key={index} className="py-2 pl-2">
                        {item.title}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}

export default App;
