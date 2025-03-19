export const URLS = {
  HOME: "/index.php?route=common/home",
  REGISTER: "/index.php?route=account/register",
  SUCCES: "/index.php?route=account/success",
  LOGIN: "/index.php?route=account/login",
  LOGOUT: "/index.php?route=account/logout",
  ACCOUNT: "/index.php?route=account/account",
  CATEGORY_ITEM: "index.php?route=product/category",
  WISH_LIST: "/index.php?route=account/wishlist",
};

export const PAGE_MSSGS = {
  LOGIN_PAGE: {
    LOGIN_FAILURE: " Warning: No match for E-Mail Address and/or Password.",
    MAX_LOGIN_FAILURE:
      " Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.",
  },
  LOGOUT_PAGE: {
    SUCCES_LOGUT:
      "You have been logged off your account. It is now safe to leave the computer.",
  },
  REGISTER_PAGE: {
    SUCCES_REGISTER:
      "Congratulations! Your new account has been successfully created!",
    USER_EXIST: "Warning: E-Mail Address is already registered!",
    WITHOUT_PRIVACITY: " Warning: You must agree to the Privacy Policy!",
    WITOUHT_PARAMS: {
      NAME: "First Name must be between 1 and 32 characters!",
      LASTNAME: "Last Name must be between 1 and 32 characters!",
      EMAIL: "E-Mail Address does not appear to be valid!",
      TELEPHONE: "Telephone must be between 3 and 32 characters!",
      PASSWORD: "Password must be between 4 and 20 characters!",
    },
  },
  HOME_PAGE: {
    SUCCES_COMPARATION: (nameItem) =>
      `Success: You have added ${nameItem} to your product comparison!`,
    SUCCES_ADD_TO_CART: (nameItem) =>
      `Success: You have added ${nameItem} to your shopping cart!`,
    SUCCESS_CHANGE_WHISLIST: `Success: You have modified your wish list!`,
  },
};

export const ERROR_MSSGS = {
  INST_ERROR: (nameClass) =>
    `${nameClass} is an abstract class and cannot be instantiated directly.`,
  PARAM_ERROR: (nameParam) =>
    `${nameParam} doesn't exist in the Object, please check the body of Object.`,
};
