import { isEmail } from "../utils/helper";

export const rules = {
  email: {
    required: {
      value: true,
      message: "Email là bắt buộc phải nhập",
    },
    minLength: {
      value: 5,
      message: "Email có độ dài từ 5 - 160 kí tự",
    },
    maxLength: {
      value: 160,
      message: "Email có độ dài từ 5 - 160 kí tự",
    },
    validate: {
      email: (v) => isEmail(v) || "Email không đúng định dạng",
    },
  },
  password: {
    required: {
      value: true,
      message: "Mật khẩu là bắt buộc phải nhập",
    },
    minLength: {
      value: 6,
      message: "Mật khẩu có độ dài từ 6 - 160 kí tự",
    },
    maxLength: {
      value: 160,
      message: "Mật khẩu có độ dài từ 6 - 160 kí tự",
    },
  },
  confirmPassword: {
    required: {
      value: true,
      message: "Nhập lại mật khẩu là bắt buộc phải nhập",
    },
    minLength: {
      value: 6,
      message: "Nhập lại mật khẩu có độ dài từ 6 - 160 kí tự",
    },
    maxLength: {
      value: 160,
      message: "Nhập lại mật khẩu có độ dài từ 6 - 160 kí tự",
    },
  },
};
