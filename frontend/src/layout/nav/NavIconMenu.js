import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_BEHAVIOUR } from 'constants.js';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { settingsChangeColor } from 'settings/settingsSlice';
import { menuChangeBehaviour } from './main-menu/menuSlice';

const NavIconMenu = () => {
  const { pinButtonEnable, behaviour } = useSelector((state) => state.menu);
  const { color } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const onPinButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (pinButtonEnable) {
      dispatch(menuChangeBehaviour(behaviour === MENU_BEHAVIOUR.Pinned ? MENU_BEHAVIOUR.Unpinned : MENU_BEHAVIOUR.Pinned));
    }
    return false;
  };
  const onDisabledPinButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onLightDarkModeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(settingsChangeColor(color.includes('light') ? color.replace('light', 'dark') : color.replace('dark', 'light')));
  };
  const [showSearchModal, setShowSearchModal] = useState(false);

  const onSearchIconClick = (e) => {
    e.preventDefault();
    setShowSearchModal(true);
  };

  return (
    <>
      <ul className="list-unstyled list-inline text-center menu-icons">
        {/* <li className="list-inline-item">
          <a href="#/" onClick={onSearchIconClick}>
            <CsLineIcons icon="search" size="18" />
          </a>
        </li> */}
        {/* <li className="list-inline-item">
          <a
            href="#/"
            id="pinButton"
            onClick={pinButtonEnable ? onPinButtonClick : onDisabledPinButtonClick}
            className={classNames('pin-button', { disabled: !pinButtonEnable })}
          >
            <CsLineIcons icon="lock-on" size="18" className="unpin" />
            <CsLineIcons icon="lock-off" size="18" className="pin" />
          </a>
        </li> */}
        <li className="list-inline-item">
          <a href="#/" id="colorButton" onClick={onLightDarkModeClick}>
            <CsLineIcons icon="light-on" size="22" className="light" />
            <CsLineIcons icon="light-off" size="22" className="dark" />
          </a>
        </li>
        {/* <IconMenuNotifications /> */}
      </ul>
      {/* <SearchModal show={showSearchModal} setShow={setShowSearchModal} /> */}
    </>
  );
};

export default React.memo(NavIconMenu);
