import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { settingsChangeColor } from 'settings/settingsSlice';

const NavIconMenu = () => {
  const { color } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const onLightDarkModeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(settingsChangeColor(color.includes('light') ? color.replace('light', 'dark') : color.replace('dark', 'light')));
  };

  return (
    <>
      <ul className="list-unstyled list-inline text-center menu-icons">

        <li className="list-inline-item">
          <a href="#/" id="colorButton" onClick={onLightDarkModeClick}>
            <CsLineIcons icon="light-on" size="22" className="light" />
            <CsLineIcons icon="light-off" size="22" className="dark" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default React.memo(NavIconMenu);
