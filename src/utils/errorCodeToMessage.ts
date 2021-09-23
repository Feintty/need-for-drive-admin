const errorCodeToMessage = (errCode: string) => {
  switch (errCode) {
    case "401":
      return "Ошибка: введены неверные данные!";
    case "404":
      return "Ошибка: сервер не может обработать запрос!";
    default:
      return "Ошибка: неизвестная ошибка!";
  }
};

export default errorCodeToMessage;
