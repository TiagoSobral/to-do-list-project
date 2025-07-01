

export function createDOM() {

   const body = document.querySelector("body");

   const main = document.createElement("main");

    const footer = document.createElement("footer");

    body.appendChild(main);
    body.appendChild(footer);

}
