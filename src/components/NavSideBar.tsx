import '../css/NavSideBar.css';
import Categories from '../json/categories.json';
import { toggleClassById } from "../scripts/toggleClassById";
import { Link } from "react-router-dom";

export const NavSideBar = () => {
  const CATEGORIES = JSON.parse(JSON.stringify(Categories));
  const COMPONENT_NAME = 'NavSideBar';

  return (
    <div id={COMPONENT_NAME} className={COMPONENT_NAME}>
      <div className='box nontification is-light py-6'>
        {CATEGORIES.list.map(
          (cat: { name: string, title: string, link: string }, idx: number) => (
            <div key={idx}>
              <Link to={`/marks-monitor${cat.link}`}
                id={cat.name}
                key={idx}
                className='LocalTitleLink'
                style={{ order: idx }}
                onClick={() => toggleClassById(COMPONENT_NAME, 'active')}>
                {cat.title}
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  )
}