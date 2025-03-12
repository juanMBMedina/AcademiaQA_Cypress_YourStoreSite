import BasePageWithMenu from "../base/BasePageWithMenu";
import data from "./itemsPage.json";
import { URLS } from "../../support/constants";

class AccountPage extends BasePageWithMenu {
  constructor() {
    super(URLS.ACCOUNT);
    this.navBarSectionItems = data.sectionNavItems;
    this.elements = this.defaultElements;
    console.log(this.elements);
  }

  sectionsPage = [
    {
      title: "My Account",
      links: ["Edit Account", "Password", "Address Book", "Wish List (%s)"],
    },
    {
      title: "My Orders",
      links: [
        "Order History",
        "Downloads",
        "Reward Points",
        "Returns",
        "Transactions",
        "Payment Profile",
      ],
    },
    {
      title: "My Affiliate Account",
      links: ["Register for an affiliate account"],
    },
    {
      title: "Newsletter",
      links: ["Newsletter"],
    },
  ];

  barItems = [
    "My Account",
    "Edit Account",
    "Password",
    "Address Book",
    "Wish List",
    "Order History",
    "Downloads",
    "Recurring payments",
    "Reward Points",
    "Returns",
    "Transactions",
    "Newsletter",
    "Logout",
  ];

  
  get defaultElements() {
    return {
      ...super.defaultElements,
      sectionsContent: () => cy.get("#content"),
      titleLabel: (text) => cy.get("#content").contains("h2", text),
      linkMenu: (text) => cy.get("#content").contains("a", text),
    };
  }

  validateSections() {
    this.elements.sectionsContent().should("be.visible");
    this.sectionsPage.forEach((section) => {
      this.elements.titleLabel(section.title).should("be.visible");
      section.links.forEach((text) => {
        this.elements.linkMenu(text).should("be.visible");
      });
    });
  }

  validateNavBar(){
    this.validateURL();
    this.validateNavBarSingleItems(this.navBarSingleItems);
    this.validateNavBarSections(this.navBarSectionItems);
  }

  validateLoginSuccess() {
    this.validateSections();
    this.validateMenuBar(this.barItems);
  }
}

export default AccountPage;
