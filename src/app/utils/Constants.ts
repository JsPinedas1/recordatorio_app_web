export namespace ALERT {
  export const ERROR = "Hubo un error, int\u00e9ntelo nuevamente";
  export const ERROR_LOGIN_SING_IN = "Correo o contraseña incorrectos";
}

export namespace BUTTON {
  export const LOGIN_SING_IN = "INGRESAR";
  export const LOGIN_SING_UP = "REG\u00cdSTRATE";
}

export namespace LABEL {
  export const LOGIN_MAIL = "Correo";
  export const LOGIN_PASS = "Contrase\u00f1a";
  export const MENU_DIARY = "Agenda";
  export const MENU_EXIT = "Salir";
  export const MENU_FOOD = "Alimentos";
}

export namespace MESSAGE {
  export const MESSAGE_LOGIN_WELCOME = "Bienvenido {}";
}

export namespace STYLE {
  export const BUTTON_MAIN = "buttonMain";
  export const BUTTON_OFF = "buttonOff";
  export const BUTTON_MAIN_CIRCLE_BIG = "buttonMainCircleBig";
  export const BUTTON_MAIN_CIRCLE_SHORT = "buttonMainCircleShort";
}

export namespace TABLE {
  export const TABLE_BODY_FOOD = ["select", "codigo", "nombre", "fecha", "dias", "cantidad", "id"];
  export const TABLE_HEADERS_FOOD = [
    {value: "codigo", name: "Código de barras"},
    {value: "nombre", name: "Nombre del producto"},
    {value: "fecha", name: "Fecha de caducidad"},
    {value: "dias", name: "Días"},
    {value: "cantidad", name: "Cantidad"},
    {value: "id", name: ""}
  ];
}

export namespace TITLE {
  export const HEADER_TITLE = "Recordatorio App";
}
