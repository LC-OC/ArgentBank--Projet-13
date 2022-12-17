import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userNameEdit,
  userProfile,
  userNameSave,
  userNameCancel,
} from "../redux/user/user.slice";

const FormEditName = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, isError, isSuccess } = useSelector(
    (state) => state.user
  );

  const [updateForm, setUpdateForm] = useState(true);
  const [updateFirstName, setUpdateFirstName] = useState();
  const [updateLastName, setUpdateLastName] = useState();

  const showFormOnClick = () => {
    setUpdateForm(false);
    dispatch(userNameSave());
  };

  const hideFormOnClick = () => {
    setUpdateForm(true);
  };

  const editUserNameOnClick = (e) => {
    e.preventDefault();
    const changeName = {
      firstName: updateFirstName,
      lastName: updateLastName,
    };
    dispatch(userNameEdit(changeName));
    dispatch(userNameCancel);
    setUpdateForm(true);
  };

  const changeFirstName = (e) => {
    setUpdateFirstName(e.target.value);
  };

  const changeLastName = (e) => {
    setUpdateLastName(e.target.value);
  };

  useEffect(() => {
    if (isError) {
      console.log(isError);
    }
    if (isSuccess) {
      dispatch(userProfile());
    }
  }, [firstName, lastName, isError, isSuccess, dispatch]);
  return (
    <div>
      {updateForm ? (
        <>
          <div className="welcome-edit-name">
            <h1 className="welcome-user">
              Welcome back
              <span className="name-user">
                {firstName} {lastName}
              </span>
            </h1>
            <button className="edit-button" onClick={showFormOnClick}>
              Edit Name
            </button>{" "}
          </div>
        </>
      ) : (
        <>
          <div className="welcome-edit-name">
            <h1 className="welcome-user">Welcome back</h1>
            <form className="form-edit-user">
              <div className="input-container-name">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  defaultValue={firstName}
                  onChange={changeFirstName}
                />
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  defaultValue={lastName}
                  onChange={changeLastName}
                />
              </div>
              <div className="button-container-name">
                <button type="submit" onClick={editUserNameOnClick}>
                  Save
                </button>
                <button onClick={hideFormOnClick}>Cancel</button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default FormEditName;
