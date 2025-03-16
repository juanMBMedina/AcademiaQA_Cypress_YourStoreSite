import BasePage from "./BasePage";
import RightMenu from "./elements/RightMenu";
import defaultData from "./itemsPage";

class BasePageWithMenu extends BasePage {
  constructor(endpoint, dataPage = defaultData) {

    if (new.target === BasePageWithMenu) {
      throw new Error(ERROR_MSSGS.INST_ERROR(BasePageWithMenu.name));
    }
    
    super(endpoint, dataPage);
    this._rightMenu = new RightMenu(dataPage);
    this.elements = this.defaultElements;
  }

  // 🔹 Getter y Setter para `rightMenu`
  get rightMenu() {
    return this._rightMenu;
  }

  validateRigthBar() {
    this.rightMenu.validateRigthBar();
  }
}

export default BasePageWithMenu;
