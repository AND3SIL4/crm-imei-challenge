import { useForm, type SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';

type Inputs = {
  email: string;
  password: string;
};

const DATA = {
  email: 'andres.silva@globalteksecurity.com',
  password: 'Alemania2024*',
};

const LoginComponent: React.FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.email === DATA.email && data.password === DATA.password) {
      window.location.href = '/crm';
      localStorage.setItem('authentication', 'true');

      toast.success('Login exitoso', {
        position: 'bottom-center',
        duration: 5000,
      });
    } else {
      toast.info('Datos incorrectos', {
        position: 'bottom-center',
        duration: 5000,
      });
    }
  };

  return (
    <form id="login-form" className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <input
          {...register('email')}
          type="email"
          id="email"
          className="bg-black/15 text-gray-900 text-sm rounded-sm border-none block w-full p-2.5 active:border-none focus:outline-none"
          placeholder="name@globalteksecurity.com"
          required
        />
      </div>
      <div className="mb-5">
        <input
          {...register('password')}
          type="password"
          id="password"
          className="bg-black/15 text-gray-900 text-sm rounded-sm border-none block w-full p-2.5 active:border-none focus:outline-none"
          required
          placeholder="Contraseña"
          minLength={6}
        />
      </div>
      <div>
        <button
          id="button"
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
        >
          Iniciar Sesión
        </button>
        <span className="text-[11px] dark:text-white/50 mt-18">
          Developed by Felipe Silva
        </span>
      </div>
    </form>
  );
};

export default LoginComponent;
