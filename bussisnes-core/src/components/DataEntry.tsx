import { toast } from 'sonner';

import InputComponent from './ui/Input';

const DataEntry: React.FC = () => {
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    toast.success('Datos registrados correctamente', {
      position: 'bottom-center',
      duration: 4000,
    });
  };
  return (
    <form id="login-form" className="w-full" method="post">
      <h3 className="text-xl">Formulario registro</h3>
      <p className="text-black/70 mb-4 text-sm">
        Por favor ingrese todos los campos a continuación
      </p>
      <InputComponent placeholder="Empresa Telecomunicaciones" type="text" />
      <InputComponent placeholder="Tipo documento" type="text" />
      <InputComponent placeholder="NIT empresa" type="number" />
      <InputComponent placeholder="IMEI" type="number" />
      <InputComponent placeholder="Respuesta URL Negativa" type="text" />
      <InputComponent placeholder="Respuesta AI" type="text" />

      <div>
        <button
          onClick={onClickHandler}
          type="submit"
          id="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
        >
          Guardar información{' '}
        </button>
        <span className="text-[11px] dark:text-white/50 mt-18">
          Developed by Felipe Silva
        </span>
      </div>
    </form>
  );
};

export default DataEntry;
