import React,{useState} from 'react'
import styled from "styled-components"
import Input from "../Input"
import { AssignmentInd } from "@mui/icons-material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { IoIosArrowForward } from "react-icons/io";

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


function UserInfoForm({form,setFormHandler,formChangeHandler}) {
  const [errorMessage, setErrorMessage] = useState([]);

  const onChangeFunction = (name) => {
    return (e) => {
      setFormHandler((prev) => {
        return { ...prev, [name]: e.target.value };
      });
    };
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
    if (error.length < 1) {
      formChangeHandler();
    }
  };

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
  
}

export default UserInfoForm
