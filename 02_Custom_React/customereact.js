//  how react render the each element behind the scence

function customRenderEle(reactElement, mainContainer) {
  let domElement = document.createElement(reactElement.type);
  // console.log(domElement);

  domElement.innerHTML = reactElement.children;
  for (const pro in reactElement.prop) {
    domElement.setAttribute(pro, reactElement.prop[pro]);
  }
  //   at the end put the reactElement to main containder

  mainContainer.appendChild(domElement);
}

////mei ye man ke chalta hu ki react behind the scences aise element ko create karta hoga
const reactElement = {
  type: "a",
  prop: {
    href: "https://google.com",
    target: "_blank",
  },

  children: "Google Me",
};

const mainContainer = document.querySelector("#root");

customRenderEle(reactElement, mainContainer);