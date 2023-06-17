"use client";

import { useSelector } from "react-redux";
import { useState } from "react";
import Alert from "@/component/alert";
import styles from "./profile.module.css";

const Profile = (props) => {
  const { profile } = useSelector((state) => state.profile);
  const [name, setName] = useState(profile.name.firstname);
  const [lastname, setLastname] = useState(profile.name.lastname);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordAgain, setNewPasswordAgain] = useState("");
  const [alertText, setAlertText] = useState("");
  const [alertBool, setAlertBool] = useState(true);

  const handleUpdateProfile = (event) => {
    event.preventDefault();
  };

  const handleUpdatePassword = (event) => {
    event.preventDefault();

    // Boş alan varsa hata mesajı göster
    if (!event.target.checkValidity()) {
      setAlertText("Please fill in all fields");
      setAlertBool(false);
    }

    // Eski şifre doğru mu?
    if (oldPassword !== profile.password) {
      setAlertText("Current password is incorrect");
      setAlertBool(false);
    }

    // Yeni şifreler aynı mı?
    if (newPassword !== newPasswordAgain) {
      setAlertText("New passwords do not match");
      setAlertBool(false);
    }

    return <Alert text={"asdasd"} bool={true}></Alert>;

    // Şifreleri güncelle
    // ...
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.userContainer} onSubmit={handleUpdateProfile}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Lastname</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>

        <div>
          <label>E-Mail</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
      <form
        className={styles.passwordContainer}
        onSubmit={handleUpdatePassword}
      >
        <div>
          <label>Old Password</label>
          <input
            type="password"
            placeholder="********"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div>
          <label>New Password</label>
          <input
            type="password"
            placeholder="********"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label>New Password Again</label>
          <input
            type="password"
            placeholder="********"
            value={newPasswordAgain}
            onChange={(e) => setNewPasswordAgain(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Profile;
