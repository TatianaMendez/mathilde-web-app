
"use client"
import React, { useState } from 'react';
import InputForm from '../../atoms/inputForm';
import SelectForm from '../../atoms/selectForm';
import ButtonDefault from '../../atoms/buttonDefault';
import TermsCheckbox from '../../atoms/termsCheckbox';
import Image from 'next/image';
import { RegisterFormService } from '@/domain/register-form/RegisterFormService';


const RegisterForm: React.FC = () => {
  const { roles } = RegisterFormService;

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isPasswordValid = () => {
    return password.trim() && confirmPassword.trim() && password === confirmPassword;
  }; 


  return (
    <div className="container min-h-screen flex">
      <div className='w-2/4 border-container'>
        <Image
          className='mx-auto mt-32'
          src="/assets/images/mathilde.png"
          alt="Logo Mathilde Ads"
          width={400}
          height={250}
          priority
        />
        <div className='m-image-container'>
          <Image
            className='m-image'
            src="/assets/images/background-mathilde.png"
            alt="Logo Mathilde Ads"
            width={450}
            height={300}
            priority
          />
        </div>
      </div>
      <div className="w-2/4">
        <form className="w-full px-10 bg-white mt-28 rounded-lg">
          <h2 className="text-2xl mb-6">REGISTRO DE USUARIOS</h2>
          <p className='my-3'>Bienvenido a Mathilde, completa los datos y empieza a transformar tu estrategia digital.</p>
          <div className='flex'>
            <div className='w-2/4'>
              <InputForm type='text' placeholder='Nombres' />
            </div>
            <div className='w-2/4'>
              <InputForm type='text' placeholder='Apellidos' />
            </div>
          </div>
          <div className='flex'>
            <div className='w-2/4'>
              <InputForm type='text' placeholder='Empresa' />
            </div>
            <div className='w-2/4'>
              <InputForm type='number' placeholder='Celular' />
            </div>
          </div>
          <div className='flex'>
            <div className='w-2/4'>
              <SelectForm options={roles} />
            </div>
            <div className='w-2/4'>
              <InputForm type='email' placeholder='Correo electronico' />
            </div>
          </div>
          <div className='flex'>
            <div className='w-2/4'>
              <InputForm type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Contraseña' />
            </div>
            <div className='w-2/4'>
              <InputForm type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Confirmar contraseña' />
            </div>
          </div>
          {
              (!isPasswordValid() && password.trim() && confirmPassword.trim()) && (
                 <div className="mth-msg"> <label >Las contraseñas no coinciden.</label></div>
              )
          }
           <TermsCheckbox />


          <div className='flex justify-end'>
            <a href='' className="mr-2 flex items-center">Cancelar</a>
            <ButtonDefault txtBtn={'Continuar'} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
