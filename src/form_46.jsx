import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from './utils/db';
import { toast } from 'react-toastify';

const Form_46 = () => {
  const [newItemName, setNewItemName] = useState('');
  const {mutate: createTask, isLoading }= useMutation({
    mutationFn: async (newItemName) => {
      const { data, error } = await supabase.from('task_46').insert([
        { title: newItemName, isdone: false },
      ]).select();
      if (error) {
        throw new Error(error);
      }
      return data;
    },
    onSuccess: ()=> {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });
      setNewItemName('');
    }
  });
  const queryClient = useQueryClient();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(newItemName.trim() === ''){
      toast.warning('Task name cannot be empty');
      return;
    }
    createTask(newItemName);
    toast.success(`Added task: ${newItemName}`);
    return;
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud -- Kong Giok</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn'>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form_46;
