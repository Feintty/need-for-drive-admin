const snackbarError = (errCode: string) => {
  switch (errCode) {
    case "401":
      return "Пользователь не найден";
    case "404":
      return "Ошибка запроса";
    default:
      return "Неизвестная ошибка";
  }
};

export default snackbarError;
