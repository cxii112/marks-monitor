import '../css/NavSideBar.css';
import Categories from '../json/categories.json';
import { toggleClassById } from "../scripts/toggleClassById";
import { Link } from "react-router-dom";

export const NavSideBar = () => {
  const CATEGORIES = JSON.parse(JSON.stringify(Categories));
  const COMPONENT_NAME = 'NavSideBar';
  const handleMain = (str: string) => { if (str == 'main') return 'tag is-secondary pt-1'}

  return (
    <div id={COMPONENT_NAME} className={COMPONENT_NAME}>
      <div className='box py-6 is-flex is-flex-direction-column-reverse'>
        <div className=''>
          {CATEGORIES.list.map(
            (cat: { name: string, title: string, link: string }, idx: number) => (
              <div key={idx} className={`ml-0 mr-0`}>
                <Link to={`/marks-monitor${cat.link}`}
                  id={cat.name}
                  key={idx}
                  className={`LocalTitleLink ${handleMain(cat.name)}`}
                  style={{ order: idx }}
                  onClick={() => toggleClassById(COMPONENT_NAME, 'active')}>
                  {cat.title}
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}