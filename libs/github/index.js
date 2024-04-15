const GitHub = class {
  static inject(domElement) {
    const style =
      "       .github-corner:hover .octo-arm {  " +
      "           display:none  " +
      "       }  " +
      "     " +
      "       @keyframes octocat-wave {  " +
      "     " +
      "           0%,  " +
      "           100% {  " +
      "               transform: rotate(0)  " +
      "           }  " +
      "     " +
      "           20%,  " +
      "           60% {  " +
      "               transform: rotate(-25deg)  " +
      "           }  " +
      "     " +
      "           40%,  " +
      "           80% {  " +
      "               transform: rotate(10deg)  " +
      "           }  " +
      "       }  " +
      "     " +
      "       @media (max-width:500px) {  " +
      "           .github-corner:hover .octo-arm {  " +
      "               animation: none  " +
      "           }  " +
      "     " +
      "           .github-corner .octo-arm {  " +
      "               animation: octocat-wave 560ms ease-in-out  " +
      "           }  " +
      "       }  ";

    
    const styleEl = document.createElement("style");
    const linkEl = document.createElement("a");

    styleEl.innerHTML = style;
    linkEl.innerHTML = link;

    linkEl.setAttribute("herf", "https://github.com/paol-imi/gamepad.js");
    linkEl.setAttribute("class", "github-corner");
    linkEl.setAttribute("aria-label", "View source on GitHub");
    linkEl.setAttribute("onclick", "event.stopPropagation()");

    document.head.appendChild(styleEl);
    domElement.appendChild(linkEl);
  }
};
