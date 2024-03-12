export namespace ALERT {
  export const ERROR = "Hubo un error, int\u00e9ntelo nuevamente";
  export const ERROR_LOGIN_SING_IN = "Correo o contraseña incorrectos";
}

export namespace BUTTON {
  export const LOGIN_SING_IN = "INGRESAR";
  export const LOGIN_SING_UP = "REG\u00cdSTRATE";
  export const BUTTON_CANCEL = "CANCELAR";
  export const BUTTON_CONFIRM = "ACEPTAR";
  export const BUTTON_OK = "OK";
}

export namespace LABEL {
  export const LOGIN_MAIL = "Correo";
  export const LOGIN_PASS = "Contrase\u00f1a";
  export const MENU_DIARY = "Agenda";
  export const MENU_EXIT = "Salir";
  export const MENU_FOOD = "Alimentos";
  export const MODAL_SAVE = "Guardado";
  export const MODAL_CANCEL = "Cancelado";
  export const MODAL_TYPE_DELETE = "Eliminar";
  export const MODAL_TYPE_EDIT_FOOD = "Editar Alimento";

  export const LABEL_CODE = "C\u00f3digo de barras";
  export const LABEL_NAME = "Nombre del producto";
  export const LABEL_DATE = "Fecha de caducidad";
  export const LABEL_AMOUNT = "Cantidad";
  export const LABEL_DAYS = "D\u00edas";
}

export namespace MESSAGE {
  export const MESSAGE_LOGIN_WELCOME = "Bienvenido {}";
  export const MESSAGE_MODAL_DELETE = "El registro se ha eliminado";
  export const MESSAGE_MODAL_DELETE_CONFIRM = "\u00bf Desea eliminar este registro \u003f";
  export const MESSAGE_MODAL_EDIT_TITLE = "Editar Alimento";
  export const MESSAGE_MODAL_EDIT_SUCCESS = "Se guardaron los cambios";
}

export namespace STYLE {
  export const BUTTON_MAIN = "buttonMain";
  export const BUTTON_OFF = "buttonOff";
  export const BUTTON_MAIN_SHORT = "buttonMainShort";
  export const BUTTON_OFF_SHORT = "buttonOffShort";
  export const BUTTON_MAIN_CIRCLE_BIG = "buttonMainCircleBig";
  export const BUTTON_MAIN_CIRCLE_SHORT = "buttonMainCircleShort";
  export const BUTTON_OFF_CIRCLE_BIG = "buttonOffCircleBig";
  export const BUTTON_OFF_CIRCLE_SHORT = "buttonOffCircleShort";

  export const ICON_DELETE = "delete";
  export const ICON_PEN = "edit icon";
}

export namespace TABLE {
  export const TABLE_BODY_FOOD = ["select", "codigo", "nombre", "fecha", "dias", "cantidad", "id"];
  export const TABLE_HEADERS_FOOD = [
    {value: "codigo", name: LABEL.LABEL_CODE},
    {value: "nombre", name: LABEL.LABEL_NAME},
    {value: "fecha", name: LABEL.LABEL_DATE},
    {value: "dias", name: LABEL.LABEL_DAYS},
    {value: "cantidad", name: LABEL.LABEL_AMOUNT},
    {value: "id", name: ""}
  ];
}

export namespace TITLE {
  export const HEADER_TITLE = "Recordatorio App";
}
