import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from './utils/db';
import { toast } from 'react-toastify';

const SingleItem_46 = ({ item }) => {
  const queryClient = useQueryClient();
  const { mutate: editTask } = useMutation({
    mutationFn: async ({ taskId, isDone }) => {
      try {
        const { data, error } = await supabase
          .from('task_46')
          .update({ is_done: isDone })
          .eq('id', taskId)
          .select();
      } catch (error) {
        console.error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        query: ['task'],
      });
      toast.success(`Task Updated!`);
    },
  });
  const { mutate: deleteTask } = useMutation({
    mutationFn: async (taskId) => {
      try {
        const { error } = await supabase
          .from('task_46')
          .delete()
          .eq('id', taskId);
      } catch (error) {
        console.error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });
      toast.success('task deleted');
    },
  });
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => editTask({ taskId: item.id, isDone: !item.is_done })}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem_46;
