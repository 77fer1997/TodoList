import Swal from "sweetalert2";
export const AlertError = (onClickButton: () => void) => {
  Swal.fire({
    title: "Token Invalido!",
    text: "Por favor actualiza la página",
    icon: "error",
    confirmButtonText: "Actualizar",
    confirmButtonColor: "#072746",
    color: "white",
    background: "#171723",
  }).then((result) => {
    if (result.isConfirmed) {
      onClickButton();
    }
  });
};
