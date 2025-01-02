import NotFoundMessage from '../Components/NotFoundMessage';
import GoHomeButton from '../Components/GoHomeButton';

const NotFound = ({theme}) => {
  const notFoundClass=`min-h-screen flex flex-col justify-between  pt-20 ${theme==='light'?'bg-grey-100':'bg-black-50'}`;
  return (
    <div className={notFoundClass}>
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <NotFoundMessage theme={theme} />
          <GoHomeButton />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
