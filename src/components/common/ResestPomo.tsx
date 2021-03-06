import { query, updateRecord } from 'thin-backend';
import { useQuery } from 'thin-backend-react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const ResetPomo = ({ ...props }) => {
  const todos = useQuery(query('todos').orderByAsc('createdAt'));

  async function resetPomo() {
    await MySwal.fire({
      title: 'Are you sure?',
      text: 'This will reset all todos to not completed!',
      icon: 'warning',
      showCancelButton: true,
      focusCancel: true,
      confirmButtonText: 'Yes, reset all todos',
      cancelButtonText: 'No, cancel'
    }).then((result) => {
      if (result.value) {
        todos?.map((todo) => {
          updateRecord('todos', todo.id, {
            // @ts-ignore
            isCompleted: false
          });
        });
        MySwal.fire({
          title: 'Reset all todos',
          text: 'All todos have been reset to not completed',
          icon: 'success',
          confirmButtonText: 'Cool 😎'
        });
      }
    });
  }

  return (
    <div>
      <button onClick={resetPomo}>
        <div className='bg-gray-50 hover:scale-105 duration-100 cursor-pointer flex flex-col justify-center items-center text-center rounded shadow-sm border-2 border-gray-200 hover:border-blue-300 p-2'>
          <h2 className='text-sm text-gray-700 font-bold'>
            {/* reset emoji */}
            <span role='img' aria-label='reset'>
              🔄
            </span>{' '}
            <span className='hidden sm:inline'>Reset</span>
          </h2>
        </div>
      </button>
    </div>
  );
};

export default ResetPomo;
