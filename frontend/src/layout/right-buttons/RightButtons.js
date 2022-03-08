/* Theme Settings & Niches Buttons */
import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const RightButtons = () => {
  return (
    <>
      <div className="settings-buttons-container">
        <OverlayTrigger delay={{ show: 1000, hide: 0 }} overlay={<Tooltip>Instagram</Tooltip>} placement="left">
          <Button
            variant="primary"
            href="https://themeforest.net/item/acorn-react-admin-template/33951408"
            rel="noreferrer"
            target="_blank"
            className="settings-button p-0"
          >
            <span>
              <CsLineIcons icon="instagram" className="position-relative" />
            </span>
          </Button>
        </OverlayTrigger>
        <OverlayTrigger delay={{ show: 1000, hide: 0 }} overlay={<Tooltip>LinkedIn</Tooltip>} placement="left">
          <Button
            variant="primary"
            href="https://themeforest.net/item/acorn-react-admin-template/33951408"
            rel="noreferrer"
            target="_blank"
            className="settings-button p-0"
          >
            <span>
              <CsLineIcons icon="linkedin" className="position-relative" />
            </span>
          </Button>
        </OverlayTrigger>
        <OverlayTrigger delay={{ show: 1000, hide: 0 }} overlay={<Tooltip>Facebook</Tooltip>} placement="left">
          <Button
            variant="primary"
            href="https://themeforest.net/item/acorn-react-admin-template/33951408"
            rel="noreferrer"
            target="_blank"
            className="settings-button p-0"
          >
            <span>
              <CsLineIcons icon="facebook" className="position-relative" />
            </span>
          </Button>
        </OverlayTrigger>
        <OverlayTrigger delay={{ show: 1000, hide: 0 }} overlay={<Tooltip>YouTube</Tooltip>} placement="left">
          <Button
            variant="primary"
            href="https://themeforest.net/item/acorn-react-admin-template/33951408"
            rel="noreferrer"
            target="_blank"
            className="settings-button p-0"
          >
            <span>
              <CsLineIcons icon="youtube" className="position-relative" />
            </span>
          </Button>
        </OverlayTrigger>
      </div>
    </>
  );
};
export default RightButtons;
