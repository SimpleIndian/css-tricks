const mainEditor = document.querySelector(".editable");
const getSavedHtml = document.querySelector("#getSavedHtml");
const localStore = document.querySelector(".localStore");
var editor = new MediumEditor(".editable", {
  toolbar: {
    /* These are the default options for the toolbar,
               if nothing is passed this is what is used */
    allowMultiParagraphSelection: true,
    buttons: [
      {
        name: "h1",
        action: "append-h1",
        aria: "header type 1",
        tagNames: ["h1"],
        contentDefault: "<b>H1</b>",
        classList: ["custom-class-h1"],
        attrs: {
          "data-custom-attr": "attr-value-h1",
        },
      },
      {
        name: "h2",
        action: "append-h2",
        aria: "header type 2",
        tagNames: ["h2"],
        contentDefault: "<b>H2</b>",
        classList: ["custom-class-h2"],
        attrs: {
          "data-custom-attr": "attr-value-h2",
        },
      },
      {
        name: "h3",
        action: "append-h3",
        aria: "header type 3",
        tagNames: ["h3"],
        contentDefault: "<b>H3</b>",
        classList: ["custom-class-h3"],
        attrs: {
          "data-custom-attr": "attr-value-h3",
        },
      },
      "bold",
      "anchor",
      "customHtml",
    ],
    diffLeft: 0,
    diffTop: -10,
    firstButtonClass: "medium-editor-button-first",
    lastButtonClass: "medium-editor-button-last",
    relativeContainer: null,
    standardizeSelectionStart: false,
    static: false,
    /* options which only apply when static is true */
    align: "center",
    sticky: false,
    updateOnEmptySelection: false,
    autoLink: true,
  },
});
var getRawHtmlBtn = document.getElementById("getRawHtml");
var outputHolder = document.getElementById("outputHolder");
getRawHtmlBtn.addEventListener("click", (e) => {
  outputHolder.innerText = editor.getContent();
});
//add the raw html to localStorage for back up
mainEditor.addEventListener("keyup", () => {
  localStorage.setItem("mainEditor", mainEditor.innerHTML);
});
//get the current
getSavedHtml.addEventListener("click", () => {
  var SavedHtml = localStorage.getItem("mainEditor");
  localStore.classList.toggle("show");
  localStore.innerHTML = SavedHtml;
  mainEditor.innerHTML = SavedHtml;
});
//prevent browser refresh
window.addEventListener("beforeunload", (event) => {
  var x = (event.returnValue = `${console.log(
    "Are you sure you want to leave?"
  )}`);
});
