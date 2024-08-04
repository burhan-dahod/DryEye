import Cookies from "js-cookie";

export const getCsrfToken = () => Cookies.get("csrftoken");
