import { useState } from "react";

import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setIsSubmitted(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "お名前を入力してください。";
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください。";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "正しいメールアドレスを入力してください。";
    }

    if (!formData.message.trim()) {
      newErrors.message = "ご相談内容を入力してください。";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitted(false);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className={styles.formWrapper}>
      {isSubmitted && (
        <div className={styles.successMessage}>
          <p>お問い合わせありがとうございます。</p>
          <span>
            内容を確認後、担当者よりご連絡いたします。
          </span>
        </div>
      )}

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className={styles.formGroup}>
          <label htmlFor="name">
            お名前
            <span className={styles.required}>必須</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="例）山田 太郎"
            className={errors.name ? styles.inputError : ""}
          />

          {errors.name && (
            <p className={styles.errorMessage}>
              {errors.name}
            </p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">
            メールアドレス
            <span className={styles.required}>必須</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="例）example@email.com"
            className={errors.email ? styles.inputError : ""}
          />

          {errors.email && (
            <p className={styles.errorMessage}>
              {errors.email}
            </p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">
            電話番号
            <span className={styles.optional}>任意</span>
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="例）078-123-4567"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">
            ご相談内容
            <span className={styles.required}>必須</span>
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="ご相談内容をご入力ください。"
            rows="8"
            className={
              errors.message ? styles.inputError : ""
            }
          />

          {errors.message && (
            <p className={styles.errorMessage}>
              {errors.message}
            </p>
          )}
        </div>

        <div className={styles.privacyNote}>
          <p>
            ご入力いただいた個人情報は、
            お問い合わせへの対応以外の目的では使用いたしません。
          </p>
        </div>

        <div className={styles.buttonArea}>
          <button type="submit" className={styles.submitButton}>
            送信する
          </button>
        </div>
      </form>
    </div>
  );
}