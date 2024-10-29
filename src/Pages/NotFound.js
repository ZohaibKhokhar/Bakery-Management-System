import NotFoundMessage from '../Components/NotFoundMessage';
import GoHomeButton from '../Components/GoHomeButton';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 pt-20">
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <NotFoundMessage />
          <GoHomeButton />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
