import React, { useReducer } from 'react';
import NaverIcon from '../components/NaverIcon';
import './LoginPage.css';
import Label from '../components/Label';
import ComponentButton from '../components/ComponentButton';
import { ReactComponent as LockIcon } from '../assets/icon/lock.svg';
import Dropdown from '../components/Dropdown';
import TextButton from '../components/TextButton';

const initialState = {
  username: '',
  password: '',
  confirmPassword: '',
  name: '',
  birthYear: '',
  birthMonth: '',
  birthDay: '',
  gender: '',
  email: '',
  countryCode: '',
  phone: '',
  verificationCode: '',
};

function formReducer(state: typeof initialState, action: { type: string; field: string; value: string }) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
}

const LoginPage: React.FC = () => {
  const [form, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_FIELD', field, value: e.target.value });
    console.log(form);
  };
  
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <NaverIcon />
      <div className='group'>
        <Label text='아이디' />
        <ComponentButton type='text' value={form.username} onChange={handleChange('username')} endAdornment={<p>@naver.com</p>}/>
      </div>
      <div className='group'>
        <Label text='비밀번호' />
        <ComponentButton type='password' value={form.password} onChange={handleChange('password')} endAdornment={ <LockIcon /> } />
      </div>
      <div className='group'>
        <Label text='비밀번호 재확인' />
        <ComponentButton type='password' value={form.confirmPassword} onChange={handleChange('confirmPassword')} endAdornment={<LockIcon />} />
      </div>
      <div className='group'>
        <Label text='이름' />
        <ComponentButton type='text' value={form.name} onChange={handleChange('name')}/>
      </div>
      <div className='group'>
        <Label text='생년월일' />
        <div className='login--birthdateSelection'>
          <ComponentButton type='number' value={form.birthYear} onChange={handleChange('birthYear')} placeholderText='년(4자)'/>
          <Dropdown
            options={['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']}
            placeholder="월"
            onSelect={(value) => dispatch({ type: 'SET_FIELD', field: 'birthMonth', value })}
          />
          <ComponentButton type='number' value={form.birthDay} onChange={handleChange('birthDay')}/>
        </div>
      </div>
      <div className='group'>
        <Label text='성별' />
        <Dropdown
            options={['남성', '여성']}
            placeholder="성별"
            onSelect={(value) => dispatch({ type: 'SET_FIELD', field: 'gender', value })}
          />
      </div>
      <div className='group'>
        <Label text='본인 확인 이메일 (선택)' />
        <ComponentButton type='text' value={form.email} onChange={handleChange("email")} placeholderText='선택 입력' />
      </div>
      <div className='group'>
        <Label text='휴대전화' />
        <Dropdown
          options={['대한민국 +82']}
          placeholder="국가 코드"
          onSelect={(value) => dispatch({ type: 'SET_FIELD', field: 'countryCode', value })}
        />
        <div className='login--phoneNumberSelection'>
          <ComponentButton type='text' value={form.phone} onChange={handleChange("phone")} placeholderText='전화번호 입력' />
          <TextButton placeholderText='인증번호 받기' size='medium'/>
        </div>
        <ComponentButton type='text' value={form.verificationCode} onChange={handleChange("verificationCode")} placeholderText='인증번호 입력하세요' />
      </div>
      <TextButton placeholderText='가입하기' size='large'/>
    </main>
  );
};

export default LoginPage;