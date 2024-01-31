import { HiOutlineInformationCircle } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-cente">
      <div className="flex flex-col items-center md:items-start gap-0">
        <h1 className="text-center font-semibold text-xl text-primary">
          Warteg ITB FRS Scheduler
        </h1>
        <p className="text-center italic text-sm text-gray-400">
          Berlokasi di Warteg Selera Sekeloa
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-4 mt-2 md:mt-0">
        <HiOutlineInformationCircle
          className="w-5 h-5 cursor-pointer transform hover:-translate-y-1 duration-150 text-primary"
          onClick={() => {}} // TODO: Route to About page
        />
        <FiGithub
          className="w-5 h-5 cursor-pointer transform hover:-translate-y-1 duration-150 text-primary"
          onClick={() =>
            (window.location.href =
              'https://github.com/fawwazabrials/warteg-frs-scheduler')
          }
        />
      </div>
    </div>
  );
};

export default Header;
