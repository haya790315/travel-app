import React, { useState } from "react";
import styled from "styled-components";
import { AssignmentInd } from "@mui/icons-material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import Input from "../Input";
const FormContainer = styled.div`
  display: flex;
  position: absolute;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 71%;
  min-width: 600px;
  height: 600px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  overflow: hidden;
`;

const FormHeading = styled.div`
  width: 100%;
  height: 60px;
  background-color: #f5f4f0;
  position: absolute;
  top: 0;
  border-bottom: 1px solid #d4d4d4;
  display: flex;
  align-items: end;
  font-size: 1.2rem;
  justify-content: flex-start;
  & p {
    font-weight: 600;
    margin-left: 10px;
  }
`;

const FormContent = styled.form`
  width: 90%;
  height: 100%;
  display: flex;
  margin: 100px 0;
  padding: 2rem 0;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  & span {
    font-size: 1rem;
  }
`;
const FormInputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  border-bottom: 2px solid #d4d4d4;
  font-size: 2rem;
`;
const NewInput = styled.input`
  padding: 1rem;
  min-width: 100px;
  height: 20px;
  border: 1px solid #eee;
  &:focus {
    outline: solid 2px #3894fd;
    background: transparent;
    border-radius: 2px;
  }
`;
const Label = styled.label`
  font-size: 12px;
  text-align: center;
  font-weight: 600;
`;

const Gender = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;

  & span {
    margin-left: 5px;
  }
`;

const SelectBar = styled.select`
  width: 200px;
  height: 40px;
  outline: blue;
  border-radius: 5px;
  margin: 0 20px;
`;

const MustSpan = styled.span`
  background-color: red;
  padding: 1px 4px;
  color: #fff;
  border-radius: 1px;
  margin-left: 21px;
  outline: red;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin: 5px 0;
`;

const FormButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormButton = styled.button`
  width: 100px;
  border-radius: 10px;
  background: linear-gradient(
    330deg,
    rgba(9, 0, 158, 1) 0%,
    rgba(108, 108, 182, 1) 55%,
    rgba(0, 212, 255, 1) 100%
  );
  white-space: nowrap;
  padding: 10px 24px;
  color: #fff;
  text-align: center;
  font-size: "20px";
  outline: none;
  cursor: pointer;
  border: none;
  margin: 20px 10px 0 0;
`;

export const MemberInformationForm = () => {
  const [formToggle, setFormToggle] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "",
    email: "",
    account: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState([]);

  const [accountChecker, setAccountChecker] = useState("");
  const [passwordChecker, setPasswordChecker] = useState("");

  const onChangeFunction = (name) => {
    return (e) => {
      setForm((prev) => {
        return { ...prev, [name]: e.target.value };
      });
    };
  };

  const submitHandler = () => {
    let storageArray = [];
    if (localStorage.getItem("user")) {
      const storage = JSON.parse(localStorage.getItem("user"));
      storageArray = [...storage, form];
      localStorage.setItem("user", JSON.stringify(storageArray));
    } else {
      storageArray.push(form);
      localStorage.setItem("user", JSON.stringify(storageArray));
    }
  };

  const nameValidator = (name, key) => {
    if (!form[key]) {
      return `*お名前(${name})が入力されていません`;
    }
  };

  const emailValidator = () => {
    if (form.email) {
      if (!form.email.includes("@")) {
        return "正しい格式ではありません";
      }
    }
  };

  const accountValidator = () => {
    if (form.account.length < 8) return "8文字以上を入力ください";
  };

  const passwordValidator = () => {
    if (form.password.length < 5) return "違い";
  };

  const checkAccountValidator = () => {
    if (accountChecker !== form.account) return "一致しません";
  };

  const checkPasswordValidator = () => {
    if (passwordChecker !== form.password) return "一致しません";
  };

  const checkValidateHandler = () => {
    const { firstName, lastName, birthday, gender } = form;
    const error = [];
    if (!firstName) {
      error.push("*お名前(姓)が入力されていません");
    }
    if (!lastName) {
      error.push("*お名前(名)が入力されていません");
    }
    if (!birthday) {
      error.push("*生年月日を選んでください");
    }
    if (!gender) {
      error.push("*性別を選んでください");
    }
    setErrorMessage(error);
    return error;
  };

  const buttonHandler = (e) => {
    e.preventDefault();
    const error = checkValidateHandler();
    if (!error.length) {
      setFormToggle((prev) => !prev);
    }
    console.log(form);
  };

  if (formToggle === false)
    return (
      <FormContainer>
        <FormHeading>
          <AssignmentInd />
          <p>基本情報</p>
        </FormHeading>
        <FormContent name="info">
          <FormInputs>
            <Label htmlFor="firstName">
              <span>姓</span>
              <MustSpan>必須</MustSpan>
            </Label>
            <Input
              type="text"
              id="firstName"
              key="1"
              name="firstName"
              value={form.firstName}
              validator={() => nameValidator("姓", "firstName")}
              placeholder="鈴木"
              onChangeFunction={onChangeFunction("firstName")}
            />
            <Label htmlFor="lastName">
              <span>名</span>
              <MustSpan>必須</MustSpan>
            </Label>
            <Input
              type="text"
              id="lastName"
              key="2"
              name="lastName"
              value={form.lastName}
              validator={() => nameValidator("名", "lastName")}
              placeholder="一郎"
              onChangeFunction={onChangeFunction("lastName")}
            />
          </FormInputs>
          <FormInputs>
            <Label htmlFor="birthday">
              <span>生年月日</span>
              <MustSpan>必須</MustSpan>
            </Label>
            <NewInput
              type="date"
              id="birthday"
              value={form.birthday}
              style={{ borderRadius: "5px", width: "200px" }}
              onChange={onChangeFunction("birthday")}
            />
            <Label htmlFor="gender">
              <span>性別</span>
              <MustSpan>必須</MustSpan>
            </Label>
            <Gender>
              <FormControl onChange={onChangeFunction("gender")}>
                <RadioGroup row aria-label="gender" name="gender">
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="男性"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="女性"
                  />
                </RadioGroup>
              </FormControl>
            </Gender>
          </FormInputs>
          <FormInputs>
            <Label htmlFor="country">
              <span>国籍</span>
              <MustSpan>必須</MustSpan>
            </Label>
            <SelectBar
              name="country"
              id="country"
              onChange={onChangeFunction("country")}
            >
              <option value="japan">日本</option>
              <option value="korea">韓国</option>
              <option value="american">美国</option>
              <option value="china">中国</option>
            </SelectBar>
            <Label htmlFor="email">
              <span>メールアドレス</span>
            </Label>
            <Input
              type="text"
              id="email"
              name="name"
              placeholder="abc123@mail.com"
              onChangeFunction={onChangeFunction("email")}
              validator={emailValidator}
              value={form.email}
            />
          </FormInputs>
          {errorMessage &&
            errorMessage.map((error) => {
              return <ErrorMessage>{error}</ErrorMessage>;
            })}
          <FormButton type="button" onClick={buttonHandler}>
            次に進む
            <IoIosArrowForward />
          </FormButton>
        </FormContent>
      </FormContainer>
    );

  if (formToggle === true)
    return (
      <FormContainer>
        <FormHeading>
          <RiLockPasswordLine />
          <p>アカウント / パスワード</p>
        </FormHeading>
        <FormContent name="account">
          <FormInputs>
            <Label htmlFor="account">
              <span>アカウント</span>
              <MustSpan>必須</MustSpan>
            </Label>
            <Input
              type="text"
              required
              key="3"
              id="account-prev"
              name="account-prev"
              placeholder="半角英数8文字以上"
              value={form.account}
              validator={accountValidator}
              onChangeFunction={onChangeFunction("account")}
            />
            <Label htmlFor="account-check">
              <span>アカウント</span>
              <MustSpan>確認</MustSpan>
            </Label>
            <Input
              type="text"
              key="4"
              id="account-checked"
              name="account-checked"
              disabled={!!accountValidator()}
              validator={checkAccountValidator}
              onChangeFunction={(e) => setAccountChecker(e.target.value)}
              placeholder="もう一度ご入力ください"
            />
          </FormInputs>
          <FormInputs>
            <Label htmlFor="password">
              <span>パスワード</span>
              <MustSpan>必須</MustSpan>
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="半角英数8文字以上"
              required
              value={form.password}
              validator={passwordValidator}
              onChangeFunction={onChangeFunction("password")}
            />
            <Label htmlFor="password-check">
              <span>パスワード</span>
              <MustSpan>確認</MustSpan>
            </Label>
            <Input
              type="password"
              id="password-check"
              placeholder="もう一度ご入力ください"
              disabled={!!passwordValidator()}
              validator={checkPasswordValidator}
              onChangeFunction={(e) => setPasswordChecker(e.target.value)}
            />
          </FormInputs>
          <FormButtonsContainer>
            <FormButton type="button" onClick={(prev) => setFormToggle(!prev)}>
              <IoIosArrowBack />
              戻る
            </FormButton>
            <FormButton
              type="button"
              onClick={submitHandler}
              // disabled={!!checkPasswordValidator() || !!checkValidateHandler()}
            >
              登録する
              <IoIosArrowForward />
            </FormButton>
          </FormButtonsContainer>
        </FormContent>
      </FormContainer>
    );
};
