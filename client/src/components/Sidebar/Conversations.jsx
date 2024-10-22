import React, { useEffect } from 'react';
import Conversation from './Conversation';
import { useAuth } from '../../context/AuthContext';

const Conversations = () => {
  const { getAllUsers, filteredUsers } = useAuth();

  useEffect(() => { 
    getAllUsers();
  }, []);

  return (
    <div className='flex flex-col max-h-[25rem] no-scrollbar overflow-auto'>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((conversation, index) => (
          <Conversation key={index} conversation={conversation} />
        ))
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}

export default Conversations;
