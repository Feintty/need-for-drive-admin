interface IUser {
  mail: {
    value: string;
    isCorrect: boolean;
  };
  password: {
    value: string;
    isCorrect: boolean;
  };
}

export default IUser;
