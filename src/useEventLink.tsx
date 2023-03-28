import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import CustomIframe from "./components/CustomIframe";
import { EventLinkComponent } from "./components/EventLink";

interface customWindow extends Window {
  EventLink: {
    openLink: () => void;
    initialize: () => void;
  };
}

declare const window: customWindow;

window.EventLink = {
  initialize: () => {
    const container = document.createElement("div");
    container.id = "event-link-container";
    document.body.appendChild(container);
    ReactDOM.render(
      <CustomIframe id="event-link-iframe" title="Event Link">
        <EventLinkComponent />
      </CustomIframe>,
      container
    );
  },
  openLink: () => {
    const iframe = document.getElementById(
      "event-link-iframe"
    ) as HTMLIFrameElement;
    iframe.style.display = "block";
  },
};

export const useEventLink = () => {
  useEffect(() => {
    if (window.EventLink) {
      window.EventLink.initialize();
    }
  }, []);

  const open = () => {
    if (window.EventLink) {
      window.EventLink.openLink();
    }
  };

  return { open };
};
