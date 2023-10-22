export const toDoValidation = (text: string) => {
  if (text.length < 3) {
    return {
      status: false,
      msg: "ToDo must be at least 3 characters long",
    };
  }
  if (text.length > 50) {
    return {
      status: false,
      msg: "ToDo must be less than 50 characters long",
    };
  }
  if (text.trim() === "") {
    return {
      status: false,
      msg: "ToDo cannot be empty",
    };
  }
  return {
    status: true,
    msg: "ToDo is valid",
  };
};
