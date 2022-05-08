import Swal from "sweetalert2";

const openErrorModal = () => {
  Swal.fire({
    icon: "error",
    title: "Oops!",
    text: "구현하지 않은 기능입니다!",
  });
};

export default openErrorModal;
